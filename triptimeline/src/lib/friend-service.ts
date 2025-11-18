import { createClient } from './auth';
import { UserProfile, Friend, TripCollaborator, FriendRequest, TripInvitation } from '@/types/friends';

const supabase = createClient();

// User Profile Functions
export async function getCurrentUserProfile(): Promise<UserProfile | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await (supabase as any)
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function updateUserProfile(updates: Partial<UserProfile>): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await (supabase as any)
    .from('user_profiles')
    .update(updates)
    .eq('id', user.id);

  if (error) {
    throw new Error(`Failed to update profile: ${error.message}`);
  }
}

export async function searchUsers(query: string): Promise<UserProfile[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await (supabase as any)
    .from('user_profiles')
    .select('*')
    .or(`full_name.ilike.%${query}%,email.ilike.%${query}%,username.ilike.%${query}%`)
    .neq('id', user.id)
    .limit(10);

  if (error) {
    return [];
  }

  return data || [];
}

// Friend Functions
export async function sendFriendRequest(friendId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await (supabase as any)
    .from('friends')
    .insert({
      user_id: user.id,
      friend_id: friendId,
      status: 'pending'
    });

  if (error) {
    if ((error as any).code === '23505' || error.message?.includes('friends_user_id_friend_id_key')) {
      const duplicateError = new Error('FRIEND_REQUEST_ALREADY_EXISTS');
      (duplicateError as any).code = 'FRIEND_REQUEST_ALREADY_EXISTS';
      throw duplicateError;
    }
    throw new Error(`Failed to send friend request: ${error.message}`);
  }
}

export async function acceptFriendRequest(requestId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  // Update the original request to accepted
  const { error: updateError } = await (supabase as any)
    .from('friends')
    .update({ status: 'accepted' })
    .eq('id', requestId)
    .eq('friend_id', user.id);

  if (updateError) {
    throw new Error(`Failed to accept friend request: ${updateError.message}`);
  }

  // Create the reciprocal friendship
  const { data: originalRequest } = await (supabase as any)
    .from('friends')
    .select('user_id, friend_id')
    .eq('id', requestId)
    .single();

  if (originalRequest) {
    const { error: reciprocalError } = await (supabase as any)
      .from('friends')
      .insert({
        user_id: user.id,
        friend_id: originalRequest.user_id,
        status: 'accepted'
      });

    if (reciprocalError && !reciprocalError.message.includes('duplicate')) {
      // Could not create reciprocal friendship
    }
  }
}

export async function declineFriendRequest(requestId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await (supabase as any)
    .from('friends')
    .delete()
    .eq('id', requestId)
    .eq('friend_id', user.id);

  if (error) {
    throw new Error(`Failed to decline friend request: ${error.message}`);
  }
}

export async function removeFriend(friendId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  // Remove both directions of the friendship
  const { error: error1 } = await (supabase as any)
    .from('friends')
    .delete()
    .eq('user_id', user.id)
    .eq('friend_id', friendId);

  const { error: error2 } = await (supabase as any)
    .from('friends')
    .delete()
    .eq('user_id', friendId)
    .eq('friend_id', user.id);

  if (error1 || error2) {
    throw new Error('Failed to remove friend');
  }
}

export async function getFriends(): Promise<Friend[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  try {
    const { data, error } = await (supabase as any)
      .from('friends')
      .select(`
        *,
        friend_profile:user_profiles!friends_friend_id_fkey(*)
      `)
      .eq('user_id', user.id)
      .eq('status', 'accepted');

    if (error) {
      // Check if it's a missing table error
      if (error.message?.includes('relation "public.friends" does not exist') || 
          error.message?.includes('relation "public.user_profiles" does not exist')) {
        return [];
      }
      return [];
    }

    return data || [];
  } catch (error) {
    return [];
  }
}

export async function getFriendRequests(): Promise<FriendRequest[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  try {
    const { data, error } = await (supabase as any)
      .from('friends')
      .select(`
        id,
        status,
        created_at,
        from_user:user_profiles!friends_user_id_fkey(*),
        to_user:user_profiles!friends_friend_id_fkey(*)
      `)
      .eq('friend_id', user.id)
      .eq('status', 'pending');

    if (error) {
      // Check if it's a missing table error
      if (error.message?.includes('relation "public.friends" does not exist')) {
        throw new Error('FRIENDS_TABLE_MISSING');
      }
      return [];
    }

    return data || [];
  } catch (error) {
    if ((error as Error).message === 'FRIENDS_TABLE_MISSING') {
      throw error; // Re-throw so NotificationBell can detect it
    }
    return [];
  }
}

