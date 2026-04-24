'use client';

import Link from 'next/link';
import { 
  Users, 
  Activity, 
  Zap, 
  ArrowLeft, 
  LayoutDashboard, 
  Settings, 
  LogOut,
  Menu,
  TrendingDown,
  TrendingUp,
  School,
  Sprout,
  MessageCircle,
  BarChart3,
  Globe,
  Signal
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import data from '@/data/data.json';

export default function DashboardPage() {
  const { t, isRTL } = useLanguage();

  // Extract necessary data from mock database
  const { kpiSummary, monthlyData } = data;
  
  // Get Q4 Data (Oct, Nov, Dec)
  const q4Data = monthlyData.filter(m => ['Oct', 'Nov', 'Dec'].includes(m.month));
  
  // Get latest month (December) for usage breakdown
  const latestMonth = monthlyData[monthlyData.length - 1];

  const USAGE_BREAKDOWN = [
    { label: t('education'), percentage: latestMonth.educationUsagePercent, color: 'bg-blue-500', icon: <School size={16} className="text-blue-500" /> },
    { label: t('farming'), percentage: latestMonth.farmingUsagePercent, color: 'bg-emerald-500', icon: <Sprout size={16} className="text-emerald-500" /> },
    { label: t('social'), percentage: latestMonth.socialUsagePercent, color: 'bg-slate-400', icon: <MessageCircle size={16} className="text-slate-400" /> },
  ];

  const monthNames: Record<string, string> = {
    'Oct': t('october'),
    'Nov': t('november'),
    'Dec': t('december')
  };

  return (
    <div className={`min-h-screen bg-[#f8fafc] flex flex-col md:flex-row font-sans selection:bg-emerald-100 selection:text-emerald-900 ${isRTL ? 'font-arabic' : ''}`}>
      {/* Mobile Header */}
      <div className="md:hidden bg-[#0f172a] text-white p-4 flex justify-between items-center sticky top-0 z-20 shadow-md">
        <div className="font-bold text-lg tracking-tight flex items-center gap-2">
          <Globe className="text-emerald-500" size={20} />
          {t('branding')}
        </div>
        <button className="p-2 hover:bg-slate-800 rounded-md transition-colors">
          <Menu size={22} />
        </button>
      </div>

      {/* Sidebar - Enhanced for Premium Feel */}
      <aside className={`hidden md:flex flex-col w-72 bg-[#0f172a] text-slate-300 min-h-screen fixed ${isRTL ? 'right-0 border-l' : 'left-0 border-r'} top-0 bottom-0 z-10 shadow-2xl border-white/5`}>
        <div className="p-8">
          <div className={`flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <div className="p-2 bg-emerald-500 rounded-lg shadow-lg shadow-emerald-500/20">
              <Globe className="text-white" size={24} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">{t('branding')}</h2>
          </div>
          <div className={`flex flex-col mt-4 p-3 bg-white/5 rounded-xl border border-white/10 ${isRTL ? 'text-right' : ''}`}>
            <p className="text-[10px] text-emerald-400 uppercase font-black tracking-widest mb-1">{t('lead_dev')}</p>
            <p className="text-sm font-medium text-white">Amro Altayeb</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1.5">
          <Link href="/dashboard" className={`flex items-center gap-3 bg-emerald-500/10 text-emerald-400 px-4 py-3 rounded-xl transition-all border border-emerald-500/20 shadow-sm ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <LayoutDashboard size={18} />
            <span className="font-semibold text-sm">{t('executive_overview')}</span>
          </Link>
          <button className={`w-full flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl transition-all text-left group ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <Users size={18} className="text-slate-500 group-hover:text-emerald-400 transition-colors" />
            <span className="font-medium text-sm">{t('network_analytics')}</span>
          </button>
          <button className={`w-full flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl transition-all text-left group ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <Settings size={18} className="text-slate-500 group-hover:text-emerald-400 transition-colors" />
            <span className="font-medium text-sm">{t('system_settings')}</span>
          </button>
        </nav>

        <div className="p-6 border-t border-white/5 space-y-2">
          <Link href="/" className={`flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-xl transition-all group ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <ArrowLeft size={18} className={`text-slate-500 group-hover:text-white transition-colors ${isRTL ? 'rotate-180' : ''}`} />
            <span className="font-medium text-sm">{t('portal_home')}</span>
          </Link>
          <button className={`w-full flex items-center gap-3 hover:bg-red-500/10 hover:text-red-400 text-slate-400 px-4 py-3 rounded-xl transition-all text-left group ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <LogOut size={18} className="group-hover:text-red-400" />
            <span className="font-medium text-sm">{t('sign_out')}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`flex-1 ${isRTL ? 'md:mr-72 text-right' : 'md:ml-72 text-left'} p-6 md:p-10 lg:p-12`}>
        
        <header className={`mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap size={12} fill="currentColor" />
              {t('live_status')}
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{t('growth_impact_dash')}</h1>
            <p className="text-slate-500 mt-2 font-medium text-lg italic">{t('hackathon')}</p>
          </div>
          <div className={`hidden md:block ${isRTL ? 'text-left' : 'text-right'}`}>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">{t('status')}</p>
            <p className={`text-sm font-bold text-emerald-600 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              {t('systems_operational')}
            </p>
          </div>
        </header>

        {/* Top KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {/* Card 1: Active Users */}
          <div className="bg-white p-7 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`flex justify-between items-start mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl ring-1 ring-blue-100 shadow-inner">
                <Users size={24} strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-md">
                <TrendingUp size={14} />
                +12.4%
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">{t('active_users')}</p>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">{kpiSummary.maxActiveUsers.toLocaleString()}</h3>
              <p className="text-sm text-slate-400 mt-2 font-medium">{t('peak_dau')}: <span className="text-slate-600 font-bold">{kpiSummary.peakDAU}</span></p>
            </div>
          </div>

          {/* Card 2: Cost Per User */}
          <div className="bg-white p-7 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`flex justify-between items-start mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl ring-1 ring-emerald-100 shadow-inner">
                <BarChart3 size={24} strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-md uppercase tracking-wider">
                {t('efficiency_high')}
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">{t('cost_per_user')}</p>
              <h3 className="text-4xl font-black text-emerald-600 tracking-tight">{latestMonth.costPerUserSDG.toLocaleString()} <span className="text-base font-black">{t('sdg')}</span></h3>
              <p className="text-sm text-slate-400 mt-2 font-medium leading-tight">{t('down_from_jan')}</p>
            </div>
          </div>

          {/* Card 3: Network Uptime */}
          <div className="bg-white p-7 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`flex justify-between items-start mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl ring-1 ring-amber-100 shadow-inner">
                <Activity size={24} strokeWidth={2.5} />
              </div>
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse mt-2"></div>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">{t('uptime')}</p>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">{latestMonth.networkUptimePercent}%</h3>
              <p className="text-sm text-slate-400 mt-2 font-medium">{t('avg_baseline')}: <span className="text-slate-600 font-bold">{kpiSummary.avgNetworkUptimePercent}%</span></p>
            </div>
          </div>

          {/* Card 4: Avg Speed */}
          <div className="bg-white p-7 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`flex justify-between items-start mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl ring-1 ring-purple-100 shadow-inner">
                <Signal size={24} strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">{t('avg_speed')}</p>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">{latestMonth.avgSpeedMbps} <span className="text-base font-black text-slate-400">Mbps</span></h3>
              <p className="text-sm text-slate-400 mt-2 font-medium">{t('target_coverage')}: <span className="text-slate-600 font-bold">{kpiSummary.targetCoveragePercent}%</span></p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Social Impact Section */}
          <div className="lg:col-span-4 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col">
            <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="p-2 bg-slate-900 text-white rounded-lg">
                <Globe size={20} />
              </div>
              <h2 className={`text-xl font-black text-slate-900 leading-tight ${isRTL ? 'text-right' : ''}`}>{t('usage_breakdown')} <span className="text-slate-400 block text-xs font-bold uppercase tracking-wider mt-1">({monthNames[latestMonth.month]})</span></h2>
            </div>
            
            <div className="space-y-8 flex-1">
              {USAGE_BREAKDOWN.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {item.icon}
                      <span className="text-sm font-bold text-slate-700">{item.label}</span>
                    </div>
                    <span className="text-sm font-black text-slate-900">{item.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(0,0,0,0.05)]`} 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <p className={`text-xs text-blue-700 font-black uppercase tracking-widest mb-1 ${isRTL ? 'text-right' : ''}`}>{t('impact_highlight')}</p>
              <p className={`text-sm text-blue-900/80 font-medium leading-relaxed italic ${isRTL ? 'text-right' : ''}`}>"{t('impact_msg')}"</p>
            </div>
          </div>

          {/* Q4 Performance & Growth Table */}
          <div className="lg:col-span-8 bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden flex flex-col">
            <div className={`p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              <div className={isRTL ? 'text-right' : ''}>
                <h2 className="text-2xl font-black text-slate-900">{t('q4_performance')}</h2>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">{t('quarterly_benchmarks')}</p>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <BarChart3 size={14} />
                {t('regional_stats')}
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className={`w-full ${isRTL ? 'text-right' : 'text-left'} border-collapse min-w-[600px]`}>
                <thead>
                  <tr className={`text-slate-400 text-[10px] uppercase tracking-[0.2em] border-b border-slate-100 font-black bg-slate-50/30 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <th className={`py-5 px-8 ${isRTL ? 'text-right' : 'text-left'}`}>{t('month')}</th>
                    <th className={`py-5 px-8 ${isRTL ? 'text-right' : 'text-left'}`}>{t('active_users')}</th>
                    <th className={`py-5 px-8 ${isRTL ? 'text-right' : 'text-left'}`}>{t('avg_speed')}</th>
                    <th className={`py-5 px-8 ${isRTL ? 'text-right' : 'text-left'}`}>{t('uptime')}</th>
                    <th className={`py-5 px-8 ${isRTL ? 'text-left' : 'text-right'}`}>{t('cost_per_user')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 bg-white">
                  {q4Data.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="py-5 px-8">
                        <span className="text-sm font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {monthNames[row.month]}
                        </span>
                      </td>
                      <td className="py-5 px-8">
                        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Users size={14} className="text-slate-300" />
                          <span className="text-sm font-bold text-slate-600">{row.activeUsers.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="py-5 px-8">
                        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Zap size={14} className="text-purple-400" />
                          <span className="text-sm font-bold text-slate-600">{row.avgSpeedMbps}</span>
                        </div>
                      </td>
                      <td className="py-5 px-8">
                        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Activity size={14} className="text-amber-400" />
                          <span className="text-sm font-bold text-slate-600">{row.networkUptimePercent}%</span>
                        </div>
                      </td>
                      <td className={`py-5 px-8 ${isRTL ? 'text-left' : 'text-right'}`}>
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black ring-1 transition-all ${
                          row.costPerUserSDG <= 4500 
                            ? 'bg-emerald-50 text-emerald-600 ring-emerald-100' 
                            : 'bg-slate-50 text-slate-600 ring-slate-100'
                        }`}>
                          {row.costPerUserSDG.toLocaleString()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50/50 border-t border-slate-100 mt-auto">
              <div className={`flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{t('verified_by')}</span>
                <span className={`flex items-center gap-2 text-emerald-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  {t('nodes_optimized')}
                </span>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
