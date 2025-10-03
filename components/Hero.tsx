'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getTranslations, Lang } from '@/lib/i18n';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      
      {/* Bold Purple floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-10 left-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500 via-violet-600 to-fuchsia-600 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-700 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon to-neon-2"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl mb-12 text-fg leading-relaxed max-w-3xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-neon to-neon-2 text-bg font-bold text-lg hover:shadow-xl transition-all duration-300 neon-glow"
        >
          {t.hero.cta}
        </motion.button>

      </div>
    </div>
  );
}