// Trip Collaboration Functions
export async function inviteToTrip(tripId: string, userId: string, role: 'editor' | 'viewer' = 'viewer'): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await (supabase as any)
    .from('trip_collaborators')
    .insert({
      trip_id: tripId,
      user_id: userId,
      role: role,
      invited_by: user.id,
      status: 'pending'
    });

  if (error) {
    if ((error as any).code === '23505' || error.message?.includes('trip_collaborators_trip_id_user_id_key')) {
      const duplicateError = new Error('TRIP_COLLABORATOR_ALREADY_INVITED');
      (duplicateError as any).code = 'TRIP_COLLABORATOR_ALREADY_INVITED';
      throw duplicateError;
    }
    throw new Error(`Failed to invite user to trip: ${error.message}`);
  }
}

export async function acceptTripInvitation(invitationId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await (supabase as any)
    .from('trip_collaborators')
    .update({ status: 'accepted' })
    .eq('id', invitationId)
    .eq('user_id', user.id);

  if (error) {
    throw new Error(`Failed to accept trip invitation: ${error.message}`);
  }
}

export async function declineTripInvitation(invitationId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await (supabase as any)
    .from('trip_collaborators')
    .update({ status: 'declined' })
    .eq('id', invitationId)
    .eq('user_id', user.id);

  if (error) {
    throw new Error(`Failed to decline trip invitation: ${error.message}`);
  }
}

export async function removeFromTrip(tripId: string, userId: string): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await (supabase as any)
    .from('trip_collaborators')
    .delete()
    .eq('trip_id', tripId)
    .eq('user_id', userId);

  if (error) {
    throw new Error(`Failed to remove user from trip: ${error.message}`);
  }
}

export async function getTripCollaborators(tripId: string): Promise<TripCollaborator[]> {
  const { data, error } = await (supabase as any)
    .from('trip_collaborators')
    .select(`
      *,
      user_profile:user_profiles!trip_collaborators_user_id_fkey(*),
      inviter_profile:user_profiles!trip_collaborators_invited_by_fkey(*)
    `)
    .eq('trip_id', tripId)
    .eq('status', 'accepted');

  if (error) {
    return [];
  }

  return data || [];
}

export async function getTripInvitations(): Promise<TripInvitation[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  try {
    const { data, error } = await (supabase as any)
      .from('trip_collaborators')
      .select(`
        id,
        role,
        status,
        created_at,
        trip:trips(id, title, destination, start_date, end_date)
      `)
      .eq('user_id', user.id)
      .eq('status', 'pending');

    if (error) {
      // Check if it's a missing table error
      if (error.message?.includes('relation "public.trip_collaborators" does not exist') || 
          error.message?.includes('relation "public.user_profiles" does not exist')) {
        throw new Error('FRIENDS_TABLE_MISSING');
      }
      return [];
    }

    return data || [];
  } catch (error) {
    if ((error as Error).message === 'FRIENDS_TABLE_MISSING') {
      throw error; // Re-throw so NotificationBell can detect it
    }
    return [];
  }
}

export async function updateCollaboratorRole(tripId: string, userId: string, role: 'editor' | 'viewer'): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await (supabase as any)
    .from('trip_collaborators')
    .update({ role })
    .eq('trip_id', tripId)
    .eq('user_id', userId);

  if (error) {
    throw new Error(`Failed to update collaborator role: ${error.message}`);
  }
}

// Check if user can edit trip
export async function canEditTrip(tripId: string): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  // Check if user is the owner
  const { data: trip } = await (supabase as any)
    .from('trips')
    .select('user_id')
    .eq('id', tripId)
    .single();

  if (trip && trip.user_id === user.id) return true;

  // Check if user is a collaborator with editor role
  const { data: collaborator } = await (supabase as any)
    .from('trip_collaborators')
    .select('role')
    .eq('trip_id', tripId)
    .eq('user_id', user.id)
    .eq('status', 'accepted')
    .single();

  return collaborator && (collaborator.role === 'editor' || collaborator.role === 'owner');
}
