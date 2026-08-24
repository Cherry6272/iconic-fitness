import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Globe, Share2, Video, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 text-zinc-300 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background noise and accent line */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-sm bg-accent/20 border border-accent flex items-center justify-center text-accent">
                <Dumbbell className="w-5 h-5 transform -rotate-45" />
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                ICONIC<span className="text-accent">.</span>FITNESS
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-sans">
              ICONIC FITNESS is an elite strength, conditioning, and transformation sanctuary. Built for those who demand architectural aesthetic, biomechanical precision, and physical power.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Instagram"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="YouTube"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
              // ARCHITECTURE
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors flex items-center space-x-1"><span>About Iconic</span></Link></li>
              <li><Link to="/facility" className="hover:text-accent transition-colors flex items-center space-x-1"><span>Gym Facility Tour</span></Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors flex items-center space-x-1"><span>Training Programs</span></Link></li>
              <li><Link to="/trainers" className="hover:text-accent transition-colors flex items-center space-x-1"><span>Master Coaches</span></Link></li>
              <li><Link to="/transformations" className="hover:text-accent transition-colors flex items-center space-x-1"><span>Member Results</span></Link></li>
              <li><Link to="/membership" className="hover:text-accent transition-colors flex items-center space-x-1"><span>Membership Options</span></Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors flex items-center space-x-1"><span>Cinematic Gallery</span></Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors flex items-center space-x-1"><span>Training Insights</span></Link></li>
            </ul>
          </div>

          {/* Col 4: Training Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
              // HOURS & ACCESS
            </h4>
            <div className="space-y-3 text-xs font-mono text-zinc-400">
              <div className="p-3 bg-zinc-900/80 border border-white/5 rounded-sm">
                <span className="text-white block font-bold mb-1">WEEKDAYS</span>
                <span>{siteConfig.contact.hours.weekdays}</span>
              </div>
              <div className="p-3 bg-zinc-900/80 border border-white/5 rounded-sm">
                <span className="text-white block font-bold mb-1">SATURDAY</span>
                <span>{siteConfig.contact.hours.saturday}</span>
              </div>
              <div className="p-3 bg-zinc-900/80 border border-white/5 rounded-sm">
                <span className="text-white block font-bold mb-1">SUNDAY</span>
                <span>{siteConfig.contact.hours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Col 5: Location & Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
              // LOCATION GROUND
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}, {siteConfig.contact.city}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneClean}`} className="hover:text-white transition-colors">{siteConfig.contact.phone}</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a>
              </div>
              <a
                href={siteConfig.contact.googleMapsEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-accent hover:underline pt-2 font-mono text-[11px]"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Oversized Architectural Typography Banner */}
        <div className="py-10 border-t border-b border-white/10 my-8 text-center overflow-hidden">
          <h2 className="font-display font-black text-4xl sm:text-7xl lg:text-9xl tracking-tighter text-zinc-900 select-none uppercase hover:text-dark-800 transition-colors">
            TRAIN DIFFERENT
          </h2>
        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} ICONIC FITNESS FACILITY. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center space-x-6">
            <span>PRIVACY PROTOCOL</span>
            <span>TERMS OF MEMBERSHIP</span>
            <button
              onClick={scrollToTop}
              className="text-accent hover:text-white flex items-center space-x-1 tracking-widest uppercase font-bold"
            >
              <span>TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
