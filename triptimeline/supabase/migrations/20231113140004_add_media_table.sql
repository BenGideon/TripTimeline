-- Create media table for trip day photos and videos
CREATE TABLE IF NOT EXISTS public.media (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  trip_day_id uuid NOT NULL REFERENCES public.trip_days(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('image', 'video')),
  url text NOT NULL,
  title text,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on media table
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for media
CREATE POLICY "Users can view media for their trip days"
  ON public.media FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.trip_days
      JOIN public.trips ON trips.id = trip_days.trip_id
      WHERE trip_days.id = media.trip_day_id
      AND trips.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert media for their trip days"
  ON public.media FOR INSERT
  WITH CHECK (
    auth.uid() IS NOT NULL
  );

CREATE POLICY "Users can delete media for their trip days"
  ON public.media FOR DELETE
  USING (
    auth.uid() IS NOT NULL
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_media_trip_day_id ON public.media(trip_day_id);
CREATE INDEX IF NOT EXISTS idx_media_created_at ON public.media(created_at);
