'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';

interface WhyUsProps {
  lang: Lang;
}

export default function WhyUs({ lang }: WhyUsProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number>(0);

  const items = [
    t.whyUs.cmo,
    t.whyUs.campaigns,
    t.whyUs.websites,
    t.whyUs.video,
    t.whyUs.seo,
    t.whyUs.social,
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="relative flex items-center justify-center px-4 py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto w-full"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-3 text-neon neon-text-glow">
            {t.whyUs.header}
          </h2>
          <p className="text-sm md:text-lg text-fg-muted mb-6">
            {lang === 'he' ? 'לחץ לפתיחה' : 'Click to expand'}
          </p>
          
          {/* Timeline for first month */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-neon/10 to-neon-2/10 rounded-2xl p-4 md:p-6 border border-neon/20 max-w-2xl mx-auto"
          >
            <h3 className="text-lg md:text-xl font-bold text-neon-2 mb-4">
              {lang === 'he' ? '📅 החודש הראשון - תוכנית הפעולה שלנו' : '📅 First Month - Our Action Plan'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-8 h-8 bg-neon rounded-full flex items-center justify-center text-bg font-bold mx-auto mb-2">1</div>
                <div className="font-semibold text-neon mb-1">
                  {lang === 'he' ? 'שבוע 1-2' : 'Week 1-2'}
                </div>
                <div className="text-fg-muted">
                  {lang === 'he' ? 'Kickoff + מחקר שוק' : 'Kickoff + Market Research'}
                </div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-neon-2 rounded-full flex items-center justify-center text-bg font-bold mx-auto mb-2">2</div>
                <div className="font-semibold text-neon-2 mb-1">
                  {lang === 'he' ? 'שבוע 3' : 'Week 3'}
                </div>
                <div className="text-fg-muted">
                  {lang === 'he' ? 'אסטרטגיה + תכנון' : 'Strategy + Planning'}
                </div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-gradient-to-r from-neon to-neon-2 rounded-full flex items-center justify-center text-bg font-bold mx-auto mb-2">3</div>
                <div className="font-semibold text-neon mb-1">
                  {lang === 'he' ? 'שבוע 4' : 'Week 4'}
                </div>
                <div className="text-fg-muted">
                  {lang === 'he' ? 'הפעלה + דיווח' : 'Launch + Reporting'}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3" role="tablist" aria-label={lang === 'he' ? 'רשימת שירותים' : 'Services list'}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              role="tab"
              aria-expanded={openIndex === index}
            >
              <div className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-lg shadow-neon/20 border-neon/40' : 'border-neon/20'
              }`}>
                {/* Header Button */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-neon/5 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-label={`${item.title} - ${openIndex === index ? 'collapse' : 'expand'}`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-gradient-to-r from-neon to-neon-2 text-white scale-110' 
                        : 'bg-neon/10 text-neon'
                    }`}>
                      {index + 1}
                    </div>
                    
                    {/* Title */}
                    <h3 
                      id={`tab-${index}`}
                      className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        openIndex === index ? 'text-neon' : 'text-neon-2'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Arrow Icon */}
                  <ChevronDown 
                    className={`flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-neon transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Content */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      role="tabpanel"
                      aria-labelledby={`tab-${index}`}
                    >
                      <div className="px-4 pb-4 md:px-5 md:pb-5">
                        <div className="pl-12 md:pl-14">
                          <div className="text-sm md:text-base text-fg-muted leading-relaxed space-y-2">
                            {item.description.split('\n').map((line, lineIndex) => {
                              // Bold headers
                              if (line.startsWith('**') && line.endsWith('**')) {
                                return (
                                  <div key={lineIndex} className="font-bold text-neon text-base md:text-lg mt-3 first:mt-0">
                                    {line.replace(/\*\*/g, '')}
                                  </div>
                                );
                              }
                              // Bullet points
                              if (line.startsWith('•')) {
                                return (
                                  <div key={lineIndex} className="flex items-start gap-2">
                                    <span className="text-neon-2 mt-0.5">•</span>
                                    <span className="flex-1">{line.substring(2)}</span>
                                  </div>
                                );
                              }
                              // Regular text
                              if (line.trim()) {
                                return (
                                  <div key={lineIndex}>
                                    {line}
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

