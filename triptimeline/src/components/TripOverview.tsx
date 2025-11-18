"use client";

import { useState } from "react";
import { Trip } from "@/types/itinerary";
import { format, differenceInDays, parseISO } from "date-fns";
import TripCollaborators from "./TripCollaborators";

interface TripOverviewProps {
  trip: Trip;
  onUpdateTrip: (updatedTrip: Partial<Trip>) => void;
}

export default function TripOverview({
  trip,
  onUpdateTrip,
}: TripOverviewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [editData, setEditData] = useState({
    title: trip.title,
    description: trip.description || "",
    budget: trip.budget || 0,
  });

  const duration =
    differenceInDays(parseISO(trip.end_date), parseISO(trip.start_date)) + 1;
  const totalExpenses = trip.expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const remainingBudget = (trip.budget || 0) - totalExpenses;
  const packedItems = trip.packingList.filter((item) => item.packed).length;
  const totalItems = trip.packingList.length;
  const completedActivities = trip.itinerary.reduce(
    (count, day) =>
      count + day.activities.filter((activity) => activity.completed).length,
    0
  );
  const totalActivities = trip.itinerary.reduce(
    (count, day) => count + day.activities.length,
    0
  );

  const handleSave = () => {
    onUpdateTrip(editData);
    setIsEditing(false);
  };

  const getBudgetStatus = () => {
    const percentage = (totalExpenses / (trip.budget || 1)) * 100;
    if (percentage > 100)
      return {
        color: "text-accent",
        bg: "bg-accent bg-opacity-10",
        status: "Over Budget!",
      };
    if (percentage > 80)
      return {
        color: "text-secondary",
        bg: "bg-secondary bg-opacity-10",
        status: "Close to Limit",
      };
    return {
      color: "text-primary",
      bg: "bg-primary bg-opacity-10",
      status: "On Track",
    };
  };

  const budgetStatus = getBudgetStatus();

  return (
    <div className="space-y-8">
      {/* Trip Header Card */}
      <div className="glass rounded-lg p-8 shadow-lg">
        {isEditing ? (
          <div className="space-y-6">
            <input
              type="text"
              value={editData.title}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
              className="w-full text-3xl font-bold text-primary bg-transparent border-b-2 border-primary border-opacity-30 focus:border-primary outline-none pb-2"
              placeholder="Trip title"
            />
            <textarea
              value={editData.description}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
              className="w-full text-secondary bg-transparent border border-secondary border-opacity-20 rounded-lg p-4 focus:border-primary outline-none resize-none"
              rows={3}
              placeholder="Trip description"
            />
            <div className="flex items-center space-x-4">
              <label className="text-sm font-semibold text-gray-700">
                Budget:
              </label>
              <input
                type="number"
                value={editData.budget}
                onChange={(e) =>
                  setEditData({ ...editData, budget: Number(e.target.value) })
                }
                className="px-4 py-2 border border-secondary border-opacity-20 rounded-lg focus:border-primary outline-none"
                placeholder="0"
              />
              <span className="text-secondary">{trip.currency}</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleSave}
                className="btn-primary px-6 py-2 rounded-lg font-semibold transition-all duration-200"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="glass text-secondary px-6 py-2 rounded-lg font-semibold transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {trip.title}
                </h2>
                <p className="text-secondary text-lg leading-relaxed">
                  {trip.description}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowCollaborators(true)}
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                  title="Manage collaborators"
                >
                  <svg
                    className="w-5 h-5"
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
                </button>
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {duration}
                </div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {trip.travelers}
                </div>
                <div className="text-sm text-gray-600">Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {format(parseISO(trip.start_date), "EEE, MMM d")}
                </div>
                <div className="text-sm text-gray-600">Start Date</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {format(parseISO(trip.end_date), "EEE, MMM d")}
                </div>
                <div className="text-sm text-gray-600">End Date</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cover Image Section */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Trip Cover Image
        </h3>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {trip.cover_image ? (
            <div className="flex-1 relative">
              <img
                src={trip.cover_image}
                alt={trip.title}
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
              <button
                onClick={() =>
                  document.getElementById("cover-image-input")?.click()
                }
                className="absolute bottom-2 right-2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                title="Change cover image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div
              className="flex-1 w-full h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center cursor-pointer hover:from-purple-300 hover:to-pink-300 transition-colors"
              onClick={() =>
                document.getElementById("cover-image-input")?.click()
              }
            >
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-purple-600 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-purple-700 font-medium">
                  Click to upload cover image
                </p>
              </div>
            </div>
          )}
          <input
            id="cover-image-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file) {
                try {
                  const { uploadTripCoverImage } = await import(
                    "@/lib/trip-service"
                  );
                  const coverUrl = await uploadTripCoverImage(trip.id, file);
                  onUpdateTrip({ cover_image: coverUrl });
                } catch (error) {
                  alert("Failed to upload cover image");
                }
              }
            }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Budget Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Budget</h3>
            <div
              className={`px-3 py-1 rounded-full text-xs font-medium ${budgetStatus.bg} ${budgetStatus.color}`}
            >
              {budgetStatus.status}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Total Budget</span>
              <span className="font-semibold">
                {trip.budget?.toLocaleString()} {trip.currency}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Spent</span>
              <span className="font-semibold text-red-600">
                {totalExpenses.toLocaleString()} {trip.currency}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Remaining</span>
              <span
                className={`font-semibold ${
                  remainingBudget >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {remainingBudget.toLocaleString()} {trip.currency}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  totalExpenses > (trip.budget || 0)
                    ? "bg-red-500"
                    : "bg-gradient-to-r from-green-500 to-emerald-500"
                }`}
                style={{
                  width: `${Math.min(
                    (totalExpenses / (trip.budget || 1)) * 100,
                    100
                  )}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Packing Progress */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Packing</h3>
            <span className="text-2xl">🧳</span>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {packedItems}/{totalItems}
            </div>
            <div className="text-sm text-gray-600 mb-3">Items Packed</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    totalItems > 0 ? (packedItems / totalItems) * 100 : 0
                  }%`,
                }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {totalItems > 0
                ? Math.round((packedItems / totalItems) * 100)
                : 0}
              % Complete
            </div>
          </div>
        </div>

        {/* Activities Progress */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Activities</h3>
            <span className="text-2xl">🗓️</span>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {completedActivities}/{totalActivities}
            </div>
            <div className="text-sm text-gray-600 mb-3">Completed</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    totalActivities > 0
                      ? (completedActivities / totalActivities) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {totalActivities > 0
                ? Math.round((completedActivities / totalActivities) * 100)
                : 0}
              % Complete
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Recent Updates
        </h3>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-gray-600 text-sm">No recent activity</p>
          <p className="text-gray-500 text-xs mt-1">
            Activity will appear here as you update your trip
          </p>
        </div>
      </div>

      {/* Collaborators Modal */}
      {showCollaborators && (
        <TripCollaborators
          tripId={trip.id}
          isOwner={true}
          onClose={() => setShowCollaborators(false)}
        />
      )}
    </div>
  );
}
