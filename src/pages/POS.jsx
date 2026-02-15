import React, { useState } from 'react';
import { 
  Search, Plus, Minus, Trash2, 
  CreditCard, Banknote, UserPlus, ScanLine, Filter
} from 'lucide-react';
import useTitle from '../hooks/useTitle';

const POS = () => {
  useTitle('Terminal');

  const products = [
    { id: 1, stock:15, name: 'Artisan Espresso', price: 4.50, cat: 'Coffee', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=200&q=80' },
    { id: 2, stock:10, name: 'Glazed Blueberry Muffin', price: 3.75, cat: 'Bakery', img: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=200&q=80' },
    { id: 3, stock:105, name: 'Organic Orange Juice', price: 5.20, cat: 'Beverage', img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=200&q=80' },
    { id: 4, stock:55, name: 'Classic Croissant', price: 3.25, cat: 'Bakery', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=200&q=80' },
    { id: 5, stock:35, name: 'Avocado Sourdough', price: 12.00, cat: 'Main', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=200&q=80' },
    { id: 6, stock:75, name: 'Evian Mineral Water', price: 1.50, cat: 'Beverage', img: 'https://images.unsplash.com/photo-1523362628744-0c14a394ba05?auto=format&fit=crop&w=200&q=80' },
  ];

  return (
    <div className="flex h-full bg-base-200/30 animate-in fade-in duration-700">
      
      {/* --- LEFT: PRODUCT SECTION --- */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* PRO SEARCH BAR */}
        <div className="p-8 flex items-center gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, category or scan barcode..." 
              className="input w-full pl-12 bg-base-100 border-none rounded-2xl shadow-sm focus:ring-2 ring-primary/20 h-14 font-medium"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 badge badge-outline opacity-20 hidden md:block">Ctrl + F</div>
          </div>
          <button className="btn btn-square h-14 w-14 bg-base-100 border-none rounded-2xl shadow-sm hover:text-primary">
            <Filter size={20} />
          </button>
        </div>

        {/* REFINED PRODUCT GRID */}
        <div className="flex-1 overflow-y-auto px-8 pb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((item) => (
            <div 
              key={item.id}
              className="group bg-base-100 rounded-[1.8rem] p-3 flex flex-col border border-transparent hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer active:scale-95"
            >
              {/* Image Container */}
              <div className="relative h-44 w-full rounded-[1.4rem] overflow-hidden mb-4">
                <img src={item.img} alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[12px] font-black uppercase tracking-widest rounded-full">
                    {item.cat}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span data-tip="Stock" className="tooltip tooltip-bottom px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[15px] font-bold uppercase tracking-widest rounded-full">
                    {item.stock}
                  </span>
                </div>
              </div>

              {/* Title & Price Beside Each Other */}
              <div className="px-2 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-sm text-base-content leading-tight truncate">
                    {item.name}
                  </h3>
                  <p className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">Unit #00{item.id}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-primary tabular-nums">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Quick Add Overlay on Hover */}
              <div className="mt-4 flex gap-2">
                <button className="btn btn-primary btn-sm flex-1 rounded-xl gap-2 font-black text-[10px] uppercase tracking-wider">
                  <Plus size={14} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RIGHT: CHECKOUT SIDEBAR (GLASSMORPHISM) --- */}
      <div className="w-[420px] bg-base-100 border-l border-base-300 flex flex-col relative shadow-[-20px_0_50px_rgba(0,0,0,0.02)]">
        
        {/* Customer Quick Switch */}
        <div className="p-6 bg-primary/[0.03] border-b border-base-300 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <UserPlus size={20} />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-black opacity-40 uppercase leading-none mb-1">Walking Customer</p>
            <p className="text-xs font-bold">Add customer to earn points</p>
          </div>
          <button className="btn btn-ghost btn-circle btn-sm"><ScanLine size={18} /></button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex items-center gap-4 group">
            <img src={products[0].img} className="w-14 h-14 rounded-2xl object-cover shadow-md" alt="" />
            <div className="flex-1">
              <h4 className="text-sm font-black text-base-content truncate">{products[0].name}</h4>
              <p className="text-xs font-bold opacity-40">$4.50</p>
            </div>
            <div className="flex items-center gap-2 bg-base-200 rounded-xl p-1 px-2 border border-base-300">
              <button className="p-1 hover:text-primary transition-colors"><Minus size={14}/></button>
              <span className="text-xs font-black w-4 text-center">2</span>
              <button className="p-1 hover:text-primary transition-colors"><Plus size={14}/></button>
            </div>
          </div>
        </div>

        {/* Final Payment Panel */}
        <div className="p-8 space-y-4 bg-base-100 border-t-2 border-dashed border-base-300">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold opacity-40 uppercase tracking-widest">
              <span>Subtotal</span>
              <span className="text-base-content">$9.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black italic">Total<span className="text-primary">.</span></span>
              <span className="text-3xl font-black tracking-tighter tabular-nums text-primary">$9.90</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <button className="btn btn-outline border-base-300 h-20 rounded-3xl flex flex-col group hover:border-primary">
              <Banknote size={24} className="opacity-40 group-hover:text-primary transition-all" />
              <span className="text-[10px] font-black uppercase mt-1">Cash Pay</span>
            </button>
            <button className="btn btn-primary h-20 rounded-3xl flex flex-col shadow-2xl shadow-primary/30">
              <CreditCard size={24} />
              <span className="text-[10px] font-black uppercase mt-1">Charge Card</span>
            </button>
          </div>
          
          <button className="btn btn-neutral btn-lg w-full rounded-3xl font-black tracking-[0.2em] text-xs uppercase h-16">
            Execute Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default POS;