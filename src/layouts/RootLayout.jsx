import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const POSLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-base-200 transition-colors duration-300">
      <Sidebar isCollapsed={isCollapsed} />
      
      <div className="flex flex-col flex-1 min-w-0">
        <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        
        <main className="flex-1 overflow-hidden">
           <Outlet />
        </main>
      </div>
    </div>
  );
};

export default POSLayout;