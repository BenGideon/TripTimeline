-- Add missing fields to trips table
ALTER TABLE public.trips 
ADD COLUMN IF NOT EXISTS budget numeric DEFAULT 0,
ADD COLUMN IF NOT EXISTS travelers integer DEFAULT 1;
