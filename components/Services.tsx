'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Palette, TrendingUp } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';

interface ServicesProps {
  lang: Lang;
}

export default function Services({ lang }: ServicesProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    { icon: Target, ...t.services.service1 },
    { icon: Palette, ...t.services.service2 },
    { icon: TrendingUp, ...t.services.service3 },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 pb-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      
      {/* ☁️ Soft Clouds for depth */}
      <div className="cloud w-68 h-52 animate-cloud-drift" style={{ top: '25%', left: '28%', animationDelay: '6s' }} aria-hidden="true" />
      <div className="cloud w-60 h-46 animate-cloud-drift" style={{ bottom: '20%', right: '22%', animationDelay: '13s' }} aria-hidden="true" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-12 text-center text-neon neon-text-glow"
        >
          {t.services.header}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 md:p-8 hover:border-neon/50 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-neon-2/20 flex items-center justify-center mb-4 md:mb-6">
                <service.icon size={28} className="text-neon-2 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-fg mb-3">{service.title}</h3>
              <p className="text-base md:text-lg text-fg-muted leading-relaxed mb-4">{service.description}</p>
              
              {/* Pain Point & Solution */}
              <div className="mt-auto space-y-3 pt-4 border-t border-neon/20">
                <div className="flex items-start gap-2">
                  <p className="text-sm text-fg-muted">{service.painPoint}</p>
                </div>
                <div className="flex items-start gap-2">
                  <p className="text-sm text-neon-2 font-medium">{service.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

