export interface UserProfile {
  id: string;
  email?: string;
  full_name?: string;
  avatar_url?: string;
  username?: string;
  created_at: string;
  updated_at: string;
}

export interface Friend {
  id: string;
  user_id: string;
  friend_id: string;
  status: 'pending' | 'accepted' | 'blocked';
  created_at: string;
  updated_at: string;
  friend_profile?: UserProfile;
}

export interface TripCollaborator {
  id: string;
  trip_id: string;
  user_id: string;
  role: 'owner' | 'editor' | 'viewer';
  invited_by?: string;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
  updated_at: string;
  user_profile?: UserProfile;
  inviter_profile?: UserProfile;
}

export interface FriendRequest {
  id: string;
  from_user: UserProfile;
  to_user: UserProfile;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
}

export interface TripInvitation {
  id: string;
  trip: {
    id: string;
    title: string;
    destination: string;
    start_date: string;
    end_date: string;
  };
  inviter: UserProfile;
  role: 'editor' | 'viewer';
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
}
