import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { siteImages, handleImageError } from '@/lib/images';

export const GalleryGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; category: string } | null>(null);

  const categories = ['ALL', 'FACILITY', 'TRAINING', 'COMMUNITY', 'RESULTS'];

  const filteredImages = activeCategory === 'ALL'
    ? siteImages.gallery
    : siteImages.gallery.filter((img) => img.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-widest transition-all duration-300 rounded-sm border ${
              activeCategory === cat
                ? 'bg-accent text-dark-950 border-accent shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                : 'bg-zinc-900/80 text-zinc-400 border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Masonry Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.url + idx}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImage(img)}
              data-cursor-text="VIEW"
              className="group relative h-80 rounded-md overflow-hidden bg-zinc-950 border border-white/10 cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                onError={handleImageError}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-dark-950/90 text-accent text-[10px] font-mono font-bold tracking-widest border border-accent/30 rounded-sm">
                  {img.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-accent transition-colors">
                    {img.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-sm bg-accent/20 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-dark-950 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-dark-950/95 backdrop-blur-xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 text-white bg-zinc-900 border border-white/20 rounded-full hover:bg-accent hover:text-dark-950 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[85vh] bg-dark-900 border border-white/10 rounded-md overflow-hidden flex flex-col"
            >
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  onError={handleImageError}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 bg-dark-850 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest block">
                    {selectedImage.category} // ICONIC ARCHIVE
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400">ICONIC FITNESS HIGH-RES</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
