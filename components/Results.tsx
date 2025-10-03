'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getTranslations, Lang } from '@/lib/i18n';

interface ResultsProps {
  lang: Lang;
}

export default function Results({ lang }: ResultsProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cases = [t.results.case1, t.results.case2, t.results.case3];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 pb-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      
      {/* 🎲 3D Geometric Shapes - Blue */}
      <div className="cube-3d" style={{ top: '18%', right: '16%', animationDelay: '3s', animationDuration: '23s' }} aria-hidden="true" />
      <div className="cube-3d" style={{ bottom: '28%', left: '18%', animationDelay: '10s' }} aria-hidden="true" />
      
      <div className="triangle-3d" style={{ top: '42%', left: '10%', animationDelay: '6s' }} aria-hidden="true" />
      <div className="triangle-3d" style={{ bottom: '32%', right: '22%', animationDelay: '13s', animationDuration: '16s' }} aria-hidden="true" />
      
      <div className="diamond-3d" style={{ top: '28%', left: '26%', animationDelay: '4s' }} aria-hidden="true" />
      <div className="diamond-3d" style={{ top: '72%', right: '20%', animationDelay: '14s', animationDuration: '15s' }} aria-hidden="true" />
      
      <div className="hexagon-3d" style={{ top: '54%', right: '34%', animationDelay: '8s' }} aria-hidden="true" />
      <div className="hexagon-3d" style={{ bottom: '48%', left: '40%', animationDelay: '16s', animationDuration: '20s' }} aria-hidden="true" />
      
      {/* 🟢 Green Physics Shapes */}
      <div className="star-3d" style={{ top: '26%', left: '38%', animationDelay: '5s', animationDuration: '11s' }} aria-hidden="true" />
      <div className="star-3d" style={{ bottom: '36%', right: '28%', animationDelay: '12s' }} aria-hidden="true" />
      
      {/* 🟠 Orange Physics Shapes */}
      <div className="circle-3d" style={{ top: '64%', right: '14%', animationDelay: '7s', animationDuration: '15s' }} aria-hidden="true" />
      <div className="circle-3d" style={{ bottom: '44%', left: '26%', animationDelay: '11s' }} aria-hidden="true" />
      
      <div className="pentagon-3d" style={{ top: '48%', left: '14%', animationDelay: '9s', animationDuration: '17s' }} aria-hidden="true" />
      <div className="pentagon-3d" style={{ bottom: '16%', right: '36%', animationDelay: '15s' }} aria-hidden="true" />
      
      {/* ☁️ Soft Clouds for depth */}
      <div className="cloud w-70 h-54 animate-cloud-drift" style={{ top: '32%', left: '12%', animationDelay: '9s' }} aria-hidden="true" />
      <div className="cloud w-62 h-46 animate-cloud-drift" style={{ bottom: '26%', right: '24%', animationDelay: '17s' }} aria-hidden="true" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-12 text-center text-neon neon-text-glow"
        >
          {t.results.header}
        </motion.h2>

        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <h3 className="text-3xl font-bold text-neon-2 mb-4">{caseStudy.company}</h3>
              <p className="text-xl text-fg mb-8">{caseStudy.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center p-6 rounded-xl bg-neon/10 border border-neon/30">
                  <div className="text-4xl font-black text-neon mb-2">{caseStudy.metric1Value}</div>
                  <div className="text-lg text-fg-muted">{caseStudy.metric1Title}</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-neon-2/10 border border-neon-2/30">
                  <div className="text-4xl font-black text-neon-2 mb-2">{caseStudy.metric2Value}</div>
                  <div className="text-lg text-fg-muted">{caseStudy.metric2Title}</div>
                </div>
              </div>
              
              <p className="text-sm text-fg-muted text-center">{caseStudy.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

