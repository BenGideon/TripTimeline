-- Add cover_image column to trips table
ALTER TABLE public.trips ADD COLUMN IF NOT EXISTS cover_image TEXT;

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_trips_cover_image ON public.trips(cover_image);
