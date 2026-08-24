import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Award, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { siteImages, handleImageError } from '@/lib/images';
import { TrainerCard } from '@/components/cards/TrainerCard';
import { PageTransition } from '@/components/ui/PageTransition';

interface TrainersProps {
  onOpenEnquiry: (trainerName?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenEnquiry }) => {
  return (
    <PageTransition>
      <Helmet>
        <title>Master Coaches & Personal Trainers — Iconic Fitness</title>
        <meta name="description" content="Meet the elite Master Coaches at Iconic Fitness. CSCS, USAW, and ISSN certified trainers committed to your physical transformation." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-dark-950 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={siteImages.about.hero}
            alt="Trainers Hero"
            onError={handleImageError}
            className="w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
            // PERFORMANCE FACULTY
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
            THE MASTER COACHES.
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Coaching without dogmatism. Backed by sports science, biomechanical credentials, and proven physical results.
          </p>
        </div>
      </section>

      {/* Trainer Roster Grid */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.trainers.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                trainer={trainer}
                onBookTrainer={(t) => onOpenEnquiry(`1-on-1 Coaching with ${t.name}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Standards */}
      <section className="py-24 bg-dark-950 border-t border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
            // THE COACHING CODE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            NO BRO SCIENCE. ZERO EGOS.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Every Iconic coach undergoes rigorous biomechanical training audits annually. We build customized training cycles tailored around your bone structure, metabolic capacity, and joint health.
          </p>
          <button
            onClick={() => onOpenEnquiry("1-on-1 Master Coaching Consultation")}
            className="px-8 py-4 bg-accent text-dark-950 font-display font-bold text-xs tracking-widest rounded-sm hover:bg-white transition-colors inline-flex items-center space-x-2"
          >
            <span>APPLY FOR 1-ON-1 COACHING</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </PageTransition>
  );
};
