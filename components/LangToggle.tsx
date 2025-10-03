'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Lang } from '@/lib/i18n';

interface LangToggleProps {
  lang: Lang;
  onToggle: () => void;
}

export default function LangToggle({ lang, onToggle }: LangToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className="flex items-center gap-2 px-4 py-2 md:px-3 md:py-1.5 rounded-full md:rounded-lg border border-neon/30 bg-neon/10 hover:bg-neon/20 transition-colors duration-200 text-neon font-medium text-sm glass neon-glow shadow-lg"
      aria-label={`Switch to ${lang === 'he' ? 'English' : 'Hebrew'}`}
    >
      <Globe size={18} className="md:w-4 md:h-4" />
      <span className="font-bold">{lang === 'he' ? 'EN' : 'HE'}</span>
    </motion.button>
  );
}

