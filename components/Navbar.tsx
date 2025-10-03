'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { Lang } from '@/lib/i18n';
import LangToggle from './LangToggle';

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const sections = ['hero', 'services', 'why-us', 'media', 'results', 'contact'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
        setShowScrollTop(false);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setShowScrollTop(true);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'hero', label: lang === 'he' ? 'בית' : 'Home' },
    { id: 'services', label: lang === 'he' ? 'שירותים' : 'Services' },
    { id: 'media', label: lang === 'he' ? 'מדיה' : 'Media' },
    { id: 'results', label: lang === 'he' ? 'תוצאות' : 'Results' },
    { id: 'contact', label: lang === 'he' ? 'צור קשר' : 'Contact' },
  ];

  return (
    <>
      {/* Always Visible Navbar - Desktop & Mobile */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 md:py-4 glass shadow-lg"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-display font-bold text-neon hover:text-neon-2 transition-colors"
          >
            SCALE IT
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-neon'
                    : 'text-fg-muted hover:text-fg'
                }`}
              >
                {link.label}
              </button>
            ))}
            <LangToggle lang={lang} onToggle={onToggleLang} />
          </div>

          {/* Mobile Lang Toggle */}
          <div className="md:hidden">
            <LangToggle lang={lang} onToggle={onToggleLang} />
          </div>
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-neon to-neon-2 text-white flex items-center justify-center neon-glow hover:scale-110 transition-transform shadow-lg"
            aria-label={lang === 'he' ? 'חזרה לראש הדף' : 'Scroll to top'}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

