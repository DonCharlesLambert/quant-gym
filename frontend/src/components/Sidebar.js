import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getUserData } from '../api';

const Sidebar = () => {
  const location = useLocation();
  const user = getUserData();
  const progressPct = Math.min(100, Math.round((user.xpTotal / 5000) * 100));

  const makeLinkClass = (path) =>
    location.pathname === path
      ? 'bg-purple-500/20 text-purple-300 border-r-4 border-purple-500 rounded-r-lg flex items-center gap-3 px-4 py-3 active:translate-x-1 duration-150 transition-all'
      : 'text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-all active:translate-x-1 duration-150';

  return (
    <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-slate-900/80 backdrop-blur-2xl shadow-2xl flex flex-col py-8 px-4 space-y-2 pt-24 hidden lg:flex">
      <div className="mb-8 px-4">
        <div className="flex items-center gap-3 mb-2">
          <img className="w-10 h-10 rounded-xl object-cover" src={user.avatar} alt={user.username} />
          <div>
            <h3 className="text-sm font-bold text-blue-300 font-headline leading-tight">Level {user.level}</h3>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{user.title}</p>
          </div>
        </div>
        <div className="w-full bg-slate-800/50 h-1 rounded-full mt-3 overflow-hidden">
          <div className="bg-primary h-full" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        <Link to="/" className={makeLinkClass('/')}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-['Inter'] text-sm font-medium">Dashboard</span>
        </Link>
        <Link to="/lab/cs" className={makeLinkClass('/lab/cs')}>
          <span className="material-symbols-outlined">computer</span>
          <span className="font-['Inter'] text-sm font-medium">Computer Science</span>
        </Link>
        <Link to="/lab/math" className={makeLinkClass('/lab/math')}>
          <span className="material-symbols-outlined">superscript</span>
          <span className="font-['Inter'] text-sm font-medium">Mathematics</span>
        </Link>
        <Link to="/lab/finance" className={makeLinkClass('/lab/finance')}>
          <span className="material-symbols-outlined">finance_mode</span>
          <span className="font-['Inter'] text-sm font-medium">Finance</span>
        </Link>
      </nav>

      <div className="mt-auto pt-6 space-y-1 border-t border-slate-800/30">
        <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-3 rounded-xl mb-4 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-sm">play_arrow</span>
          Start Daily Sprint
        </button>
        <a className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-all" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-['Inter'] text-sm font-medium">Settings</span>
        </a>
        <a className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-all" href="#">
          <span className="material-symbols-outlined">help</span>
          <span className="font-['Inter'] text-sm font-medium">Support</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;