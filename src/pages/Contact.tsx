import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { PageTransition } from '@/components/ui/PageTransition';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Build Strength & Muscle',
    trainingType: 'Membership Access',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us & Book Tour — Iconic Fitness</title>
        <meta name="description" content="Get in touch with Iconic Fitness. Book a facility tour, enquire about memberships, or chat with our performance advisors on WhatsApp." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-dark-950 border-b border-white/10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
            // DIRECT COMMUNICATION
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
            START YOUR JOURNEY.
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Have questions about memberships or coaching? Send an enquiry or contact us directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Section Grid */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Column */}
            <div className="bg-dark-850 border border-white/10 rounded-md p-8 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest block">
                  // LEAD ENQUIRY PROTOCOL
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  ENQUIRE FOR MEMBERSHIP
                </h3>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-3 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-3 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-3.5 py-3 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Preferred Service</label>
                    <select
                      value={formData.trainingType}
                      onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
                      className="w-full px-3.5 py-3 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                    >
                      <option value="Membership Access">Membership Access</option>
                      <option value="1-on-1 Elite Coaching">1-on-1 Elite Coaching</option>
                      <option value="Strength & Conditioning">Strength & Conditioning</option>
                      <option value="Facility Tour Booking">Facility Tour Booking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Message or Questions</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your goals or preferred tour times..."
                      className="w-full px-3.5 py-3 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent text-dark-950 font-display font-bold text-xs tracking-widest rounded-sm hover:bg-white transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? <span>SENDING...</span> : (
                      <>
                        <span>SUBMIT ENQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-[11px] font-mono text-zinc-500 flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    <span>Your privacy is protected. Response within 2 hours.</span>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                  <h4 className="font-display font-bold text-xl text-white">ENQUIRY TRANSMITTED</h4>
                  <p className="text-xs text-zinc-400">
                    Thank you! Our Performance Director will reach out to <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Info & Map Column */}
            <div className="space-y-8">
              <div className="space-y-6 p-8 bg-dark-850 border border-white/10 rounded-md">
                <h3 className="font-display font-bold text-2xl text-white">DIRECT CHANNELS</h3>
                
                <div className="space-y-4 text-xs font-mono text-zinc-300">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-sm flex items-center justify-between hover:border-emerald-400 transition-colors block group"
                  >
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-emerald-400" />
                      <div>
                        <span className="text-white font-bold block">INSTANT WHATSAPP CHAT</span>
                        <span className="text-zinc-400 text-[11px]">{siteConfig.contact.whatsapp}</span>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.phoneClean}`}
                    className="p-4 bg-zinc-900 border border-white/10 rounded-sm flex items-center justify-between hover:border-accent transition-colors block group"
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <div>
                        <span className="text-white font-bold block">DIRECT PHONE LINE</span>
                        <span className="text-zinc-400 text-[11px]">{siteConfig.contact.phone}</span>
                      </div>
                    </div>
                    <span className="text-accent font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </a>

                  <div className="p-4 bg-zinc-900 border border-white/10 rounded-sm space-y-2">
                    <div className="flex items-center space-x-2 text-accent">
                      <MapPin className="w-4 h-4" />
                      <span className="font-bold text-white uppercase">ADDRESS</span>
                    </div>
                    <p className="text-zinc-400 text-xs">{siteConfig.contact.address}, {siteConfig.contact.city}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-80 rounded-md overflow-hidden bg-zinc-950 border border-white/10">
                <iframe
                  title="Iconic Location Map Contact Page"
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};
