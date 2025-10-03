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
      
      {/* 🎯 Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
          aria-hidden="true"
        />
      ))}
      
      {/* 🎲 3D Geometric Shapes - Blue */}
      <div className="cube-3d" style={{ top: '10%', right: '15%', animationDelay: '0s' }} aria-hidden="true" />
      <div className="cube-3d" style={{ bottom: '25%', left: '12%', animationDelay: '8s', animationDuration: '25s' }} aria-hidden="true" />
      
      <div className="triangle-3d" style={{ top: '40%', left: '8%', animationDelay: '4s' }} aria-hidden="true" />
      <div className="triangle-3d" style={{ bottom: '30%', right: '20%', animationDelay: '10s', animationDuration: '18s' }} aria-hidden="true" />
      
      <div className="diamond-3d" style={{ top: '20%', left: '25%', animationDelay: '2s' }} aria-hidden="true" />
      <div className="diamond-3d" style={{ top: '65%', right: '15%', animationDelay: '12s', animationDuration: '14s' }} aria-hidden="true" />
      
      <div className="hexagon-3d" style={{ top: '30%', right: '35%', animationDelay: '5s' }} aria-hidden="true" />
      <div className="hexagon-3d" style={{ bottom: '40%', left: '35%', animationDelay: '14s', animationDuration: '20s' }} aria-hidden="true" />
      
      {/* 🟢 Green Physics Shapes */}
      <div className="star-3d" style={{ top: '18%', left: '38%', animationDelay: '3s' }} aria-hidden="true" />
      <div className="star-3d" style={{ bottom: '45%', right: '28%', animationDelay: '11s', animationDuration: '12s' }} aria-hidden="true" />
      
      {/* 🟠 Orange Physics Shapes */}
      <div className="circle-3d" style={{ top: '55%', right: '10%', animationDelay: '6s', animationDuration: '15s' }} aria-hidden="true" />
      <div className="circle-3d" style={{ bottom: '15%', left: '40%', animationDelay: '13s' }} aria-hidden="true" />
      
      <div className="pentagon-3d" style={{ top: '75%', left: '18%', animationDelay: '9s', animationDuration: '17s' }} aria-hidden="true" />
      <div className="pentagon-3d" style={{ top: '45%', right: '8%', animationDelay: '16s' }} aria-hidden="true" />
      
      {/* ☁️ Soft Clouds for depth */}
      <div className="cloud w-64 h-48 animate-cloud-drift" style={{ top: '12%', left: '20%', animationDelay: '2s' }} aria-hidden="true" />
      <div className="cloud w-80 h-56 animate-cloud-drift" style={{ bottom: '20%', right: '15%', animationDelay: '8s', animationDuration: '50s' }} aria-hidden="true" />
      <div className="cloud w-72 h-52 animate-cloud-drift" style={{ top: '50%', right: '30%', animationDelay: '14s', animationDuration: '55s' }} aria-hidden="true" />
      
      {/* 🌊 Ocean Morphing Shapes - UNIQUE! */}
      
      {/* Morphing Blob 1 */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-sky-200 via-cyan-300 to-blue-400 blur-3xl pointer-events-none animate-morph"
        aria-hidden="true"
      />
      
      {/* Wave Floating Shape 2 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.22, 0.38, 0.22],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute -bottom-10 -left-10 w-[650px] h-[650px] bg-gradient-to-br from-cyan-200 via-teal-300 to-sky-400 blur-3xl pointer-events-none animate-wave-float"
        style={{ borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%' }}
        aria-hidden="true"
      />
      
      {/* Rotating Morphing Blob 3 */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.18, 0.32, 0.18],
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200 via-cyan-300 to-teal-300 blur-3xl pointer-events-none animate-morph"
        aria-hidden="true"
      />
      
      {/* Gentle Floating Shape 4 */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.28, 0.15],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
        className="absolute bottom-1/3 right-1/3 w-[550px] h-[550px] bg-gradient-to-br from-teal-200 via-cyan-300 to-sky-300 blur-3xl pointer-events-none"
        style={{ borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%' }}
        aria-hidden="true"
      />
      
      {/* Central Pulsing Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.24, 0.12],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 8,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-cyan-100 via-teal-200 to-blue-200 blur-3xl pointer-events-none animate-morph"
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

