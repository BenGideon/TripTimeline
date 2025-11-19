'use client';

import { useState, useRef, useEffect } from 'react';
import { ItineraryDay, Activity } from '@/types/itinerary';

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
  onUpdateActivity: (dayIndex: number, activity: Activity) => void;
}

export default function ItineraryTimeline({ itinerary, onUpdateActivity }: ItineraryTimelineProps) {
  const [editingActivity, setEditingActivity] = useState<{dayIndex: number, activityIndex: number} | null>(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingTime, setEditingTime] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingActivity && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingActivity]);

  const getActivityCardColor = (day: number, position: 'top' | 'bottom') => {
    const topColors = [
      'bg-accent bg-opacity-30 border-accent shadow-accent/20', // Day 1
      'bg-secondary bg-opacity-30 border-secondary shadow-secondary/20', // Day 2
      'bg-primary bg-opacity-20 border-primary shadow-primary/20', // Day 3
      'bg-accent bg-opacity-40 border-accent shadow-accent/30', // Day 4
      'bg-secondary bg-opacity-40 border-secondary shadow-secondary/30', // Day 5
      'bg-primary bg-opacity-30 border-primary shadow-primary/30', // Day 6
      'bg-accent bg-opacity-50 border-accent shadow-accent/40', // Day 7
    ];
    
    const bottomColors = [
      'bg-secondary bg-opacity-30 border-secondary shadow-secondary/20', // Day 1
      'bg-primary bg-opacity-20 border-primary shadow-primary/20', // Day 2
      'bg-accent bg-opacity-30 border-accent shadow-accent/20', // Day 3
      'bg-secondary bg-opacity-40 border-secondary shadow-secondary/30', // Day 4
      'bg-primary bg-opacity-30 border-primary shadow-primary/30', // Day 5
      'bg-accent bg-opacity-40 border-accent shadow-accent/30', // Day 6
      'bg-secondary bg-opacity-50 border-secondary shadow-secondary/40', // Day 7
    ];
    
    return position === 'top' ? topColors[(day - 1) % topColors.length] : bottomColors[(day - 1) % bottomColors.length];
  };

  const getClipColor = (day: number) => {
    const colors = [
      'text-primary', // Day 1
      'text-secondary', // Day 2
      'text-accent', // Day 3
      'text-primary', // Day 4
      'text-secondary', // Day 5
      'text-accent', // Day 6
      'text-primary', // Day 7
    ];
    return colors[(day - 1) % colors.length];
  };

  const getTimelineDotColor = (day: number) => {
    const colors = [
      'bg-primary border-primary', // Day 1
      'bg-secondary border-secondary', // Day 2
      'bg-accent border-accent', // Day 3
      'bg-primary border-primary', // Day 4
      'bg-secondary border-secondary', // Day 5
      'bg-accent border-accent', // Day 6
      'bg-primary border-primary', // Day 7
    ];
    return colors[(day - 1) % colors.length];
  };

  const handleActivityClick = (dayIndex: number, activityIndex: number, activity: Activity) => {
    setEditingActivity({ dayIndex, activityIndex });
    setEditingTitle(activity.title);
    setEditingTime(activity.time);
  };

  const handleSaveActivity = () => {
    if (editingActivity) {
      const updatedActivity: Activity = {
        id: Date.now().toString(),
        title: editingTitle,
        time: editingTime,
        type: 'morning',
        category: 'sightseeing'
      };
      onUpdateActivity(editingActivity.dayIndex, updatedActivity);
      setEditingActivity(null);
      setEditingTitle('');
      setEditingTime('');
    }
  };

  const handleAddActivity = (dayIndex: number, position: 'top' | 'bottom') => {
    setEditingActivity({ dayIndex, activityIndex: -1 });
    setEditingTitle('');
    setEditingTime('');
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform -translate-y-1/2 z-0 rounded-full shadow-sm">
        <div className="absolute left-0 w-3 h-3 bg-primary transform -translate-y-1/2 -translate-x-1 rotate-45 shadow-md"></div>
        <div className="absolute right-0 w-0 h-0 border-l-[12px] border-l-primary border-t-[6px] border-b-[6px] border-t-transparent border-b-transparent transform translate-x-2 shadow-md"></div>
      </div>

      {/* Days Container */}
      <div className="relative z-10 grid grid-cols-7 gap-3 px-4">
        {itinerary.map((dayData, dayIndex) => (
          <div key={dayData.day} className="flex flex-col items-center">
            {/* Activity Cards Above Timeline */}
            <div className="mb-6 min-h-[180px] flex flex-col justify-end space-y-3">
              {dayData.activities.length > 0 ? (
                dayData.activities.slice(0, 1).map((activity, actIndex) => (
                  <div key={activity.id} className="relative">
                    {/* Paperclip */}
                    <div className={`absolute -top-3 -right-2 text-xl ${getClipColor(dayData.day)} transform rotate-12 z-10`}>
                      📎
                    </div>
                    
                    {/* Sticky Note Card */}
                    <div 
                      className={`
                        ${getActivityCardColor(dayData.day, 'top')}
                        border-2 rounded-xl p-4 shadow-lg transform rotate-1 hover:rotate-0 
                        transition-all duration-300 cursor-pointer min-h-[120px] hover:scale-105
                        hover:shadow-2xl hover:border-primary relative backdrop-blur-sm
                      `}
                      onClick={() => handleActivityClick(dayIndex, actIndex, activity)}
                    >
                      {editingActivity?.dayIndex === dayIndex && editingActivity?.activityIndex === actIndex ? (
                        <div className="space-y-2">
                          <input
                            ref={inputRef}
                            value={editingTitle}
                            onChange={(e) => setEditingTitle(e.target.value)}
                            className="w-full text-center font-bold text-gray-800 text-sm bg-transparent border-none outline-none placeholder-gray-500"
                            placeholder="Activity title"
                            onKeyPress={(e) => e.key === 'Enter' && handleSaveActivity()}
                          />
                          <input
                            value={editingTime}
                            onChange={(e) => setEditingTime(e.target.value)}
                            className="w-full text-center text-xs text-gray-700 bg-transparent border-none outline-none placeholder-gray-500"
                            placeholder="Time and location"
                            onKeyPress={(e) => e.key === 'Enter' && handleSaveActivity()}
                          />
                          <div className="flex space-x-2 mt-3">
                            <button
                              onClick={handleSaveActivity}
                              className="flex-1 bg-primary text-white text-xs py-1 px-2 rounded-md hover:bg-secondary transition-colors shadow-sm hover:shadow-md"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingActivity(null)}
                              className="flex-1 bg-accent text-gray-800 text-xs py-1 px-2 rounded-md hover:bg-secondary hover:text-white transition-colors shadow-sm hover:shadow-md"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center h-full flex flex-col justify-center">
                          <h3 className="font-bold text-gray-800 text-sm mb-2 uppercase tracking-wide">
                            {activity.title}
                          </h3>
                          <p className="text-xs text-gray-700 font-medium leading-relaxed">
                            {activity.time}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="relative">
                  <div className={`absolute -top-3 -right-2 text-xl ${getClipColor(dayData.day)} transform rotate-12 z-10 opacity-60`}>
                    📎
                  </div>
                  <div 
                    className={`
                      ${getActivityCardColor(dayData.day, 'top')}
                      border-2 border-dashed rounded-xl p-4 shadow-lg transform rotate-1 
                      hover:rotate-0 transition-all duration-300 cursor-pointer min-h-[120px]
                      hover:shadow-2xl hover:border-primary hover:border-solid relative opacity-40 hover:opacity-90 backdrop-blur-sm hover:scale-105
                    `}
                    onClick={() => handleAddActivity(dayIndex, 'top')}
                  >
                    <div className="text-center flex items-center justify-center h-full">
                      <div>
                        <div className="text-3xl mb-2 text-primary opacity-60 hover:opacity-100 transition-opacity">+</div>
                        <p className="text-xs text-primary font-medium opacity-60 hover:opacity-100 transition-opacity">
                          Add Activity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Day Label Above Timeline */}
            <div className="mb-3 bg-white/90 backdrop-blur-sm border-2 border-accent rounded-xl px-4 py-2 shadow-lg hover:shadow-xl hover:border-primary transition-all duration-200 hover:scale-105">
              <span className="text-sm font-bold text-primary tracking-wide">
                DAY {dayData.day}
              </span>
            </div>

            {/* Timeline Dot */}
            <div className={`w-5 h-5 ${getTimelineDotColor(dayData.day)} rounded-full border-3 border-white shadow-lg z-20 hover:scale-125 hover:shadow-xl transition-all duration-200 cursor-pointer`}></div>

            {/* Day Label Below Timeline */}
            <div className="mt-3 bg-white/90 backdrop-blur-sm border-2 border-accent rounded-xl px-4 py-2 shadow-lg hover:shadow-xl hover:border-primary transition-all duration-200 hover:scale-105">
              <span className="text-sm font-bold text-primary tracking-wide">
                DAY {dayData.day}
              </span>
            </div>

            {/* Activity Cards Below Timeline */}
            <div className="mt-6 min-h-[180px] flex flex-col justify-start space-y-3">
              <div className="relative">
                <div className={`absolute -top-3 -right-2 text-xl ${getClipColor(dayData.day)} transform rotate-12 z-10 opacity-60`}>
                  📎
                </div>
                <div 
                  className={`
                    ${getActivityCardColor(dayData.day, 'bottom')}
                    border-2 border-dashed rounded-xl p-4 shadow-lg transform -rotate-1 
                    hover:rotate-0 transition-all duration-300 cursor-pointer min-h-[120px]
                    hover:shadow-2xl hover:border-primary hover:border-solid relative opacity-40 hover:opacity-90 backdrop-blur-sm hover:scale-105
                  `}
                  onClick={() => handleAddActivity(dayIndex, 'bottom')}
                >
                  <div className="text-center flex items-center justify-center h-full">
                    <div>
                      <div className="text-3xl mb-2 text-primary opacity-60 hover:opacity-100 transition-opacity">+</div>
                      <p className="text-xs text-primary font-medium opacity-60 hover:opacity-100 transition-opacity">
                        Add Activity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline Edit Modal */}
      {editingActivity && editingActivity.activityIndex === -1 && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md w-full p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Add Activity - Day {editingActivity.dayIndex + 1}</h2>
              <button
                onClick={() => setEditingActivity(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <input
                ref={inputRef}
                type="text"
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
                placeholder="Activity title (e.g., MORNING)"
                className="w-full px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
              />
              <input
                type="text"
                value={editingTime}
                onChange={(e) => setEditingTime(e.target.value)}
                placeholder="Time and location (e.g., 10 AM - DUPONT FOREST)"
                className="w-full px-4 py-3 border border-secondary border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
              />
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setEditingActivity(null)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveActivity}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Add Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
