import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import these
import { 
  LayoutDashboard, ShoppingCart, ClipboardList, 
  Package, Users, BarChart3, Settings, LogOut, ChevronDown 
} from 'lucide-react';

const Sidebar = ({ isCollapsed }) => {
  const location = useLocation(); // Gets the current URL (e.g., "/inventory")
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubMenu = (label) => {
    if (isCollapsed) return;
    setOpenMenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  // Define your menu with 'path' instead of 'active'
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
    { 
      icon: <Package size={20} />, 
      label: 'Inventory', 
      path: '/inventory',
      subItems: [
        { label: 'Product List', path: '/inventory/products' },
        { label: 'Categories', path: '/inventory/categories' }
      ] 
    },
    { icon: <ShoppingCart size={20} />, label: 'POS Terminal', path: '/pos' },
    { 
      icon: <Users size={20} />, 
      label: 'Customers', 
      path: '/customers',
      subItems: [
        { label: 'Customer List', path: '/customers/list' }
      ] 
    },
    { icon: <BarChart3 size={20} />, label: 'Reports', path: '/reports' },
  ];

  return (
    <aside className={`transition-all duration-300 bg-base-100 border-r border-base-300 flex flex-col z-40 relative ${isCollapsed ? 'w-20' : 'w-64'}`}>
      
      {/* BRANDING */}
      <div className={`p-4 flex items-center border-b border-base-300 ${isCollapsed ? 'justify-center' : 'px-6'}`}>
        <h1 className="text-xl font-black tracking-tighter text-primary">
          {isCollapsed ? 'M' : 'Micro'}<span className="text-base-content">{isCollapsed ? 'P' : 'POS'}</span>
        </h1>
      </div>

      {/* NAVIGATION */}
      <nav className={`flex-1 px-3 py-6 space-y-2 ${isCollapsed ? 'overflow-visible' : 'overflow-y-auto'}`}>
        {menuItems.map((item, index) => {
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isOpen = openMenus[item.label];
          
          // Check if this item is active based on URL
          const isActive = location.pathname === item.path || 
                           (hasSubItems && location.pathname.startsWith(item.path));

          return (
            <div key={index} className="relative group/menu">
              {/* Change button to Link if no subItems, or keep as button for toggle */}
              <Link
                to={hasSubItems ? '#' : item.path}
                onClick={(e) => {
                    if(hasSubItems) {
                        e.preventDefault();
                        toggleSubMenu(item.label);
                    }
                }}
                className={`w-full flex items-center rounded-xl transition-all duration-200 h-12 relative
                  ${isCollapsed ? 'justify-center' : 'px-4 gap-4'}
                  ${isActive ? 'bg-primary text-primary-content shadow-lg shadow-primary/20' : 'hover:bg-base-200 text-base-content/70'} 
                `}
              >
                <span className={`${isActive ? '' : 'group-hover/menu:text-primary'}`}>
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <>
                    <span className="font-bold text-sm tracking-tight flex-1 text-left">{item.label}</span>
                    {hasSubItems && (
                      <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    )}
                  </>
                )}
              </Link>

              {/* COLLAPSED FLYOUT (Sub-items) */}
              {isCollapsed && hasSubItems && (
                <div className="absolute left-full top-0 ml-2 w-48 bg-base-100 border border-base-300 rounded-2xl shadow-2xl opacity-0 translate-x-4 invisible group-hover/menu:opacity-100 group-hover/menu:translate-x-0 group-hover/menu:visible transition-all duration-200 z-50 p-2">
                   {item.subItems.map((sub, i) => (
                    <Link key={i} to={sub.path} className={`flex items-center px-3 py-2 text-sm font-bold rounded-lg transition-colors ${location.pathname === sub.path ? 'bg-primary text-primary-content' : 'hover:bg-base-200'}`}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* EXPANDED ACCORDION (Sub-items) */}
              {!isCollapsed && hasSubItems && isOpen && (
                <div className="mt-1 ml-9 space-y-1 border-l-2 border-base-300 pl-4">
                  {item.subItems.map((sub, i) => (
                    <Link key={i} to={sub.path} className={`block py-2 text-xs font-medium transition-colors ${location.pathname === sub.path ? 'text-primary font-bold' : 'text-base-content/60 hover:text-primary'}`}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="p-2 border-t border-base-300">
        <button className={`btn btn-error btn-ghost h-10 ${isCollapsed ? 'btn-square btn-sm mx-auto flex' : 'w-full gap-3 btn-sm justify-start'}`}>
          <LogOut size={18} />
          {!isCollapsed && <span className="font-bold">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;