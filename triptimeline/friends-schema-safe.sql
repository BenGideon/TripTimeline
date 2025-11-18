-- Safe Friends Schema - handles existing policies
-- Run this in your Supabase SQL Editor

-- Create tables (IF NOT EXISTS handles duplicates)
CREATE TABLE IF NOT EXISTS public.friends (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  friend_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  status text CHECK (status IN ('pending', 'accepted', 'blocked')) DEFAULT 'pending',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, friend_id)
);

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

CREATE TABLE IF NOT EXISTS public.user_profiles (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email text,
  full_name text,
  avatar_url text,
  username text UNIQUE,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on all tables
ALTER TABLE public.friends ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trip_collaborators ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Ensure foreign keys reference user_profiles for Supabase relationships
ALTER TABLE public.friends
  DROP CONSTRAINT IF EXISTS friends_user_id_fkey,
  DROP CONSTRAINT IF EXISTS friends_friend_id_fkey;

ALTER TABLE public.friends
  ADD CONSTRAINT friends_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  ADD CONSTRAINT friends_friend_id_fkey FOREIGN KEY (friend_id) REFERENCES public.user_profiles(id) ON DELETE CASCADE;

ALTER TABLE public.trip_collaborators
  DROP CONSTRAINT IF EXISTS trip_collaborators_user_id_fkey,
  DROP CONSTRAINT IF EXISTS trip_collaborators_invited_by_fkey;

ALTER TABLE public.trip_collaborators
  ADD CONSTRAINT trip_collaborators_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  ADD CONSTRAINT trip_collaborators_invited_by_fkey FOREIGN KEY (invited_by) REFERENCES public.user_profiles(id) ON DELETE SET NULL;

-- Drop existing policies first to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own friendships" ON public.friends;
DROP POLICY IF EXISTS "Users can create friend requests" ON public.friends;
DROP POLICY IF EXISTS "Users can update their own friend requests" ON public.friends;
DROP POLICY IF EXISTS "Users can delete their own friendships" ON public.friends;

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

-- Drop existing trip_collaborators policies
DROP POLICY IF EXISTS "Users can view collaborations for their trips" ON public.trip_collaborators;
DROP POLICY IF EXISTS "Trip owners can invite collaborators" ON public.trip_collaborators;
DROP POLICY IF EXISTS "Users can update their own collaboration status" ON public.trip_collaborators;
DROP POLICY IF EXISTS "Trip owners can remove collaborators" ON public.trip_collaborators;
DROP POLICY IF EXISTS "Users can view their own collaborations" ON public.trip_collaborators;
DROP POLICY IF EXISTS "Trip owners can view all collaborators" ON public.trip_collaborators;
DROP POLICY IF EXISTS "Trip owners can manage collaborators" ON public.trip_collaborators;

-- Safe trip_collaborators policies (no circular references)
CREATE POLICY "Users can view their own collaborations"
  ON public.trip_collaborators FOR SELECT
  USING (
    user_id = auth.uid() OR 
    invited_by = auth.uid()
  );

CREATE POLICY "Trip owners can manage collaborators"
  ON public.trip_collaborators FOR ALL
  USING (
    trip_id IN (
      SELECT id FROM public.trips WHERE user_id = auth.uid()
    )
  );

-- Drop existing user_profiles policies
DROP POLICY IF EXISTS "Users can view all profiles" ON public.user_profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.user_profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.user_profiles;

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

-- Create or replace the function to handle new users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop and recreate trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create profiles for existing users who don't have them
INSERT INTO public.user_profiles (id, email, full_name)
SELECT 
  id, 
  email, 
  raw_user_meta_data->>'display_name' as full_name
FROM auth.users 
WHERE id NOT IN (SELECT id FROM public.user_profiles)
ON CONFLICT (id) DO NOTHING;

-- Verify everything was created
SELECT 'Tables created successfully' as status;
SELECT COUNT(*) as user_profiles_count FROM public.user_profiles;
SELECT COUNT(*) as friends_count FROM public.friends;
SELECT COUNT(*) as collaborators_count FROM public.trip_collaborators;
