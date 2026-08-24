import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, User, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { handleImageError } from '@/lib/images';
import { PageTransition } from '@/components/ui/PageTransition';

export const Blog: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Training & Performance Insights — Iconic Fitness</title>
        <meta name="description" content="Read training science, biomechanics analysis, executive nutrition advice, and recovery protocols from Iconic Fitness master coaches." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-dark-950 border-b border-white/10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
            // INTEL & INSIGHTS
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
            TRAINING SCIENCE INSIGHTS.
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Evidence-based biomechanics, progressive overload strategies, executive nutrition, and contrast recovery protocols.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-dark-850 border border-white/10 rounded-md overflow-hidden flex flex-col justify-between hover:border-accent/40 transition-colors shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-zinc-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-dark-950/90 text-accent text-[10px] font-mono font-bold tracking-widest border border-accent/30 rounded-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-[11px] font-mono text-zinc-400">
                      <span className="flex items-center space-x-1">
                        <User className="w-3 h-3 text-accent" />
                        <span>{post.author}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-zinc-500" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold text-accent">
                    <span>READ ARTICLE</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
