import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { handleImageError } from '@/lib/images';
import { getArticleSchema } from '@/lib/seo';
import { PageTransition } from '@/components/ui/PageTransition';

interface BlogPostProps {
  onOpenEnquiry: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = siteConfig.blogPosts.find((p) => p.slug === slug) || siteConfig.blogPosts[0];

  return (
    <PageTransition>
      <Helmet>
        <title>{post.title} — Iconic Fitness Insights</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">{JSON.stringify(getArticleSchema(post))}</script>
      </Helmet>

      {/* Header & Hero */}
      <section className="pt-36 pb-12 bg-dark-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-xs font-mono text-accent hover:underline uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO INSIGHTS</span>
          </Link>

          <div className="space-y-3">
            <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-[10px] font-mono font-bold uppercase rounded-sm">
              {post.category}
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 border-t border-white/10 pt-4">
            <span className="flex items-center space-x-1">
              <User className="w-3.5 h-3.5 text-accent" />
              <span className="text-white">{post.author}</span>
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Image */}
          <div className="relative h-96 sm:h-[480px] rounded-md overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              onError={handleImageError}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Text Content */}
          <div className="prose prose-invert max-w-none text-zinc-300 font-sans text-sm sm:text-base leading-relaxed space-y-6">
            <p className="font-mono text-accent text-sm sm:text-base border-l-2 border-accent pl-4 py-1">
              {post.excerpt}
            </p>

            <div className="whitespace-pre-line space-y-4">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-white/10 flex items-center space-x-2">
            <Tag className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono text-zinc-400 uppercase">TAGS:</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-dark-850 border border-white/10 text-xs font-mono text-zinc-300 rounded-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Box */}
          <div className="p-6 bg-dark-850 border border-white/10 rounded-md flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-accent uppercase block">AUTHOR</span>
              <h4 className="font-display font-bold text-lg text-white">{post.author}</h4>
              <p className="text-xs text-zinc-400">Iconic Fitness Performance Specialist</p>
            </div>
            <button
              onClick={onOpenEnquiry}
              className="px-4 py-2 bg-accent text-dark-950 font-display font-bold text-xs rounded-sm hover:bg-white transition-colors"
            >
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
