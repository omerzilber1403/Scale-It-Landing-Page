'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { getTranslations, Lang } from '@/lib/i18n';

interface ContactProps {
  lang: Lang;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  budget: string;
}

export default function Contact({ lang }: ContactProps) {
  const t = getTranslations(lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    budget: t.contact.budgetOptions[0],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          budget: t.contact.budgetOptions[0],
        });
        setStep(1);
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      
      {/* 🎲 3D Geometric Shapes - Blue */}
      <div className="cube-3d" style={{ top: '14%', right: '10%', animationDelay: '2s', animationDuration: '21s' }} aria-hidden="true" />
      <div className="cube-3d" style={{ bottom: '26%', left: '12%', animationDelay: '9s' }} aria-hidden="true" />
      
      <div className="triangle-3d" style={{ top: '36%', left: '8%', animationDelay: '5s', animationDuration: '17s' }} aria-hidden="true" />
      <div className="triangle-3d" style={{ bottom: '36%', right: '20%', animationDelay: '12s' }} aria-hidden="true" />
      
      <div className="diamond-3d" style={{ top: '24%', left: '28%', animationDelay: '3s' }} aria-hidden="true" />
      <div className="diamond-3d" style={{ top: '68%', right: '24%', animationDelay: '13s', animationDuration: '14s' }} aria-hidden="true" />
      
      <div className="hexagon-3d" style={{ top: '46%', right: '36%', animationDelay: '7s' }} aria-hidden="true" />
      <div className="hexagon-3d" style={{ bottom: '46%', left: '38%', animationDelay: '15s', animationDuration: '22s' }} aria-hidden="true" />
      
      {/* 🟢 Green Physics Shapes */}
      <div className="star-3d" style={{ top: '30%', left: '40%', animationDelay: '6s' }} aria-hidden="true" />
      <div className="star-3d" style={{ bottom: '40%', right: '26%', animationDelay: '11s', animationDuration: '11s' }} aria-hidden="true" />
      
      {/* 🟠 Orange Physics Shapes */}
      <div className="circle-3d" style={{ top: '60%', right: '16%', animationDelay: '8s', animationDuration: '15s' }} aria-hidden="true" />
      <div className="circle-3d" style={{ bottom: '38%', left: '28%', animationDelay: '14s' }} aria-hidden="true" />
      
      <div className="pentagon-3d" style={{ top: '52%', left: '18%', animationDelay: '10s', animationDuration: '17s' }} aria-hidden="true" />
      <div className="pentagon-3d" style={{ bottom: '14%', right: '34%', animationDelay: '16s' }} aria-hidden="true" />
      
      {/* ☁️ Soft Clouds for depth */}
      <div className="cloud w-66 h-50 animate-cloud-drift" style={{ top: '28%', left: '14%', animationDelay: '7s' }} aria-hidden="true" />
      <div className="cloud w-62 h-48 animate-cloud-drift" style={{ bottom: '24%', right: '20%', animationDelay: '15s' }} aria-hidden="true" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-center text-neon neon-text-glow"
        >
          {t.contact.header}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-fg mb-8 text-lg"
        >
          {t.contact.subheader}
        </motion.p>

        {/* Social Media Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mb-8"
        >
          <a
            href="https://wa.me/972542259669"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-br from-neon/20 to-neon-2/20 border-2 border-neon flex items-center justify-center hover:bg-neon hover:scale-110 transition-all duration-300 neon-glow group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-neon group-hover:text-bg transition-colors">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          
          <a
            href="https://www.instagram.com/scale.it.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-br from-neon/20 to-neon-2/20 border-2 border-neon flex items-center justify-center hover:bg-neon hover:scale-110 transition-all duration-300 neon-glow group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-neon group-hover:text-bg transition-colors">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a
            href="https://www.linkedin.com/company/scale-it-digital"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-br from-neon/20 to-neon-2/20 border-2 border-neon flex items-center justify-center hover:bg-neon hover:scale-110 transition-all duration-300 neon-glow group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-neon group-hover:text-bg transition-colors">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl p-8"
        >
          {/* Success/Error Messages */}
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/50 flex items-center gap-3"
              >
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-green-500">
                    {lang === 'he' ? 'ההודעה נשלחה בהצלחה!' : 'Message sent successfully!'}
                  </p>
                  <p className="text-sm text-fg-muted">
                    {lang === 'he' ? 'ניצור איתך קשר בקרוב' : "We'll contact you soon"}
                  </p>
                </div>
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/50 flex items-center gap-3"
              >
                <XCircle className="text-red-500 flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-red-500">
                    {lang === 'he' ? 'שגיאה בשליחה' : 'Error sending message'}
                  </p>
                  <p className="text-sm text-fg-muted">
                    {lang === 'he' ? 'אנא נסה שוב או צור קשר ישירות' : 'Please try again or contact us directly'}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <label className="block text-fg mb-2 font-medium">{t.contact.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-fg-muted/30 text-fg focus:border-neon focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-fg mb-2 font-medium">{t.contact.companyLabel}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    placeholder={t.contact.companyPlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-fg-muted/30 text-fg focus:border-neon focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3 rounded-lg bg-neon text-bg font-bold hover:bg-neon-2 transition-colors"
                >
                  {t.contact.nextButton}
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-fg mb-2 font-medium">{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-fg-muted/30 text-fg focus:border-neon focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-fg mb-2 font-medium">{t.contact.phoneLabel}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-fg-muted/30 text-fg focus:border-neon focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 rounded-lg border border-neon text-neon font-bold hover:bg-neon/10 transition-colors"
                  >
                    {t.contact.previousButton}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 rounded-lg bg-neon text-bg font-bold hover:bg-neon-2 transition-colors"
                  >
                    {t.contact.nextButton}
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div>
                  <label className="block text-fg mb-2 font-medium">{t.contact.budgetLabel}</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-fg-muted/30 text-fg focus:border-neon focus:outline-none transition-colors"
                  >
                    {t.contact.budgetOptions.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={isSubmitting}
                    className="flex-1 py-3 rounded-lg border border-neon text-neon font-bold hover:bg-neon/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t.contact.previousButton}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 rounded-lg bg-gradient-to-r from-neon to-neon-2 text-bg font-bold hover:shadow-xl transition-all neon-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        {lang === 'he' ? 'שולח...' : 'Sending...'}
                      </>
                    ) : (
                      t.contact.submitButton
                    )}
                  </button>
                </div>
              </>
            )}
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

