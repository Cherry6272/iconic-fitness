import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Trophy, Flame, Activity } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { siteImages } from '@/lib/images';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { PageTransition } from '@/components/ui/PageTransition';

interface TransformationsProps {
  onOpenEnquiry: () => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onOpenEnquiry }) => {
  return (
    <PageTransition>
      <Helmet>
        <title>Member Transformations & Results — Iconic Fitness</title>
        <meta name="description" content="Explore documented physical transformations from Iconic Fitness members. View before and after results, body recomposition stories, and strength milestones." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-dark-950 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={siteImages.facility.functionalZone}
            alt="Transformations Hero"
            className="w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
            // DOCUMENTED RESULTS
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
            DOCUMENTED RECOMPOSITION.
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Real members. Unfiltered data. Explore physical milestones achieved through disciplined programming.
          </p>
        </div>
      </section>

      {/* Before / After Interactive Sliders */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <BeforeAfterSlider
              beforeImage={siteImages.transformations.before1}
              afterImage={siteImages.transformations.after1}
              beforeLabel="DAY 1 (INCONSISTENT)"
              afterLabel="MONTH 12 (UNSTOPPABLE)"
              title="12 Months. 16% Body Fat Reduction."
              subtitle="Achieved +8kg Skeletal Muscle Gain while cutting visceral adipose tissue."
            />

            <BeforeAfterSlider
              beforeImage={siteImages.transformations.before2}
              afterImage={siteImages.transformations.after2}
              beforeLabel="DAY 1 (SEDENTARY)"
              afterLabel="MONTH 8 (ATHLETIC)"
              title="8 Months. Complete Shoulder-to-Waist Recomposition."
              subtitle="Eliminated chronic lower back pain and established 2x Bodyweight Deadlift."
            />
          </div>

          {/* Member Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-dark-850 border border-white/10 rounded-md space-y-3">
              <div className="flex items-center space-x-2 text-accent">
                <Trophy className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase">CASE STUDY 01</span>
              </div>
              <h4 className="font-display font-bold text-lg text-white">VIKRAM M. (AGE 38)</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                "I was working 60-hour corporate weeks with zero routine. Marcus restructured my workout tempo and nutrition macro split."
              </p>
              <div className="pt-2 text-[11px] font-mono text-accent">
                RESULT: -14% BODY FAT / +45KG SQUAT
              </div>
            </div>

            <div className="p-6 bg-dark-850 border border-white/10 rounded-md space-y-3">
              <div className="flex items-center space-x-2 text-accent">
                <Flame className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase">CASE STUDY 02</span>
              </div>
              <h4 className="font-display font-bold text-lg text-white">DR. ANANYA R. (AGE 42)</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                "Post knee surgery, standard gyms gave me generic leg extensions. Iconic's movement screen restored full knee flexion."
              </p>
              <div className="pt-2 text-[11px] font-mono text-accent">
                RESULT: PAIN-FREE SQUAT / +5KG LEAN MASS
              </div>
            </div>

            <div className="p-6 bg-dark-850 border border-white/10 rounded-md space-y-3">
              <div className="flex items-center space-x-2 text-accent">
                <Activity className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase">CASE STUDY 03</span>
              </div>
              <h4 className="font-display font-bold text-lg text-white">ROHAN K. (AGE 31)</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                "Joined for general fitness, ended up competing in my first state powerlifting meet thanks to Coach David."
              </p>
              <div className="pt-2 text-[11px] font-mono text-accent">
                RESULT: 520KG POWERLIFTING TOTAL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-950 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            YOUR TRANSFORMATION STARTS NOW.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Book your comprehensive physical screening with our Head of Performance.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-4 bg-accent text-dark-950 font-display font-bold text-xs tracking-widest rounded-sm hover:bg-white transition-colors inline-flex items-center space-x-2"
          >
            <span>START MY TRANSFORMATION</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </PageTransition>
  );
};
