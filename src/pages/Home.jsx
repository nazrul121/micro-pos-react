import React from 'react';
import { 
  TrendingUp, Users, Package, DollarSign, 
  ArrowUpRight, ArrowDownRight, ShoppingBag, 
  Clock, CheckCircle2, AlertCircle 
} from 'lucide-react';
import useTitle from '../hooks/useTitle';

const Home = () => {
  useTitle('Executive Dashboard');

  // Mock Data for Metrics
  const stats = [
    { title: 'Total Revenue', value: '$24,500.00', diff: '+12.5%', icon: <DollarSign />, color: 'primary' },
    { title: 'Total Orders', value: '456', diff: '+8.2%', icon: <ShoppingBag />, color: 'secondary' },
    { title: 'New Customers', value: '128', diff: '-3.1%', icon: <Users />, color: 'accent' },
    { title: 'Active Items', value: '1,204', diff: '+0.5%', icon: <Package />, color: 'info' },
  ];

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-700">
      
      {/* 1. WELCOME HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight italic">
            Dashboard<span className="text-primary">.</span>
          </h1>
          <p className="text-base-content/60 font-medium">Station 04 is currently performing at <span className="text-success font-bold">98% efficiency</span>.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-outline border-base-300 rounded-2xl px-6">Generate Report</button>
          <button className="btn btn-primary rounded-2xl px-6 shadow-lg shadow-primary/20">+ New Sale</button>
        </div>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-base-100 p-6 rounded-[2rem] border border-base-300 shadow-sm group hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl bg-${stat.color}/10 text-${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`flex items-center gap-1 text-xs font-black ${stat.diff.startsWith('+') ? 'text-success' : 'text-error'}`}>
                {stat.diff} {stat.diff.startsWith('+') ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>}
              </div>
            </div>
            <p className="text-xs font-bold uppercase opacity-40 tracking-widest">{stat.title}</p>
            <h3 className="text-2xl font-black mt-1 tabular-nums">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 3. RECENT TRANSACTIONS (Wide) */}
        <div className="lg:col-span-8 bg-base-100 rounded-[2.5rem] border border-base-300 p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Recent Transactions</h3>
            <button className="btn btn-ghost btn-sm text-primary">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="border-b border-base-300">
                  <th className="bg-transparent opacity-80 uppercase text-[11px]">Order ID</th>
                  <th className="bg-transparent opacity-80 uppercase text-[11px]">Customer</th>
                  <th className="bg-transparent opacity-80 uppercase text-[11px]">Status</th>
                  <th className="bg-transparent opacity-80 uppercase text-[11px] text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '#NX-9012', user: 'Sarah Connor', status: 'Completed', amount: '$120.00' },
                  { id: '#NX-9011', user: 'James Bond', status: 'Pending', amount: '$45.50' },
                  { id: '#NX-9010', user: 'Bruce Wayne', status: 'Completed', amount: '$2,400.00' },
                ].map((row, i) => (
                  <tr key={i} className="border-none hover:bg-base-200/50 transition-colors">
                    <td className="font-mono text-xs font-bold">{row.id}</td>
                    <td className="font-bold text-sm">{row.user}</td>
                    <td>
                      <span className={`badge border-none font-bold text-[10px] ${row.status === 'Completed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="text-right font-black tabular-nums">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. ACTIVITY LOG (Narrow) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-neutral text-neutral-content rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4">Quick Insights</h3>
                <div className="space-y-4">
                   <div className="flex gap-4">
                      <div className="w-1 bg-primary rounded-full"></div>
                      <p className="text-xs opacity-80 leading-relaxed">Sales are 15% higher in the afternoon. Consider adding more staff during 2 PM - 5 PM.</p>
                   </div>
                   <button className="btn btn-primary btn-sm rounded-xl w-full">Optimized View</button>
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-base-100 rounded-[2.5rem] border border-base-300 p-8 shadow-sm">
             <h3 className="text-lg font-bold mb-6">Device Status</h3>
             <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-success/10 text-success rounded-lg"><CheckCircle2 size={16}/></div>
                      <span className="text-sm font-bold">Receipt Printer</span>
                   </div>
                   <span className="text-[10px] font-bold opacity-40 uppercase">Ready</span>
                </div>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-error/10 text-error rounded-lg"><AlertCircle size={16}/></div>
                      <span className="text-sm font-bold">Cash Drawer</span>
                   </div>
                   <span className="text-[10px] font-bold text-error uppercase">Disconnected</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;