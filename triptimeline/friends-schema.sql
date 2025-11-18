-- Friends and Trip Sharing Schema
-- Run this in your Supabase SQL Editor after the main RLS policies

-- Create friends table for friend relationships
CREATE TABLE IF NOT EXISTS public.friends (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  friend_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  status text CHECK (status IN ('pending', 'accepted', 'blocked')) DEFAULT 'pending',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, friend_id)
);

-- Create trip_collaborators table for sharing trips
CREATE TABLE IF NOT EXISTS public.trip_collaborators (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  trip_id uuid REFERENCES public.trips(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role text CHECK (role IN ('owner', 'editor', 'viewer')) DEFAULT 'viewer',
  invited_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  status text CHECK (status IN ('pending', 'accepted', 'declined')) DEFAULT 'pending',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(trip_id, user_id)
);

-- Create user_profiles table for better user management
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email text,
  full_name text,
  avatar_url text,
  username text UNIQUE,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on all new tables
ALTER TABLE public.friends ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trip_collaborators ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for friends table
CREATE POLICY "Users can view their own friendships"
  ON public.friends FOR SELECT
  USING (user_id = auth.uid() OR friend_id = auth.uid());

CREATE POLICY "Users can create friend requests"
  ON public.friends FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own friend requests"
  ON public.friends FOR UPDATE
  USING (user_id = auth.uid() OR friend_id = auth.uid());

CREATE POLICY "Users can delete their own friendships"
  ON public.friends FOR DELETE
  USING (user_id = auth.uid() OR friend_id = auth.uid());

-- RLS Policies for trip_collaborators table
CREATE POLICY "Users can view collaborations for their trips"
  ON public.trip_collaborators FOR SELECT
  USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.trips 
      WHERE trips.id = trip_collaborators.trip_id 
      AND trips.user_id = auth.uid()
    )
  );

CREATE POLICY "Trip owners can invite collaborators"
  ON public.trip_collaborators FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.trips 
      WHERE trips.id = trip_collaborators.trip_id 
      AND trips.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their own collaboration status"
  ON public.trip_collaborators FOR UPDATE
  USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.trips 
      WHERE trips.id = trip_collaborators.trip_id 
      AND trips.user_id = auth.uid()
    )
  );

CREATE POLICY "Trip owners can remove collaborators"
  ON public.trip_collaborators FOR DELETE
  USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.trips 
      WHERE trips.id = trip_collaborators.trip_id 
      AND trips.user_id = auth.uid()
    )
  );

-- RLS Policies for user_profiles table
CREATE POLICY "Users can view all profiles"
  ON public.user_profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON public.user_profiles FOR UPDATE
  USING (id = auth.uid());

CREATE POLICY "Users can insert their own profile"
  ON public.user_profiles FOR INSERT
  WITH CHECK (id = auth.uid());

-- Update trips table RLS to include collaborators
DROP POLICY IF EXISTS "Users can view their own trips" ON public.trips;
CREATE POLICY "Users can view their own trips and shared trips"
  ON public.trips FOR SELECT
  USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM public.trip_collaborators 
      WHERE trip_collaborators.trip_id = trips.id 
      AND trip_collaborators.user_id = auth.uid()
      AND trip_collaborators.status = 'accepted'
    )
  );

-- Update trip_days RLS to include collaborators
DROP POLICY IF EXISTS "Users can view trip days for their trips" ON public.trip_days;
CREATE POLICY "Users can view trip days for their trips and shared trips"
  ON public.trip_days FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.trips 
      WHERE trips.id = trip_days.trip_id 
      AND (
        trips.user_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM public.trip_collaborators 
          WHERE trip_collaborators.trip_id = trips.id 
          AND trip_collaborators.user_id = auth.uid()
          AND trip_collaborators.status = 'accepted'
        )
      )
    )
  );

-- Update trip_days INSERT/UPDATE/DELETE policies for collaborators with editor role
DROP POLICY IF EXISTS "Users can insert trip days for their trips" ON public.trip_days;
CREATE POLICY "Users can insert trip days for their trips and shared trips with editor role"
  ON public.trip_days FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.trips 
      WHERE trips.id = trip_days.trip_id 
      AND (
        trips.user_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM public.trip_collaborators 
          WHERE trip_collaborators.trip_id = trips.id 
          AND trip_collaborators.user_id = auth.uid()
          AND trip_collaborators.status = 'accepted'
          AND trip_collaborators.role IN ('owner', 'editor')
        )
      )
    )
  );

DROP POLICY IF EXISTS "Users can update trip days for their trips" ON public.trip_days;
CREATE POLICY "Users can update trip days for their trips and shared trips with editor role"
  ON public.trip_days FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.trips 
      WHERE trips.id = trip_days.trip_id 
      AND (
        trips.user_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM public.trip_collaborators 
          WHERE trip_collaborators.trip_id = trips.id 
          AND trip_collaborators.user_id = auth.uid()
          AND trip_collaborators.status = 'accepted'
          AND trip_collaborators.role IN ('owner', 'editor')
        )
      )
    )
  );

-- Update events RLS policies similarly
DROP POLICY IF EXISTS "Users can view events for their trips" ON public.events;
CREATE POLICY "Users can view events for their trips and shared trips"
  ON public.events FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.trip_days 
      JOIN public.trips ON trips.id = trip_days.trip_id
      WHERE trip_days.id = events.trip_day_id 
      AND (
        trips.user_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM public.trip_collaborators 
          WHERE trip_collaborators.trip_id = trips.id 
          AND trip_collaborators.user_id = auth.uid()
          AND trip_collaborators.status = 'accepted'
        )
      )
    )
  );

DROP POLICY IF EXISTS "Users can insert events for their trips" ON public.events;
CREATE POLICY "Users can insert events for their trips and shared trips with editor role"
  ON public.events FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.trip_days 
      JOIN public.trips ON trips.id = trip_days.trip_id
      WHERE trip_days.id = events.trip_day_id 
      AND (
        trips.user_id = auth.uid() OR
        EXISTS (
          SELECT 1 FROM public.trip_collaborators 
          WHERE trip_collaborators.trip_id = trips.id 
          AND trip_collaborators.user_id = auth.uid()
          AND trip_collaborators.status = 'accepted'
          AND trip_collaborators.role IN ('owner', 'editor')
        )
      )
    )
  );

-- Function to automatically create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to get mutual friends
CREATE OR REPLACE FUNCTION public.get_mutual_friends(target_user_id uuid)
RETURNS TABLE (
  user_id uuid,
  full_name text,
  email text,
  avatar_url text
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    up.id,
    up.full_name,
    up.email,
    up.avatar_url
  FROM public.user_profiles up
  WHERE up.id IN (
    -- Friends of the current user who are also friends with target user
    SELECT f1.friend_id 
    FROM public.friends f1
    JOIN public.friends f2 ON f1.friend_id = f2.user_id
    WHERE f1.user_id = auth.uid() 
    AND f2.friend_id = target_user_id
    AND f1.status = 'accepted'
    AND f2.status = 'accepted'
    
    UNION
    
    SELECT f1.user_id 
    FROM public.friends f1
    JOIN public.friends f2 ON f1.user_id = f2.friend_id
    WHERE f1.friend_id = auth.uid() 
    AND f2.user_id = target_user_id
    AND f1.status = 'accepted'
    AND f2.status = 'accepted'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
