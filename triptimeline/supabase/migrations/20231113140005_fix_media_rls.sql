-- Fix RLS policies for media table
-- Allow users to insert media for trips they own or collaborate on

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can insert media for their trips" ON public.media;
DROP POLICY IF EXISTS "Users can view media for their trips" ON public.media;
DROP POLICY IF EXISTS "Users can delete media for their trips" ON public.media;

-- Enable RLS on media table
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- Policy for INSERT: Allow users to insert media for trips they own or collaborate on
CREATE POLICY "Users can insert media for their trips"
ON public.media
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.trip_days td
    JOIN public.trips t ON td.trip_id = t.id
    WHERE td.id = trip_day_id
    AND (
      t.user_id = auth.uid()
      OR EXISTS (
        SELECT 1 FROM public.trip_collaborators tc
        WHERE tc.trip_id = t.id
        AND tc.user_id = auth.uid()
        AND tc.status = 'accepted'
      )
    )
  )
);

-- Policy for SELECT: Allow users to view media for trips they own or collaborate on
CREATE POLICY "Users can view media for their trips"
ON public.media
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.trip_days td
    JOIN public.trips t ON td.trip_id = t.id
    WHERE td.id = trip_day_id
    AND (
      t.user_id = auth.uid()
      OR EXISTS (
        SELECT 1 FROM public.trip_collaborators tc
        WHERE tc.trip_id = t.id
        AND tc.user_id = auth.uid()
        AND tc.status = 'accepted'
      )
    )
  )
);

-- Policy for DELETE: Allow users to delete media for trips they own or collaborate on
CREATE POLICY "Users can delete media for their trips"
ON public.media
FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM public.trip_days td
    JOIN public.trips t ON td.trip_id = t.id
    WHERE td.id = trip_day_id
    AND (
      t.user_id = auth.uid()
      OR EXISTS (
        SELECT 1 FROM public.trip_collaborators tc
        WHERE tc.trip_id = t.id
        AND tc.user_id = auth.uid()
        AND tc.status = 'accepted'
      )
    )
  )
);
