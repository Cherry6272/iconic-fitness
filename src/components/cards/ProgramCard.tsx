import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Clock, ShieldAlert } from 'lucide-react';
import type { Program } from '@/lib/config';
import { handleImageError } from '@/lib/images';

interface ProgramCardProps {
  program: Program;
  onSelect: (program: Program) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-dark-850 border border-white/10 rounded-md overflow-hidden flex flex-col justify-between hover:border-accent/50 transition-colors duration-300 shadow-xl"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-zinc-950">
        <img
          src={program.image}
          alt={program.title}
          onError={handleImageError}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-850 via-dark-850/40 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-2.5 py-1 bg-dark-950/80 backdrop-blur-md text-accent border border-accent/30 text-[10px] font-mono font-bold tracking-widest rounded-sm">
            {program.duration}
          </span>
          <span className="px-2.5 py-1 bg-zinc-900/90 text-zinc-300 text-[10px] font-mono font-bold tracking-wider rounded-sm flex items-center space-x-1">
            <Zap className="w-3 h-3 text-accent" />
            <span>{program.intensity}</span>
          </span>
        </div>

        <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-2xl text-white group-hover:text-accent transition-colors">
          {program.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs font-mono text-accent mb-2 uppercase tracking-wide">
            {program.subtitle}
          </p>
          <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
            {program.shortDesc}
          </p>
        </div>

        {/* Benefits list */}
        <div className="pt-2 border-t border-white/5 space-y-2">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
            // KEY TARGETS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {program.benefits.slice(0, 3).map((benefit, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-zinc-900 text-zinc-300 text-[10px] rounded-sm font-sans"
              >
                ✓ {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Card CTA */}
        <button
          onClick={() => onSelect(program)}
          data-cursor-text="EXPLORE"
          className="w-full py-3 bg-zinc-900 hover:bg-accent hover:text-dark-950 text-zinc-200 border border-white/10 font-display text-xs font-bold tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
        >
          <span>PROGRAM OVERVIEW</span>
          <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
