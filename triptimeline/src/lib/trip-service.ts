import { createClient } from './auth';
import { DbTrip, DbTripDay, DbEvent, DbPackingItem, DbExpense } from './supabase-client';
import { Trip, ItineraryDay, Activity, ActivityInput, PackingItem, Expense } from '@/types/itinerary';

// Create a shared Supabase client instance
const supabase = createClient();

const parseFlexibleTime = (input?: string | null): string | null => {
  if (!input) return null;

  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return null;

  const match = trimmed.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/i);
  if (!match) return null;

  let hours = parseInt(match[1], 10);
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const meridiem = match[3]?.toLowerCase();

  if (Number.isNaN(hours) || Number.isNaN(minutes) || minutes < 0 || minutes > 59) {
    return null;
  }

  if (meridiem === 'am') {
    hours = hours % 12;
  } else if (meridiem === 'pm') {
    hours = (hours % 12) + 12;
  }

  if (hours < 0 || hours > 23) {
    return null;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const inferActivityType = (time?: string | null): Activity['type'] => {
  if (!time) return 'morning';

  const [hoursString] = time.split(':');
  const hours = parseInt(hoursString, 10);
  if (Number.isNaN(hours)) return 'morning';

  if (hours >= 17) return 'evening';
  if (hours >= 12) return 'afternoon';
  return 'morning';
};

// Helper function to create trip days
async function createTripDays(tripId: string, startDate: string, endDate: string): Promise<void> {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dayCount = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  
  const tripDays = [];
  for (let i = 0; i < dayCount; i++) {
    const dayDate = new Date(start);
    dayDate.setDate(start.getDate() + i);
    
    const title = i === 0 ? 'Arrival Day' : 
                  i === dayCount - 1 ? 'Departure Day' : 
                  `Day ${i + 1}`;
    
    tripDays.push({
      trip_id: tripId,
      date: dayDate.toISOString().split('T')[0],
      day_index: i + 1,
      title: title
    });
  }
  
  const { error } = await (supabase as any)
    .from('trip_days')
    .insert(tripDays);
  
  if (error) {
    if (error.message && error.message.includes('duplicate key')) {
      return;
    }
    throw new Error(`Failed to create trip days: ${error.message}`);
  }
}

// Convert database types to app types
function dbTripToTrip(dbTrip: DbTrip, days: ItineraryDay[], packingList: PackingItem[], expenses: Expense[]): Trip {
  return {
    id: dbTrip.id,
    title: dbTrip.title,
    destination: dbTrip.destination,
    start_date: dbTrip.start_date,
    end_date: dbTrip.end_date,
    description: dbTrip.description || '',
    budget: dbTrip.budget || 0,
    currency: dbTrip.currency,
    travelers: 1, // Default, can be added to DB later
    packingList,
    expenses,
    itinerary: days,
    created_at: dbTrip.created_at,
    updated_at: dbTrip.updated_at
  };
}

function dbEventToActivity(dbEvent: DbEvent): Activity {
  const normalizedTime = parseFlexibleTime(dbEvent.start_time) ?? dbEvent.start_time ?? '';

  return {
    id: dbEvent.id,
    title: dbEvent.title,
    time: normalizedTime,
    description: dbEvent.notes ?? undefined,
    location: dbEvent.location_name ?? undefined,
    type: inferActivityType(normalizedTime),
    category: (dbEvent.category as Activity['category']) || 'other',
    cost: dbEvent.cost_amount ?? undefined,
    duration: 60,
    notes: dbEvent.notes ?? undefined,
    completed: false
  };
}

function dbPackingItemToPackingItem(dbItem: DbPackingItem): PackingItem {
  return {
    id: dbItem.id,
    name: dbItem.name,
    category: (dbItem.category as any) || 'other',
    quantity: 1,
    packed: dbItem.is_checked,
    essential: dbItem.priority === 1,
    notes: ''
  };
}

function dbExpenseToExpense(dbExpense: DbExpense): Expense {
  return {
    id: dbExpense.id,
    title: dbExpense.label,
    amount: dbExpense.amount,
    currency: dbExpense.currency,
    category: (dbExpense.category as any) || 'other',
    date: dbExpense.created_at.split('T')[0],
    description: '',
    shared: false
  };
}

// Trip CRUD operations
export async function createTrip(tripData: Omit<Trip, 'id' | 'created_at' | 'updated_at' | 'itinerary' | 'packingList' | 'expenses'>): Promise<string> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated - please log in again');
  }

  const { data, error } = await (supabase as any)
    .from('trips')
    .insert({
      user_id: user.id,
      title: tripData.title,
      destination: tripData.destination,
      start_date: tripData.start_date,
      end_date: tripData.end_date,
      description: tripData.description,
      currency: tripData.currency
      // Note: budget and travelers fields may not exist in DB yet
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }
  
  if (!data) {
    throw new Error('No data returned from trip creation');
  }
  
  // Manually create trip days since the database trigger might not exist
  try {
    await createTripDays(data.id, tripData.start_date, tripData.end_date);
  } catch (dayError) {
    // Don't fail the entire trip creation if day creation fails
    // Trip days will be created on-demand when needed
  }
  
  return data.id;
}

