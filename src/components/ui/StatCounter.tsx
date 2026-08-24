import React from 'react';
import { motion } from 'framer-motion';

interface StatCounterProps {
  value: string;
  label: string;
  index: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-6 bg-dark-850/80 border border-white/10 rounded-md relative overflow-hidden group hover:border-accent/50 transition-colors"
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full pointer-events-none group-hover:bg-accent/10 transition-colors" />

      <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight group-hover:text-accent transition-colors mb-2">
        {value}
      </div>

      <div className="text-xs font-mono tracking-wider text-zinc-400 uppercase">
        {label}
      </div>
    </motion.div>
  );
};
