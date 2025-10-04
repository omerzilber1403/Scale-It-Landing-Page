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

        <div className="space-y-6 md:space-y-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="glass rounded-3xl p-6 md:p-12"
            >
              {/* Company Name & Date */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-neon-2 mb-2 md:mb-0">{caseStudy.company}</h3>
                <p className="text-sm text-fg-muted">{caseStudy.date}</p>
              </div>
              
              {/* Challenge & Solution */}
              <div className="space-y-4 mb-8">
                <div className="p-4 md:p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                  <p className="text-base md:text-lg text-fg leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div className="p-4 md:p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                  <p className="text-base md:text-lg text-fg leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>
              
              {/* Results Metrics */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
                <div className="text-center p-4 md:p-6 rounded-xl bg-neon/10 border border-neon/30">
                  <div className="text-3xl md:text-4xl font-black text-neon mb-2">{caseStudy.metric1Value}</div>
                  <div className="text-sm md:text-lg text-fg-muted">{caseStudy.metric1Title}</div>
                </div>
                <div className="text-center p-4 md:p-6 rounded-xl bg-neon-2/10 border border-neon-2/30">
                  <div className="text-3xl md:text-4xl font-black text-neon-2 mb-2">{caseStudy.metric2Value}</div>
                  <div className="text-sm md:text-lg text-fg-muted">{caseStudy.metric2Title}</div>
                </div>
              </div>
              
              {/* Client Quote */}
              {caseStudy.clientQuote && (
                <div className="mt-6 p-4 md:p-6 rounded-xl bg-neon-2/5 border-l-4 border-neon-2">
                  <p className="text-base md:text-lg text-fg italic">{caseStudy.clientQuote}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

