import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, RefreshCcw, ShieldAlert, 
  Terminal, FileSearch, HardDrive, Cpu 
} from 'lucide-react';
import useTitle from '../hooks/useTitle';

const ErrorPage = ({ code = "404" }) => {
  const navigate = useNavigate();
  const timestamp = new Date().toISOString();
  const traceId = Math.random().toString(36).substring(2, 15).toUpperCase();
  useTitle("Error "+code);

  const details = {
    "404": {
      tag: "Object Not Found",
      title: "Navigation Error",
      desc: "the requested resource index was not found in the current station's memory.",
      icon: <FileSearch size={40} />
    },
    "401": {
      tag: "Access Denied",
      title: "Privilege Escalation",
      desc: "Your current authentication token lacks the clearance level for this sector.",
      icon: <ShieldAlert size={40} className="text-error" />
    }
  };

  const { tag, title, desc, icon } = details[code] || details["404"];

  return (
    <div className="min-h-screen bg-base-300 flex items-center justify-center p-4 lg:p-12 font-sans selection:bg-primary selection:text-white">
      {/* Main Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 bg-base-100 rounded-[2rem] overflow-hidden shadow-2xl border border-base-content/5">
        
        {/* LEFT PANEL: The Status */}
        <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Background Art */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-base-200 rounded-2xl flex items-center justify-center text-primary border border-base-300">
                {icon}
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] opacity-40">{tag}</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-4 italic">
              {code}<span className="text-primary">.</span>
            </h1>
            <h2 className="text-3xl font-bold mb-6 text-base-content leading-tight">
              {title}
            </h2>
            <p className="text-lg text-base-content/60 max-w-md mb-10 leading-relaxed">
              {desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate(-1)} 
                className="btn btn-primary btn-lg rounded-2xl px-8 shadow-xl shadow-primary/20 gap-3"
              >
                <ArrowLeft size={20} /> Return to Station
              </button>
              <button 
                onClick={() => window.location.reload()} 
                className="btn btn-ghost btn-lg rounded-2xl border border-base-300 gap-3"
              >
                <RefreshCcw size={20} /> Reset Session
              </button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-6 opacity-30">
            <div className="flex items-center gap-2"><Cpu size={14} /> <span className="text-[10px] font-bold uppercase">Micro-V4</span></div>
            <div className="flex items-center gap-2"><HardDrive size={14} /> <span className="text-[10px] font-bold uppercase">Node-04</span></div>
          </div>
        </div>

        {/* RIGHT PANEL: System Trace (The "Pro" Look) */}
        <div className="lg:col-span-5 bg-base-200/50 p-8 border-l border-base-300 flex flex-col justify-center">
          <div className="bg-neutral text-neutral-content rounded-3xl p-6 shadow-2xl font-mono text-[11px] leading-relaxed relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
              <Terminal size={16} className="text-success" />
              <span className="font-bold opacity-70 italic">System_Diagnostic_Tool</span>
            </div>
            
            <div className="space-y-2 opacity-80">
              <p><span className="text-primary font-bold">LOG:</span> Initializing error trace...</p>
              <p><span className="text-warning font-bold">WARN:</span> Connection to segment {code} failed.</p>
              <p><span className="text-error font-bold">FAIL:</span> Protocol_Mismatch_Exception</p>
              <div className="py-2"></div>
              <p className="text-white/40 border-t border-white/5 pt-2 italic">--- METADATA ---</p>
              <p><span className="opacity-40">TIMESTAMP:</span> {timestamp}</p>
              <p><span className="opacity-40">TRACE_ID:</span> {traceId}</p>
              <p><span className="opacity-40">STATION:</span> POS_ST_04_DHAKA</p>
              <p><span className="opacity-40">OS_KERN:</span> 6.1.0-21-Micro</p>
            </div>

            {/* Matrix-like subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-success/5 to-transparent pointer-events-none"></div>
          </div>
          
          <p className="mt-6 text-center text-[10px] font-bold uppercase tracking-widest opacity-30">
            If this persists, contact system administrator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;