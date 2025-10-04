'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';
import { videos } from '@/lib/videos';
import Image from 'next/image';

interface MediaProps {
  lang: Lang;
}

export default function Media({ lang }: MediaProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const getVideoId = (url: string) => {
    const match = url.match(/shorts\/([^?]+)/);
    return match ? match[1] : '';
  };

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(videos.map(v => v.category)))];
  
  // Filter videos by category
  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 py-20 pb-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      
      {/* ☁️ Soft Clouds for depth */}
      <div className="cloud w-64 h-48 animate-cloud-drift" style={{ top: '30%', right: '18%', animationDelay: '8s' }} aria-hidden="true" />
      <div className="cloud w-60 h-44 animate-cloud-drift" style={{ bottom: '28%', left: '20%', animationDelay: '16s' }} aria-hidden="true" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-center text-neon neon-text-glow"
        >
          {t.media.header}
        </motion.h2>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-neon to-neon-2 text-bg shadow-lg'
                  : 'bg-bg-glass text-fg-muted hover:text-neon hover:bg-neon/10 border border-neon/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {filteredVideos.map((video) => (
            <motion.button
              key={video.id}
              onClick={() => setSelectedVideo(video.embedUrl)}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative aspect-[9/16] w-full rounded-xl overflow-hidden shadow-lg border border-fg-muted/20 hover:border-neon/50 transition-all duration-300 bg-bg-glass neon-glow-subtle"
            >
              <Image
                src={video.thumbnail}
                alt={lang === 'he' ? video.titleHe : video.titleEn}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300" style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(37, 99, 235, 0.2)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-neon ml-1 group-hover:scale-110 transition-transform">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
              </div>
              
              {/* KPI Overlay on Hover */}
              <AnimatePresence>
                {hoveredVideo === video.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute top-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md rounded-lg border border-neon/30"
                  >
                    <div className="text-xs text-neon font-bold mb-1">{lang === 'he' ? 'מטרה:' : 'Goal:'}</div>
                    <div className="text-xs text-fg mb-2">{video.goal}</div>
                    <div className="text-xs text-neon-2 font-bold">{video.kpi}</div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="font-bold text-sm md:text-base text-fg group-hover:text-neon transition-colors duration-300 mb-1">
                  {lang === 'he' ? video.titleHe : video.titleEn}
                </h3>
                <div className="flex items-center gap-2 text-xs text-fg-muted">
                  <span className="bg-neon/20 px-2 py-1 rounded-full">{video.category}</span>
                  {video.views && <span>👁️ {video.views}</span>}
                  {video.engagement && <span>❤️ {video.engagement}</span>}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl aspect-video bg-bg rounded-2xl overflow-hidden shadow-2xl border-2 border-neon neon-glow"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-bg/80 backdrop-blur-sm text-neon hover:bg-neon hover:text-bg transition-all duration-300 border border-neon"
              >
                <X size={24} />
              </button>
              
              <iframe
                src={`https://www.youtube.com/embed/${getVideoId(selectedVideo)}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

