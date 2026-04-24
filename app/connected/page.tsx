'use client';

import { CheckCircle, Globe, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function ConnectedPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-lg aspect-square rounded-full bg-emerald-600/10 blur-[100px] animate-pulse duration-3000" />
      </div>

      <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in duration-500">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-emerald-500/20 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center">
          
          {/* Success Icon */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-30 animate-pulse duration-2000" />
            <div className="relative bg-emerald-500/10 text-emerald-400 p-5 rounded-full ring-1 ring-emerald-500/40 shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]">
              <CheckCircle size={48} strokeWidth={2.5} />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">{t('connected_title')}</h1>
          <p className="text-slate-300 mb-8 leading-relaxed text-sm">
            {t('connected_msg')}
          </p>

          <div className="w-full space-y-4">
            <button
              onClick={() => router.refresh()}
              className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]"
            >
              <Globe size={20} />
              {t('start_browsing')}
            </button>

            <button
              onClick={() => router.push('#')}
              className="w-full flex items-center justify-between gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-4 px-5 rounded-xl transition-all duration-200 active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <BookOpen size={20} className="text-blue-400" />
                <span className="text-sm">{t('edu_content')}</span>
              </div>
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-slate-300 uppercase tracking-wider font-semibold">{t('offline')}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
