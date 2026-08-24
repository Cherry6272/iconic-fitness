import React, { useState, useRef, useCallback } from 'react';
import { handleImageError } from '@/lib/images';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  subtitle: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "START (DAY 1)",
  afterLabel = "TRANSFORMATION (MONTH 12)",
  title,
  subtitle
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  return (
    <div className="w-full bg-dark-850 border border-white/10 rounded-md overflow-hidden p-4 sm:p-6 shadow-2xl">
      <div className="mb-4">
        <h4 className="font-display font-bold text-xl text-white tracking-wide">{title}</h4>
        <p className="text-xs font-mono text-accent">{subtitle}</p>
      </div>

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        data-cursor-text="DRAG"
        className="relative w-full h-[380px] sm:h-[480px] select-none cursor-ew-resize rounded-sm overflow-hidden bg-zinc-950"
      >
        {/* After Image (Full Layer) */}
        <img
          src={afterImage}
          alt="After Transformation"
          onError={handleImageError}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-accent text-dark-950 text-[10px] font-mono font-bold tracking-widest uppercase rounded-sm shadow-md">
          {afterLabel}
        </span>

        {/* Before Image (Clipped Layer) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before Transformation"
            onError={handleImageError}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-zinc-900/90 text-zinc-300 text-[10px] font-mono font-bold tracking-widest uppercase border border-white/20 rounded-sm">
            {beforeLabel}
          </span>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-accent shadow-[0_0_12px_#CCFF00] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle Circle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-dark-950 border-2 border-accent flex items-center justify-center shadow-2xl text-accent">
            <span className="text-xs font-bold font-mono">↔</span>
          </div>
        </div>
      </div>
    </div>
  );
};
