"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";
import { parseISO } from "date-fns";
import DashboardHeader from "@/components/DashboardHeader";
import VerticalItinerary from "@/components/VerticalItinerary";
import PackingList from "@/components/PackingList";
import ExpenseTracker from "@/components/ExpenseTracker";
import AccommodationManager from "@/components/AccommodationManager";
import TripOverview from "@/components/TripOverview";
import {
  Trip,
  ItineraryDay,
  Activity,
  ActivityInput,
  PackingItem,
  Expense,
  Accommodation,
} from "@/types/itinerary";

export default function ItineraryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const resolvedParams = use(params);
  const [trip, setTrip] = useState<Trip | null>(null);
  const [activeTab, setActiveTab] = useState<
    "overview" | "itinerary" | "packing" | "expenses" | "accommodation"
  >("itinerary");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  // Load trip data from database
  useEffect(() => {
    async function loadTrip() {
      if (!resolvedParams.id) return;

      try {
        const { getTrip } = await import("@/lib/trip-service");
        const tripData = await getTrip(resolvedParams.id);

        if (tripData) {
          // Apply any localStorage edits to the trip data
          try {
            const tripKey = `trip_${resolvedParams.id}_edits`;
            const savedEdits = JSON.parse(
              localStorage.getItem(tripKey) || "{}"
            );

            if (Object.keys(savedEdits).length > 0) {
              const updatedItinerary = [...tripData.itinerary];

              Object.entries(savedEdits).forEach(([key, edits]) => {
                if (key.startsWith("day_")) {
                  const dayIndex = parseInt(key.replace("day_", ""));
                  if (updatedItinerary[dayIndex] && typeof edits === "object") {
                    updatedItinerary[dayIndex] = {
                      ...updatedItinerary[dayIndex],
                      ...(edits as Partial<ItineraryDay>),
                    };
                  }
                }
              });

              tripData.itinerary = updatedItinerary;
            }
          } catch (error) {
            // Could not load edits from localStorage
          }

          setTrip(tripData);
        } else {
          // Trip not found, create empty structure
          const emptyTrip: Trip = {
            id: resolvedParams.id,
            title: "My Trip",
            destination: "Destination",
            start_date: new Date().toISOString().split("T")[0],
            end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
              .toISOString()
              .split("T")[0],
            description: "Plan your amazing journey",
            budget: 0,
            currency: "USD",
            travelers: 1,
            packingList: [],
            expenses: [],
            itinerary: [],
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
          setTrip(emptyTrip);
        }
      } catch (error) {
        // Fallback to empty trip
        const emptyTrip: Trip = {
          id: resolvedParams.id,
          title: "My Trip",
          destination: "Destination",
          start_date: new Date().toISOString().split("T")[0],
          end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split("T")[0],
          description: "Plan your amazing journey",
          budget: 0,
          currency: "USD",
          travelers: 1,
          packingList: [],
          expenses: [],
          itinerary: [],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
        setTrip(emptyTrip);
      }
    }

    if (user) {
      loadTrip();
    }
  }, [resolvedParams.id, user]);

  const updateTrip = async (updatedTrip: Partial<Trip>) => {
    if (trip) {
      setTrip({ ...trip, ...updatedTrip });

      // Save to database
      try {
        const { updateTrip: updateTripDB } = await import("@/lib/trip-service");
        await updateTripDB(trip.id, updatedTrip);
      } catch (error) {
        // Error updating trip
      }
    }
  };

  const addNewDay = () => {
    if (!trip) return;

    const newDayNumber = trip.itinerary.length + 1;
    const tripStartDate = parseISO(trip.start_date);
    const newDayDate = new Date(tripStartDate);
    newDayDate.setDate(tripStartDate.getDate() + newDayNumber - 1);

    const newDay: ItineraryDay = {
      day: newDayNumber,
      date: newDayDate.toISOString().split("T")[0],
      activities: [],
      notes: "",
      actualSpent: 0,
    };

    const updatedItinerary = [...trip.itinerary, newDay];
    updateTrip({ itinerary: updatedItinerary });
  };

  const tabs = [
    { id: "overview", name: "Overview", icon: "📊" },
    { id: "itinerary", name: "Itinerary", icon: "🗓️" },
    { id: "packing", name: "Packing", icon: "🧳" },
    { id: "expenses", name: "Expenses", icon: "💰" },
    { id: "accommodation", name: "Hotels", icon: "🏨" },
  ] as const;

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-secondary">Loading itinerary...</p>
        </div>
      </div>
    );
  }

  if (!user || !trip) {
    return null;
  }

  return (
    <div className="min-h-screen bg-bg">
      <DashboardHeader user={user} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-block glass px-6 py-2 rounded-full text-sm font-bold text-primary mb-4 shadow-md">
            {trip?.destination.toUpperCase()}
          </div>
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto shadow-md border border-secondary border-opacity-20">
            <h1 className="text-4xl font-bold text-primary tracking-wider mb-2">
              {trip?.title || "TRIP PLANNER"}
            </h1>
            <p className="text-secondary">{trip?.description}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="glass rounded-xl p-2 shadow-md border border-secondary border-opacity-20 max-w-4xl mx-auto">
            <nav className="flex space-x-2" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex-1 flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                    ${
                      activeTab === tab.id
                        ? "btn-primary text-white shadow-md transform scale-105"
                        : "text-secondary hover:text-primary hover:bg-accent hover:bg-opacity-10"
                    }
                  `}
                >
                  <span className="mr-2 text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === "overview" && trip && (
            <TripOverview trip={trip} onUpdateTrip={updateTrip} />
          )}

          {activeTab === "itinerary" && trip && (
            <VerticalItinerary
              itinerary={trip.itinerary}
              tripId={trip.id}
              onAddActivity={async (
                dayIndex: number,
                activityInput: ActivityInput
              ) => {
                try {
                  const { addActivity } = await import("@/lib/trip-service");
                  const created = await addActivity(
                    trip.id,
                    dayIndex + 1,
                    activityInput
                  );

                  const updatedItinerary = [...trip.itinerary];
                  if (!updatedItinerary[dayIndex].activities) {
                    updatedItinerary[dayIndex].activities = [];
                  }
                  updatedItinerary[dayIndex].activities.push(created);
                  updateTrip({ itinerary: updatedItinerary });
                } catch (error) {
                  // Error adding activity
                }
              }}
              onEditActivity={async (
                dayIndex: number,
                activityId: string,
                activityInput: ActivityInput
              ) => {
                try {
                  const { updateActivity } = await import("@/lib/trip-service");
                  const updated = await updateActivity(
                    trip.id,
                    dayIndex + 1,
                    activityId,
                    activityInput
                  );

                  const itineraryCopy = [...trip.itinerary];
                  const activityIndex = itineraryCopy[
                    dayIndex
                  ].activities.findIndex((a) => a.id === activityId);
                  if (activityIndex !== -1) {
                    itineraryCopy[dayIndex].activities[activityIndex] = updated;
                    updateTrip({ itinerary: itineraryCopy });
                  }
                } catch (error) {
                  // Error updating activity
                }
              }}
              onDeleteActivity={async (
                dayIndex: number,
                activityId: string
              ) => {
                try {
                  const { deleteActivity } = await import("@/lib/trip-service");
                  await deleteActivity(trip.id, dayIndex + 1, activityId);

                  const itineraryCopy = [...trip.itinerary];
                  itineraryCopy[dayIndex].activities = itineraryCopy[
                    dayIndex
                  ].activities.filter((a) => a.id !== activityId);
                  updateTrip({ itinerary: itineraryCopy });
                } catch (error) {
                  // Error deleting activity
                }
              }}
              onSaveNotes={async (dayIndex: number, notes: string) => {
                try {
                  const { updateTripDay } = await import("@/lib/trip-service");
                  await updateTripDay(trip.id, dayIndex + 1, { notes });

                  const updatedItinerary = [...trip.itinerary];
                  updatedItinerary[dayIndex] = {
                    ...updatedItinerary[dayIndex],
                    notes,
                  };
                  updateTrip({ itinerary: updatedItinerary });
                } catch (error) {
                  // Error saving notes
                }
              }}
              onSaveExpense={async (dayIndex: number, expense) => {
                try {
                  const expenseData = {
                    id: crypto.randomUUID(),
                    title: expense.title,
                    amount: expense.amount,
                    currency: expense.currency,
                    category: expense.category as any,
                    date: expense.date,
                    description: "",
                    shared: false,
                  };
                  const { addExpense, getTrip } = await import(
                    "@/lib/trip-service"
                  );
                  await addExpense(trip.id, expenseData);

                  // Refresh trip data to show updated expenses
                  const updatedTrip = await getTrip(trip.id);
                  if (updatedTrip) {
                    updateTrip(updatedTrip);
                  }
                } catch (error) {
                  // Error saving expense
                }
              }}
              onUpdateDay={async (
                dayIndex: number,
                updatedDay: Partial<ItineraryDay>
              ) => {
                // Update local state immediately for better UX
                const updatedItinerary = [...trip.itinerary];
                updatedItinerary[dayIndex] = {
                  ...updatedItinerary[dayIndex],
                  ...updatedDay,
                };
                updateTrip({ itinerary: updatedItinerary });

                // Save to database
                try {
                  const { updateTripDay } = await import("@/lib/trip-service");
                  await updateTripDay(trip.id, dayIndex + 1, updatedDay);
                } catch (error) {
                  // Error updating day in database
                }
              }}
              onAddDay={addNewDay}
              onDeleteDay={async (dayIndex: number) => {
                try {
                  const dayToDelete = trip.itinerary[dayIndex];

                  // Delete from database first
                  const { deleteTripDay } = await import("@/lib/trip-service");
                  await deleteTripDay(trip.id, dayToDelete.day);

                  // Remove from local state
                  const updatedItinerary = [...trip.itinerary];
                  updatedItinerary.splice(dayIndex, 1);

                  // Renumber the remaining days
                  const renumberedItinerary = updatedItinerary.map(
                    (day, index) => ({
                      ...day,
                      day: index + 1,
                    })
                  );

                  updateTrip({ itinerary: renumberedItinerary });
                } catch (error) {
                  // Error deleting day
                }
              }}
            />
          )}

          {activeTab === "packing" && trip && (
            <PackingList
              packingList={trip.packingList}
              onUpdatePackingList={async (packingList) => {
                setTrip({ ...trip, packingList });
                try {
                  const { savePackingList } = await import(
                    "@/lib/trip-service"
                  );
                  await savePackingList(trip.id, packingList);
                } catch (error) {
                  // Error saving packing list
                }
              }}
            />
          )}

          {activeTab === "expenses" && trip && (
            <ExpenseTracker
              tripId={trip.id}
              expenses={trip.expenses}
              budget={trip.budget || 0}
              currency={trip.currency}
              onUpdateExpenses={async (expenses) => {
                // Update local state immediately
                setTrip({ ...trip, expenses });
                
                // Note: Individual expenses are saved by the ExpenseTracker component
                // This just updates the local state for immediate UI feedback
              }}
            />
          )}

          {activeTab === "accommodation" && trip && (
            <AccommodationManager
              tripId={trip.id}
              itinerary={trip.itinerary}
              currency={trip.currency}
              onUpdateItinerary={(itinerary) => updateTrip({ itinerary })}
              onExpenseAdded={async () => {
                // Refresh trip data to show the new expense
                try {
                  const { getTrip } = await import("@/lib/trip-service");
                  const updatedTrip = await getTrip(trip.id);
                  if (updatedTrip) {
                    setTrip(updatedTrip);
                  }
                } catch (error) {
                  console.error('Error refreshing trip data:', error);
                }
              }}
            />
          )}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => router.push("/dashboard")}
            className="btn-primary px-8 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            ← Back to Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}
