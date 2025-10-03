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
      
      {/* Soft Background Elements - More Shapes */}
      <div className="bubble w-36 h-36 animate-gentle-float" style={{ top: '14%', right: '12%', animationDelay: '5s' }} aria-hidden="true" />
      <div className="bubble w-32 h-32 animate-soft-pulse" style={{ bottom: '20%', left: '14%', animationDelay: '11s' }} aria-hidden="true" />
      <div className="bubble w-30 h-30 animate-gentle-float" style={{ top: '60%', right: '8%', animationDelay: '17s' }} aria-hidden="true" />
      <div className="bubble w-38 h-38 animate-soft-pulse" style={{ top: '40%', left: '6%', animationDelay: '23s' }} aria-hidden="true" />
      <div className="cloud w-76 h-60 animate-cloud-drift" style={{ top: '28%', left: '10%', animationDelay: '8s' }} aria-hidden="true" />
      <div className="cloud w-64 h-48 animate-cloud-drift" style={{ bottom: '25%', right: '22%', animationDelay: '16s' }} aria-hidden="true" />
      <div className="cloud w-62 h-46 animate-cloud-drift" style={{ top: '72%', left: '35%', animationDelay: '21s' }} aria-hidden="true" />
      <div className="soft-ring w-54 h-54" style={{ top: '50%', right: '18%', animationDelay: '13s' }} aria-hidden="true" />
      <div className="soft-ring w-48 h-48" style={{ bottom: '40%', left: '25%', animationDelay: '27s' }} aria-hidden="true" />
      
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

