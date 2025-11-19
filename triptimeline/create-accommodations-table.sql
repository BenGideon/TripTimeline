-- Create accommodations table for storing hotel/accommodation data
CREATE TABLE accommodations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trip_day_id UUID REFERENCES trip_days(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('hotel', 'airbnb', 'hostel', 'resort', 'apartment', 'other')),
  address TEXT,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  cost DECIMAL(10,2) DEFAULT 0,
  currency TEXT DEFAULT 'USD',
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  notes TEXT,
  booking_reference TEXT,
  contact_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better query performance
CREATE INDEX idx_accommodations_trip_day_id ON accommodations(trip_day_id);

-- Enable RLS (Row Level Security)
ALTER TABLE accommodations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to only access accommodations for their own trips
CREATE POLICY "Users can manage their own accommodations" ON accommodations
  USING (
    trip_day_id IN (
      SELECT td.id FROM trip_days td
      JOIN trips t ON td.trip_id = t.id
      WHERE t.user_id = auth.uid()
    )
  );

-- Create trigger to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_accommodations_updated_at
  BEFORE UPDATE ON accommodations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
