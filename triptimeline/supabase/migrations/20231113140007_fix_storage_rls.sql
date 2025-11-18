-- Fix RLS policies for storage bucket
-- This addresses the "new row violates row-level security policy" error

-- First, ensure the storage.objects table has proper RLS
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow authenticated users to upload" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to delete" ON storage.objects;

-- Policy for INSERT: Allow authenticated users to upload files
CREATE POLICY "Allow authenticated users to upload"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'trip-media' AND
  auth.role() = 'authenticated'
);

-- Policy for SELECT: Allow authenticated users to read files
CREATE POLICY "Allow authenticated users to read"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'trip-media' AND
  auth.role() = 'authenticated'
);

-- Policy for DELETE: Allow authenticated users to delete files
CREATE POLICY "Allow authenticated users to delete"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'trip-media' AND
  auth.role() = 'authenticated'
);

-- Also ensure media table has proper policies
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

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
