"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import {
  getFriends,
  getFriendRequests,
  searchUsers,
  sendFriendRequest,
  acceptFriendRequest,
  declineFriendRequest,
  removeFriend,
} from "@/lib/friend-service";
import { Friend, FriendRequest, UserProfile } from "@/types/friends";

export default function FriendsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [searchResults, setSearchResults] = useState<UserProfile[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"friends" | "requests" | "search">(
    "friends"
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    try {
      const [friendsData, requestsData] = await Promise.all([
        getFriends(),
        getFriendRequests(),
      ]);
      setFriends(friendsData);
      setFriendRequests(requestsData);
    } catch (error) {
      console.error("Error loading friends data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 2) {
      try {
        const results = await searchUsers(query);
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching users:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleSendFriendRequest = async (userId: string) => {
    try {
      await sendFriendRequest(userId);
      setSearchResults(searchResults.filter((user) => user.id !== userId));
      alert("Friend request sent!");
    } catch (error) {
      console.error("Error sending friend request:", error);
      if ((error as any)?.code === "FRIEND_REQUEST_ALREADY_EXISTS") {
        alert("Friend request already sent. Wait for them to respond.");
      } else {
        alert("Failed to send friend request");
      }
    }
  };

  const handleAcceptRequest = async (requestId: string) => {
    try {
      await acceptFriendRequest(requestId);
      await loadData();
    } catch (error) {
      console.error("Error accepting friend request:", error);
      alert("Failed to accept friend request");
    }
  };

  const handleDeclineRequest = async (requestId: string) => {
    try {
      await declineFriendRequest(requestId);
      setFriendRequests(friendRequests.filter((req) => req.id !== requestId));
    } catch (error) {
      console.error("Error declining friend request:", error);
      alert("Failed to decline friend request");
    }
  };

  const handleRemoveFriend = async (friendId: string) => {
    if (window.confirm("Are you sure you want to remove this friend?")) {
      try {
        await removeFriend(friendId);
        setFriends(friends.filter((friend) => friend.friend_id !== friendId));
      } catch (error) {
        console.error("Error removing friend:", error);
        alert("Failed to remove friend");
      }
    }
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-secondary">Loading friends...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="glass sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push("/dashboard")}
                className="text-secondary hover:text-primary transition-colors"
              >
                ← Back to Dashboard
              </button>
              <h1 className="text-2xl font-bold text-primary">Friends</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 glass rounded-lg p-1 mb-8">
          <button
            onClick={() => setActiveTab("friends")}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              activeTab === "friends"
                ? "btn-primary"
                : "text-secondary hover:text-primary"
            }`}
          >
            Friends ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab("requests")}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              activeTab === "requests"
                ? "btn-primary"
                : "text-secondary hover:text-primary"
            }`}
          >
            Requests ({friendRequests.length})
          </button>
          <button
            onClick={() => setActiveTab("search")}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              activeTab === "search"
                ? "btn-primary"
                : "text-secondary hover:text-primary"
            }`}
          >
            Add Friends
          </button>
        </div>

        {/* Friends Tab */}
        {activeTab === "friends" && (
          <div className="space-y-4">
            {friends.length === 0 ? (
              <div className="text-center py-12 glass rounded-xl">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">
                  No friends yet
                </h3>
                <p className="text-secondary mb-4">
                  Start building your travel network!
                </p>
                <button
                  onClick={() => setActiveTab("search")}
                  className="btn-primary px-6 py-2 rounded-lg font-medium transition-all"
                >
                  Add Friends
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {friends.map((friend) => (
                  <div
                    key={friend.id}
                    className="glass rounded-lg p-6 shadow-md"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          {friend.friend_profile?.full_name?.charAt(0) ||
                            friend.friend_profile?.email?.charAt(0) ||
                            "?"}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary">
                          {friend.friend_profile?.full_name || "Unknown User"}
                        </h3>
                        <p className="text-sm text-secondary">
                          {friend.friend_profile?.email}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveFriend(friend.friend_id)}
                        className="text-accent hover:text-primary p-2 rounded-lg hover:bg-accent hover:bg-opacity-10 transition-colors"
                        title="Remove friend"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Friend Requests Tab */}
        {activeTab === "requests" && (
          <div className="space-y-4">
            {friendRequests.length === 0 ? (
              <div className="text-center py-12 glass rounded-xl">
                <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">
                  No pending requests
                </h3>
                <p className="text-secondary">You're all caught up!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {friendRequests.map((request) => (
                  <div
                    key={request.id}
                    className="glass rounded-lg p-6 shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">
                            {request.from_user.full_name?.charAt(0) ||
                              request.from_user.email?.charAt(0) ||
                              "?"}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">
                            {request.from_user.full_name || "Unknown User"}
                          </h3>
                          <p className="text-sm text-secondary">
                            {request.from_user.email}
                          </p>
                          <p className="text-xs text-secondary text-opacity-60">
                            Sent{" "}
                            {new Date(request.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleAcceptRequest(request.id)}
                          className="btn-primary px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDeclineRequest(request.id)}
                          className="glass text-secondary px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Search Tab */}
        {activeTab === "search" && (
          <div className="space-y-6">
            <div className="glass rounded-lg p-6 shadow-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, email, or username..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-secondary border-opacity-20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-primary placeholder-secondary"
                />
                <svg
                  className="absolute left-3 top-3.5 h-5 w-5 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {searchResults.length > 0 && (
              <div className="space-y-4">
                {searchResults.map((user) => (
                  <div key={user.id} className="glass rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">
                            {user.full_name?.charAt(0) ||
                              user.email?.charAt(0) ||
                              "?"}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">
                            {user.full_name || "Unknown User"}
                          </h3>
                          <p className="text-sm text-secondary">{user.email}</p>
                          {user.username && (
                            <p className="text-xs text-secondary text-opacity-60">
                              @{user.username}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => handleSendFriendRequest(user.id)}
                        className="btn-primary px-4 py-2 rounded-lg font-medium transition-all"
                      >
                        Add Friend
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {searchQuery.length > 2 && searchResults.length === 0 && (
              <div className="text-center py-8 glass rounded-lg">
                <p className="text-secondary">
                  No users found matching "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
