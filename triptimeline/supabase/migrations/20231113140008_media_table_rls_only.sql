-- Fix RLS policies for media table only
-- The storage.objects table is a system table and cannot be modified directly

-- Ensure media table has RLS enabled
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow authenticated users to insert media" ON public.media;
DROP POLICY IF EXISTS "Allow authenticated users to view media" ON public.media;
DROP POLICY IF EXISTS "Allow authenticated users to delete media" ON public.media;

-- Policy for INSERT: Allow authenticated users to insert media records
CREATE POLICY "Allow authenticated users to insert media"
ON public.media
FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- Policy for SELECT: Allow authenticated users to view media records
CREATE POLICY "Allow authenticated users to view media"
ON public.media
FOR SELECT
USING (auth.role() = 'authenticated');

-- Policy for DELETE: Allow authenticated users to delete media records
CREATE POLICY "Allow authenticated users to delete media"
ON public.media
FOR DELETE
USING (auth.role() = 'authenticated');
