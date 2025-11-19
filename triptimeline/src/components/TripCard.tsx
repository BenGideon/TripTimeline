"use client";

import { format, differenceInDays, parseISO } from "date-fns";
import { useState, useEffect, useRef } from "react";

interface Trip {
  id: string;
  title: string;
  destination: string;
  start_date: string;
  end_date: string;
  description?: string;
  created_at: string;
  cover_image?: string;
}

interface TripCardProps {
  trip: Trip;
  onDelete?: (tripId: string) => void;
  onManageCollaborators?: (tripId: string) => void;
  onEdit?: (tripId: string) => void;
}

export default function TripCard({
  trip,
  onDelete,
  onManageCollaborators,
  onEdit,
}: TripCardProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const startDate = parseISO(trip.start_date);
  const endDate = parseISO(trip.end_date);
  const duration = differenceInDays(endDate, startDate) + 1;
  const isUpcoming = startDate > new Date();
  const isOngoing = startDate <= new Date() && endDate >= new Date();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showDropdown]);

  const getStatusBadge = () => {
    if (isOngoing) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-secondary border-2 border-secondary shadow-lg backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-1.5 animate-pulse"></div>
          Ongoing
        </span>
      );
    } else if (isUpcoming) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-accent border-2 border-accent shadow-lg backdrop-blur-sm">
          <svg
            className="w-3 h-3 mr-1"
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
          Upcoming
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-primary border-2 border-primary shadow-lg backdrop-blur-sm">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Completed
        </span>
      );
    }
  };

  return (
    <div className="glass rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group overflow-visible relative border border-transparent hover:border-primary hover:border-opacity-30">
      {/* Card Header with Cover Image */}
      <div className="h-48 travel-gradient relative overflow-hidden rounded-t-xl">
        {trip.cover_image ? (
          <img
            src={trip.cover_image}
            alt={trip.title}
            className="w-full h-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {getStatusBadge()}
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-all duration-200">
            {trip.title}
          </h3>
          <div className="flex items-center text-white/90">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">{trip.destination}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 overflow-visible">
        {trip.description && (
          <p className="text-secondary text-sm mb-4 line-clamp-2">
            {trip.description}
          </p>
        )}

        {/* Trip Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-secondary">
              <svg
                className="w-4 h-4 mr-2"
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
              <span>Duration</span>
            </div>
            <span className="font-medium text-primary">
              {duration} {duration === 1 ? "day" : "days"}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-secondary">
              <svg
                className="w-4 h-4 mr-2"
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
              <span>Dates</span>
            </div>
            <span className="font-medium text-primary">
              {format(startDate, "MMM d")} - {format(endDate, "MMM d, yyyy")}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={`/itinerary/${trip.id}`}
            className="flex-1 btn-primary py-2.5 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-center"
          >
            View Itinerary
          </a>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="p-2.5 bg-accent bg-opacity-20 hover:bg-opacity-40 hover:scale-110 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 shadow-sm hover:shadow-md"
            >
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-12 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-primary border-opacity-20 py-2 z-50">
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    if (onEdit) onEdit(trip.id);
                  }}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-primary hover:bg-accent hover:bg-opacity-20 hover:text-primary transition-all duration-200 flex items-center rounded-md mx-1"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                  Edit Trip
                </button>
                {onManageCollaborators && (
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      onManageCollaborators(trip.id);
                    }}
                    className="w-full text-left px-4 py-2 text-sm font-medium text-primary hover:bg-accent hover:bg-opacity-20 hover:text-primary transition-all duration-200 flex items-center rounded-md mx-1"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
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
                    Manage Collaborators
                  </button>
                )}
                {onDelete && (
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      if (
                        window.confirm(
                          `Are you sure you want to delete "${trip.title}"? This action cannot be undone.`
                        )
                      ) {
                        onDelete(trip.id);
                      }
                    }}
                    className="w-full text-left px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 flex items-center rounded-md mx-1"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
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
                    Delete Trip
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
