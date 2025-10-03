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
      
      {/* 🎲 3D Geometric Shapes - Blue */}
      <div className="cube-3d" style={{ top: '15%', right: '12%', animationDelay: '2s' }} aria-hidden="true" />
      <div className="cube-3d" style={{ bottom: '30%', left: '14%', animationDelay: '9s', animationDuration: '22s' }} aria-hidden="true" />
      
      <div className="triangle-3d" style={{ top: '45%', left: '8%', animationDelay: '5s' }} aria-hidden="true" />
      <div className="triangle-3d" style={{ bottom: '18%', right: '22%', animationDelay: '11s', animationDuration: '17s' }} aria-hidden="true" />
      
      <div className="diamond-3d" style={{ top: '25%', left: '22%', animationDelay: '3s' }} aria-hidden="true" />
      <div className="diamond-3d" style={{ top: '68%', right: '18%', animationDelay: '13s', animationDuration: '13s' }} aria-hidden="true" />
      
      <div className="hexagon-3d" style={{ top: '38%', right: '32%', animationDelay: '6s' }} aria-hidden="true" />
      <div className="hexagon-3d" style={{ bottom: '45%', left: '38%', animationDelay: '15s', animationDuration: '19s' }} aria-hidden="true" />
      
      {/* 🟢 Green Physics Shapes */}
      <div className="star-3d" style={{ top: '22%', left: '36%', animationDelay: '4s', animationDuration: '11s' }} aria-hidden="true" />
      <div className="star-3d" style={{ bottom: '38%', right: '26%', animationDelay: '10s' }} aria-hidden="true" />
      
      {/* 🟠 Orange Physics Shapes */}
      <div className="circle-3d" style={{ top: '60%', right: '10%', animationDelay: '7s', animationDuration: '15s' }} aria-hidden="true" />
      <div className="circle-3d" style={{ bottom: '50%', left: '20%', animationDelay: '14s' }} aria-hidden="true" />
      
      <div className="pentagon-3d" style={{ top: '52%', left: '28%', animationDelay: '8s', animationDuration: '17s' }} aria-hidden="true" />
      <div className="pentagon-3d" style={{ bottom: '12%', right: '35%', animationDelay: '16s' }} aria-hidden="true" />
      
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

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-8 hover:border-neon/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-neon-2/20 flex items-center justify-center mb-6">
                <service.icon size={32} className="text-neon-2" />
              </div>
              <h3 className="text-2xl font-bold text-fg mb-4">{service.title}</h3>
              <p className="text-lg text-fg-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

