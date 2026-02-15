import React, { useState, useEffect } from "react";
import { 
  PanelLeftClose, PanelLeftOpen, Search, 
  Bell, Wifi, Cpu, ChevronDown 
} from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ isCollapsed, setIsCollapsed }) => {
  // Inside your Header component:
    const [time, setTime] = useState(new Date());

    useEffect(() => {
    // Update the state every single second
    const timer = setInterval(() => {
        setTime(new Date());
    }, 1000);

    // Clean up the timer when the component unmounts to prevent memory leaks
    return () => clearInterval(timer);
    }, []);
        
    return (
        <header className="h-20 bg-base-100 border-b border-base-300 flex items-center justify-between px-6 z-30 shadow-sm">
        
        {/* LEFT: Toggle & Search */}
        <div className="flex items-center gap-4 flex-1">
            <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="btn btn-ghost btn-circle text-base-content/70 hover:text-primary transition-colors"
            >
            {isCollapsed ? <PanelLeftOpen size={24} /> : <PanelLeftClose size={24} />}
            </button>

            <div className="hidden md:flex relative w-full max-w-md group ml-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-40 group-focus-within:text-primary" />
            <input type="text" placeholder="Search products or orders..."
                className="input input-sm input-bordered w-full pl-10 bg-base-200 focus:bg-base-100 border-none h-11 transition-all"
            />
            </div>
        </div>

        {/* RIGHT: High-End Actions & Metrics */}
        <div className="flex items-center gap-2">
            
            {/* Restore System Health & Clock */}
            <div className="hidden lg:flex items-center gap-6 px-6 border-r border-base-300 mr-2">                
               <div className="flex flex-col items-end leading-none">
                    <span className="text-sm font-black tabular-nums">
                        {time.toLocaleTimeString([], { hour: '2-digit',   minute: '2-digit',  second: '2-digit', hour12: true })}
                    </span>
                    <span className="text-[10px] opacity-50 font-medium uppercase mt-1">
                        {time.toLocaleDateString([], { weekday: 'short',  month: 'short', day: 'numeric' })}
                    </span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1">
                <ThemeSwitcher />
            </div>

            {/* User Profile Dropdown */}
            <div className="dropdown dropdown-end ml-2">
            <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-base-200 h-14 px-2 rounded-xl border border-transparent hover:border-base-300">
                <div className="flex items-center gap-3">
                <div className="flex flex-col items-end hidden sm:flex">
                    <span className="text-xs font-black">N. Islam</span>
                    <span className="text-[10px] opacity-60 font-bold uppercase">Admin</span>
                </div>
                <div className="avatar online">
                    <div className="w-10 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2 transition-all">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                    </div>
                </div>
                <ChevronDown size={14} className="opacity-50" />
                </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-2xl w-52 mt-4 border border-base-300">
                <li className="menu-title text-[10px] uppercase font-bold opacity-50 px-4 py-2">Account</li>
                <li><a>Profile Settings</a></li>
                <li><a>My Performance</a></li>
                <div className="divider my-0"></div>
                <li><a className="text-error font-bold">Logout Station</a></li>
            </ul>
            </div>
        </div>
        </header>
    );
};

export default Header;