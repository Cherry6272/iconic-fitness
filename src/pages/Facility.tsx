import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { siteImages, handleImageError } from '@/lib/images';
import { PageTransition } from '@/components/ui/PageTransition';

interface FacilityProps {
  onOpenEnquiry: () => void;
}

export const Facility: React.FC<FacilityProps> = ({ onOpenEnquiry }) => {
  const zones = [
    {
      id: "strength",
      title: "OLYMPIC STRENGTH & POWER PLATFORMS",
      subtitle: "10 Dedicated Eleiko Competition Lifting Stations",
      image: siteImages.facility.strengthZone,
      specs: [
        "10x Eleiko IWF Certified Competition Barbells & Calibrated Steel Discs",
        "Custom Heavy-Gauge Power Racks with Integrated Wooden Platforms",
        "Band Peg Attachment Nodes & Safety Spotter Straps",
        "Chalk Bowls & Competition Deadlift Platforms"
      ]
    },
    {
      id: "free-weights",
      title: "FREE WEIGHTS & DUMBBELL ARRAY",
      subtitle: "Precision Urethane Dumbbells Ranging from 2.5kg to 60kg",
      image: siteImages.facility.freeWeights,
      specs: [
        "Dual Solid Urethane Dumbbell Racks with 2.5kg Increments up to 60kg",
        "Eleiko & Hammer Strength Adjustable Benches (-15° to +85°)",
        "Preacher Curl Benches & Standing EZ Bar Racks",
        "Heavy Fixed Barbells & Specialty Trap/Swiss Bars"
      ]
    },
    {
      id: "cardio",
      title: "CARDIO & ERGOMETER FLOOR",
      subtitle: "High-Performance Energy Systems Conditioning Equipment",
      image: siteImages.facility.cardioZone,
      specs: [
        "Wattbike Atom Next Generation Ergometers",
        "Woodway Curve Motorless Slat Belt Treadmills",
        "Concept2 RowErg & SkiErg Stations",
        "Assault AirBike Classic Rigs"
      ]
    },
    {
      id: "functional",
      title: "FUNCTIONAL TURF & SLED TRACK",
      subtitle: "30-Meter High-Density Sprint Turf & Conditioning Rig",
      image: siteImages.facility.functionalZone,
      specs: [
        "30m Shock-Absorbing Sprint & Prowler Sled Track",
        "Rogue Fitness Heavy Sleds & Harnesses",
        "Cast Iron Competition Kettlebell Array (8kg – 48kg)",
        "Plyometric Soft Boxes & Gymnastics Ring Stations"
      ]
    },
    {
      id: "recovery",
      title: "THERMAL RECOVERY & SAUNA SUITE",
      subtitle: "Infrared Heat Shock & Cold Plunge Contrast Therapy",
      image: siteImages.facility.recoverySuite,
      specs: [
        "Full-Spectrum Cedar Infrared Sauna (80°C Hyperthermic Conditioning)",
        "Chilled Cold Plunge Baths Maintained at Constant 8°C – 10°C",
        "Normatec 3 Legs & Arms Pneumatic Compression Boots",
        "Executive Lockers, Rain Showers & Towel Service"
      ]
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Gym Facility & Equipment Tour — Iconic Fitness</title>
        <meta name="description" content="Tour the 12,000 sq.ft. Iconic Fitness facility. Featuring Eleiko competition platforms, Hammer Strength machines, Wattbikes, sprint turf, and infrared recovery saunas." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-dark-950 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={siteImages.facility.hero}
            alt="Facility Tour"
            onError={handleImageError}
            className="w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
            // ARCHITECTURAL TOUR
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
            BUILT FOR SERIOUS TRAINING.
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            12,000 square feet of biomechanically selected equipment. Explore our specialized training zones.
          </p>
        </div>
      </section>

      {/* Facility Zones Section */}
      <section className="py-24 bg-dark-900 space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {zones.map((zone, idx) => (
            <div
              key={zone.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 bg-accent/10 border border-accent/30 text-accent text-[10px] font-mono font-bold tracking-widest uppercase rounded-sm">
                    ZONE 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">ICONIC ARCHITECTURE</span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  {zone.title}
                </h2>
                <p className="text-xs font-mono text-accent">
                  {zone.subtitle}
                </p>

                <ul className="space-y-3 pt-2 text-xs sm:text-sm text-zinc-300">
                  {zone.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-3 p-3 bg-dark-850 border border-white/5 rounded-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative h-96 sm:h-[420px] rounded-md overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={zone.image}
                  alt={zone.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-950 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            WALK THE FLOOR IN PERSON.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Complimentary day pass for serious prospective members.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-4 bg-accent text-dark-950 font-display font-bold text-xs tracking-widest rounded-sm hover:bg-white transition-colors inline-flex items-center space-x-2"
          >
            <span>BOOK FACILITY TOUR</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </PageTransition>
  );
};
