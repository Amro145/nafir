import Link from 'next/link';
import { 
  Users, 
  DollarSign, 
  Activity, 
  Signal, 
  ArrowLeft, 
  LayoutDashboard, 
  Settings, 
  LogOut,
  CheckCircle2,
  Menu
} from 'lucide-react';

const MOCK_REDEMPTIONS = [
  { id: 'USR-8902', type: 'Daily Access', time: '10 mins ago', status: 'Success' },
  { id: 'USR-8891', type: 'Weekly Premium', time: '45 mins ago', status: 'Success' },
  { id: 'USR-8845', type: 'Daily Access', time: '2 hours ago', status: 'Success' },
  { id: 'USR-8722', type: 'Daily Access', time: '3 hours ago', status: 'Success' },
  { id: 'USR-8650', type: 'Weekly Premium', time: '5 hours ago', status: 'Success' },

];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header (visible only on mobile) */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-20 shadow-md">
        <div className="font-bold text-lg tracking-tight flex items-center gap-2">
          <Signal className="text-emerald-500" size={20} />
          RuralNet Admin
        </div>
        <button className="p-2 hover:bg-slate-800 rounded-md transition-colors">
          <Menu size={22} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-slate-300 min-h-screen fixed left-0 top-0 bottom-0 z-10 shadow-2xl">
        <div className="p-6 border-b border-slate-800/60">
          <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <Signal className="text-emerald-500" size={24} />
            RuralNet
          </h2>
          <p className="text-[10px] text-slate-400 mt-1.5 uppercase font-bold tracking-widest pl-8">Sudan Manager</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 bg-emerald-600/15 text-emerald-400 px-4 py-3.5 rounded-xl transition-colors border border-emerald-500/20">
            <LayoutDashboard size={20} />
            <span className="font-medium">Overview</span>
          </Link>
          <button className="w-full flex items-center gap-3 hover:bg-slate-800 hover:text-white px-4 py-3.5 rounded-xl transition-colors text-left group">
            <Users size={20} className="text-slate-500 group-hover:text-white transition-colors" />
            <span className="font-medium">Subscribers</span>
          </button>
          <button className="w-full flex items-center gap-3 hover:bg-slate-800 hover:text-white px-4 py-3.5 rounded-xl transition-colors text-left group">
            <Settings size={20} className="text-slate-500 group-hover:text-white transition-colors" />
            <span className="font-medium">Settings</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800/60">
          <Link href="/" className="flex items-center gap-3 hover:bg-slate-800 hover:text-white px-4 py-3.5 rounded-xl transition-colors group">
            <ArrowLeft size={20} className="text-slate-500 group-hover:text-white transition-colors" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <button className="w-full mt-2 flex items-center gap-3 hover:bg-red-500/10 hover:text-red-400 text-slate-400 px-4 py-3.5 rounded-xl transition-colors text-left">
            <LogOut size={20} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 lg:p-10">
        
        {/* Mobile Back to Home (Visible on mobile only) */}
        <div className="md:hidden mb-6 mt-2">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 font-semibold transition-colors bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        <header className="mb-8 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">RuralNet Sudan - Admin Overview</h1>
          <p className="text-slate-500 mt-2 font-medium">Monitor node performance and live voucher redemptions.</p>
        </header>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8 md:mb-10">
          {/* Card 1: Users */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl ring-1 ring-blue-100">
                <Users size={24} />
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Total Users</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">142 <span className="text-sm font-bold text-emerald-500 ml-1 uppercase tracking-wider">Active</span></h3>
            </div>
          </div>

          {/* Card 2: Revenue */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl ring-1 ring-emerald-100">
                <DollarSign size={24} />
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Daily Revenue</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">45,000 <span className="text-sm text-slate-500 font-bold ml-1">SDG</span></h3>
            </div>
          </div>

          {/* Card 3: Uptime */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl ring-1 ring-amber-100">
                <Activity size={24} />
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Network Uptime</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">99.8%</h3>
            </div>
          </div>

          {/* Card 4: Bandwidth */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl ring-1 ring-purple-100">
                <Signal size={24} />
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Bandwidth Usage</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">2.4 <span className="text-xl text-slate-600 font-bold">GB</span> <span className="text-slate-300 font-light mx-1">/</span> <span className="text-xl text-slate-500 font-bold">5 GB</span></h3>
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-lg font-bold text-slate-900">Recent Voucher Redemptions</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="text-slate-400 text-xs uppercase tracking-wider border-b border-slate-100 font-semibold bg-white">
                  <th className="py-4 px-6">User ID</th>
                  <th className="py-4 px-6">Voucher Type</th>
                  <th className="py-4 px-6">Time</th>
                  <th className="py-4 px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {MOCK_REDEMPTIONS.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="py-4 px-6 text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{item.id}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${
                        item.type === 'Daily Access' ? 'bg-blue-50 text-blue-600 ring-1 ring-blue-100 inset-0' : 'bg-purple-50 text-purple-600 ring-1 ring-purple-100 inset-0'
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-500">{item.time}</td>
                    <td className="py-4 px-6 text-sm text-right">
                      <div className="inline-flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full font-bold text-xs ring-1 ring-emerald-100/50">
                        <CheckCircle2 size={14} strokeWidth={3} />
                        {item.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
