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
"[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FriendsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/components/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/friend-service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FriendsPage() {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [friends, setFriends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [friendRequests, setFriendRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("friends");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FriendsPage.useEffect": ()=>{
            if (!loading && !user) {
                router.push("/auth/login");
            }
        }
    }["FriendsPage.useEffect"], [
        user,
        loading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FriendsPage.useEffect": ()=>{
            if (user) {
                loadData();
            }
        }
    }["FriendsPage.useEffect"], [
        user
    ]);
    const loadData = async ()=>{
        try {
            const [friendsData, requestsData] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFriends"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFriendRequests"])()
            ]);
            setFriends(friendsData);
            setFriendRequests(requestsData);
        } catch (error) {
            console.error("Error loading friends data:", error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleSearch = async (query)=>{
        setSearchQuery(query);
        if (query.trim().length > 2) {
            try {
                const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchUsers"])(query);
                setSearchResults(results);
            } catch (error) {
                console.error("Error searching users:", error);
            }
        } else {
            setSearchResults([]);
        }
    };
    const handleSendFriendRequest = async (userId)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendFriendRequest"])(userId);
            setSearchResults(searchResults.filter((user)=>user.id !== userId));
            alert("Friend request sent!");
        } catch (error) {
            console.error("Error sending friend request:", error);
            if (error?.code === "FRIEND_REQUEST_ALREADY_EXISTS") {
                alert("Friend request already sent. Wait for them to respond.");
            } else {
                alert("Failed to send friend request");
            }
        }
    };
    const handleAcceptRequest = async (requestId)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acceptFriendRequest"])(requestId);
            await loadData();
        } catch (error) {
            console.error("Error accepting friend request:", error);
            alert("Failed to accept friend request");
        }
    };
    const handleDeclineRequest = async (requestId)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["declineFriendRequest"])(requestId);
            setFriendRequests(friendRequests.filter((req)=>req.id !== requestId));
        } catch (error) {
            console.error("Error declining friend request:", error);
            alert("Failed to decline friend request");
        }
    };
    const handleRemoveFriend = async (friendId)=>{
        if (window.confirm("Are you sure you want to remove this friend?")) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$friend$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFriend"])(friendId);
                setFriends(friends.filter((friend)=>friend.friend_id !== friendId));
            } catch (error) {
                console.error("Error removing friend:", error);
                alert("Failed to remove friend");
            }
        }
    };
    if (loading || isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-bg flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-secondary",
                        children: "Loading friends..."
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass sticky top-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push("/dashboard"),
                                    className: "text-secondary hover:text-primary transition-colors",
                                    children: "← Back to Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-primary",
                                    children: "Friends"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-1 glass rounded-lg p-1 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("friends"),
                                className: `flex-1 py-2 px-4 rounded-lg font-medium transition-all ${activeTab === "friends" ? "btn-primary" : "text-secondary hover:text-primary"}`,
                                children: [
                                    "Friends (",
                                    friends.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("requests"),
                                className: `flex-1 py-2 px-4 rounded-lg font-medium transition-all ${activeTab === "requests" ? "btn-primary" : "text-secondary hover:text-primary"}`,
                                children: [
                                    "Requests (",
                                    friendRequests.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("search"),
                                className: `flex-1 py-2 px-4 rounded-lg font-medium transition-all ${activeTab === "search" ? "btn-primary" : "text-secondary hover:text-primary"}`,
                                children: "Add Friends"
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    activeTab === "friends" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: friends.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12 glass rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-primary",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-primary mb-2",
                                    children: "No friends yet"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-secondary mb-4",
                                    children: "Start building your travel network!"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab("search"),
                                    className: "btn-primary px-6 py-2 rounded-lg font-medium transition-all",
                                    children: "Add Friends"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                            lineNumber: 186,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: friends.map((friend)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded-lg p-6 shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-semibold text-lg",
                                                    children: friend.friend_profile?.full_name?.charAt(0) || friend.friend_profile?.email?.charAt(0) || "?"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-primary",
                                                        children: friend.friend_profile?.full_name || "Unknown User"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-secondary",
                                                        children: friend.friend_profile?.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleRemoveFriend(friend.friend_id),
                                                className: "text-accent hover:text-primary p-2 rounded-lg hover:bg-accent hover:bg-opacity-10 transition-colors",
                                                title: "Remove friend",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 21
                                    }, this)
                                }, friend.id, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                            lineNumber: 216,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    activeTab === "requests" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: friendRequests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12 glass rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-secondary",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-primary mb-2",
                                    children: "No pending requests"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-secondary",
                                    children: "You're all caught up!"
                                }, void 0, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                            lineNumber: 269,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: friendRequests.map((request)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass rounded-lg p-6 shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold text-lg",
                                                            children: request.from_user.full_name?.charAt(0) || request.from_user.email?.charAt(0) || "?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-primary",
                                                                children: request.from_user.full_name || "Unknown User"
                                                            }, void 0, false, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-secondary",
                                                                children: request.from_user.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-secondary text-opacity-60",
                                                                children: [
                                                                    "Sent",
                                                                    " ",
                                                                    new Date(request.created_at).toLocaleDateString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleAcceptRequest(request.id),
                                                        className: "btn-primary px-4 py-2 rounded-lg font-medium transition-colors",
                                                        children: "Accept"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeclineRequest(request.id),
                                                        className: "glass text-secondary px-4 py-2 rounded-lg font-medium transition-colors",
                                                        children: "Decline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 21
                                    }, this)
                                }, request.id, false, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                            lineNumber: 291,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    activeTab === "search" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass rounded-lg p-6 shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search by name, email, or username...",
                                            value: searchQuery,
                                            onChange: (e)=>handleSearch(e.target.value),
                                            className: "w-full pl-10 pr-4 py-3 border border-secondary border-opacity-20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-primary placeholder-secondary"
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "absolute left-3 top-3.5 h-5 w-5 text-secondary",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this),
                            searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: searchResults.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass rounded-lg p-6 shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white font-semibold text-lg",
                                                                children: user.full_name?.charAt(0) || user.email?.charAt(0) || "?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-primary",
                                                                    children: user.full_name || "Unknown User"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-secondary",
                                                                    children: user.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 27
                                                                }, this),
                                                                user.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-secondary text-opacity-60",
                                                                    children: [
                                                                        "@",
                                                                        user.username
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSendFriendRequest(user.id),
                                                    className: "btn-primary px-4 py-2 rounded-lg font-medium transition-all",
                                                    children: "Add Friend"
                                                }, void 0, false, {
                                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 21
                                        }, this)
                                    }, user.id, false, {
                                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                lineNumber: 370,
                                columnNumber: 15
                            }, this),
                            searchQuery.length > 2 && searchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 glass rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-secondary",
                                    children: [
                                        'No users found matching "',
                                        searchQuery,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                    lineNumber: 408,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                                lineNumber: 407,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/All Git Clones/Travel Planner/triptimeline/src/app/friends/page.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(FriendsPage, "0kjwVetIZn2SgWhP0BDYywJmAY8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FriendsPage;
var _c;
__turbopack_context__.k.register(_c, "FriendsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/All Git Clones/Travel Planner/triptimeline/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=All%20Git%20Clones_Travel%20Planner_triptimeline_a6ed8373._.js.map