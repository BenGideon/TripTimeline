-- Add notes column to trip_days table
ALTER TABLE public.trip_days ADD COLUMN IF NOT EXISTS notes text;

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_trip_days_notes ON public.trip_days(notes);