export async function getTrip(tripId: string): Promise<Trip | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return null;
  }

  // Get trip - check if user is owner OR collaborator
  const { data: trip, error: tripError } = await (supabase as any)
    .from('trips')
    .select('*')
    .eq('id', tripId)
    .single();

  if (tripError || !trip) return null;

  // Check if user is owner or accepted collaborator
  if (trip.user_id !== user.id) {
    const { data: collaborator } = await (supabase as any)
      .from('trip_collaborators')
      .select('id')
      .eq('trip_id', tripId)
      .eq('user_id', user.id)
      .eq('status', 'accepted')
      .single();
    
    if (!collaborator) return null; // User is not owner or collaborator
  }

  // Get trip days
  const { data: dbDays, error: daysError } = await (supabase as any)
    .from('trip_days')
    .select('*')
    .eq('trip_id', tripId)
    .order('day_index');

  if (daysError) throw daysError;

  // Get events for each day
  const days: ItineraryDay[] = [];
  for (const dbDay of dbDays || []) {
    const { data: dbEvents, error: eventsError } = await (supabase as any)
      .from('events')
      .select('*')
      .eq('trip_day_id', dbDay.id)
      .order('order_index');

    if (eventsError) throw eventsError;

    const activities = (dbEvents || []).map(dbEventToActivity);
    
    days.push({
      day: dbDay.day_index,
      date: dbDay.date,
      activities,
      notes: dbDay.notes || '',
      actualSpent: 0,
      customTitle: dbDay.title
    });
  }

  // Get packing items
  const { data: dbPackingItems, error: packingError } = await (supabase as any)
    .from('packing_items')
    .select('*')
    .eq('trip_id', tripId);

  if (packingError) throw packingError;

  const packingList = (dbPackingItems || []).map(dbPackingItemToPackingItem);

  // Get expenses
  const { data: dbExpenses, error: expensesError } = await (supabase as any)
    .from('expenses')
    .select('*')
    .eq('trip_id', tripId);

  if (expensesError) throw expensesError;

  const expenses = (dbExpenses || []).map(dbExpenseToExpense);

  return dbTripToTrip(trip, days, packingList, expenses);
}

export async function getUserTrips(): Promise<Trip[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return [];
  }

  // Get trips owned by user
  const { data: ownedTrips, error: ownedError } = await (supabase as any)
    .from('trips')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (ownedError) throw ownedError;

  // Get trips where user is an accepted collaborator
  const { data: collaboratorTrips, error: collabError } = await (supabase as any)
    .from('trips')
    .select('*')
    .in('id', 
      (await (supabase as any)
        .from('trip_collaborators')
        .select('trip_id')
        .eq('user_id', user.id)
        .eq('status', 'accepted')
      ).data?.map((c: any) => c.trip_id) || []
    )
    .order('created_at', { ascending: false });

  if (collabError && collabError.code !== 'PGRST116') throw collabError; // Ignore "no rows" error

  // Combine and deduplicate trips
  const allTrips = [...(ownedTrips || []), ...(collaboratorTrips || [])];
  const uniqueTrips = Array.from(new Map(allTrips.map((t: DbTrip) => [t.id, t])).values());

  // For now, return trips without full details (for performance)
  return uniqueTrips.map((trip: DbTrip) => dbTripToTrip(trip, [], [], []));
}

export async function updateTripDay(tripId: string, dayIndex: number, updates: Partial<ItineraryDay>): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return;
  }

  // Find the trip day
  const { data: tripDay, error: findError } = await (supabase as any)
    .from('trip_days')
    .select('*')
    .eq('trip_id', tripId)
    .eq('day_index', dayIndex)
    .single();

  if (findError || !tripDay) {
    
    // Try to create the missing trip day
    try {
      // Get trip info to calculate the date
      const { data: trip } = await (supabase as any)
        .from('trips')
        .select('start_date')
        .eq('id', tripId)
        .single();
      
      if (trip) {
        // Instead of creating the trip day, let's just skip the update
        // The day will be created when the trip is properly initialized
        return; // Skip the update instead of failing
      } else {
        throw new Error('Trip not found');
      }
    } catch (createError) {
      throw new Error(`Trip day not found and could not be created: ${createError}`);
    }
  }

  // Update the trip day
  const updateData: any = {};
  if (updates.customTitle !== undefined) {
    updateData.title = updates.customTitle;
  }
  if (updates.notes !== undefined) {
    updateData.notes = updates.notes;
  }

  if (Object.keys(updateData).length > 0) {
    const { error } = await (supabase as any)
      .from('trip_days')
      .update(updateData)
      .eq('id', tripDay?.id);

    if (error) {
      throw new Error(`Failed to update trip day: ${error.message || JSON.stringify(error)}`);
    }
  }
}

