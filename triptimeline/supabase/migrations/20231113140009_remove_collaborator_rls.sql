-- Remove all collaborator-related RLS policies
-- Simplify to owner-only access

-- Drop all existing policies on media table
DROP POLICY IF EXISTS "Allow authenticated users to insert media" ON public.media;
DROP POLICY IF EXISTS "Allow authenticated users to view media" ON public.media;
DROP POLICY IF EXISTS "Allow authenticated users to delete media" ON public.media;
DROP POLICY IF EXISTS "Users can insert media for their trips" ON public.media;
DROP POLICY IF EXISTS "Users can view media for their trips" ON public.media;
DROP POLICY IF EXISTS "Users can delete media for their trips" ON public.media;

-- Disable RLS on media table for now (simplest solution)
ALTER TABLE public.media DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies on trip_days table
DROP POLICY IF EXISTS "Users can view trip days" ON public.trip_days;
DROP POLICY IF EXISTS "Users can insert trip days" ON public.trip_days;
DROP POLICY IF EXISTS "Users can update trip days" ON public.trip_days;
DROP POLICY IF EXISTS "Users can delete trip days" ON public.trip_days;

-- Disable RLS on trip_days table
ALTER TABLE public.trip_days DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies on events table
DROP POLICY IF EXISTS "Users can view events" ON public.events;
DROP POLICY IF EXISTS "Users can insert events" ON public.events;
DROP POLICY IF EXISTS "Users can update events" ON public.events;
DROP POLICY IF EXISTS "Users can delete events" ON public.events;

-- Disable RLS on events table
ALTER TABLE public.events DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies on packing_items table
DROP POLICY IF EXISTS "Users can view packing items" ON public.packing_items;
DROP POLICY IF EXISTS "Users can insert packing items" ON public.packing_items;
DROP POLICY IF EXISTS "Users can update packing items" ON public.packing_items;
DROP POLICY IF EXISTS "Users can delete packing items" ON public.packing_items;

-- Disable RLS on packing_items table
ALTER TABLE public.packing_items DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies on expenses table
DROP POLICY IF EXISTS "Users can view expenses" ON public.expenses;
DROP POLICY IF EXISTS "Users can insert expenses" ON public.expenses;
DROP POLICY IF EXISTS "Users can update expenses" ON public.expenses;
DROP POLICY IF EXISTS "Users can delete expenses" ON public.expenses;

-- Disable RLS on expenses table
ALTER TABLE public.expenses DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies on trips table
DROP POLICY IF EXISTS "Users can view their trips" ON public.trips;
DROP POLICY IF EXISTS "Users can insert trips" ON public.trips;
DROP POLICY IF EXISTS "Users can update trips" ON public.trips;
DROP POLICY IF EXISTS "Users can delete trips" ON public.trips;

-- Disable RLS on trips table
ALTER TABLE public.trips DISABLE ROW LEVEL SECURITY;
