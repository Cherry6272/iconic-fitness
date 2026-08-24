import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Check, HelpCircle, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { siteImages, handleImageError } from '@/lib/images';
import { PageTransition } from '@/components/ui/PageTransition';

interface MembershipProps {
  onOpenEnquiry: (tierName?: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const comparisonFeatures = [
    { name: "24/7 Facility Access", essential: true, performance: true, elite: true },
    { name: "Eleiko Olympic & Power Rigs", essential: true, performance: true, elite: true },
    { name: "Infrared Sauna & Recovery Suite", essential: false, performance: true, elite: true },
    { name: "InBody 770 Composition Screen", essential: "Initial Only", performance: "Bi-Weekly", elite: "Weekly" },
    { name: "Customized Training Blueprint", essential: false, performance: true, elite: true },
    { name: "1-on-1 Personal Coaching Sessions", essential: false, performance: false, elite: "12 Sessions/mo" },
    { name: "Bespoke Nutrition & Macro Protocol", essential: false, performance: "Basic", elite: "Complete VIP" },
    { name: "VIP Locker & Towel Service", essential: false, performance: "Priority", elite: "Dedicated VIP" },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Membership Options & Pricing — Iconic Fitness</title>
        <meta name="description" content="Choose your level of commitment at Iconic Fitness. Explore Essential, Performance, and Elite membership tiers with transparent benefits and FAQs." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-dark-950 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={siteImages.facility.freeWeights}
            alt="Membership Hero"
            onError={handleImageError}
            className="w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
            // COMMITMENT ARCHITECTURE
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
            YOUR NEXT LEVEL STARTS HERE.
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Uncompromised facility access and high-performance coaching tiers designed around your ambition level.
          </p>
        </div>
      </section>

      {/* Tiers Grid */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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

      {/* Feature Comparison Table */}
      <section className="py-24 bg-dark-950 border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
              // TIER BREAKDOWN
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              MEMBERSHIP COMPARISON MATRIX.
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 font-display text-xs text-zinc-400 uppercase tracking-widest">
                  <th className="py-4 px-4 font-bold text-white">PRIVILEGE / FEATURE</th>
                  <th className="py-4 px-4 text-center">ESSENTIAL</th>
                  <th className="py-4 px-4 text-center text-accent">PERFORMANCE</th>
                  <th className="py-4 px-4 text-center">ELITE COACHING</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-zinc-300">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-4 px-4 font-semibold text-white">{row.name}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.essential === 'boolean' ? (
                        row.essential ? <Check className="w-4 h-4 text-accent mx-auto" /> : <span className="text-zinc-600">—</span>
                      ) : (
                        <span className="font-mono text-[11px] text-zinc-400">{row.essential}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-accent/[0.02]">
                      {typeof row.performance === 'boolean' ? (
                        row.performance ? <Check className="w-4 h-4 text-accent mx-auto" /> : <span className="text-zinc-600">—</span>
                      ) : (
                        <span className="font-mono text-[11px] text-accent font-bold">{row.performance}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.elite === 'boolean' ? (
                        row.elite ? <Check className="w-4 h-4 text-accent mx-auto" /> : <span className="text-zinc-600">—</span>
                      ) : (
                        <span className="font-mono text-[11px] text-white font-bold">{row.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
              // FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              MEMBERSHIP FAQS.
            </h2>
          </div>

          <div className="space-y-4">
            {siteConfig.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-dark-850 border border-white/10 rounded-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:text-accent transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transform transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
