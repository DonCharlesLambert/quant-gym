import React from 'react';
import { getUserData } from '../api'; // added

const Header = () => {
  const user = getUserData();

  return (
    <header className="fixed top-0 w-full z-50 bg-blue-950/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex justify-between items-center px-6 h-16 w-full">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-bold tracking-tighter text-blue-300 font-headline">QuantGym</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/40 rounded-full">
          <span className="material-symbols-outlined text-blue-300 text-sm">bolt</span>
          <span className="text-xs font-bold font-headline text-blue-300">{user.xpTotal.toLocaleString()} XP</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-blue-100/70 cursor-pointer hover:bg-white/10 p-2 rounded-full transition-colors">
            military_tech
          </span>
          <span className="material-symbols-outlined text-blue-100/70 cursor-pointer hover:bg-white/10 p-2 rounded-full transition-colors">
            notifications
          </span>
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-primary/20">
            <img alt={user.displayName} className="w-full h-full object-cover" src={user.avatar} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;