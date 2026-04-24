'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Wifi, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [voucherCode, setVoucherCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Mock network request delay for realistic UX
    setTimeout(() => {
      if (voucherCode === '12345') {
        router.push('/connected');
      } else {
        setError('Invalid voucher code. Please try again.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-emerald-600/10 blur-[120px]" />
        <div className="absolute top-[60%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-5 ring-1 ring-emerald-500/30 shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]">
              <Wifi size={32} />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight mb-1">RuralNet Sudan</h1>
            <p className="text-slate-400 text-sm text-center font-medium">Solar-Powered Micro-ISP</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="voucher" className="block text-sm font-medium text-slate-300 mb-2">
                Voucher Code
              </label>
              <input
                id="voucher"
                type="text"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
                placeholder="Enter 5-digit code"
                className="w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all text-xl text-center tracking-[0.2em] font-mono"
                required
                disabled={isLoading}
              />
              {error && (
                <p className="mt-3 text-red-400 text-sm font-medium text-center animate-in fade-in slide-in-from-top-1">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 px-4 rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Connect Now
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-slate-500">
              Need assistance? Contact your local network administrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
