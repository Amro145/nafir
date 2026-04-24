import Link from 'next/link';
import { Wifi, Sun, Signal, ShieldCheck, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] aspect-square rounded-full bg-amber-500/10 blur-[120px] animate-pulse duration-3000" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] aspect-square rounded-full bg-emerald-600/10 blur-[100px]" />
      </div>

      <div className="w-full max-w-3xl relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Logo/Icon Group */}
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative flex items-center justify-center space-x-3 bg-slate-900/80 p-5 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="p-3.5 bg-amber-500/20 text-amber-400 rounded-2xl ring-1 ring-amber-500/30">
                <Sun size={36} strokeWidth={2.5} />
              </div>
              <div className="p-3.5 bg-emerald-500/20 text-emerald-400 rounded-2xl ring-1 ring-emerald-500/30">
                <Wifi size={36} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-5">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 tracking-tight drop-shadow-sm">
              RuralNet Sudan
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Affordable, Solar-Powered Internet for Rural Communities.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400 font-medium pt-2">
            <div className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm">
              <Zap size={16} className="text-amber-400" />
              <span>Solar Powered</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm">
              <Signal size={16} className="text-emerald-400" />
              <span>Reliable Connectivity</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm">
              <ShieldCheck size={16} className="text-blue-400" />
              <span>Secure Access</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="w-full max-w-sm md:max-w-lg pt-6 flex flex-col md:flex-row gap-4 md:gap-5">
            <Link 
              href="/login" 
              className="flex-1 group flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 md:py-5 px-6 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] text-lg"
            >
              <Wifi size={22} className="group-hover:animate-pulse" />
              Connect to Internet
            </Link>

            <Link 
              href="/dashboard" 
              className="flex-1 flex items-center justify-center gap-2.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 hover:border-slate-500 text-white font-semibold py-4 md:py-5 px-6 rounded-2xl transition-all duration-300 active:scale-[0.98] text-lg backdrop-blur-sm"
            >
              View Admin Dashboard
            </Link>
          </div>

        </div>
      </div>
      
      {/* Footer Text */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">
          MVP Version • Built for Hackathon Demo
        </p>
      </div>
    </div>
  );
}
