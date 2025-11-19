export interface Activity {
  id: string;
  title: string;
  time: string;
  description?: string;
  location?: string;
  type: 'morning' | 'afternoon' | 'evening';
  category: 'sightseeing' | 'food' | 'transport' | 'accommodation' | 'shopping' | 'entertainment' | 'other';
  cost?: number;
  duration?: number; // in minutes
  notes?: string;
  photos?: string[];
  completed?: boolean;
}

export interface ActivityInput {
  title: string;
  time: string;
  type: Activity['type'];
  category: Activity['category'];
  description?: string;
  location?: string;
  cost?: number;
}

export interface PackingItem {
  id: string;
  name: string;
  category: 'clothing' | 'electronics' | 'toiletries' | 'documents' | 'medications' | 'accessories' | 'other';
  quantity: number;
  packed: boolean;
  essential: boolean;
  notes?: string;
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  currency: string;
  category: 'accommodation' | 'food' | 'transport' | 'activities' | 'shopping' | 'other';
  date: string;
  description?: string;
  receipt?: string;
  shared?: boolean;
  paidBy?: string;
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'airbnb' | 'hostel' | 'resort' | 'apartment' | 'other';
  address: string;
  checkIn: string;
  checkOut: string;
  cost: number;
  currency: string;
  rating?: number;
  notes?: string;
  photos?: string[];
  bookingReference?: string;
  contactInfo?: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  activities: Activity[];
  accommodation?: Accommodation;
  totalBudget?: number;
  actualSpent?: number;
  weather?: {
    condition: string;
    temperature: number;
    humidity?: number;
  };
  notes?: string;
  customTitle?: string; // Allow custom day titles
}

export interface Trip {
  id: string;
  title: string;
  destination: string;
  start_date: string;
  end_date: string;
  description?: string;
  budget?: number;
  currency: string;
  travelers: number;
  packingList: PackingItem[];
  expenses: Expense[];
  itinerary: ItineraryDay[];
  created_at: string;
  updated_at: string;
  cover_image?: string;
}
