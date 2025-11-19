"use client";

import { useState } from "react";
import { Expense } from "@/types/itinerary";
import { format, parseISO } from "date-fns";

interface ExpenseTrackerProps {
  tripId: string;
  expenses: Expense[];
  budget: number;
  currency: string;
  onUpdateExpenses: (expenses: Expense[]) => void;
}

export default function ExpenseTracker({
  tripId,
  expenses,
  budget,
  currency,
  onUpdateExpenses,
}: ExpenseTrackerProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: 0,
    category: "other" as Expense["category"],
    date: new Date().toISOString().split("T")[0],
    description: "",
  });
  const [filter, setFilter] = useState<"all" | Expense["category"]>("all");

  const categories = [
    {
      id: "accommodation",
      name: "Accommodation", 
      icon: "🏨",
      color: "text-primary",
      bgColor: "#fefae0",
    },
    {
      id: "food",
      name: "Food & Drinks",
      icon: "🍽️", 
      color: "text-secondary",
      bgColor: "#fefae0",
    },
    {
      id: "transport",
      name: "Transport",
      icon: "🚗",
      color: "text-accent",
      bgColor: "#fefae0",
    },
    {
      id: "activities",
      name: "Activities",
      icon: "🎯",
      color: "text-primary",
      bgColor: "#b1ab86",
    },
    {
      id: "shopping",
      name: "Shopping", 
      icon: "🛍️",
      color: "text-secondary",
      bgColor: "#b1ab86",
    },
    {
      id: "other",
      name: "Other",
      icon: "📦",
      color: "text-accent",
      bgColor: "#819067",
    },
  ];

  const getCategoryInfo = (categoryId: string) =>
    categories.find((cat) => cat.id === categoryId) ||
    categories[categories.length - 1];

  const addExpense = async () => {
    if (!newExpense.title.trim() || newExpense.amount <= 0 || isSubmitting) return;

    setIsSubmitting(true);

    const expense: Expense = {
      id: Date.now().toString(),
      ...newExpense,
      currency,
      title: newExpense.title.trim(),
      shared: false
    };

    // Save to database first to ensure persistence
    try {
      const { addExpense: saveExpense } = await import("@/lib/trip-service");
      await saveExpense(tripId, expense);
      console.log("Expense saved to database successfully");
      
      // Update local state only after successful database save
      onUpdateExpenses([...expenses, expense]);
      
      // Reset form
      setNewExpense({
        title: "",
        amount: 0,
        category: "other",
        date: new Date().toISOString().split("T")[0],
        description: "",
      });
      setShowAddForm(false);
    } catch (error) {
      console.error("Error saving expense:", error);
      // Show error to user
      alert("Failed to save expense. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeExpense = async (expenseId: string) => {
    // Remove from local state first
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    onUpdateExpenses(updatedExpenses);

    // Delete from database
    try {
      const { deleteExpense } = await import("@/lib/trip-service");
      await deleteExpense(expenseId);
      console.log("Expense deleted successfully");
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const filteredExpenses = expenses.filter(
    (expense) => filter === "all" || expense.category === filter
  );

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = budget - totalSpent;
  const spentPercentage = budget > 0 ? (totalSpent / budget) * 100 : 0;

  const expensesByCategory = categories
    .map((category) => ({
      ...category,
      total: expenses
        .filter((expense) => expense.category === category.id)
        .reduce((sum, expense) => sum + expense.amount, 0),
      count: expenses.filter((expense) => expense.category === category.id)
        .length,
    }))
    .filter((category) => category.count > 0);

  const getBudgetStatus = () => {
    if (spentPercentage > 100)
      return {
        color: "#0a400c",
        bg: "#0a400c", 
        status: "Over Budget!",
      };
    if (spentPercentage > 80)
      return {
        color: "#819067",
        bg: "#b1ab86",
        status: "Close to Limit",
      };
    return { color: "#819067", bg: "#819067", status: "On Track" };
  };

  const budgetStatus = getBudgetStatus();

  return (
    <div className="space-y-6">
      {/* Budget Overview */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Expense Tracker
            </h2>
            <p className="text-gray-600">
              Monitor your spending and stay on budget
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="btn-primary px-6 py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 border-2 border-primary hover:border-secondary"
            style={{
              background: 'linear-gradient(to right, #0A400C, #819067)',
              color: '#FEFAE0'
            }}
          >
            + Add Expense
          </button>
        </div>

        {/* Budget Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-accent border-opacity-30">
            <div className="text-3xl font-bold text-primary mb-1">
              {budget.toLocaleString()} {currency}
            </div>
            <div className="text-sm font-semibold text-gray-800">Total Budget</div>
          </div>
          <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-primary border-opacity-30">
            <div className="text-3xl font-bold text-primary mb-1">
              {totalSpent.toLocaleString()} {currency}
            </div>
            <div className="text-sm font-semibold text-gray-800">Total Spent</div>
          </div>
          <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-secondary border-opacity-30">
            <div
              className="text-3xl font-bold mb-1"
              style={{color: remaining >= 0 ? '#819067' : '#0a400c'}}
            >
              {remaining.toLocaleString()} {currency}
            </div>
            <div className="text-sm font-semibold text-gray-800">Remaining</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Budget Usage
            </span>
            <span className="text-sm font-bold bg-white/90 text-primary px-2 py-1 rounded-full border border-primary border-opacity-30 shadow-sm backdrop-blur-sm">
              {Math.round(spentPercentage)}% • {budgetStatus.status}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${budgetStatus.bg}`}
              style={{ width: `${Math.min(spentPercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {expensesByCategory.map((category) => (
            <div
              key={category.id}
              className="text-center p-3 bg-gray-50 rounded-xl"
            >
              <div className="text-2xl mb-1">{category.icon}</div>
              <div className="text-sm font-medium text-gray-900">
                {category.total.toLocaleString()} {currency}
              </div>
              <div className="text-xs text-gray-600">{category.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Expense Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md w-full p-6 border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Add Expense</h3>
              <button
                onClick={() => setShowAddForm(false)}
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
              <input
                type="text"
                value={newExpense.title}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, title: e.target.value })
                }
                placeholder="Expense title"
                className="w-full px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />

              <div className="flex space-x-3">
                <input
                  type="number"
                  value={newExpense.amount || ""}
                  onChange={(e) =>
                    setNewExpense({
                      ...newExpense,
                      amount: parseFloat(e.target.value) || 0,
                    })
                  }
                  placeholder="Amount"
                  min="0"
                  step="0.01"
                  className="flex-1 px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div className="px-4 py-3 bg-gray-100 rounded-xl text-gray-700 font-medium">
                  {currency}
                </div>
              </div>

              <select
                value={newExpense.category}
                onChange={(e) =>
                  setNewExpense({
                    ...newExpense,
                    category: e.target.value as Expense["category"],
                  })
                }
                className="w-full px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>

              <input
                type="date"
                value={newExpense.date}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, date: e.target.value })
                }
                className="w-full px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />

              <textarea
                value={newExpense.description}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, description: e.target.value })
                }
                placeholder="Description (optional)"
                rows={2}
                className="w-full px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-4 py-3 rounded-xl font-semibold transition-colors"
                  style={{
                    border: '2px solid #819067',
                    color: '#0a400c',
                    backgroundColor: '#fefae0'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#b1ab86';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#fefae0';
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={addExpense}
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200"
                  style={{
                    background: isSubmitting ? '#819067' : 'linear-gradient(to right, #0A400C, #819067)',
                    color: '#FEFAE0',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) (e.target as HTMLElement).style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) (e.target as HTMLElement).style.opacity = '1';
                  }}
                >
                  {isSubmitting ? 'Saving...' : 'Add Expense'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Buttons */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              filter === "all"
                ? "text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-200"
            }`}
            style={{
              backgroundColor: filter === "all" ? "#0a400c" : "#fefae0",
            }}
          >
            All Expenses ({expenses.length})
          </button>
          {categories.map((category) => {
            const count = expenses.filter(
              (expense) => expense.category === category.id
            ).length;
            if (count === 0) return null;

            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id as Expense["category"])}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filter === category.id
                    ? "text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                style={{
                  backgroundColor: filter === category.id ? "#819067" : "#fefae0",
                }}
              >
                {category.icon} {category.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Expenses List */}
      <div className="space-y-4">
        {filteredExpenses.length > 0 ? (
          filteredExpenses
            .sort(
              (a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime()
            )
            .map((expense) => {
              const categoryInfo = getCategoryInfo(expense.category);
              return (
                <div
                  key={expense.id}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-200"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{categoryInfo.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {expense.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`}
                            style={{
                              backgroundColor: categoryInfo.bgColor,
                              color: categoryInfo.color === 'text-primary' ? '#0a400c' : 
                                     categoryInfo.color === 'text-secondary' ? '#819067' : '#b1ab86'
                            }}
                          >
                            {categoryInfo.name}
                          </span>
                          <span className="text-sm text-gray-600">
                            {format(parseISO(expense.date), "MMM d, yyyy")}
                          </span>
                        </div>
                        {expense.description && (
                          <p className="text-sm text-gray-600 mt-2">
                            {expense.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {expense.amount.toLocaleString()} {expense.currency}
                        </div>
                      </div>
                      <button
                        onClick={() => removeExpense(expense.id)}
                        className="p-2 text-gray-400 rounded-lg transition-colors"
                        style={{
                          color: '#b1ab86'
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.color = '#0a400c';
                          (e.target as HTMLElement).style.backgroundColor = '#fefae0';
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.color = '#b1ab86';
                          (e.target as HTMLElement).style.backgroundColor = 'transparent';
                        }}
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
              <span className="text-4xl">💰</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No expenses found
            </h3>
            <p className="text-gray-600 mb-6">
              {filter === "all"
                ? "Start tracking your trip expenses"
                : `No ${getCategoryInfo(
                    filter
                  ).name.toLowerCase()} expenses to show`}
            </p>
            {filter === "all" && (
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-200"
              >
                Add Your First Expense
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
