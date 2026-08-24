import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, ChevronRight, Dumbbell } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/facility', label: 'FACILITY' },
    { path: '/programs', label: 'PROGRAMS' },
    { path: '/trainers', label: 'TRAINERS' },
    { path: '/transformations', label: 'RESULTS' },
    { path: '/membership', label: 'MEMBERSHIP' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/blog', label: 'INSIGHTS' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-dark-950/90 via-dark-950/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="group flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark-950 transition-all duration-300">
                <Dumbbell className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white group-hover:text-accent transition-colors duration-300">
                  ICONIC<span className="text-accent">.</span>FITNESS
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 -mt-1 hidden sm:block">
                  EST. 2016 — LUXURY FACILITY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3 py-2 text-xs font-semibold tracking-widest transition-colors duration-300 ${
                      isActive
                        ? 'text-accent'
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent shadow-[0_0_8px_#CCFF00]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-zinc-900 border border-white/10 text-zinc-300 hover:text-accent hover:border-accent/50 transition-all duration-300"
                title="WhatsApp Direct Contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenEnquiry}
                data-cursor-text="JOIN"
                className="relative group overflow-hidden rounded-sm px-5 py-2.5 bg-accent text-dark-950 font-display font-bold text-xs tracking-widest transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>START JOURNEY</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={onOpenEnquiry}
                className="px-3 py-1.5 bg-accent text-dark-950 text-[11px] font-bold tracking-wider rounded-sm"
              >
                JOIN
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white rounded-sm bg-zinc-900/80 border border-white/10"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-950/98 backdrop-blur-2xl pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
                // NAVIGATION ARCHITECTURE
              </span>
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between py-3 border-b border-white/5 font-display text-xl font-bold tracking-wider ${
                          isActive ? 'text-accent pl-2 border-accent/40' : 'text-zinc-200 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-zinc-600'}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-4 bg-accent text-dark-950 font-display font-bold tracking-widest text-sm rounded-sm text-center flex items-center justify-center space-x-2"
              >
                <span>BOOK A FACILITY TOUR</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex justify-between items-center text-xs text-zinc-400 pt-2 font-mono">
                <a href={`tel:${siteConfig.contact.phoneClean}`} className="flex items-center space-x-1 hover:text-accent">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <span>CYBER HILLS, METROPOLIS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