export async function deleteTripDay(tripId: string, dayIndex: number): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data: tripDay, error: findError } = await (supabase as any)
    .from('trip_days')
    .select('id')
    .eq('trip_id', tripId)
    .eq('day_index', dayIndex)
    .single();

  if (findError || !tripDay) {
    return;
  }

  const { error } = await (supabase as any)
    .from('trip_days')
    .delete()
    .eq('id', tripDay.id);

  if (error) {
    throw new Error(`Failed to delete trip day: ${error.message}`);
  }

}

export async function addActivity(tripId: string, dayIndex: number, activity: ActivityInput): Promise<Activity> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data: tripDay, error: findError } = await (supabase as any)
    .from('trip_days')
    .select('id')
    .eq('trip_id', tripId)
    .eq('day_index', dayIndex)
    .single();

  if (findError || !tripDay) {
    throw new Error('Trip day not found');
  }

  const startTime = parseFlexibleTime(activity.time);

  const { data, error } = await (supabase as any)
    .from('events')
    .insert({
      trip_day_id: tripDay.id,
      title: activity.title,
      start_time: startTime,
      category: activity.category || 'other',
      location_name: activity.location ?? null,
      cost_amount: activity.cost ?? null,
      cost_currency: activity.cost ? 'USD' : null,
      notes: activity.description ?? null,
      order_index: 0
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to add activity: ${error.message}`);
  }

  if (!data) {
    throw new Error('No data returned when creating activity');
  }

  return dbEventToActivity(data as DbEvent);
}

export async function updateActivity(
  tripId: string,
  dayIndex: number,
  activityId: string,
  updates: ActivityInput
): Promise<Activity> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data: tripDay, error: findError } = await (supabase as any)
    .from('trip_days')
    .select('id')
    .eq('trip_id', tripId)
    .eq('day_index', dayIndex)
    .single();

  if (findError || !tripDay) {
    throw new Error('Trip day not found');
  }

  const startTime = parseFlexibleTime(updates.time);

  const { data, error } = await (supabase as any)
    .from('events')
    .update({
      title: updates.title,
      start_time: startTime,
      category: updates.category || 'other',
      location_name: updates.location ?? null,
      cost_amount: updates.cost ?? null,
      notes: updates.description ?? null
    })
    .eq('id', activityId)
    .eq('trip_day_id', tripDay.id)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to update activity: ${error.message}`);
  }

  if (!data) {
    throw new Error('No data returned when updating activity');
  }

  return dbEventToActivity(data as DbEvent);
}

export async function deleteActivity(tripId: string, dayIndex: number, activityId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data: tripDay, error: findError } = await (supabase as any)
    .from('trip_days')
    .select('id')
    .eq('trip_id', tripId)
    .eq('day_index', dayIndex)
    .single();

  if (findError || !tripDay) {
    throw new Error('Trip day not found');
  }

  const { error } = await (supabase as any)
    .from('events')
    .delete()
    .eq('id', activityId)
    .eq('trip_day_id', tripDay.id);

  if (error) {
    throw new Error(`Failed to delete activity: ${error.message}`);
  }
}

export async function deleteTrip(tripId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  // Delete the trip (cascade should handle related records)
  const { error } = await (supabase as any)
    .from('trips')
    .delete()
    .eq('id', tripId)
    .eq('user_id', user.id); // Ensure user can only delete their own trips

  if (error) {
    throw new Error(`Failed to delete trip: ${error.message}`);
  }

}

export async function addPackingItem(tripId: string, item: PackingItem): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await (supabase as any)
    .from('packing_items')
    .insert({
      trip_id: tripId,
      name: item.name,
      category: item.category,
      is_checked: item.packed,
      priority: item.essential ? 1 : 2
    });

  if (error) throw error;
}

export async function savePackingList(tripId: string, packingList: PackingItem[]): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  // Delete all existing packing items for this trip
  await (supabase as any)
    .from('packing_items')
    .delete()
    .eq('trip_id', tripId);

  // Insert new packing items
  if (packingList.length > 0) {
    const itemsToInsert = packingList.map(item => ({
      trip_id: tripId,
      name: item.name,
      category: item.category,
      is_checked: item.packed,
      priority: item.essential ? 1 : 2
    }));

    const { error } = await (supabase as any)
      .from('packing_items')
      .insert(itemsToInsert);

    if (error) throw error;
  }
}

