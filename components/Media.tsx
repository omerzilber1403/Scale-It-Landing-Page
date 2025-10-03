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

  const getVideoId = (url: string) => {
    const match = url.match(/shorts\/([^?]+)/);
    return match ? match[1] : '';
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 py-20 pb-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      
      {/* Soft Background Elements - More Shapes */}
      <div className="bubble w-32 h-32 animate-gentle-float" style={{ top: '10%', left: '10%', animationDelay: '4s' }} aria-hidden="true" />
      <div className="bubble w-40 h-40 animate-soft-pulse" style={{ bottom: '12%', right: '10%', animationDelay: '9s' }} aria-hidden="true" />
      <div className="bubble w-28 h-28 animate-gentle-float" style={{ top: '55%', left: '5%', animationDelay: '16s' }} aria-hidden="true" />
      <div className="bubble w-34 h-34 animate-soft-pulse" style={{ top: '75%', right: '40%', animationDelay: '22s' }} aria-hidden="true" />
      <div className="cloud w-68 h-52 animate-cloud-drift" style={{ top: '40%', right: '15%', animationDelay: '7s' }} aria-hidden="true" />
      <div className="cloud w-60 h-44 animate-cloud-drift" style={{ bottom: '30%', left: '18%', animationDelay: '14s' }} aria-hidden="true" />
      <div className="cloud w-64 h-48 animate-cloud-drift" style={{ top: '65%', left: '45%', animationDelay: '20s' }} aria-hidden="true" />
      <div className="soft-ring w-48 h-48" style={{ top: '20%', left: '35%', animationDelay: '10s' }} aria-hidden="true" />
      <div className="soft-ring w-50 h-50" style={{ bottom: '45%', right: '25%', animationDelay: '26s' }} aria-hidden="true" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-12 text-center text-neon neon-text-glow"
        >
          {t.media.header}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {videos.map((video) => (
            <motion.button
              key={video.id}
              onClick={() => setSelectedVideo(video.embedUrl)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative aspect-[9/16] w-full rounded-xl overflow-hidden shadow-lg border border-fg-muted/20 hover:border-neon/50 transition-all duration-300 bg-bg-glass neon-glow-subtle"
            >
              <Image
                src={video.thumbnail}
                alt={lang === 'he' ? video.titleHe : video.titleEn}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300" style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(37, 99, 235, 0.2)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-neon ml-1 group-hover:scale-110 transition-transform">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="font-bold text-sm md:text-base text-fg group-hover:text-neon transition-colors duration-300">
                  {lang === 'he' ? video.titleHe : video.titleEn}
                </h3>
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

