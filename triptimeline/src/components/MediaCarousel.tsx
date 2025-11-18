'use client';

import { useState } from 'react';

interface MediaCarouselProps {
  media: any[];
  dayIndex: number;
  currentIndex: number;
  onIndexChange: (dayIndex: number, index: number) => void;
  onDelete?: (mediaId: string) => Promise<void>;
}

export default function MediaCarousel({
  media,
  dayIndex,
  currentIndex,
  onIndexChange,
  onDelete,
}: MediaCarouselProps) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  if (!media || media.length === 0) {
    return null;
  }

  const currentMedia = media[currentIndex || 0];
  const totalMedia = media.length;

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : totalMedia - 1;
    onIndexChange(dayIndex, newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < totalMedia - 1 ? currentIndex + 1 : 0;
    onIndexChange(dayIndex, newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    if (touchEnd - touchStart > 50) {
      handlePrevious();
    }
  };

  const handleDelete = async () => {
    if (!onDelete || !currentMedia) return;
    
    if (confirm('Delete this photo/video?')) {
      setIsDeleting(true);
      try {
        await onDelete(currentMedia.id);
      } catch (error) {
        console.error('Error deleting media:', error);
        alert('Failed to delete media');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden">
      {/* Main Image/Video */}
      <div
        className="relative w-full aspect-video bg-black"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.url}
            alt={currentMedia.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={currentMedia.url}
            className="w-full h-full object-cover"
            controls
          />
        )}

        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all z-10"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all z-10"
        >
          ›
        </button>

        {/* Counter */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {totalMedia}
        </div>

        {/* Delete Button */}
        {onDelete && (
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="absolute top-4 left-4 bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-full transition-all z-10 disabled:opacity-50"
            title="Delete this photo/video"
          >
            🗑️
          </button>
        )}
      </div>

      {/* Thumbnail Strip */}
      {totalMedia > 1 && (
        <div className="flex gap-2 p-3 bg-gray-800 overflow-x-auto">
          {media.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onIndexChange(dayIndex, index)}
              className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-2 ring-white opacity-100'
                  : 'opacity-60 hover:opacity-80'
              }`}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-white text-xl">▶</span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
