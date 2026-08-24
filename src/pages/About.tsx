import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Dumbbell, Users, Target, Award } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { siteImages, handleImageError } from '@/lib/images';
import { PageTransition } from '@/components/ui/PageTransition';

interface AboutProps {
  onOpenEnquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiry }) => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Iconic Fitness — Our Philosophy & Standards</title>
        <meta name="description" content="Discover the story of Iconic Fitness. Founded to elevate physical training beyond generic gym franchises through architectural design, biomechanics, and discipline." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-dark-950 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={siteImages.about.hero}
            alt="Iconic Facility Architecture"
            onError={handleImageError}
            className="w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
            // ARCHITECTURAL IDENTITY
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
            OUR STORY. OUR STANDARDS.
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Iconic Fitness was established to create a sanctuary where training intensity meets architectural elegance. No broken equipment. No standard gym tropes.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
                // WHY WE EXIST
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                BUILT TO ELEVATE PHYSICAL POTENTIAL.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                In 2016, founder Marcus Rowell observed that commercial fitness centers had degraded into low-cost volume traps—crowded floors, malfunctioning machines, and generic workout routines.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Iconic Fitness was engineered as the antidote: a space constructed specifically for high performers, business leaders, and dedicated lifters who take physical development seriously.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10 font-mono text-xs text-zinc-300">
                <div className="p-4 bg-dark-850 border border-white/5 rounded-sm">
                  <span className="font-display font-bold text-2xl text-accent block">2016</span>
                  <span>ESTABLISHED</span>
                </div>
                <div className="p-4 bg-dark-850 border border-white/5 rounded-sm">
                  <span className="font-display font-bold text-2xl text-white block">12,000</span>
                  <span>SQ.FT FACILITY</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 sm:h-[480px] rounded-md overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl">
              <img
                src={siteImages.about.philosophy}
                alt="Iconic Philosophy"
                onError={handleImageError}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-dark-950 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
              // THE ICONIC STANDARD
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              WHAT SEPARATES ICONIC FITNESS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-dark-850 border border-white/10 rounded-md space-y-4">
              <div className="w-12 h-12 rounded-sm bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">ELEIKO & HAMMER STRENGTH</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every barbell, weight plate, and pin-loaded station is imported from world-renowned strength manufacturers engineered for optimal biomechanics.
              </p>
            </div>

            <div className="p-8 bg-dark-850 border border-white/10 rounded-md space-y-4">
              <div className="w-12 h-12 rounded-sm bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">CAPACITATED MEMBERSHIP</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We strictly limit active memberships so you never wait for a squat rack or dumbbell array during peak hours.
              </p>
            </div>

            <div className="p-8 bg-dark-850 border border-white/10 rounded-md space-y-4">
              <div className="w-12 h-12 rounded-sm bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">MASTER LEVEL COACHING</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Our coaching roster consists exclusively of CSCS, USAW, and ISSN certified specialists with a minimum of 7+ years of experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-dark-900 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            EXPERIENCE THE FACILITY IN PERSON.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Book your private tour and meet our performance directors.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-4 bg-accent text-dark-950 font-display font-bold text-xs tracking-widest rounded-sm hover:bg-white transition-colors inline-flex items-center space-x-2"
          >
            <span>SCHEDULE PRIVATE TOUR</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </PageTransition>
  );
};
