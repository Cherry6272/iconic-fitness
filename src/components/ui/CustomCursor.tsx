import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch primary
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if mouse target or parent has custom cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorElement = target.closest('[data-cursor-text]') as HTMLElement | null;
      const isInteractive = target.closest('a, button, input, select, textarea, [role="button"]');

      if (cursorElement) {
        setCursorText(cursorElement.getAttribute('data-cursor-text') || '');
        setIsHovered(true);
      } else if (isInteractive) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center border border-accent/70 bg-accent/10 backdrop-blur-[1px]"
        animate={{
          x: position.x - (isHovered ? (cursorText ? 36 : 24) : 12),
          y: position.y - (isHovered ? (cursorText ? 36 : 24) : 12),
          width: isHovered ? (cursorText ? 72 : 48) : 24,
          height: isHovered ? (cursorText ? 72 : 48) : 24,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.2 }}
      >
        {cursorText && (
          <span className="text-[10px] font-display font-extrabold tracking-widest text-dark-950 uppercase select-none px-1 text-center">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_#CCFF00]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHovered && cursorText ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.1 }}
      />
    </>
  );
};
