'use client';

import { useLanguage } from './context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-white/10 text-white px-3 py-2 rounded-full shadow-xl hover:bg-slate-800 transition-all active:scale-95"
    >
      <Globe size={18} className="text-emerald-400" />
      <span className="text-sm font-bold tracking-tight">
        {lang === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
}
