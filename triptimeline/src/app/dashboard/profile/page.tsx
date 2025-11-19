'use client';

import { useAuth } from '@/components/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import ChangePasswordForm from '@/components/ChangePasswordForm';

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
    if (user) {
      setDisplayName(user.user_metadata?.display_name || '');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#fefae0'}}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{borderBottomColor: '#0a400c'}}></div>
          <p style={{color: '#819067'}}>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleSaveProfile = async () => {
    setIsSaving(true);
    try {
      const { updateUserProfile } = await import('@/lib/friend-service');
      await updateUserProfile({ full_name: displayName });
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/auth/login');
    } catch (error) {
      // Error signing out
    }
  };

  const userInitials = displayName
    ? displayName.split(' ').map((n: string) => n[0]).join('').toUpperCase()
    : user.email?.charAt(0).toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <DashboardHeader user={user} />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 mb-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-lg">
              {userInitials}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{displayName || 'User'}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>

          {/* Profile Information */}
          <div className="space-y-6 mb-8">
            {/* Display Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your display name"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{displayName || 'Not set'}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{user.email}</p>
              <p className="text-xs text-gray-500 mt-2">Email cannot be changed</p>
            </div>

            {/* Account Created */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Created</label>
              <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                {new Date(user.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mb-8">
            {isEditing ? (
              <>
                <button
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50"
                >
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setDisplayName(user.user_metadata?.display_name || '');
                  }}
                  className="bg-gray-200 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Sign Out Button */}
          <div className="border-t border-gray-200 pt-8">
            <button
              onClick={handleSignOut}
              className="w-full px-6 py-3 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                backgroundColor: '#b1ab86',
                color: '#0a400c'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#819067';
                (e.target as HTMLElement).style.color = '#fefae0';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#b1ab86';
                (e.target as HTMLElement).style.color = '#0a400c';
              }}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Change Password</h2>
          <ChangePasswordForm />
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => router.push('/dashboard')}
            className="font-medium transition-colors"
            style={{color: '#0a400c'}}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#819067'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#0a400c'}
          >
            ← Back to Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}
