import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface WhatsAppButtonProps {
  onOpenEnquiry: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onOpenEnquiry }) => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(
    "Hi Iconic Fitness team, I would like to enquire about your facility, membership options, and booking a trial tour."
  )}`;

  return (
    <>
      {/* Floating WhatsApp Button for Desktop/Tablet */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-text="CHAT"
          className="group relative flex items-center space-x-3 px-4 py-3 rounded-full bg-dark-850/90 backdrop-blur-xl border border-accent/40 shadow-2xl hover:bg-accent hover:border-accent transition-all duration-300"
        >
          {/* Animated Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-accent/20 animate-ping opacity-75 pointer-events-none" />
          
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-dark-950 group-hover:text-accent transition-colors">
            <MessageSquare className="w-4 h-4 fill-current" />
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 group-hover:text-dark-950/80 uppercase">
              WHATSAPP US
            </span>
            <span className="text-xs font-display font-bold text-white group-hover:text-dark-950 tracking-wider">
              {siteConfig.contact.whatsapp}
            </span>
          </div>
        </a>
      </div>

      {/* Sticky Bottom Action Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-dark-950/95 backdrop-blur-xl border-t border-white/10 p-3 sm:hidden flex items-center gap-2">
        <a
          href={`tel:${siteConfig.contact.phoneClean}`}
          className="flex-1 py-3 px-2 rounded-sm bg-zinc-900 border border-white/10 flex items-center justify-center space-x-2 text-zinc-200 text-xs font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-accent" />
          <span>CALL NOW</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-2 rounded-sm bg-emerald-600/90 text-white flex items-center justify-center space-x-2 text-xs font-bold"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>WHATSAPP</span>
        </a>

        <button
          onClick={onOpenEnquiry}
          className="flex-[1.5] py-3 px-2 rounded-sm bg-accent text-dark-950 font-display font-bold text-xs tracking-wider flex items-center justify-center"
        >
          <span>JOIN ICONIC</span>
        </button>
      </div>
    </>
  );
};
