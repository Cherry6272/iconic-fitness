import React from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronRight, CheckCircle } from 'lucide-react';
import type { Trainer } from '@/lib/config';
import { handleImageError } from '@/lib/images';

interface TrainerCardProps {
  trainer: Trainer;
  onBookTrainer: (trainer: Trainer) => void;
}

export const TrainerCard: React.FC<TrainerCardProps> = ({ trainer, onBookTrainer }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-dark-850 border border-white/10 rounded-md overflow-hidden flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xl"
    >
      {/* Portrait Image */}
      <div className="relative h-80 sm:h-96 overflow-hidden bg-zinc-950">
        <img
          src={trainer.image}
          alt={trainer.name}
          onError={handleImageError}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-850 via-dark-850/20 to-transparent" />
        
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 bg-dark-950/80 backdrop-blur-md text-accent border border-accent/30 text-[10px] font-mono font-bold tracking-widest uppercase rounded-sm">
            {trainer.experience}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 space-y-1">
          <span className="text-[10px] font-mono text-accent uppercase tracking-widest block">
            {trainer.role}
          </span>
          <h3 className="font-display font-bold text-2xl text-white tracking-wide">
            {trainer.name}
          </h3>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="p-3 bg-zinc-900/90 border border-white/5 rounded-sm">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              SPECIALIZATION
            </span>
            <p className="text-xs font-semibold text-zinc-200">
              {trainer.specialty}
            </p>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            {trainer.bio}
          </p>

          <div className="pt-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1.5">
              CREDENTIALS & ACCREDITATIONS
            </span>
            <div className="flex flex-wrap gap-1.5">
              {trainer.certifications.map((cert, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-dark-950 border border-white/10 text-zinc-300 text-[10px] font-mono rounded-sm flex items-center space-x-1"
                >
                  <Award className="w-3 h-3 text-accent" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => onBookTrainer(trainer)}
          data-cursor-text="BOOK"
          className="w-full py-3 bg-accent text-dark-950 font-display text-xs font-bold tracking-widest rounded-sm hover:bg-white transition-colors duration-300 flex items-center justify-center space-x-2"
        >
          <span>BOOK 1-ON-1 SESSION</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};
