import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { handleImageError } from '@/lib/images';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative bg-dark-850 border border-white/10 rounded-md p-8 sm:p-12 shadow-2xl overflow-hidden">
      {/* Background Accent Quote Icon */}
      <Quote className="absolute -top-6 -right-6 w-48 h-48 text-white/[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Massive Statement */}
            <blockquote className="font-display font-bold text-2xl sm:text-4xl text-white leading-tight">
              "{current.quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <img
                  src={current.image}
                  alt={current.author}
                  onError={handleImageError}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <h4 className="font-display font-bold text-lg text-white">
                    {current.author}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400">
                    {current.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs font-mono">
                <div className="px-3 py-1.5 bg-zinc-900 border border-accent/30 text-accent rounded-sm">
                  ★ {current.achievement}
                </div>
                <div className="px-3 py-1.5 bg-zinc-900 border border-white/10 text-zinc-400 rounded-sm">
                  {current.duration}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2 font-mono text-xs text-zinc-500">
            <span className="text-accent font-bold">0{currentIndex + 1}</span>
            <span>/</span>
            <span>0{testimonials.length}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-zinc-900 border border-white/10 hover:border-accent text-zinc-300 hover:text-accent rounded-sm transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-zinc-900 border border-white/10 hover:border-accent text-zinc-300 hover:text-accent rounded-sm transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
