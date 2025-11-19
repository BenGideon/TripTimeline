'use client';

import { User } from '@supabase/supabase-js';
import Link from 'next/link';

interface UserProfileCardProps {
  user: User;
}

export default function UserProfileCard({ user }: UserProfileCardProps) {
  const userInitials = user.user_metadata?.display_name
    ? user.user_metadata.display_name.split(' ').map((n: string) => n[0]).join('').toUpperCase()
    : user.email?.charAt(0).toUpperCase() || 'U';

  const displayName = user.user_metadata?.display_name || user.email?.split('@')[0] || 'User';

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
            {userInitials}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{displayName}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-xs text-gray-500 mt-1">
              Member since {new Date(user.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
            </p>
          </div>
        </div>
        <Link
          href="/dashboard/profile"
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
