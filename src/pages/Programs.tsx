import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Zap, Check, Clock, ShieldAlert, X } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import type { Program } from '@/lib/config';
import { siteImages, handleImageError } from '@/lib/images';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { PageTransition } from '@/components/ui/PageTransition';

interface ProgramsProps {
  onOpenEnquiry: (programTitle?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenEnquiry }) => {
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  return (
    <PageTransition>
      <Helmet>
        <title>Training Programs — Iconic Fitness</title>
        <meta name="description" content="Explore Iconic Fitness training programs: Strength & Conditioning, Muscle Hypertrophy, 1-on-1 Elite Coaching, Metabolic Fat Loss, and Functional Athleticism." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-dark-950 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={siteImages.facility.strengthZone}
            alt="Programs Hero"
            onError={handleImageError}
            className="w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
            // ARCHITECTURAL PROGRAMMING
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
            TRAIN WITH PURPOSE.
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Every movement has a scientific intent. Choose the performance protocol aligned with your ambition level.
          </p>
        </div>
      </section>

      {/* Programs Hub Grid */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.programs.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                onSelect={(prog) => setActiveModalProgram(prog)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Modal Dialog */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/90 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-dark-850 border border-white/10 rounded-md shadow-2xl p-6 sm:p-8 my-8 overflow-hidden">
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="relative h-64 rounded-sm overflow-hidden bg-zinc-950">
                <img
                  src={activeModalProgram.image}
                  alt={activeModalProgram.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-850 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest block">
                    {activeModalProgram.duration} // {activeModalProgram.intensity}
                  </span>
                  <h3 className="font-display text-3xl font-bold text-white">
                    {activeModalProgram.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <p className="font-mono text-accent">{activeModalProgram.subtitle}</p>
                <p className="text-zinc-400 leading-relaxed">{activeModalProgram.fullDesc}</p>

                <div className="p-4 bg-zinc-900 border border-white/5 rounded-sm space-y-2">
                  <span className="font-mono text-white text-xs font-bold block uppercase">WHO THIS PROGRAM IS FOR:</span>
                  <p className="text-xs text-zinc-400">{activeModalProgram.forWho}</p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-white text-xs font-bold block uppercase">// KEY PHYSIOLOGICAL ADAPTATIONS:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProgram.benefits.map((b, idx) => (
                      <div key={idx} className="p-2.5 bg-dark-950 border border-white/5 text-xs text-zinc-300 flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-accent" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const title = activeModalProgram.title;
                    setActiveModalProgram(null);
                    onOpenEnquiry(title);
                  }}
                  className="w-full py-4 bg-accent text-dark-950 font-display font-bold text-xs tracking-widest rounded-sm hover:bg-white transition-colors flex items-center justify-center space-x-2"
                >
                  <span>ENQUIRE FOR {activeModalProgram.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
};
