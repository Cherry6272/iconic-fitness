import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, defaultProgram = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Muscle Hypertrophy & Strength',
    trainingType: defaultProgram || 'Membership Access',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-950/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-dark-850 border border-white/10 rounded-md shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
          >
            {/* Ambient Accent Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="mb-6 space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
                    // START YOUR JOURNEY
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    BOOK YOUR FACILITY TOUR
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Experience Iconic Fitness. Fill in your details and our performance team will contact you within 2 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3 py-2.5 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2.5 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-3 py-2.5 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Interest</label>
                      <select
                        value={formData.trainingType}
                        onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                      >
                        <option value="Membership Access">Membership Access</option>
                        <option value="Strength & Conditioning">Strength & Conditioning</option>
                        <option value="1-on-1 Elite Coaching">1-on-1 Elite Coaching</option>
                        <option value="Metabolic Fat Loss">Metabolic Fat Loss</option>
                        <option value="Facility Tour Booking">Facility Tour Booking</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Primary Training Goal</label>
                    <input
                      type="text"
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      placeholder="e.g. Build 5kg lean muscle, drop body fat..."
                      className="w-full px-3 py-2.5 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-mono mb-1 uppercase tracking-wider">Additional Message (Optional)</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Preferred call timing or questions..."
                      className="w-full px-3 py-2.5 bg-zinc-900 border border-white/10 rounded-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor-text="SUBMIT"
                    className="w-full py-3.5 bg-accent text-dark-950 font-display font-bold tracking-widest rounded-sm hover:bg-white transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>PROCESSING...</span>
                    ) : (
                      <>
                        <span>SUBMIT ENQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                    <span className="flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                      <span>Zero spam guarantee.</span>
                    </span>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline flex items-center space-x-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Or WhatsApp us instantly</span>
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">ENQUIRY RECEIVED</h3>
                <p className="text-xs text-zinc-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our Master Performance Advisor will contact you at <strong className="text-accent">{formData.phone}</strong> shortly to confirm your booking.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-zinc-800 text-white rounded-sm font-mono text-xs font-bold hover:bg-zinc-700 transition-colors"
                >
                  CLOSE WINDOW
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