export async function addExpense(tripId: string, expense: Expense): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');


  const { error } = await (supabase as any)
    .from('expenses')
    .insert({
      trip_id: tripId,
      label: expense.title,
      amount: expense.amount,
      currency: expense.currency,
      category: expense.category
    });

  if (error) {
    throw new Error(`Failed to add expense: ${error.message || JSON.stringify(error)}`);
  }
}

export async function uploadMedia(
  tripId: string,
  dayIndex: number,
  file: File,
  mediaType: 'image' | 'video',
  title?: string,
  description?: string
): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data: tripDay, error: findError } = await (supabase as any)
    .from('trip_days')
    .select('id')
    .eq('trip_id', tripId)
    .eq('day_index', dayIndex)
    .single();

  if (findError || !tripDay) {
    throw new Error('Trip day not found');
  }

  const fileExt = file.name.split('.').pop();
  const fileName = `${tripId}/${tripDay.id}/${Date.now()}.${fileExt}`;
  const storagePath = `media/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('trip-media')
    .upload(storagePath, file, { upsert: false });

  if (uploadError) {
    throw new Error(`Failed to upload file: ${uploadError.message}`);
  }

  const { data } = supabase.storage
    .from('trip-media')
    .getPublicUrl(storagePath);

  const mediaUrl = data.publicUrl;
  const { error: dbError } = await (supabase as any)
    .from('media')
    .insert({
      trip_day_id: tripDay.id,
      type: mediaType,
      url: mediaUrl,
      title: title || file.name,
      description: description || ''
    });
  if (dbError) {
    throw new Error(`Failed to save media record: ${dbError.message || JSON.stringify(dbError)}`);
  }

}

export async function deleteMedia(mediaId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data: media, error: fetchError } = await (supabase as any)
    .from('media')
    .select('url')
    .eq('id', mediaId)
    .single();

  if (fetchError || !media) {
    throw new Error('Media not found');
  }

  const url = new URL(media.url);
  const filePath = url.pathname.split('/storage/v1/object/public/trip-media/')[1];

  const { error: storageError } = await supabase.storage
    .from('trip-media')
    .remove([filePath]);

  if (storageError) {
    // File deletion from storage failed, but continue with DB deletion
  }

  const { error: dbError } = await (supabase as any)
    .from('media')
    .delete()
    .eq('id', mediaId);

  if (dbError) {
    throw new Error(`Failed to delete media: ${dbError.message}`);
  }

}

export async function getMediaForDay(tripId: string, dayIndex: number): Promise<any[]> {
  const { data: tripDay, error: findError } = await (supabase as any)
    .from('trip_days')
    .select('id')
    .eq('trip_id', tripId)
    .eq('day_index', dayIndex)
    .single();

  if (findError || !tripDay) {
    return [];
  }

  const { data: media, error } = await (supabase as any)
    .from('media')
    .select('*')
    .eq('trip_day_id', tripDay.id)
    .order('created_at', { ascending: false });

  if (error) {
    return [];
  }

  return media || [];
}

export async function updateTrip(tripId: string, updates: Partial<Trip>): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const updateData: any = {};
  if (updates.title !== undefined) updateData.title = updates.title;
  if (updates.description !== undefined) updateData.description = updates.description;
  if (updates.budget !== undefined) updateData.budget = updates.budget;
  if (updates.currency !== undefined) updateData.currency = updates.currency;
  if (updates.start_date !== undefined) updateData.start_date = updates.start_date;
  if (updates.end_date !== undefined) updateData.end_date = updates.end_date;

  const { error } = await (supabase as any)
    .from('trips')
    .update(updateData)
    .eq('id', tripId)
    .eq('user_id', user.id);

  if (error) {
    throw new Error(`Failed to update trip: ${error.message}`);
  }
}

export async function deleteExpense(expenseId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await (supabase as any)
    .from('expenses')
    .delete()
    .eq('id', expenseId);

  if (error) {
    throw new Error(`Failed to delete expense: ${error.message}`);
  }

}

export async function uploadTripCoverImage(tripId: string, file: File): Promise<string> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const fileExt = file.name.split('.').pop();
  const fileName = `${tripId}/cover-${Date.now()}.${fileExt}`;
  const storagePath = `trip-covers/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('trip-media')
    .upload(storagePath, file, { upsert: true });

  if (uploadError) {
    throw new Error(`Failed to upload cover image: ${uploadError.message}`);
  }

  const { data } = supabase.storage
    .from('trip-media')
    .getPublicUrl(storagePath);

  const coverImageUrl = data.publicUrl;

  const { error: dbError } = await (supabase as any)
    .from('trips')
    .update({ cover_image: coverImageUrl })
    .eq('id', tripId);

  if (dbError) {
    throw new Error(`Failed to save cover image: ${dbError.message}`);
  }

  return coverImageUrl;
}
