import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowDown, MapPin, Phone, Mail, Clock, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import type { Program, Trainer } from '@/lib/config';
import { siteImages, handleImageError } from '@/lib/images';
import { getGymSchema, getFAQSchema } from '@/lib/seo';
import { Hero3DCanvas } from '@/components/three/Hero3DCanvas';
import { StatCounter } from '@/components/ui/StatCounter';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { TrainerCard } from '@/components/cards/TrainerCard';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';
import { PageTransition } from '@/components/ui/PageTransition';

interface HomeProps {
  onOpenEnquiry: (programTitle?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenEnquiry }) => {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleProgramSelect = (program: Program) => {
    onOpenEnquiry(program.title);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>ICONIC FITNESS — Premium Gym & Athletic Performance Facility</title>
        <meta name="description" content="ICONIC FITNESS is a world-class luxury gym, strength & conditioning facility and transformation studio. Train with intention. Built for high performance." />
        <script type="application/ld+json">{JSON.stringify(getGymSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(getFAQSchema())}</script>
      </Helmet>

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 pt-20 pb-12">
        {/* Background Image Layer with Parallax / Darkness mask */}
        <div className="absolute inset-0 z-0">
          <img
            src={siteImages.hero.bg}
            alt={siteImages.hero.alt}
            onError={handleImageError}
            className="w-full h-full object-cover filter brightness-[0.25] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
        </div>

        {/* 3D Kinetic Canvas Background */}
        <Hero3DCanvas />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 my-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/40 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-accent uppercase">
              PREMIUM ATHLETIC FACILITY // CYBER HILLS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl tracking-tighter text-white uppercase select-none leading-none">
              ICONIC<span className="text-accent">.</span>
            </h1>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl tracking-tighter text-zinc-400 uppercase select-none leading-none">
              FITNESS
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto font-mono text-xs sm:text-sm tracking-widest text-zinc-300 uppercase leading-relaxed"
          >
            BUILT FOR PERFORMANCE. DESIGNED FOR TRANSFORMATION.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => onOpenEnquiry()}
              data-cursor-text="JOIN"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-dark-950 font-display font-bold text-xs tracking-widest rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.3)] flex items-center justify-center space-x-2 group"
            >
              <span>START YOUR JOURNEY</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/facility"
              data-cursor-text="TOUR"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900/90 text-zinc-200 border border-white/10 hover:border-accent hover:text-accent font-display text-xs font-bold tracking-widest rounded-sm backdrop-blur-md transition-all duration-300 text-center"
            >
              EXPLORE THE FACILITY
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12 flex flex-col items-center justify-center text-zinc-500 text-[10px] font-mono tracking-widest"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-4 h-4 text-accent mt-1" />
          </motion.div>
        </div>
      </section>

      {/* 2. EDITORIAL BRAND STATEMENT */}
      <section className="py-24 bg-dark-900 border-t border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block mb-6">
            // THE ICONIC PHILOSOPHY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            THE ARCHITECTURE OF PHYSICAL EXCELLENCE.
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Every session has a purpose. Every movement has a biomechanical reason. Iconic Fitness is engineered for people who expect uncompromising standard from their physical training.
          </p>
        </div>
      </section>

      {/* 3. WHY ICONIC PHILOSOPHY SPLIT LAYOUT */}
      <section className="py-24 bg-dark-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
                // UNCOMPROMISING STANDARD
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                WHY SERIOUS ATHLETES CHOOSE ICONIC.
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Commercial gym franchises prioritize overcrowded floors and broken pin-loaded equipment. Iconic Fitness operates on precision architecture, customized coaching protocols, and elite Eleiko & Hammer Strength rigs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {siteConfig.principles.map((principle) => (
              <div
                key={principle.num}
                className="p-6 bg-dark-850 border border-white/10 rounded-md space-y-4 hover:border-accent/40 transition-colors group"
              >
                <span className="font-mono text-2xl font-bold text-accent block">
                  {principle.num}
                </span>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-accent transition-colors">
                  {principle.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE NUMBERS */}
      <section className="py-20 bg-dark-900 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.stats.map((stat, idx) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE FACILITY SHOWCASE */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block mb-2">
                // ARCHITECTURAL TRAINING GROUND
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
                THE FACILITY & EQUIPMENT.
              </h2>
            </div>
            <Link
              to="/facility"
              className="text-xs font-mono font-bold tracking-widest text-accent hover:underline flex items-center space-x-1"
            >
              <span>EXPLORE ALL ZONES →</span>
            </Link>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative h-80 sm:h-96 rounded-md overflow-hidden bg-zinc-950 border border-white/10 group">
              <img
                src={siteImages.facility.strengthZone}
                alt="Strength Zone"
                onError={handleImageError}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest block mb-1">ZONE 01</span>
                <h3 className="font-display font-bold text-2xl text-white">OLYMPIC STRENGTH & POWER PLATFORMS</h3>
              </div>
            </div>

            <div className="relative h-80 sm:h-96 rounded-md overflow-hidden bg-zinc-950 border border-white/10 group">
              <img
                src={siteImages.facility.freeWeights}
                alt="Free Weights"
                onError={handleImageError}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest block mb-1">ZONE 02</span>
                <h3 className="font-display font-bold text-xl text-white">HEAVY DUMBBELL & RIG SUITE</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRAINING PROGRAMS */}
      <section className="py-24 bg-dark-900 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
              // ARCHITECTURAL PROGRAMMING
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              DESIGNED FOR PHYSICAL DOMINANCE.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Select your performance protocol. Each program is engineered with periodized progression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.programs.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                onSelect={handleProgramSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. MASTER TRAINERS */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block mb-2">
                // WORLD-CLASS COACHING
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
                THE MASTER COACHES.
              </h2>
            </div>
            <Link
              to="/trainers"
              className="text-xs font-mono font-bold tracking-widest text-accent hover:underline flex items-center space-x-1"
            >
              <span>MEET ALL COACHES →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* 8. TRANSFORMATIONS BEFORE/AFTER */}
      <section className="py-24 bg-dark-900 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
              // DOCUMENTED RESULTS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              FROM INCONSISTENT TO UNSTOPPABLE.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Drag the interactive slider to view real member physical transformations achieved through structured Iconic programming.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BeforeAfterSlider
              beforeImage={siteImages.transformations.before1}
              afterImage={siteImages.transformations.after1}
              beforeLabel="DAY 1 (INCONSISTENT)"
              afterLabel="12 MONTHS (UNSTOPPABLE)"
              title="12 Months. Uncompromising Commitment."
              subtitle="Dropped 16% body fat while adding 8kg lean skeletal muscle mass."
            />

            <BeforeAfterSlider
              beforeImage={siteImages.transformations.before2}
              afterImage={siteImages.transformations.after2}
              beforeLabel="START PHASE"
              afterLabel="8 MONTH RECOMP"
              title="8 Months. Complete Physique Recomposition."
              subtitle="Optimized athletic metabolic output & shoulder-to-waist taper ratio."
            />
          </div>
        </div>
      </section>

      {/* 9. MEMBERSHIP TIERS */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
              // COMMITMENT TIERS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              CHOOSE YOUR LEVEL OF COMMITMENT.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Limited membership availability to prevent overcrowding and maintain architectural training environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.memberships.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-dark-850 border rounded-md p-8 flex flex-col justify-between space-y-6 transition-all duration-300 ${
                  tier.recommended
                    ? 'border-accent shadow-[0_0_30px_rgba(204,255,0,0.15)] bg-dark-800'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {tier.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-dark-950 text-[10px] font-mono font-bold tracking-widest uppercase rounded-sm">
                    MOST POPULAR ATHLETE TIER
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="flex items-baseline space-x-1 pt-2 border-t border-white/5">
                    <span className="font-display font-black text-4xl text-white">
                      {tier.price}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      /{tier.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 pt-4 text-xs text-zinc-300">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenEnquiry(tier.name)}
                  data-cursor-text="APPLY"
                  className={`w-full py-3.5 font-display text-xs font-bold tracking-widest rounded-sm transition-colors ${
                    tier.recommended
                      ? 'bg-accent text-dark-950 hover:bg-white'
                      : 'bg-zinc-900 text-white hover:bg-accent hover:text-dark-950 border border-white/10'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. EDITORIAL TESTIMONIALS */}
      <section className="py-24 bg-dark-900 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
              // ATHLETE FEEDBACK
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              MEMBER TESTIMONIALS.
            </h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* 11. LOCATION & DARK MAP */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
                // TRAINING GROUND
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
                FIND YOUR TRAINING GROUND.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Located in the heart of Metropolis Cyber Hills. Dedicated parking, executive locker suites, and 24/7 athletic access.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 font-mono text-xs text-zinc-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-bold">ADDRESS</span>
                    <span>{siteConfig.contact.address}, {siteConfig.contact.city}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-bold">OPERATING HOURS</span>
                    <span>Weekdays: {siteConfig.contact.hours.weekdays}</span>
                    <span className="block">Saturday: {siteConfig.contact.hours.saturday}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href={`tel:${siteConfig.contact.phoneClean}`} className="hover:text-accent">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Dark Styled Map Frame */}
            <div className="relative h-96 rounded-md overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl">
              <iframe
                title="Iconic Fitness Facility Location Map"
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 12. HIGH-CONVERTING BOTTOM CTA */}
      <section className="py-24 bg-dark-900 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            READY TO TRAIN DIFFERENT?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-sans">
            Take the first step. Book your complimentary facility tour and physical movement screen today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              data-cursor-text="BOOK TOUR"
              className="w-full sm:w-auto px-10 py-4 bg-accent text-dark-950 font-display font-bold text-xs tracking-widest rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.3)] flex items-center justify-center space-x-2"
            >
              <span>BOOK FACILITY TOUR</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-zinc-900 text-zinc-200 border border-white/10 hover:border-accent hover:text-accent font-display text-xs font-bold tracking-widest rounded-sm transition-colors text-center"
            >
              WHATSAPP US INSTANTLY
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
