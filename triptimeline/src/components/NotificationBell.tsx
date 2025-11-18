'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  getFriendRequests, 
  getTripInvitations, 
  acceptFriendRequest, 
  declineFriendRequest,
  acceptTripInvitation,
  declineTripInvitation
} from '@/lib/friend-service';
import { FriendRequest, TripInvitation } from '@/types/friends';

export default function NotificationBell() {
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [tripInvitations, setTripInvitations] = useState<TripInvitation[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tablesExist, setTablesExist] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalNotifications = friendRequests.length + tripInvitations.length;

  useEffect(() => {
    loadNotifications();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showDropdown]);

  const loadNotifications = async () => {
    try {
      const [requests, invitations] = await Promise.all([
        getFriendRequests(),
        getTripInvitations()
      ]);
      setFriendRequests(requests);
      setTripInvitations(invitations);
      setTablesExist(true);
    } catch (error) {
      // Check if it's the specific missing table error
      if ((error as Error).message === 'FRIENDS_TABLE_MISSING') {
        setTablesExist(false);
        console.warn('Friend tables not found. Run friends-schema.sql to enable friend features.');
        setFriendRequests([]);
        setTripInvitations([]);
        return; // Don't log as error since this is expected
      }
      
      console.error('Error loading notifications:', error);
      // Set empty arrays as fallback
      setFriendRequests([]);
      setTripInvitations([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAcceptFriendRequest = async (requestId: string) => {
    try {
      await acceptFriendRequest(requestId);
      setFriendRequests(friendRequests.filter(req => req.id !== requestId));
    } catch (error) {
      console.error('Error accepting friend request:', error);
      alert('Failed to accept friend request');
    }
  };

  const handleDeclineFriendRequest = async (requestId: string) => {
    try {
      await declineFriendRequest(requestId);
      setFriendRequests(friendRequests.filter(req => req.id !== requestId));
    } catch (error) {
      console.error('Error declining friend request:', error);
      alert('Failed to decline friend request');
    }
  };

  const handleAcceptTripInvitation = async (invitationId: string) => {
    try {
      await acceptTripInvitation(invitationId);
      setTripInvitations(tripInvitations.filter(inv => inv.id !== invitationId));
    } catch (error) {
      console.error('Error accepting trip invitation:', error);
      alert('Failed to accept trip invitation');
    }
  };

  const handleDeclineTripInvitation = async (invitationId: string) => {
    try {
      await declineTripInvitation(invitationId);
      setTripInvitations(tripInvitations.filter(inv => inv.id !== invitationId));
    } catch (error) {
      console.error('Error declining trip invitation:', error);
      alert('Failed to decline trip invitation');
    }
  };

  // Don't render if friend tables don't exist
  if (!tablesExist) {
    return null;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM11 19H6a2 2 0 01-2-2V7a2 2 0 012-2h5m5 0v6m0 0V7a2 2 0 012 2v4a2 2 0 01-2 2z" />
        </svg>
        {totalNotifications > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalNotifications > 9 ? '9+' : totalNotifications}
          </span>
        )}
      </button>

      {showDropdown && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto">
          <div className="px-4 py-2 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Notifications</h3>
          </div>

          {isLoading ? (
            <div className="px-4 py-8 text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600 mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Loading...</p>
            </div>
          ) : totalNotifications === 0 ? (
            <div className="px-4 py-8 text-center">
              <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-sm text-gray-600">No new notifications</p>
            </div>
          ) : (
            <div className="max-h-80 overflow-y-auto">
              {/* Friend Requests */}
              {friendRequests.map((request) => (
                <div key={request.id} className="px-4 py-3 border-b border-gray-50 hover:bg-gray-50">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-xs">
                        {request.from_user.full_name?.charAt(0) || request.from_user.email?.charAt(0) || '?'}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{request.from_user.full_name || 'Someone'}</span> sent you a friend request
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(request.created_at).toLocaleDateString()}
                      </p>
                      <div className="flex space-x-2 mt-2">
                        <button
                          onClick={() => handleAcceptFriendRequest(request.id)}
                          className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDeclineFriendRequest(request.id)}
                          className="text-xs bg-gray-600 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Trip Invitations */}
              {tripInvitations.map((invitation) => (
                <div key={invitation.id} className="px-4 py-3 border-b border-gray-50 hover:bg-gray-50">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-xs">
                        {invitation.inviter.full_name?.charAt(0) || invitation.inviter.email?.charAt(0) || '?'}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{invitation.inviter.full_name || 'Someone'}</span> invited you to collaborate on{' '}
                        <span className="font-medium">{invitation.trip.title}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Role: {invitation.role} • {new Date(invitation.created_at).toLocaleDateString()}
                      </p>
                      <div className="flex space-x-2 mt-2">
                        <button
                          onClick={() => handleAcceptTripInvitation(invitation.id)}
                          className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition-colors"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDeclineTripInvitation(invitation.id)}
                          className="text-xs bg-gray-600 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {totalNotifications > 0 && (
            <div className="px-4 py-2 border-t border-gray-100">
              <button
                onClick={() => window.location.href = '/friends'}
                className="text-sm text-purple-600 hover:text-purple-700 font-medium"
              >
                View all in Friends →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
