import React from 'react';
import { 
  Users, Package, DollarSign, 
  ArrowUpRight, ArrowDownRight, ShoppingBag, 
  CheckCircle2, AlertCircle, FileText, Plus
} from 'lucide-react';
import useTitle from '../hooks/useTitle';

const Home = () => {
  useTitle('Executive Dashboard');

  const stats = [
    { title: 'Total Revenue', value: '$24,500.00', diff: '+12.5%', icon: <DollarSign size={20}/>, color: 'primary' },
    { title: 'Total Orders', value: '456', diff: '+8.2%', icon: <ShoppingBag size={20}/>, color: 'secondary' },
    { title: 'New Customers', value: '128', diff: '-3.1%', icon: <Users size={20}/>, color: 'accent' },
    { title: 'Active Items', value: '1,204', diff: '+0.5%', icon: <Package size={20}/>, color: 'info' },
  ];

  const transactions = [
    { id: '#NX-9012', user: 'Sarah Connor', status: 'Completed', amount: '$120.00', date: 'Oct 24, 14:20' },
    { id: '#NX-9011', user: 'James Bond', status: 'Pending', amount: '$45.50', date: 'Oct 24, 13:45' },
    { id: '#NX-9010', user: 'Bruce Wayne', status: 'Completed', amount: '$2,400.00', date: 'Oct 23, 11:10' },
    { id: '#NX-9009', user: 'Diana Prince', status: 'Refunded', amount: '$89.00', date: 'Oct 23, 09:15' },
  ];

  return (
    <div className="h-full overflow-y-auto bg-base-200/50 custom-scrollbar">
      <div className="p-4 md:p-8 space-y-8 max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* 1. WELCOME HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter italic">
              Dashboard<span className="text-primary group-hover:animate-pulse">.</span>
            </h1>
            <p className="text-sm md:text-base text-base-content/50 font-medium">
              Station 04 performance: <span className="text-success font-bold drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">98% efficiency</span>.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn btn-outline border-base-300/50 bg-base-100/50 backdrop-blur-md rounded-2xl px-5 h-12 flex-1 md:flex-none hover:bg-primary hover:border-primary hover:text-white transition-all">
              <FileText size={18} /> <span className="hidden sm:inline">Report</span>
            </button>
            <button className="btn btn-primary rounded-2xl px-6 h-12 shadow-lg shadow-primary/20 flex-1 md:flex-none hover:scale-105 transition-transform">
              <Plus size={20} /> <span className="whitespace-nowrap">New Sale</span>
            </button>
          </div>
        </div>

        {/* 2. STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-base-100/70 backdrop-blur-sm p-6 rounded-4xl border shadow-sm group hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
              {/* Subtle background glow for dark mode */}
              <div className={`absolute -right-4 -top-4 w-20 h-20 bg-${stat.color}/10 rounded-full blur-2xl group-hover:bg-${stat.color}/20 transition-all`}></div>
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`p-3 rounded-2xl bg-${stat.color}/10 text-${stat.color} ring-1 ring-${stat.color}/20`}>
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full ${stat.diff.startsWith('+') ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
                  {stat.diff} {stat.diff.startsWith('+') ? <ArrowUpRight size={12}/> : <ArrowDownRight size={12}/>}
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase opacity-40 tracking-[0.15em]">{stat.title}</p>
                <h3 className="text-2xl font-black mt-1 tabular-nums tracking-tight group-hover:text-primary transition-colors">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* 3. MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8">
          
          {/* RECENT TRANSACTIONS */}
          <div className="lg:col-span-8 bg-base-100/60 backdrop-blur-sm rounded-[2.5rem] border border-base-300/30 p-6 md:p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8 px-2">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-30">Terminal Feed</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                <span className="text-[10px] font-black uppercase opacity-60">Live Feed</span>
              </div>
            </div>
            
            <div className="overflow-x-auto custom-scrollbar">
              <table className="table w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-base-300/20 text-base-content/40 text-[10px] uppercase font-black tracking-widest">
                    <th className="bg-transparent">ID</th>
                    <th className="bg-transparent">Client</th>
                    <th className="bg-transparent">Status</th>
                    <th className="bg-transparent">Timestamp</th>
                    <th className="bg-transparent text-right">Credit</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {transactions.map((row, i) => (
                    <tr key={i} className="border-none hover:bg-primary/5 transition-colors group">
                      <td className="font-mono text-xs font-bold opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">{row.id}</td>
                      <td className="font-bold text-base-content/80 group-hover:text-base-content transition-colors">{row.user}</td>
                      <td>
                        <div className={`badge border-none font-black text-[9px] uppercase tracking-tighter shadow-sm ${
                          row.status === 'Completed' ? 'bg-success/10 text-success ring-1 ring-success/20' : 
                          row.status === 'Pending' ? 'bg-warning/10 text-warning ring-1 ring-warning/20' : 'bg-error/10 text-error ring-1 ring-error/20'
                        }`}>
                          {row.status}
                        </div>
                      </td>
                      <td className="opacity-40 font-medium text-xs whitespace-nowrap">{row.date}</td>
                      <td className="text-right font-black tabular-nums group-hover:text-primary transition-colors">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SIDE PANEL */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral/90 backdrop-blur-xl text-neutral-content rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group border border-white/5">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_theme(colors.primary.DEFAULT)]"></div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest opacity-60">AI Insights</h3>
                </div>
                <p className="text-sm font-medium leading-relaxed opacity-90 italic">
                  "Peak traffic detected. <span className="text-primary font-black">Express Lane</span> activation recommended to maintain 98% efficiency."
                </p>
                <button className="btn btn-primary btn-sm rounded-xl w-full border-none shadow-lg shadow-primary/30 hover:brightness-110">Optimize Workflow</button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] group-hover:bg-primary/30 transition-all duration-700"></div>
            </div>

            <div className="bg-base-100/60 backdrop-blur-sm rounded-[2.5rem] border border-base-300/30 p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-6">Device Network</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between group/dev">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-success/10 text-success rounded-2xl ring-1 ring-success/20 group-hover/dev:scale-110 transition-transform"><CheckCircle2 size={18}/></div>
                    <div>
                      <p className="text-sm font-black leading-none">Receipt Printer</p>
                      <p className="text-[10px] opacity-40 mt-1 font-bold font-mono uppercase">Online • 192.168.1.4</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_theme(colors.success.DEFAULT)]"></div>
                </div>
                
                <div className="flex items-center justify-between group/dev">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-error/10 text-error rounded-2xl ring-1 ring-error/20 group-hover/dev:scale-110 transition-transform"><AlertCircle size={18}/></div>
                    <div>
                      <p className="text-sm font-black leading-none">Cash Drawer</p>
                      <p className="text-[10px] opacity-40 mt-1 font-bold font-mono uppercase">Offline • Disconnected</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-error opacity-40"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;