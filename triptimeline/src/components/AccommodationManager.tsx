"use client";

import { useState } from "react";
import { ItineraryDay, Accommodation } from "@/types/itinerary";
import { format, differenceInDays, parseISO } from "date-fns";

interface AccommodationManagerProps {
  itinerary: ItineraryDay[];
  onUpdateItinerary: (itinerary: ItineraryDay[]) => void;
}

export default function AccommodationManager({
  itinerary,
  onUpdateItinerary,
}: AccommodationManagerProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAccommodation, setEditingAccommodation] = useState<{
    dayIndex: number;
    accommodation: Accommodation;
  } | null>(null);
  const [newAccommodation, setNewAccommodation] = useState({
    name: "",
    type: "hotel" as Accommodation["type"],
    address: "",
    checkIn: "",
    checkOut: "",
    cost: 0,
    currency: "USD",
    rating: 5,
    amenities: [] as string[],
    notes: "",
    bookingReference: "",
    contactInfo: "",
  });

  const accommodationTypes = [
    { id: "hotel", name: "Hotel", icon: "🏨" },
    { id: "airbnb", name: "Airbnb", icon: "🏠" },
    { id: "hostel", name: "Hostel", icon: "🏢" },
    { id: "resort", name: "Resort", icon: "🏖️" },
    { id: "apartment", name: "Apartment", icon: "🏠" },
    { id: "other", name: "Other", icon: "🏘️" },
  ];

  const commonAmenities = [
    "WiFi",
    "Parking",
    "Pool",
    "Gym",
    "Spa",
    "Restaurant",
    "Room Service",
    "Air Conditioning",
    "Kitchen",
    "Laundry",
    "Pet Friendly",
    "Business Center",
    "Airport Shuttle",
    "Breakfast Included",
    "Beach Access",
    "Balcony",
  ];

  const getTypeInfo = (type: string) =>
    accommodationTypes.find((t) => t.id === type) || accommodationTypes[0];

  const addAccommodation = () => {
    if (
      !newAccommodation.name.trim() ||
      !newAccommodation.checkIn ||
      !newAccommodation.checkOut
    )
      return;

    const accommodation: Accommodation = {
      id: Date.now().toString(),
      ...newAccommodation,
      name: newAccommodation.name.trim(),
      photos: [],
    };

    // Find the day that matches the check-in date
    const checkInDate = new Date(newAccommodation.checkIn)
      .toISOString()
      .split("T")[0];
    const dayIndex = itinerary.findIndex((day) => day.date === checkInDate);

    if (dayIndex !== -1) {
      const updatedItinerary = [...itinerary];
      updatedItinerary[dayIndex] = {
        ...updatedItinerary[dayIndex],
        accommodation,
      };
      onUpdateItinerary(updatedItinerary);
    }

    resetForm();
  };

  const updateAccommodation = () => {
    if (!editingAccommodation) return;

    const updatedItinerary = [...itinerary];
    updatedItinerary[editingAccommodation.dayIndex] = {
      ...updatedItinerary[editingAccommodation.dayIndex],
      accommodation: editingAccommodation.accommodation,
    };
    onUpdateItinerary(updatedItinerary);
    setEditingAccommodation(null);
  };

  const removeAccommodation = (dayIndex: number) => {
    const updatedItinerary = [...itinerary];
    delete updatedItinerary[dayIndex].accommodation;
    onUpdateItinerary(updatedItinerary);
  };

  const resetForm = () => {
    setNewAccommodation({
      name: "",
      type: "hotel",
      address: "",
      checkIn: "",
      checkOut: "",
      cost: 0,
      currency: "USD",
      rating: 5,
      amenities: [],
      notes: "",
      bookingReference: "",
      contactInfo: "",
    });
    setShowAddForm(false);
  };

  const toggleAmenity = (amenity: string, isEditing = false) => {
    if (isEditing && editingAccommodation) {
      const amenities = editingAccommodation.accommodation.amenities.includes(
        amenity
      )
        ? editingAccommodation.accommodation.amenities.filter(
            (a) => a !== amenity
          )
        : [...editingAccommodation.accommodation.amenities, amenity];

      setEditingAccommodation({
        ...editingAccommodation,
        accommodation: { ...editingAccommodation.accommodation, amenities },
      });
    } else {
      const amenities = newAccommodation.amenities.includes(amenity)
        ? newAccommodation.amenities.filter((a) => a !== amenity)
        : [...newAccommodation.amenities, amenity];

      setNewAccommodation({ ...newAccommodation, amenities });
    }
  };

  const accommodationsWithDays = itinerary
    .map((day, index) => ({ ...day, dayIndex: index }))
    .filter((day) => day.accommodation);

  const totalAccommodationCost = accommodationsWithDays.reduce(
    (sum, day) => sum + (day.accommodation?.cost || 0),
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Accommodation</h2>
            <p className="text-gray-600">
              Manage your hotels and places to stay
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            + Add Accommodation
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {accommodationsWithDays.length}
            </div>
            <div className="text-sm text-gray-600">Bookings</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {totalAccommodationCost.toLocaleString()} USD
            </div>
            <div className="text-sm text-gray-600">Total Cost</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {accommodationsWithDays.reduce((sum, day) => {
                const accommodation = day.accommodation!;
                return (
                  sum +
                  differenceInDays(
                    parseISO(accommodation.checkOut),
                    parseISO(accommodation.checkIn)
                  )
                );
              }, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Nights</div>
          </div>
        </div>
      </div>

      {/* Add/Edit Accommodation Modal */}
      {(showAddForm || editingAccommodation) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {editingAccommodation
                  ? "Edit Accommodation"
                  : "Add Accommodation"}
              </h3>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setEditingAccommodation(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
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

            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={
                    editingAccommodation
                      ? editingAccommodation.accommodation.name
                      : newAccommodation.name
                  }
                  onChange={(e) =>
                    editingAccommodation
                      ? setEditingAccommodation({
                          ...editingAccommodation,
                          accommodation: {
                            ...editingAccommodation.accommodation,
                            name: e.target.value,
                          },
                        })
                      : setNewAccommodation({
                          ...newAccommodation,
                          name: e.target.value,
                        })
                  }
                  placeholder="Accommodation name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <select
                  value={
                    editingAccommodation
                      ? editingAccommodation.accommodation.type
                      : newAccommodation.type
                  }
                  onChange={(e) =>
                    editingAccommodation
                      ? setEditingAccommodation({
                          ...editingAccommodation,
                          accommodation: {
                            ...editingAccommodation.accommodation,
                            type: e.target.value as Accommodation["type"],
                          },
                        })
                      : setNewAccommodation({
                          ...newAccommodation,
                          type: e.target.value as Accommodation["type"],
                        })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {accommodationTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.icon} {type.name}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                value={
                  editingAccommodation
                    ? editingAccommodation.accommodation.address
                    : newAccommodation.address
                }
                onChange={(e) =>
                  editingAccommodation
                    ? setEditingAccommodation({
                        ...editingAccommodation,
                        accommodation: {
                          ...editingAccommodation.accommodation,
                          address: e.target.value,
                        },
                      })
                    : setNewAccommodation({
                        ...newAccommodation,
                        address: e.target.value,
                      })
                }
                placeholder="Address"
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />

              {/* Dates and Cost */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="date"
                  value={
                    editingAccommodation
                      ? editingAccommodation.accommodation.checkIn
                      : newAccommodation.checkIn
                  }
                  onChange={(e) =>
                    editingAccommodation
                      ? setEditingAccommodation({
                          ...editingAccommodation,
                          accommodation: {
                            ...editingAccommodation.accommodation,
                            checkIn: e.target.value,
                          },
                        })
                      : setNewAccommodation({
                          ...newAccommodation,
                          checkIn: e.target.value,
                        })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <input
                  type="date"
                  value={
                    editingAccommodation
                      ? editingAccommodation.accommodation.checkOut
                      : newAccommodation.checkOut
                  }
                  onChange={(e) =>
                    editingAccommodation
                      ? setEditingAccommodation({
                          ...editingAccommodation,
                          accommodation: {
                            ...editingAccommodation.accommodation,
                            checkOut: e.target.value,
                          },
                        })
                      : setNewAccommodation({
                          ...newAccommodation,
                          checkOut: e.target.value,
                        })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <input
                  type="number"
                  value={
                    editingAccommodation
                      ? editingAccommodation.accommodation.cost
                      : newAccommodation.cost
                  }
                  onChange={(e) =>
                    editingAccommodation
                      ? setEditingAccommodation({
                          ...editingAccommodation,
                          accommodation: {
                            ...editingAccommodation.accommodation,
                            cost: parseFloat(e.target.value) || 0,
                          },
                        })
                      : setNewAccommodation({
                          ...newAccommodation,
                          cost: parseFloat(e.target.value) || 0,
                        })
                  }
                  placeholder="Total cost"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        editingAccommodation
                          ? setEditingAccommodation({
                              ...editingAccommodation,
                              accommodation: {
                                ...editingAccommodation.accommodation,
                                rating: star,
                              },
                            })
                          : setNewAccommodation({
                              ...newAccommodation,
                              rating: star,
                            })
                      }
                      className={`text-2xl transition-colors ${
                        star <=
                        (editingAccommodation
                          ? editingAccommodation.accommodation.rating || 0
                          : newAccommodation.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ⭐
                    </button>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Amenities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {commonAmenities.map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={(editingAccommodation
                          ? editingAccommodation.accommodation.amenities
                          : newAccommodation.amenities
                        ).includes(amenity)}
                        onChange={() =>
                          toggleAmenity(amenity, !!editingAccommodation)
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={
                    editingAccommodation
                      ? editingAccommodation.accommodation.bookingReference ||
                        ""
                      : newAccommodation.bookingReference
                  }
                  onChange={(e) =>
                    editingAccommodation
                      ? setEditingAccommodation({
                          ...editingAccommodation,
                          accommodation: {
                            ...editingAccommodation.accommodation,
                            bookingReference: e.target.value,
                          },
                        })
                      : setNewAccommodation({
                          ...newAccommodation,
                          bookingReference: e.target.value,
                        })
                  }
                  placeholder="Booking reference"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <input
                  type="text"
                  value={
                    editingAccommodation
                      ? editingAccommodation.accommodation.contactInfo || ""
                      : newAccommodation.contactInfo
                  }
                  onChange={(e) =>
                    editingAccommodation
                      ? setEditingAccommodation({
                          ...editingAccommodation,
                          accommodation: {
                            ...editingAccommodation.accommodation,
                            contactInfo: e.target.value,
                          },
                        })
                      : setNewAccommodation({
                          ...newAccommodation,
                          contactInfo: e.target.value,
                        })
                  }
                  placeholder="Contact info"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <textarea
                value={
                  editingAccommodation
                    ? editingAccommodation.accommodation.notes || ""
                    : newAccommodation.notes
                }
                onChange={(e) =>
                  editingAccommodation
                    ? setEditingAccommodation({
                        ...editingAccommodation,
                        accommodation: {
                          ...editingAccommodation.accommodation,
                          notes: e.target.value,
                        },
                      })
                    : setNewAccommodation({
                        ...newAccommodation,
                        notes: e.target.value,
                      })
                }
                placeholder="Notes"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingAccommodation(null);
                  }}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={
                    editingAccommodation
                      ? updateAccommodation
                      : addAccommodation
                  }
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                >
                  {editingAccommodation ? "Update" : "Add"} Accommodation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accommodations List */}
      <div className="space-y-6">
        {accommodationsWithDays.length > 0 ? (
          accommodationsWithDays.map((day) => {
            const accommodation = day.accommodation!;
            const typeInfo = getTypeInfo(accommodation.type);
            const nights = differenceInDays(
              parseISO(accommodation.checkOut),
              parseISO(accommodation.checkIn)
            );

            return (
              <div
                key={day.dayIndex}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{typeInfo.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {accommodation.name}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {accommodation.address}
                      </p>

                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {typeInfo.name}
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < (accommodation.rating || 0)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Check-in:</span>
                          <div className="font-medium">
                            {format(
                              parseISO(accommodation.checkIn),
                              "MMM d, yyyy"
                            )}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Check-out:</span>
                          <div className="font-medium">
                            {format(
                              parseISO(accommodation.checkOut),
                              "MMM d, yyyy"
                            )}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Nights:</span>
                          <div className="font-medium">{nights}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Total Cost:</span>
                          <div className="font-medium">
                            {accommodation.cost.toLocaleString()}{" "}
                            {accommodation.currency}
                          </div>
                        </div>
                      </div>

                      {accommodation.amenities.length > 0 && (
                        <div className="mt-3">
                          <span className="text-sm text-gray-600">
                            Amenities:
                          </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {accommodation.amenities
                              .slice(0, 6)
                              .map((amenity) => (
                                <span
                                  key={amenity}
                                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                >
                                  {amenity}
                                </span>
                              ))}
                            {accommodation.amenities.length > 6 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                +{accommodation.amenities.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {accommodation.notes && (
                        <p className="text-sm text-gray-600 mt-3">
                          {accommodation.notes}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        setEditingAccommodation({
                          dayIndex: day.dayIndex,
                          accommodation,
                        })
                      }
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
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
                    <button
                      onClick={() => removeAccommodation(day.dayIndex)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🏨</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No accommodations added
            </h3>
            <p className="text-gray-600 mb-6">
              Add hotels, Airbnbs, or other places you'll be staying
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
            >
              Add Your First Accommodation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
