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
      
      {/* 🎨 Global Background Shapes - Good density throughout */}
      {/* Blue/Gray Shapes */}
      <div className="cube-3d" style={{ top: '8%', left: '5%', animationDelay: '0s' }} aria-hidden="true" />
      <div className="cube-3d" style={{ top: '25%', right: '8%', animationDelay: '8s', animationDuration: '25s' }} aria-hidden="true" />
      <div className="cube-3d" style={{ top: '52%', left: '15%', animationDelay: '16s' }} aria-hidden="true" />
      <div className="cube-3d" style={{ top: '78%', right: '20%', animationDelay: '12s', animationDuration: '22s' }} aria-hidden="true" />
      
      <div className="triangle-3d" style={{ top: '15%', right: '15%', animationDelay: '4s' }} aria-hidden="true" />
      <div className="triangle-3d" style={{ top: '40%', left: '10%', animationDelay: '10s', animationDuration: '18s' }} aria-hidden="true" />
      <div className="triangle-3d" style={{ top: '65%', right: '25%', animationDelay: '18s' }} aria-hidden="true" />
      <div className="triangle-3d" style={{ top: '90%', left: '30%', animationDelay: '6s', animationDuration: '16s' }} aria-hidden="true" />
      
      <div className="diamond-3d" style={{ top: '12%', left: '25%', animationDelay: '2s' }} aria-hidden="true" />
      <div className="diamond-3d" style={{ top: '35%', right: '18%', animationDelay: '14s', animationDuration: '14s' }} aria-hidden="true" />
      <div className="diamond-3d" style={{ top: '58%', left: '35%', animationDelay: '20s' }} aria-hidden="true" />
      <div className="diamond-3d" style={{ top: '82%', right: '12%', animationDelay: '9s', animationDuration: '15s' }} aria-hidden="true" />
      
      <div className="hexagon-3d" style={{ top: '20%', right: '30%', animationDelay: '5s' }} aria-hidden="true" />
      <div className="hexagon-3d" style={{ top: '48%', left: '8%', animationDelay: '15s', animationDuration: '20s' }} aria-hidden="true" />
      <div className="hexagon-3d" style={{ top: '72%', right: '35%', animationDelay: '22s' }} aria-hidden="true" />
      <div className="hexagon-3d" style={{ top: '95%', left: '18%', animationDelay: '11s', animationDuration: '19s' }} aria-hidden="true" />
      
      {/* Green Stars */}
      <div className="star-3d" style={{ top: '18%', left: '40%', animationDelay: '3s' }} aria-hidden="true" />
      <div className="star-3d" style={{ top: '42%', right: '28%', animationDelay: '11s', animationDuration: '12s' }} aria-hidden="true" />
      <div className="star-3d" style={{ top: '68%', left: '45%', animationDelay: '19s' }} aria-hidden="true" />
      <div className="star-3d" style={{ top: '88%', right: '40%', animationDelay: '7s', animationDuration: '11s' }} aria-hidden="true" />
      
      {/* Orange Circles */}
      <div className="circle-3d" style={{ top: '10%', right: '10%', animationDelay: '1s' }} aria-hidden="true" />
      <div className="circle-3d" style={{ top: '32%', left: '20%', animationDelay: '13s', animationDuration: '16s' }} aria-hidden="true" />
      <div className="circle-3d" style={{ top: '55%', right: '15%', animationDelay: '21s' }} aria-hidden="true" />
      <div className="circle-3d" style={{ top: '75%', left: '12%', animationDelay: '8s', animationDuration: '15s' }} aria-hidden="true" />
      
      {/* Orange Pentagons */}
      <div className="pentagon-3d" style={{ top: '22%', left: '18%', animationDelay: '6s', animationDuration: '17s' }} aria-hidden="true" />
      <div className="pentagon-3d" style={{ top: '45%', right: '22%', animationDelay: '17s' }} aria-hidden="true" />
      <div className="pentagon-3d" style={{ top: '70%', left: '28%', animationDelay: '23s', animationDuration: '18s' }} aria-hidden="true" />
      <div className="pentagon-3d" style={{ top: '92%', right: '18%', animationDelay: '10s' }} aria-hidden="true" />

      {/* Sections */}
      <div>
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <Hero lang={lang} />
        </section>

        <section id="services" className="min-h-screen flex items-center justify-center py-20">
          <Services lang={lang} />
        </section>

        <section id="why-us" className="py-16 md:py-20">
          <WhyUs lang={lang} />
        </section>

        <section id="media" className="min-h-screen flex items-center justify-center py-20">
          <Media lang={lang} />
        </section>

        <section id="results" className="min-h-screen flex items-center justify-center py-20">
          <Results lang={lang} />
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
          <Contact lang={lang} />
        </section>

        {/* Footer */}
        <footer id="footer" className="py-12 px-4 border-t border-neon/20 glass">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon to-neon-2 flex items-center justify-center neon-glow">
                    <span className="text-bg font-bold text-xl">S</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-neon">Scale It Media</div>
                    <div className="text-sm text-fg-muted">{lang === 'he' ? 'אסטרטגיות גדילה בדיגיטל' : 'Digital Growth Strategies'}</div>
                  </div>
                </div>
                <p className="text-fg-muted text-sm leading-relaxed max-w-md">
                  {lang === 'he' 
                    ? 'אנחנו עוזרים לעסקים לצמוח באמצעות אסטרטגיות דיגיטל מוכחות ותוצאות מדידות.'
                    : 'We help businesses grow through proven digital strategies and measurable results.'
                  }
                </p>
              </div>

              {/* Navigation Links */}
              <div>
                <h3 className="text-lg font-bold text-neon-2 mb-4">{lang === 'he' ? 'ניווט' : 'Navigation'}</h3>
                <nav className="space-y-2">
                  <a href="#hero" className="block text-fg-muted hover:text-neon transition-colors">{lang === 'he' ? 'בית' : 'Home'}</a>
                  <a href="#services" className="block text-fg-muted hover:text-neon transition-colors">{lang === 'he' ? 'שירותים' : 'Services'}</a>
                  <a href="#why-us" className="block text-fg-muted hover:text-neon transition-colors">{lang === 'he' ? 'איך אנחנו עוזרים' : 'How We Help'}</a>
                  <a href="#media" className="block text-fg-muted hover:text-neon transition-colors">{lang === 'he' ? 'מדיה' : 'Media'}</a>
                  <a href="#results" className="block text-fg-muted hover:text-neon transition-colors">{lang === 'he' ? 'תוצאות' : 'Results'}</a>
                  <a href="#contact" className="block text-fg-muted hover:text-neon transition-colors">{lang === 'he' ? 'צור קשר' : 'Contact'}</a>
                </nav>
              </div>

              {/* Legal & Contact */}
              <div>
                <h3 className="text-lg font-bold text-neon-2 mb-4">{lang === 'he' ? 'מידע נוסף' : 'More Info'}</h3>
                <div className="space-y-2">
                  <a href="/privacy" className="block text-fg-muted hover:text-neon transition-colors text-sm">{lang === 'he' ? 'מדיניות פרטיות' : 'Privacy Policy'}</a>
                  <a href="/terms" className="block text-fg-muted hover:text-neon transition-colors text-sm">{lang === 'he' ? 'תנאי שימוש' : 'Terms of Service'}</a>
                  <a href="mailto:hello@scale-it.co.il" className="block text-fg-muted hover:text-neon transition-colors text-sm">hello@scale-it.co.il</a>
                  <a href="tel:+972501234567" className="block text-fg-muted hover:text-neon transition-colors text-sm">+972 50-123-4567</a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-neon/10">
              {/* Copyright */}
              <div className="text-sm text-fg-muted">
                © 2025 Scale It Media. {lang === 'he' ? 'כל הזכויות שמורות.' : 'All rights reserved.'}
              </div>

              {/* Built by */}
              <div className="flex items-center gap-2 text-fg-muted">
                <span className="text-sm">{lang === 'he' ? 'נבנה על ידי' : 'Built by'}</span>
                <a
                  href="https://zilber.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-neon-2/20 to-neon/20 border border-neon/30 hover:border-neon-2 transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 text-neon-2 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-2 to-neon text-sm">
                    Zilber Solutions
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-10 w-32 h-32 rounded-full bg-neon/10 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 right-10 w-32 h-32 rounded-full bg-neon-2/10 blur-3xl pointer-events-none" aria-hidden="true" />
        </footer>
      </div>

    </main>
  );
}

