(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/All Git Clones/Travel Planner/triptimeline/src/lib/friend-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "acceptFriendRequest",
    ()=>acceptFriendRequest,
    "acceptTripInvitation",
    ()=>acceptTripInvitation,
    "canEditTrip",
    ()=>canEditTrip,
    "declineFriendRequest",
    ()=>declineFriendRequest,
    "declineTripInvitation",
    ()=>declineTripInvitation,
    "getCurrentUserProfile",
    ()=>getCurrentUserProfile,
    "getFriendRequests",
    ()=>getFriendRequests,
    "getFriends",
    ()=>getFriends,
    "getTripCollaborators",
    ()=>getTripCollaborators,
    "getTripInvitations",
    ()=>getTripInvitations,
    "inviteToTrip",
    ()=>inviteToTrip,
    "removeFriend",
    ()=>removeFriend,
    "removeFromTrip",
    ()=>removeFromTrip,
    "searchUsers",
    ()=>searchUsers,
    "sendFriendRequest",
    ()=>sendFriendRequest,
    "updateCollaboratorRole",
    ()=>updateCollaboratorRole,
    "updateUserProfile",
    ()=>updateUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/auth.ts [app-client] (ecmascript)");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
async function getCurrentUserProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    const { data, error } = await supabase.from('user_profiles').select('*').eq('id', user.id).single();
    if (error) {
        return null;
    }
    return data;
}
async function updateUserProfile(updates) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('user_profiles').update(updates).eq('id', user.id);
    if (error) {
        throw new Error(`Failed to update profile: ${error.message}`);
    }
}
async function searchUsers(query) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    const { data, error } = await supabase.from('user_profiles').select('*').or(`full_name.ilike.%${query}%,email.ilike.%${query}%,username.ilike.%${query}%`).neq('id', user.id).limit(10);
    if (error) {
        return [];
    }
    return data || [];
}
async function sendFriendRequest(friendId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('friends').insert({
        user_id: user.id,
        friend_id: friendId,
        status: 'pending'
    });
    if (error) {
        if (error.code === '23505' || error.message?.includes('friends_user_id_friend_id_key')) {
            const duplicateError = new Error('FRIEND_REQUEST_ALREADY_EXISTS');
            duplicateError.code = 'FRIEND_REQUEST_ALREADY_EXISTS';
            throw duplicateError;
        }
        throw new Error(`Failed to send friend request: ${error.message}`);
    }
}
async function acceptFriendRequest(requestId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    // Update the original request to accepted
    const { error: updateError } = await supabase.from('friends').update({
        status: 'accepted'
    }).eq('id', requestId).eq('friend_id', user.id);
    if (updateError) {
        throw new Error(`Failed to accept friend request: ${updateError.message}`);
    }
    // Create the reciprocal friendship
    const { data: originalRequest } = await supabase.from('friends').select('user_id, friend_id').eq('id', requestId).single();
    if (originalRequest) {
        const { error: reciprocalError } = await supabase.from('friends').insert({
            user_id: user.id,
            friend_id: originalRequest.user_id,
            status: 'accepted'
        });
        if (reciprocalError && !reciprocalError.message.includes('duplicate')) {
        // Could not create reciprocal friendship
        }
    }
}
async function declineFriendRequest(requestId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('friends').delete().eq('id', requestId).eq('friend_id', user.id);
    if (error) {
        throw new Error(`Failed to decline friend request: ${error.message}`);
    }
}
async function removeFriend(friendId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    // Remove both directions of the friendship
    const { error: error1 } = await supabase.from('friends').delete().eq('user_id', user.id).eq('friend_id', friendId);
    const { error: error2 } = await supabase.from('friends').delete().eq('user_id', friendId).eq('friend_id', user.id);
    if (error1 || error2) {
        throw new Error('Failed to remove friend');
    }
}
async function getFriends() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    try {
        const { data, error } = await supabase.from('friends').select(`
        *,
        friend_profile:user_profiles!friends_friend_id_fkey(*)
      `).eq('user_id', user.id).eq('status', 'accepted');
        if (error) {
            // Check if it's a missing table error
            if (error.message?.includes('relation "public.friends" does not exist') || error.message?.includes('relation "public.user_profiles" does not exist')) {
                return [];
            }
            return [];
        }
        return data || [];
    } catch (error) {
        return [];
    }
}
async function getFriendRequests() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    try {
        const { data, error } = await supabase.from('friends').select(`
        id,
        status,
        created_at,
        from_user:user_profiles!friends_user_id_fkey(*),
        to_user:user_profiles!friends_friend_id_fkey(*)
      `).eq('friend_id', user.id).eq('status', 'pending');
        if (error) {
            // Check if it's a missing table error
            if (error.message?.includes('relation "public.friends" does not exist')) {
                throw new Error('FRIENDS_TABLE_MISSING');
            }
            return [];
        }
        return data || [];
    } catch (error) {
        if (error.message === 'FRIENDS_TABLE_MISSING') {
            throw error; // Re-throw so NotificationBell can detect it
        }
        return [];
    }
}
async function inviteToTrip(tripId, userId, role = 'viewer') {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('trip_collaborators').insert({
        trip_id: tripId,
        user_id: userId,
        role: role,
        invited_by: user.id,
        status: 'pending'
    });
    if (error) {
        if (error.code === '23505' || error.message?.includes('trip_collaborators_trip_id_user_id_key')) {
            const duplicateError = new Error('TRIP_COLLABORATOR_ALREADY_INVITED');
            duplicateError.code = 'TRIP_COLLABORATOR_ALREADY_INVITED';
            throw duplicateError;
        }
        throw new Error(`Failed to invite user to trip: ${error.message}`);
    }
}
async function acceptTripInvitation(invitationId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { data, error } = await supabase.from('trip_collaborators').update({
        status: 'accepted'
    }).eq('id', invitationId).eq('user_id', user.id);
    if (error) {
        throw new Error(`Failed to accept trip invitation: ${error.message}`);
    }
}
async function declineTripInvitation(invitationId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('trip_collaborators').update({
        status: 'declined'
    }).eq('id', invitationId).eq('user_id', user.id);
    if (error) {
        throw new Error(`Failed to decline trip invitation: ${error.message}`);
    }
}
async function removeFromTrip(tripId, userId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('trip_collaborators').delete().eq('trip_id', tripId).eq('user_id', userId);
    if (error) {
        throw new Error(`Failed to remove user from trip: ${error.message}`);
    }
}
async function getTripCollaborators(tripId) {
    const { data, error } = await supabase.from('trip_collaborators').select(`
      *,
      user_profile:user_profiles!trip_collaborators_user_id_fkey(*),
      inviter_profile:user_profiles!trip_collaborators_invited_by_fkey(*)
    `).eq('trip_id', tripId).eq('status', 'accepted');
    if (error) {
        return [];
    }
    return data || [];
}
async function getTripInvitations() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    try {
        const { data, error } = await supabase.from('trip_collaborators').select(`
        id,
        role,
        status,
        created_at,
        trip:trips(id, title, destination, start_date, end_date)
      `).eq('user_id', user.id).eq('status', 'pending');
        if (error) {
            // Check if it's a missing table error
            if (error.message?.includes('relation "public.trip_collaborators" does not exist') || error.message?.includes('relation "public.user_profiles" does not exist')) {
                throw new Error('FRIENDS_TABLE_MISSING');
            }
            return [];
        }
        return data || [];
    } catch (error) {
        if (error.message === 'FRIENDS_TABLE_MISSING') {
            throw error; // Re-throw so NotificationBell can detect it
        }
        return [];
    }
}
async function updateCollaboratorRole(tripId, userId, role) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    const { error } = await supabase.from('trip_collaborators').update({
        role
    }).eq('trip_id', tripId).eq('user_id', userId);
    if (error) {
        throw new Error(`Failed to update collaborator role: ${error.message}`);
    }
}
async function canEditTrip(tripId) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;
    // Check if user is the owner
    const { data: trip } = await supabase.from('trips').select('user_id').eq('id', tripId).single();
    if (trip && trip.user_id === user.id) return true;
    // Check if user is a collaborator with editor role
    const { data: collaborator } = await supabase.from('trip_collaborators').select('role').eq('trip_id', tripId).eq('user_id', user.id).eq('status', 'accepted').single();
    return collaborator && (collaborator.role === 'editor' || collaborator.role === 'owner');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=All%20Git%20Clones_Travel%20Planner_triptimeline_src_lib_friend-service_ts_48dca55a._.js.map