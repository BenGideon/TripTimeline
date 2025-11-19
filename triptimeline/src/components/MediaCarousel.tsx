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
    <div className="relative w-full rounded-lg overflow-hidden" style={{backgroundColor: '#0A400C'}}>
      {/* Main Image/Video */}
      <div
        className="relative w-full aspect-video" style={{backgroundColor: '#0A400C'}}
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
            className="absolute top-4 left-4 text-white p-2 rounded-full transition-all z-10 disabled:opacity-50"
            style={{backgroundColor: 'rgba(10, 64, 12, 0.8)'}}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(129, 144, 103, 0.9)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(10, 64, 12, 0.8)'}
            title="Delete this photo/video"
          >
            🗑️
          </button>
        )}
      </div>

      {/* Thumbnail Strip */}
      {totalMedia > 1 && (
        <div className="flex gap-2 p-3 overflow-x-auto" style={{backgroundColor: '#819067'}}>
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
                <div className="w-full h-full flex items-center justify-center" style={{backgroundColor: '#B1AB86'}}>
                  <span className="text-xl" style={{color: '#0A400C'}}>▶</span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
