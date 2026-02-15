import React, { useState, useEffect } from "react";
import { 
  PanelLeftClose, PanelLeftOpen, Search, 
  Bell, Wifi, Cpu, ChevronDown, Settings, LogOut, User
} from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ isCollapsed, setIsCollapsed }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    // GLASSMORPHISM: Using backdrop-blur and opacity for a premium feel in both modes
    <header className="sticky top-0 h-18 bg-base-100/80 backdrop-blur-md border-b border-base-300/50 flex items-center justify-between px-4 md:px-8 z-30 transition-all duration-300">
      
      {/* LEFT: Toggle & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="btn btn-ghost btn-circle text-base-content/60 hover:text-primary hover:bg-primary/10 transition-all"
        >
          {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </button>

        <div className="hidden md:flex relative w-full max-w-sm group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 opacity-30 group-focus-within:text-primary group-focus-within:opacity-100 transition-all" />
          <input 
            type="text" 
            placeholder="Search Terminal (⌘K)"
            className="input input-sm w-full pl-11 bg-base-200/50 hover:bg-base-200 focus:bg-base-100 border-none h-11 rounded-2xl transition-all font-medium text-sm shadow-inner"
          />
        </div>
      </div>

      {/* RIGHT: Actions & Metrics */}
      <div className="flex items-center gap-2">
        
        {/* TIME & SYSTEM HEALTH */}
        <div className="hidden lg:flex items-center gap-6 px-6 border-r border-base-300/50 mr-2">
          <div className="flex flex-col items-end leading-tight">
            <span className="text-sm font-black tabular-nums tracking-tight text-base-content">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
               <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
               <span className="text-[10px] opacity-40 font-black uppercase tracking-tighter">
                Station Active
               </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <button className="btn btn-ghost btn-circle btn-sm relative hover:bg-base-200">
            <Bell size={18} className="opacity-70" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-base-100"></span>
          </button>
        </div>

        {/* USER PROFILE */}
        <div className="dropdown dropdown-end ml-1">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost hover:bg-base-200/50 h-12 px-2 rounded-2xl group transition-all border border-transparent hover:border-base-300/50"
          >
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-xs font-black tracking-tight">N. Islam</span>
                <span className="text-[9px] opacity-40 font-black uppercase tracking-widest bg-base-300 px-1.5 py-0.5 rounded-md mt-0.5">Master Admin</span>
              </div>
              <div className="avatar">
                <div className="w-9 h-9 rounded-xl ring-2 ring-primary/20 ring-offset-2 ring-offset-base-100 group-hover:ring-primary/50 transition-all">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                </div>
              </div>
              <ChevronDown size={14} className="opacity-30 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* MENU: High-End Styling for Dark Mode */}
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100/95 backdrop-blur-xl rounded-2xl w-60 mt-4 border border-base-300/50 animate-in fade-in zoom-in-95 duration-200">
            <div className="px-4 py-3 border-b border-base-300/50 mb-2">
              <p className="text-[10px] font-black uppercase opacity-40 tracking-widest">Signed in as</p>
              <p className="text-sm font-bold truncate">n.islam@micropos.com</p>
            </div>
            <li>
              <a className="py-3 rounded-xl gap-3 font-bold text-sm">
                <User size={16} className="opacity-50" /> Profile Settings
              </a>
            </li>
            <li>
              <a className="py-3 rounded-xl gap-3 font-bold text-sm">
                <Settings size={16} className="opacity-50" /> System Config
              </a>
            </li>
            <div className="divider my-1 opacity-10"></div>
            <li>
              <a className="py-3 rounded-xl gap-3 font-bold text-sm text-error hover:bg-error/10">
                <LogOut size={16} /> Logout Station
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;