"use client";

import { useAuth } from "@/components/AuthProvider";
import { useState } from "react";
import { User } from "@supabase/supabase-js";

interface DashboardHeaderProps {
  user: User;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  const { signOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  const userInitials = user.user_metadata?.display_name
    ? user.user_metadata.display_name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
    : user.email?.charAt(0).toUpperCase() || "U";

  return (
    <header className="glass sticky top-0 z-50 border-b border-opacity-20 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/dashboard"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold travel-gradient bg-clip-text text-transparent cursor-pointer">
                ✈️ TripTimeline
              </h1>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/dashboard"
              className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Dashboard
            </a>
          </nav>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:bg-accent hover:bg-opacity-20 p-1 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                {userInitials}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-primary">
                  {user.user_metadata?.display_name || "User"}
                </p>
                <p className="text-xs text-secondary">{user.email}</p>
              </div>
              <svg
                className={`w-4 h-4 text-secondary transition-transform ${
                  showUserMenu ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 glass rounded-xl shadow-lg py-2 z-50">
                <div className="px-4 py-3 border-b border-opacity-20 border-secondary">
                  <p className="text-sm font-medium text-primary">
                    {user.user_metadata?.display_name || "User"}
                  </p>
                  <p className="text-xs text-secondary truncate">
                    {user.email}
                  </p>
                </div>

                <div className="py-1">
                  <a
                    href="/dashboard/profile"
                    className="flex items-center px-4 py-2 text-sm text-primary hover:bg-accent hover:bg-opacity-10 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mr-3 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Profile Settings
                  </a>
                </div>

                <div className="border-t border-opacity-20 border-secondary py-1">
                  <button
                    onClick={handleSignOut}
                    className="flex items-center w-full px-4 py-2 text-sm text-primary hover:bg-accent hover:bg-opacity-10 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
