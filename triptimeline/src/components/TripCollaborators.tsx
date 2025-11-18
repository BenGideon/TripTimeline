'use client';

import { useState, useEffect } from 'react';
import { 
  getTripCollaborators, 
  getFriends, 
  inviteToTrip, 
  removeFromTrip, 
  updateCollaboratorRole 
} from '@/lib/friend-service';
import { TripCollaborator, Friend } from '@/types/friends';

interface TripCollaboratorsProps {
  tripId: string;
  isOwner: boolean;
  onClose: () => void;
}

export default function TripCollaborators({ tripId, isOwner, onClose }: TripCollaboratorsProps) {
  const [collaborators, setCollaborators] = useState<TripCollaborator[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<'editor' | 'viewer'>('viewer');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [tripId]);

  const loadData = async () => {
    try {
      const [collaboratorsData, friendsData] = await Promise.all([
        getTripCollaborators(tripId),
        getFriends()
      ]);
      setCollaborators(collaboratorsData);
      
      // Filter out friends who are already collaborators
      const collaboratorIds = collaboratorsData.map(c => c.user_id);
      const availableFriends = friendsData.filter(f => !collaboratorIds.includes(f.friend_id));
      setFriends(availableFriends);
    } catch (error) {
      console.error('Error loading collaborators:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInviteFriend = async () => {
    if (!selectedFriend) return;

    try {
      await inviteToTrip(tripId, selectedFriend, selectedRole);
      setShowInviteModal(false);
      setSelectedFriend('');
      setSelectedRole('viewer');
      await loadData();
      alert('Invitation sent!');
    } catch (error) {
      console.error('Error inviting friend:', error);
      if ((error as any)?.code === 'TRIP_COLLABORATOR_ALREADY_INVITED') {
        alert('This user has already been invited to the trip.');
      } else {
        alert('Failed to send invitation');
      }
    }
  };

  const handleRemoveCollaborator = async (userId: string) => {
    if (window.confirm('Are you sure you want to remove this collaborator?')) {
      try {
        await removeFromTrip(tripId, userId);
        await loadData();
      } catch (error) {
        console.error('Error removing collaborator:', error);
        alert('Failed to remove collaborator');
      }
    }
  };

  const handleUpdateRole = async (userId: string, newRole: 'editor' | 'viewer') => {
    try {
      await updateCollaboratorRole(tripId, userId, newRole);
      setCollaborators(collaborators.map(c => 
        c.user_id === userId ? { ...c, role: newRole } : c
      ));
    } catch (error) {
      console.error('Error updating role:', error);
      alert('Failed to update role');
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'owner': return 'bg-purple-100 text-purple-800';
      case 'editor': return 'bg-blue-100 text-blue-800';
      case 'viewer': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading collaborators...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Trip Collaborators</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Invite Button */}
        {isOwner && friends.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setShowInviteModal(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              + Invite Friends
            </button>
          </div>
        )}

        {/* Collaborators List */}
        <div className="space-y-4">
          {collaborators.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No collaborators yet</h3>
              <p className="text-gray-600">Invite friends to collaborate on this trip!</p>
            </div>
          ) : (
            collaborators.map((collaborator) => (
              <div key={collaborator.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {collaborator.user_profile?.full_name?.charAt(0) || 
                       collaborator.user_profile?.email?.charAt(0) || '?'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {collaborator.user_profile?.full_name || 'Unknown User'}
                    </h4>
                    <p className="text-sm text-gray-600">{collaborator.user_profile?.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  {/* Role Badge/Selector */}
                  {isOwner && collaborator.role !== 'owner' ? (
                    <select
                      value={collaborator.role}
                      onChange={(e) => handleUpdateRole(collaborator.user_id, e.target.value as 'editor' | 'viewer')}
                      className="text-sm px-3 py-1 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="viewer">Viewer</option>
                      <option value="editor">Editor</option>
                    </select>
                  ) : (
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(collaborator.role)}`}>
                      {collaborator.role.charAt(0).toUpperCase() + collaborator.role.slice(1)}
                    </span>
                  )}
                  
                  {/* Remove Button */}
                  {isOwner && collaborator.role !== 'owner' && (
                    <button
                      onClick={() => handleRemoveCollaborator(collaborator.user_id)}
                      className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
                      title="Remove collaborator"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Invite Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60">
            <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Invite Friend</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Friend
                  </label>
                  <select
                    value={selectedFriend}
                    onChange={(e) => setSelectedFriend(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Choose a friend...</option>
                    {friends.map((friend) => (
                      <option key={friend.id} value={friend.friend_id}>
                        {friend.friend_profile?.full_name || friend.friend_profile?.email}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value as 'editor' | 'viewer')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="viewer">Viewer - Can view the trip</option>
                    <option value="editor">Editor - Can view and edit the trip</option>
                  </select>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleInviteFriend}
                  disabled={!selectedFriend}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Invite
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
