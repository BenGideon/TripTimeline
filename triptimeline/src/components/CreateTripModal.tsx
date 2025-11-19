"use client";

import { useState } from "react";

interface Trip {
  id: string;
  title: string;
  destination: string;
  start_date: string;
  end_date: string;
  description?: string;
  created_at: string;
}

interface CreateTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTripCreated: (trip: Trip) => void;
}

export default function CreateTripModal({
  isOpen,
  onClose,
  onTripCreated,
}: CreateTripModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    start_date: "",
    end_date: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { createTrip } = await import("@/lib/trip-service");
      const tripId = await createTrip({
        title: formData.title,
        destination: formData.destination,
        start_date: formData.start_date,
        end_date: formData.end_date,
        description: formData.description || "",
        currency: "USD",
        travelers: 1,
      });

      // Create the trip object to return to the dashboard
      const newTrip: Trip = {
        id: tripId,
        ...formData,
        created_at: new Date().toISOString(),
      };

      onTripCreated(newTrip);
      setFormData({
        title: "",
        destination: "",
        start_date: "",
        end_date: "",
        description: "",
      });
    } catch (error) {
      console.error("Error creating trip:", error);
      // Show more detailed error message
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      alert(`Failed to create trip: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50" style={{backgroundColor: 'rgba(10, 64, 12, 0.5)'}}>
      <div className="bg-bg rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-accent border-opacity-20">
          <h2 className="text-2xl font-bold text-primary">Create New Trip</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent hover:bg-opacity-10 rounded-full transition-colors"
          >
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Trip Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-secondary border-opacity-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="e.g., Summer in Japan"
            />
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Destination *
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-secondary border-opacity-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="e.g., Tokyo, Japan"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="start_date"
                className="block text-sm font-semibold text-primary mb-2"
              >
                Start Date *
              </label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-secondary border-opacity-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="end_date"
                className="block text-sm font-semibold text-primary mb-2"
              >
                End Date *
              </label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                required
                min={formData.start_date}
                className="w-full px-4 py-3 border border-secondary border-opacity-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-secondary border-opacity-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell us about your trip..."
            />
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-secondary border-opacity-30 text-secondary rounded-lg font-semibold hover:bg-secondary hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 btn-primary py-3 px-4 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating...
                </div>
              ) : (
                "Create Trip"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
