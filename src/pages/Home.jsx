import React, { useState, useEffect } from 'react';
import { 
  Users, Package, DollarSign, ShoppingBag, 
  ArrowUpRight, ArrowDownRight, CheckCircle2, 
  AlertCircle, FileText, Plus, ShieldCheck, Loader2 
} from 'lucide-react';
import useTitle from '../hooks/useTitle';
import HomeContent from '../components/Dashboard';

const Home = () => {
  useTitle('Executive Dashboard');
  
  // 1. STATE MANAGEMENT
  const [isValidating, setIsValidating] = useState(true);
  const [authStage, setAuthStage] = useState('Initializing Terminal...');

  // 2. SIMULATE PROFESSIONAL AUTH SEQUENCE
  useEffect(() => {
    const sequence = [
      { time: 800, msg: 'Connecting to Secure Server...' },
      { time: 1600, msg: 'Verifying Station #04 Credentials...' },
      { time: 2200, msg: 'Syncing Local Database...' },
      { time: 2800, msg: 'Access Granted.' }
    ];

    sequence.forEach((step) => {
      setTimeout(() => setAuthStage(step.msg), step.time);
    });

    // Final entry into dashboard
    const timer = setTimeout(() => {
      setIsValidating(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  // ... (Your existing stats and transactions data arrays here)

  return (
    <div className="h-full w-full relative">
      
      {/* 3. PROFESSIONAL AUTH OVERLAY (The "Modal") */}
      {isValidating && (
        <div className="absolute inset-0 z-[100] bg-base-100 flex flex-col items-center justify-center animate-in fade-in duration-500">
          <div className="flex flex-col items-center space-y-6 text-center">
            {/* Pulsing Shield Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
              <div className="relative bg-base-200 p-6 rounded-[2rem] border border-base-300 shadow-2xl">
                <ShieldCheck size={48} className="text-primary animate-bounce" />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-black italic tracking-tighter">
                Micro<span className="text-primary">POS</span> Security
              </h2>
              <div className="flex items-center justify-center gap-3 text-base-content/60 font-mono text-xs uppercase tracking-[0.2em]">
                <Loader2 size={14} className="animate-spin text-primary" />
                {authStage}
              </div>
            </div>

            {/* Subtle Progress Bar */}
            <div className="w-48 h-1 bg-base-300 rounded-full overflow-hidden">
              <div className="h-full bg-primary animate-progress-loading"></div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MAIN CONTENT (Only blurred/interactable after validation) */}
      <div className={`h-full overflow-y-auto bg-base-200/50 custom-scrollbar transition-all duration-1000 ${isValidating ? 'blur-xl scale-95 opacity-0' : 'blur-0 scale-100 opacity-100'}`}>
        <HomeContent />
      </div>
    </div>
  );
};

export default Home;