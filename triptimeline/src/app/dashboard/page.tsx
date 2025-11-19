"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { parseISO } from "date-fns";
import TripCard from "@/components/TripCard";
import CreateTripModal from "@/components/CreateTripModal";
import TripCollaborators from "@/components/TripCollaborators";
import NotificationBell from "@/components/NotificationBell";
import DashboardHeader from "@/components/DashboardHeader";

interface Trip {
  id: string;
  title: string;
  destination: string;
  start_date: string;
  end_date: string;
  description?: string;
  created_at: string;
}

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [tripsLoading, setTripsLoading] = useState(true);
  const [pendingInvitations, setPendingInvitations] = useState<any[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState<string>("");
  const [editingTrip, setEditingTrip] = useState<Trip | null>(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  // Load trips and pending invitations from database
  useEffect(() => {
    async function loadData() {
      if (user) {
        setTripsLoading(true);
        try {
          const { getUserTrips } = await import("@/lib/trip-service");
          const { getTripInvitations } = await import("@/lib/friend-service");

          const [userTrips, invitations] = await Promise.all([
            getUserTrips(),
            getTripInvitations(),
          ]);

          setTrips(userTrips);
          setPendingInvitations(invitations);
        } catch (error) {
          setTrips([]);
          setPendingInvitations([]);
        } finally {
          setTripsLoading(false);
        }
      }
    }

    loadData();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#fefae0'}}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{borderBottomColor: '#0a400c'}}></div>
          <p style={{color: '#819067'}}>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/auth/login");
    } catch (error) {
      // Error signing out
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      <DashboardHeader user={user} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Gradient */}
        <div className="subtle-green-gradient rounded-2xl p-12 text-white mb-12 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Welcome back,{" "}
            {user.user_metadata?.display_name || user.email?.split("@")[0]}! ✈️
          </h1>
          <p className="text-lg opacity-90">
            Ready to plan your next adventure?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer border border-transparent hover:border-primary hover:border-opacity-30">
            <div className="flex items-center">
              <div className="p-3 bg-primary bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-200">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-secondary">
                  Total Trips
                </p>
                <p className="text-2xl font-bold text-primary">
                  {trips.length}
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer border border-transparent hover:border-secondary hover:border-opacity-30">
            <div className="flex items-center">
              <div className="p-3 bg-secondary bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-200">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-secondary">
                  Upcoming Trips
                </p>
                <p className="text-2xl font-bold text-primary">
                  {
                    trips.filter((t) => parseISO(t.start_date) > new Date())
                      .length
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Invitations Section */}
        {pendingInvitations.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Trip Invitations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingInvitations.map((invitation) => (
                <div
                  key={invitation.id}
                  className="glass rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 border border-transparent hover:border-accent hover:border-opacity-30"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {invitation.trip?.title || "Trip"}
                    </h3>
                    <p className="text-sm text-secondary mb-1">
                      📍 {invitation.trip?.destination || "Destination"}
                    </p>
                    <p className="text-sm text-secondary">
                      📅{" "}
                      {invitation.trip?.start_date
                        ? parseISO(
                            invitation.trip.start_date
                          ).toLocaleDateString()
                        : "Date"}
                    </p>
                    {invitation.inviter_profile && (
                      <p className="text-xs text-gray-500 mt-2">
                        Invited by:{" "}
                        {invitation.inviter_profile.full_name ||
                          invitation.inviter_profile.email ||
                          "Someone"}
                      </p>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          const { acceptTripInvitation, getTripInvitations } =
                            await import("@/lib/friend-service");
                          const { getUserTrips } = await import(
                            "@/lib/trip-service"
                          );

                          await acceptTripInvitation(invitation.id);

                          // Reload both trips and invitations
                          const [userTrips, updatedInvitations] =
                            await Promise.all([
                              getUserTrips(),
                              getTripInvitations(),
                            ]);

                          setTrips(userTrips);
                          setPendingInvitations(updatedInvitations);
                        } catch (error) {
                          alert("Failed to accept invitation");
                        }
                      }}
                      className="flex-1 btn-primary px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          const { declineTripInvitation } = await import(
                            "@/lib/friend-service"
                          );
                          await declineTripInvitation(invitation.id);
                          setPendingInvitations(
                            pendingInvitations.filter(
                              (inv) => inv.id !== invitation.id
                            )
                          );
                        } catch (error) {
                          alert("Failed to decline invitation");
                        }
                      }}
                      className="flex-1 glass text-secondary px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-accent hover:bg-opacity-20 hover:text-primary shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trips Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Your Trips</h2>
          <div className="flex items-center space-x-4">
            {/* <NotificationBell /> - Temporarily disabled until friend tables are set up */}
            <a
              href="/friends"
              className="glass text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-transparent hover:border-accent hover:border-opacity-30"
            >
              👥 Friends
            </a>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn-primary px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              + Create New Trip
            </button>
          </div>
        </div>

        {/* Trips Grid */}
        {tripsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 animate-pulse"
              >
                <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : trips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
                onEdit={(tripId: string) => {
                  const tripToEdit = trips.find((t) => t.id === tripId);
                  if (tripToEdit) {
                    setEditingTrip(tripToEdit);
                    const formatDateForInput = (dateStr: string) => {
                      if (dateStr.includes("T")) {
                        return dateStr.split("T")[0];
                      }
                      return dateStr;
                    };
                    setEditFormData({
                      title: tripToEdit.title,
                      description: tripToEdit.description || "",
                      start_date: formatDateForInput(tripToEdit.start_date),
                      end_date: formatDateForInput(tripToEdit.end_date),
                    });
                    setShowEditModal(true);
                  }
                }}
                onManageCollaborators={(tripId: string) => {
                  setSelectedTripId(tripId);
                  setShowCollaborators(true);
                }}
                onDelete={async (tripId: string) => {
                  try {
                    const { deleteTrip } = await import("@/lib/trip-service");
                    await deleteTrip(tripId);

                    // Remove from local state
                    setTrips(trips.filter((t) => t.id !== tripId));

                    // Also remove from localStorage if it exists
                    try {
                      localStorage.removeItem(`trip_${tripId}_edits`);
                    } catch (error) {
                      // Could not remove trip edits from localStorage
                    }
                  } catch (error) {
                    alert("Failed to delete trip. Please try again.");
                  }
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No trips yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start planning your first adventure!
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn-primary px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Create Your First Trip
            </button>
          </div>
        )}
      </main>

      {/* Create Trip Modal */}
      {showCreateModal && (
        <CreateTripModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onTripCreated={(newTrip) => {
            setTrips([...trips, newTrip]);
            setShowCreateModal(false);
          }}
        />
      )}

      {/* Edit Trip Modal */}
      {showEditModal && editingTrip && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Edit Trip</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trip Title
                </label>
                <input
                  type="text"
                  value={editFormData.title}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={editFormData.description}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  value={editFormData.start_date}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      start_date: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  value={editFormData.end_date}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      end_date: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 px-4 py-2 border border-secondary border-opacity-30 text-secondary rounded-lg hover:bg-secondary hover:bg-opacity-5 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  try {
                    if (!editFormData.start_date || !editFormData.end_date) {
                      alert("Please fill in all fields");
                      return;
                    }
                    const { updateTrip } = await import("@/lib/trip-service");
                    const dataToSave = {
                      ...editFormData,
                      start_date: editFormData.start_date,
                      end_date: editFormData.end_date,
                    };
                    await updateTrip(editingTrip.id, dataToSave);
                    setTrips(
                      trips.map((t) =>
                        t.id === editingTrip.id ? { ...t, ...dataToSave } : t
                      )
                    );
                    setShowEditModal(false);
                  } catch (error) {
                    alert("Failed to update trip");
                  }
                }}
                className="flex-1 btn-primary px-4 py-2 rounded-lg transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trip Collaborators Modal */}
      {showCollaborators && selectedTripId && (
        <TripCollaborators
          tripId={selectedTripId}
          isOwner={true} // TODO: Check if current user is owner
          onClose={() => {
            setShowCollaborators(false);
            setSelectedTripId("");
          }}
        />
      )}
    </div>
  );
}
