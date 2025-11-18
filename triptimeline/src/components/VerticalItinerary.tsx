"use client";

import { useState, useEffect } from "react";
import { ItineraryDay, Activity, ActivityInput } from "@/types/itinerary";
import { format, parseISO } from "date-fns";
import MediaCarousel from "./MediaCarousel";

interface VerticalItineraryProps {
  itinerary: ItineraryDay[];
  tripId?: string;
  onAddActivity: (
    dayIndex: number,
    activity: ActivityInput
  ) => Promise<void> | void;
  onEditActivity: (
    dayIndex: number,
    activityId: string,
    activity: ActivityInput
  ) => Promise<void> | void;
  onDeleteActivity: (
    dayIndex: number,
    activityId: string
  ) => Promise<void> | void;
  onSaveNotes?: (dayIndex: number, notes: string) => Promise<void> | void;
  onSaveExpense?: (
    dayIndex: number,
    expense: {
      title: string;
      amount: number;
      category: string;
      currency: string;
      date: string;
    }
  ) => Promise<void> | void;
  onUpdateDay?: (
    dayIndex: number,
    updatedDay: Partial<ItineraryDay>
  ) => void | Promise<void>;
  onAddDay?: () => void;
  onDeleteDay?: (dayIndex: number) => void;
}

export default function VerticalItinerary({
  itinerary,
  tripId,
  onAddActivity,
  onEditActivity,
  onDeleteActivity,
  onSaveNotes,
  onSaveExpense,
  onUpdateDay,
  onAddDay,
  onDeleteDay,
}: VerticalItineraryProps) {
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([0])); // First day expanded by default
  const [editingDay, setEditingDay] = useState<{
    dayIndex: number;
    field: "title" | "notes";
  } | null>(null);
  const [editValue, setEditValue] = useState("");
  const [activityModal, setActivityModal] = useState<{
    dayIndex: number;
    activity?: Activity;
  } | null>(null);
  const [activityTitle, setActivityTitle] = useState("");
  const [activityTime, setActivityTime] = useState("");
  const [activityCategory, setActivityCategory] =
    useState<Activity["category"]>("sightseeing");
  const [activityType, setActivityType] = useState<Activity["type"]>("morning");
  const [activityLocation, setActivityLocation] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityCost, setActivityCost] = useState("");
  const [notesModal, setNotesModal] = useState<{ dayIndex: number } | null>(
    null
  );
  const [notesValue, setNotesValue] = useState("");
  const [expenseModal, setExpenseModal] = useState<{ dayIndex: number } | null>(
    null
  );
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState<
    "food" | "transport" | "accommodation" | "shopping" | "activities" | "other"
  >("food");
  const [isActivitySaving, setIsActivitySaving] = useState(false);
  const [isNotesSaving, setIsNotesSaving] = useState(false);
  const [isExpenseSaving, setIsExpenseSaving] = useState(false);
  const [draggedDayIndex, setDraggedDayIndex] = useState<number | null>(null);
  const [dragOverDayIndex, setDragOverDayIndex] = useState<number | null>(null);
  const [mediaUploadDayIndex, setMediaUploadDayIndex] = useState<number | null>(
    null
  );
  const [isMediaUploading, setIsMediaUploading] = useState(false);
  const [dayMedia, setDayMedia] = useState<{ [key: number]: any[] }>({});
  const [currentMediaIndex, setCurrentMediaIndex] = useState<{
    [key: number]: number;
  }>({});

  // Load media for all days on mount
  useEffect(() => {
    const loadAllMedia = async () => {
      if (!tripId || itinerary.length === 0) return;

      try {
        const { getMediaForDay } = await import("@/lib/trip-service");
        const mediaMap: { [key: number]: any[] } = {};

        for (let dayIndex = 0; dayIndex < itinerary.length; dayIndex++) {
          const media = await getMediaForDay(tripId, dayIndex + 1);
          mediaMap[dayIndex] = media;
        }

        setDayMedia(mediaMap);
      } catch (error) {
        // Error loading media
      }
    };

    loadAllMedia();
  }, [tripId, itinerary.length]);

  const resetActivityForm = () => {
    setActivityTitle("");
    setActivityTime("");
    setActivityCategory("sightseeing");
    setActivityType("morning");
    setActivityLocation("");
    setActivityDescription("");
    setActivityCost("");
    setIsActivitySaving(false);
  };

  const openActivityModal = (dayIndex: number, activity?: Activity) => {
    setIsActivitySaving(false);

    if (activity) {
      setActivityModal({ dayIndex, activity });
      setActivityTitle(activity.title);
      setActivityTime(activity.time || "");
      setActivityCategory(activity.category);
      setActivityType(activity.type || "morning");
      setActivityLocation(activity.location || "");
      setActivityDescription(activity.description || "");
      setActivityCost(
        activity.cost !== undefined && activity.cost !== null
          ? String(activity.cost)
          : ""
      );
    } else {
      resetActivityForm();
      setActivityModal({ dayIndex });
    }
  };

  const closeActivityModal = () => {
    setActivityModal(null);
    resetActivityForm();
  };

  const handleSubmitActivity = async () => {
    if (!activityModal || activityTitle.trim() === "") return;

    const trimmedTitle = activityTitle.trim();
    const trimmedTime = activityTime.trim();
    const costValue =
      activityCost.trim() === "" ? undefined : Number(activityCost);
    const safeCost =
      costValue !== undefined && !Number.isNaN(costValue)
        ? costValue
        : undefined;

    const payload: ActivityInput = {
      title: trimmedTitle,
      time: trimmedTime,
      type: activityType,
      category: activityCategory,
      description: activityDescription.trim() || undefined,
      location: activityLocation.trim() || undefined,
      cost: safeCost,
    };

    setIsActivitySaving(true);

    try {
      if (activityModal.activity) {
        await onEditActivity(
          activityModal.dayIndex,
          activityModal.activity.id,
          payload
        );
      } else {
        await onAddActivity(activityModal.dayIndex, payload);
      }
      closeActivityModal();
    } catch (error) {
      // Error saving activity
    } finally {
      setIsActivitySaving(false);
    }
  };

  const handleDeleteActivity = async (dayIndex: number, activityId: string) => {
    const confirmDelete = window.confirm("Delete this activity?");
    if (!confirmDelete) return;

    try {
      await onDeleteActivity(dayIndex, activityId);
    } catch (error) {
      // Error deleting activity
    }
  };

  const openNotesModal = (dayIndex: number) => {
    setNotesModal({ dayIndex });
    setNotesValue(itinerary[dayIndex]?.notes || "");
  };

  const closeNotesModal = () => {
    setNotesModal(null);
    setNotesValue("");
  };

  const handleSaveNotes = async () => {
    if (!notesModal) return;
    setIsNotesSaving(true);

    try {
      if (onSaveNotes) {
        await onSaveNotes(notesModal.dayIndex, notesValue);
      } else if (onUpdateDay) {
        await onUpdateDay(notesModal.dayIndex, { notes: notesValue });
      }
      closeNotesModal();
    } catch (error) {
      // Error saving notes
    } finally {
      setIsNotesSaving(false);
    }
  };

  const openExpenseModal = (dayIndex: number) => {
    setExpenseModal({ dayIndex });
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseCategory("food");
  };

  const closeExpenseModal = () => {
    setExpenseModal(null);
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseCategory("food");
  };

  const handleSaveExpense = async () => {
    if (!expenseModal || !expenseTitle.trim() || !expenseAmount.trim()) return;
    setIsExpenseSaving(true);

    try {
      const amount = parseFloat(expenseAmount);
      if (isNaN(amount) || amount < 0) {
        return;
      }

      if (onSaveExpense) {
        await onSaveExpense(expenseModal.dayIndex, {
          title: expenseTitle.trim(),
          amount,
          category: expenseCategory,
          currency: "USD",
          date: new Date().toISOString().split("T")[0],
        });
      }
      closeExpenseModal();
    } catch (error) {
      // Error saving expense
    } finally {
      setIsExpenseSaving(false);
    }
  };

  const handleMediaUpload = async (dayIndex: number, file: File) => {
    if (!tripId) {
      return;
    }

    setIsMediaUploading(true);
    try {
      const { uploadMedia, getMediaForDay } = await import(
        "@/lib/trip-service"
      );
      const mediaType = file.type.startsWith("video") ? "video" : "image";

      await uploadMedia(tripId, dayIndex + 1, file, mediaType, file.name);

      const media = await getMediaForDay(tripId, dayIndex + 1);
      setDayMedia((prev) => ({ ...prev, [dayIndex]: media }));
    } catch (error) {
      // Error uploading media
    } finally {
      setIsMediaUploading(false);
    }
  };

  const toggleDay = (dayIndex: number) => {
    const newExpanded = new Set(expandedDays);
    if (newExpanded.has(dayIndex)) {
      newExpanded.delete(dayIndex);
    } else {
      newExpanded.add(dayIndex);
    }
    setExpandedDays(newExpanded);
  };

  const handleDragStart = (dayIndex: number) => {
    setDraggedDayIndex(dayIndex);
  };

  const handleDragOver = (e: React.DragEvent, dayIndex: number) => {
    e.preventDefault();
    setDragOverDayIndex(dayIndex);
  };

  const handleDragLeave = () => {
    setDragOverDayIndex(null);
  };

  const handleDrop = async (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    setDragOverDayIndex(null);

    if (draggedDayIndex === null || draggedDayIndex === dropIndex) {
      return;
    }

    const newItinerary = [...itinerary];
    const draggedDay = newItinerary[draggedDayIndex];
    newItinerary.splice(draggedDayIndex, 1);
    newItinerary.splice(dropIndex, 0, draggedDay);

    const renumberedItinerary = newItinerary.map((day, index) => ({
      ...day,
      day: index + 1,
    }));

    if (onUpdateDay) {
      for (let i = 0; i < renumberedItinerary.length; i++) {
        const day = renumberedItinerary[i];
        if (day.day !== itinerary[i].day) {
          await onUpdateDay(i, { day: day.day });
        }
      }
    }

    setDraggedDayIndex(null);
  };

  const getDayTitle = (day: ItineraryDay) => {
    // Use custom title if set, otherwise generate dynamic titles
    if (day.customTitle) {
      return day.customTitle;
    }
    if (day.activities.length > 0) {
      const mainActivity = day.activities[0];
      return mainActivity.location || mainActivity.title;
    }
    return `Day ${day.day}`;
  };

  const getDayDescription = (day: ItineraryDay) => {
    // Show day notes if they exist, otherwise show default message
    return day.notes || "Explore and enjoy your day!";
  };

  const getActivityTypeIcon = (type: string) => {
    switch (type) {
      case "transport":
        return "✈️";
      case "accommodation":
        return "🏨";
      case "sightseeing":
        return "🗾";
      case "food":
        return "🍜";
      case "shopping":
        return "🛍️";
      case "entertainment":
        return "🎭";
      default:
        return "📍";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "transport":
        return "bg-primary bg-opacity-10 text-primary border-primary border-opacity-30";
      case "accommodation":
        return "bg-secondary bg-opacity-10 text-secondary border-secondary border-opacity-30";
      case "sightseeing":
        return "bg-accent bg-opacity-10 text-accent border-accent border-opacity-30";
      case "food":
        return "bg-primary bg-opacity-10 text-primary border-primary border-opacity-30";
      case "shopping":
        return "bg-secondary bg-opacity-10 text-secondary border-secondary border-opacity-30";
      case "entertainment":
        return "bg-accent bg-opacity-10 text-accent border-accent border-opacity-30";
      default:
        return "bg-primary bg-opacity-5 text-primary border-primary border-opacity-20";
    }
  };

  const startEditingDay = (
    dayIndex: number,
    field: "title" | "notes",
    currentValue: string
  ) => {
    setEditingDay({ dayIndex, field });
    setEditValue(currentValue);
  };

  const saveEditingDay = () => {
    if (editingDay && onUpdateDay) {
      if (editingDay.field === "title") {
        // Update the day's custom title
        onUpdateDay(editingDay.dayIndex, { customTitle: editValue });
      } else if (editingDay.field === "notes") {
        onUpdateDay(editingDay.dayIndex, { notes: editValue });
      }
    }
    setEditingDay(null);
    setEditValue("");
  };

  const cancelEditingDay = () => {
    setEditingDay(null);
    setEditValue("");
  };

  // Show empty state if no days exist
  if (itinerary.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-16">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <div className="text-6xl">📅</div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Start Planning Your Journey!
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Create your first day to begin building your amazing itinerary. Add
            activities, plan your schedule, and make memories!
          </p>
          {onAddDay && (
            <button
              onClick={onAddDay}
              className="btn-primary text-white px-8 py-4 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              ✨ Add Your First Day
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400 rounded-full shadow-sm"></div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {itinerary.map((day, dayIndex) => {
            const isExpanded = expandedDays.has(dayIndex);
            const isLast = dayIndex === itinerary.length - 1;

            return (
              <div key={dayIndex} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-white border-4 border-purple-500 rounded-full shadow-lg z-10 hover:scale-110 transition-transform duration-200"></div>

                {/* Day Card */}
                <div className="ml-20">
                  <div
                    draggable
                    onDragStart={() => handleDragStart(dayIndex)}
                    onDragOver={(e) => handleDragOver(e, dayIndex)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, dayIndex)}
                    className={`glass rounded-xl shadow-md border border-secondary border-opacity-20 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-move ${
                      draggedDayIndex === dayIndex ? "opacity-50" : ""
                    } ${
                      dragOverDayIndex === dayIndex &&
                      draggedDayIndex !== dayIndex
                        ? "border-primary border-2 bg-primary bg-opacity-5"
                        : ""
                    }`}
                  >
                    {/* Day Header - Always Visible */}
                    <div
                      className="p-6 cursor-pointer hover:bg-primary hover:bg-opacity-5 transition-colors"
                      onClick={() => toggleDay(dayIndex)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {day.day}
                          </div>
                          <div>
                            {editingDay?.dayIndex === dayIndex &&
                            editingDay?.field === "title" ? (
                              <div className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  value={editValue}
                                  onChange={(e) => setEditValue(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") saveEditingDay();
                                    if (e.key === "Escape") cancelEditingDay();
                                  }}
                                  className="text-xl font-bold text-gray-900 bg-white border border-purple-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                  autoFocus
                                />
                                <button
                                  onClick={saveEditingDay}
                                  className="text-green-600 hover:text-green-700 p-1"
                                >
                                  ✓
                                </button>
                                <button
                                  onClick={cancelEditingDay}
                                  className="text-red-600 hover:text-red-700 p-1"
                                >
                                  ✕
                                </button>
                              </div>
                            ) : (
                              <h3
                                className="text-xl font-bold text-gray-900 flex items-center cursor-pointer hover:text-purple-600 transition-colors group"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const currentTitle = getDayTitle(day);
                                  startEditingDay(
                                    dayIndex,
                                    "title",
                                    currentTitle
                                  );
                                }}
                              >
                                📍 {getDayTitle(day)}
                                <span className="ml-2 opacity-0 group-hover:opacity-100 text-sm text-purple-500 transition-opacity">
                                  ✏️
                                </span>
                              </h3>
                            )}
                            <p className="text-gray-600 text-sm">
                              {format(parseISO(day.date), "EEEE, MMMM d, yyyy")}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          {/* Activity Count */}
                          <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                              {day.activities.length}{" "}
                              {day.activities.length === 1
                                ? "Activity"
                                : "Activities"}
                            </span>
                            {day.accommodation && (
                              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                                🏨 Hotel
                              </span>
                            )}
                            {/* Delete Day Button */}
                            {onDeleteDay && itinerary.length > 1 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (
                                    window.confirm(
                                      `Are you sure you want to delete ${getDayTitle(
                                        day
                                      )}?`
                                    )
                                  ) {
                                    onDeleteDay(dayIndex);
                                  }
                                }}
                                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                                title="Delete Day"
                              >
                                🗑️
                              </button>
                            )}
                          </div>

                          {/* Expand/Collapse Icon */}
                          <svg
                            className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
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
                        </div>
                      </div>

                      {/* Brief Description - Always Visible */}
                      <div className="mt-4">
                        {editingDay?.dayIndex === dayIndex &&
                        editingDay?.field === "notes" ? (
                          <div className="flex items-start space-x-2">
                            <textarea
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" && e.ctrlKey)
                                  saveEditingDay();
                                if (e.key === "Escape") cancelEditingDay();
                              }}
                              className="flex-1 px-3 py-2 text-gray-700 bg-white border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                              rows={2}
                              autoFocus
                            />
                            <div className="flex space-x-1 pt-2">
                              <button
                                onClick={saveEditingDay}
                                className="text-green-600 hover:text-green-700 p-1"
                              >
                                ✓
                              </button>
                              <button
                                onClick={cancelEditingDay}
                                className="text-red-600 hover:text-red-700 p-1"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p
                            className="text-gray-700 leading-relaxed cursor-pointer hover:text-purple-600 transition-colors group"
                            onClick={(e) => {
                              e.stopPropagation();
                              startEditingDay(
                                dayIndex,
                                "notes",
                                getDayDescription(day)
                              );
                            }}
                          >
                            {getDayDescription(day)}
                            <span className="ml-2 opacity-0 group-hover:opacity-100 text-sm text-purple-500 transition-opacity">
                              ✏️
                            </span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="border-t border-gray-100">
                        {/* Media Gallery as Hero Section */}
                        {dayMedia[dayIndex] && dayMedia[dayIndex].length > 0 ? (
                          <div className="p-6 bg-gray-900 border-b border-gray-200">
                            <MediaCarousel
                              media={dayMedia[dayIndex]}
                              dayIndex={dayIndex}
                              currentIndex={currentMediaIndex[dayIndex] || 0}
                              onIndexChange={(idx, mediaIdx) => {
                                setCurrentMediaIndex((prev) => ({
                                  ...prev,
                                  [idx]: mediaIdx,
                                }));
                              }}
                              onDelete={async (mediaId) => {
                                try {
                                  const { deleteMedia } = await import(
                                    "@/lib/trip-service"
                                  );
                                  await deleteMedia(mediaId);
                                  setDayMedia((prev) => ({
                                    ...prev,
                                    [dayIndex]: prev[dayIndex].filter(
                                      (m) => m.id !== mediaId
                                    ),
                                  }));
                                  setCurrentMediaIndex((prev) => ({
                                    ...prev,
                                    [dayIndex]: 0,
                                  }));
                                } catch (error) {
                                  throw error;
                                }
                              }}
                            />
                          </div>
                        ) : (
                          <div className="h-64 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center text-white">
                                <div className="text-6xl mb-4">🗾</div>
                                <h4 className="text-2xl font-bold">
                                  Day {day.day} Adventure
                                </h4>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Day Notes Section */}
                        {day.notes && (
                          <div className="p-6 bg-blue-50 border-b border-blue-100">
                            <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                              📝 Day Notes
                            </h5>
                            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                              {day.notes}
                            </p>
                          </div>
                        )}

                        {/* Media Upload Button */}
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-100">
                          <label className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-blue-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-100 transition-colors">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl">📸</span>
                              <span className="text-sm font-medium text-gray-700">
                                Upload Photo or Video
                              </span>
                            </div>
                            <input
                              type="file"
                              accept="image/*,video/*"
                              multiple
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files) {
                                  Array.from(e.target.files).forEach((file) => {
                                    handleMediaUpload(dayIndex, file);
                                  });
                                }
                              }}
                              disabled={isMediaUploading}
                            />
                          </label>
                        </div>

                        {/* Activities Section */}
                        <div className="p-6 space-y-6">
                          {day.activities.length > 0 ? (
                            day.activities.map((activity) => (
                              <div
                                key={activity.id}
                                className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex items-center space-x-3">
                                    <div className="text-2xl">
                                      {getActivityTypeIcon(activity.category)}
                                    </div>
                                    <div>
                                      <h5 className="font-semibold text-gray-900">
                                        {activity.title}
                                      </h5>
                                      <p className="text-sm text-gray-600">
                                        {activity.time}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <span
                                      className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(
                                        activity.category
                                      )}`}
                                    >
                                      {activity.category}
                                    </span>
                                    {activity.cost !== undefined &&
                                      activity.cost !== null && (
                                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                          ${activity.cost}
                                        </span>
                                      )}
                                    <button
                                      onClick={() =>
                                        openActivityModal(dayIndex, activity)
                                      }
                                      className="p-2 text-purple-500 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-colors"
                                      title="Edit Activity"
                                    >
                                      ✏️
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleDeleteActivity(
                                          dayIndex,
                                          activity.id
                                        )
                                      }
                                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                                      title="Delete Activity"
                                    >
                                      🗑️
                                    </button>
                                  </div>
                                </div>

                                {activity.description && (
                                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                    {activity.description}
                                  </p>
                                )}

                                {activity.location && (
                                  <div className="flex items-center text-sm text-gray-600">
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
                                    {activity.location}
                                  </div>
                                )}
                              </div>
                            ))
                          ) : (
                            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-xl">
                              <div className="text-4xl mb-4">📝</div>
                              <h5 className="font-medium text-primary mb-2">
                                No activities planned
                              </h5>
                              <p className="text-secondary text-sm mb-4">
                                Add activities to make the most of this day
                              </p>
                              <button
                                onClick={() => openActivityModal(dayIndex)}
                                className="btn-primary text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
                              >
                                + Add Activity
                              </button>
                            </div>
                          )}

                          {/* Accommodation Section */}
                          {day.accommodation && (
                            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                                🏨 Accommodation
                              </h5>
                              <div className="space-y-2">
                                <p className="font-medium text-gray-900">
                                  {day.accommodation.name}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {day.accommodation.address}
                                </p>
                                <div className="flex items-center space-x-4 text-sm">
                                  <span className="text-gray-600">
                                    Check-in:{" "}
                                    {format(
                                      parseISO(day.accommodation.checkIn),
                                      "MMM d"
                                    )}
                                  </span>
                                  <span className="text-gray-600">
                                    Check-out:{" "}
                                    {format(
                                      parseISO(day.accommodation.checkOut),
                                      "MMM d"
                                    )}
                                  </span>
                                  <span className="text-green-600 font-medium">
                                    ${day.accommodation.cost}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Day Stats */}
                          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                            <div className="text-center">
                              <div className="text-lg font-bold text-purple-600">
                                ${day.actualSpent || 0}
                              </div>
                              <div className="text-xs text-gray-600">Spent</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">
                                {day.activities.reduce(
                                  (sum, activity) =>
                                    sum + (activity.duration || 0),
                                  0
                                )}
                                m
                              </div>
                              <div className="text-xs text-gray-600">
                                Duration
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">
                                {
                                  day.activities.filter(
                                    (activity) => activity.completed
                                  ).length
                                }
                                /{day.activities.length}
                              </div>
                              <div className="text-xs text-gray-600">
                                Complete
                              </div>
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div className="flex space-x-3 pt-4">
                            <button
                              onClick={() => openActivityModal(dayIndex)}
                              className="flex-1 btn-primary text-white py-2 px-4 rounded-lg font-medium transition-all duration-200"
                            >
                              + Add Activity
                            </button>
                            <button
                              onClick={() => openNotesModal(dayIndex)}
                              className="flex-1 glass text-primary py-2 px-4 rounded-lg font-medium hover:bg-accent hover:bg-opacity-10 transition-colors"
                            >
                              📝 Add Notes
                            </button>
                            <button
                              onClick={() => openExpenseModal(dayIndex)}
                              className="flex-1 glass text-primary py-2 px-4 rounded-lg font-medium hover:bg-accent hover:bg-opacity-10 transition-colors"
                            >
                              💰 Add Expense
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Another Day Button */}
        {onAddDay && (
          <div className="relative ml-20 mt-8">
            <div className="absolute left-[-52px] w-5 h-5 bg-primary border-4 border-bg rounded-full shadow-lg"></div>
            <div className="glass rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-secondary border-opacity-20">
              <div className="text-center">
                <div className="text-4xl mb-4">➕</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Add Another Day
                </h3>
                <p className="text-secondary mb-4">
                  Continue your adventure with more activities!
                </p>
                <button
                  onClick={onAddDay}
                  className="btn-primary text-white px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  + Add Day {itinerary.length + 1}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* End of Timeline */}
        <div className="relative ml-20 mt-8">
          <div className="absolute left-[-52px] w-5 h-5 bg-green-500 border-4 border-white rounded-full shadow-lg"></div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">Journey Complete!</h3>
              <p className="text-green-100">
                What an amazing adventure you've had!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Activity Modal */}
      {activityModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {activityModal.activity ? "Edit Activity" : "Add Activity"} ·
                Day {activityModal.dayIndex + 1}
              </h2>
              <button
                onClick={closeActivityModal}
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

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  value={activityTitle}
                  onChange={(e) => setActivityTitle(e.target.value)}
                  placeholder="e.g., Morning Hike"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time & Location
                </label>
                <input
                  type="text"
                  value={activityTime}
                  onChange={(e) => setActivityTime(e.target.value)}
                  placeholder="e.g., 9:00 AM · Zion National Park"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Day
                  </label>
                  <select
                    value={activityType}
                    onChange={(e) =>
                      setActivityType(e.target.value as Activity["type"])
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                  >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={activityCategory}
                    onChange={(e) =>
                      setActivityCategory(
                        e.target.value as Activity["category"]
                      )
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                  >
                    <option value="sightseeing">Sightseeing</option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={activityLocation}
                  onChange={(e) => setActivityLocation(e.target.value)}
                  placeholder="Optional location details"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={activityDescription}
                  onChange={(e) => setActivityDescription(e.target.value)}
                  rows={3}
                  placeholder="Share details to remember"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Cost
                </label>
                <input
                  type="number"
                  min="0"
                  value={activityCost}
                  onChange={(e) => setActivityCost(e.target.value)}
                  placeholder="Optional cost"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={closeActivityModal}
                  className="flex-1 px-4 py-3 border border-secondary border-opacity-30 text-secondary rounded-lg hover:bg-secondary hover:bg-opacity-5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitActivity}
                  className="flex-1 btn-primary py-3 px-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={activityTitle.trim() === "" || isActivitySaving}
                >
                  {isActivitySaving ? "Saving..." : "Save Activity"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notes Modal */}
      {notesModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                📝 Day Notes · Day {notesModal.dayIndex + 1}
              </h2>
              <button
                onClick={closeNotesModal}
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

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <textarea
                  value={notesValue}
                  onChange={(e) => setNotesValue(e.target.value)}
                  rows={5}
                  placeholder="Add notes about this day..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                  autoFocus
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={closeNotesModal}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNotes}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isNotesSaving}
                >
                  {isNotesSaving ? "Saving..." : "Save Notes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expense Modal */}
      {expenseModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                💰 Add Expense · Day {expenseModal.dayIndex + 1}
              </h2>
              <button
                onClick={closeExpenseModal}
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

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <input
                  type="text"
                  value={expenseTitle}
                  onChange={(e) => setExpenseTitle(e.target.value)}
                  placeholder="e.g., Lunch at restaurant"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={expenseCategory}
                    onChange={(e) => setExpenseCategory(e.target.value as any)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80"
                  >
                    <option value="food">🍽️ Food</option>
                    <option value="transport">🚗 Transport</option>
                    <option value="accommodation">🏨 Accommodation</option>
                    <option value="shopping">🛍️ Shopping</option>
                    <option value="activities">🎭 Activities</option>
                    <option value="other">📌 Other</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={closeExpenseModal}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveExpense}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={
                    !expenseTitle.trim() ||
                    !expenseAmount.trim() ||
                    isExpenseSaving
                  }
                >
                  {isExpenseSaving ? "Saving..." : "Add Expense"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
