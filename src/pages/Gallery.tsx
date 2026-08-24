import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GalleryGrid } from '@/components/ui/GalleryGrid';
import { siteImages, handleImageError } from '@/lib/images';
import { PageTransition } from '@/components/ui/PageTransition';

export const Gallery: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Cinematic Photo Gallery — Iconic Fitness</title>
        <meta name="description" content="Explore high-resolution photography of the Iconic Fitness gym floor, Eleiko strength platforms, infrared saunas, and training community." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-dark-950 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={siteImages.facility.hero}
            alt="Gallery Hero"
            onError={handleImageError}
            className="w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
            // VISUAL ARCHIVE
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
            CINEMATIC ARCHITECTURE.
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            High-resolution capture of our equipment, athletic floor, and high-performance training culture.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </PageTransition>
  );
};
