import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface DbTrip {
  id: string;
  user_id: string;
  title: string;
  start_date: string;
  end_date: string;
  destination: string;
  description?: string;
  currency: string;
  budget?: number;
  created_at: string;
  updated_at: string;
}

export interface DbTripDay {
  id: string;
  trip_id: string;
  date: string;
  day_index: number;
  title?: string;
  created_at: string;
}

export interface DbEvent {
  id: string;
  trip_day_id: string;
  title: string;
  start_time?: string;
  end_time?: string;
  category?: string;
  location_name?: string;
  location_address?: string;
  cost_amount?: number;
  cost_currency?: string;
  notes?: string;
  order_index: number;
  created_at: string;
}

export interface DbPackingItem {
  id: string;
  trip_id: string;
  name: string;
  category?: string;
  is_checked: boolean;
  priority?: number;
  created_at: string;
}

export interface DbExpense {
  id: string;
  trip_id: string;
  trip_day_id?: string;
  event_id?: string;
  label: string;
  amount: number;
  currency: string;
  category?: string;
  created_at: string;
}
