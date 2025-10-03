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

      {/* Scroll snap container */}
      <div className="snap-container">
        <section id="hero" className="snap-section">
          <Hero lang={lang} />
        </section>

        <section id="services" className="snap-section">
          <Services lang={lang} />
        </section>

        <section id="why-us" className="snap-section">
          <WhyUs lang={lang} />
        </section>

        <section id="media" className="snap-section">
          <Media lang={lang} />
        </section>

        <section id="results" className="snap-section">
          <Results lang={lang} />
        </section>

        <section id="contact" className="snap-section">
          <Contact lang={lang} />
        </section>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-3 pb-20 md:pb-3 text-center text-xs text-fg-muted pointer-events-none z-10">
        <p>© 2025 Scale It Media • {lang === 'he' ? 'נבנה עם' : 'Built with'} Next.js</p>
      </footer>
    </main>
  );
}

