'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Media from '@/components/Media';
import Results from '@/components/Results';
import Contact from '@/components/Contact';
import { Lang } from '@/lib/i18n';

export default function Home() {
  const [lang, setLang] = useState<Lang>('he');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Lang | null;
    if (savedLang) {
      setLang(savedLang);
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === 'he' ? 'rtl' : 'ltr';
    }
  }, []);

  const toggleLanguage = () => {
    const newLang: Lang = lang === 'he' ? 'en' : 'he';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <main className="relative">
      <Navbar lang={lang} onToggleLang={toggleLanguage} />

      {/* Sections with better mobile spacing */}
      <div>
        <section id="hero" className="min-h-screen pt-16 md:pt-0">
          <Hero lang={lang} />
        </section>

        {/* Mobile Spacer */}
        <div className="mobile-spacer" />

        <section id="services" className="min-h-screen py-12 md:py-0">
          <Services lang={lang} />
        </section>

        {/* Mobile Spacer */}
        <div className="mobile-spacer" />

        <section id="why-us" className="min-h-screen py-12 md:py-0">
          <WhyUs lang={lang} />
        </section>

        {/* Mobile Spacer */}
        <div className="mobile-spacer" />

        <section id="media" className="min-h-screen py-12 md:py-0">
          <Media lang={lang} />
        </section>

        {/* Mobile Spacer */}
        <div className="mobile-spacer" />

        <section id="results" className="min-h-screen py-12 md:py-0">
          <Results lang={lang} />
        </section>

        {/* Mobile Spacer */}
        <div className="mobile-spacer" />

        <section id="contact" className="min-h-screen py-12 md:py-0">
          <Contact lang={lang} />
        </section>

        {/* Final Mobile Spacer */}
        <div className="mobile-spacer" />
      </div>

    </main>
  );
}

