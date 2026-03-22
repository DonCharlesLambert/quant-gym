import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserData, getLabProgress, getLeaderboard, getCurrentLab } from '../api';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = getUserData();
  const labs = getLabProgress();
  const leaderboard = getLeaderboard();
  const currentLab = getCurrentLab();
  const dailyProgress = Math.min(100, Math.round((user.xpDaily.current / user.xpDaily.goal) * 100));

  return (
    <main className="lg:ml-64 pt-24 px-6 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-8">
          <section className="relative overflow-hidden rounded-3xl bg-surface-container-low group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50"></div>
            <div className="relative z-10 p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    local_fire_department
                  </span>
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest font-label">
                    {user.weeklyStreak} Day Streak Active
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight tracking-tight">
                  Continue your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Daily Sprint</span>
                </h1>
                <p className="text-on-surface-variant max-w-md font-body">
                  Complete today's challenge to maintain your streak and earn a <span className="text-tertiary">2x Multiplier</span> on all XP gained.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold font-label uppercase tracking-wider text-on-surface-variant">
                    <span>Daily Goal Progress</span>
                    <span className="text-primary">
                      {user.xpDaily.current} / {user.xpDaily.goal} XP
                    </span>
                  </div>
                  <div className="w-full bg-background/50 h-3 rounded-full overflow-hidden p-[2px] border border-outline-variant/30">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-full rounded-full shadow-[0_0_12px_rgba(133,173,255,0.5)]"
                      style={{ width: `${dailyProgress}%` }}
                    ></div>
                  </div>
                </div>
                <button onClick={() => navigate(`/lab/${currentLab}`)} className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold font-headline flex items-center gap-3 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95">
                  Resume Training
                  <span className="material-symbols-outlined">trending_flat</span>
                </button>
              </div>
              <div className="w-48 h-48 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative text-center">
                  <span className="text-7xl font-bold font-headline text-secondary leading-none">
                    {user.weeklyStreak.toString().padStart(2, '0')}
                  </span>
                  <p className="text-xs font-bold text-secondary-fixed-dim uppercase tracking-tighter mt-1">Days Strong</p>
                </div>
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-white/5" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="8"></circle>
                  <circle
                    className="text-secondary"
                    cx="50"
                    cy="50"
                    fill="none"
                    r="45"
                    stroke="currentColor"
                    strokeDasharray="283"
                    strokeDashoffset="80"
                    strokeLinecap="round"
                    strokeWidth="8"
                  ></circle>
                </svg>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/lab/cs" className="bg-surface-container-high rounded-2xl p-6 border-l-4 border-primary transition-all hover:bg-surface-bright group block">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                <span className="text-[10px] font-bold text-on-surface-variant px-2 py-1 bg-surface-variant rounded">LVL {labs.cs.level}</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-1">Computer Science</h4>
              <p className="text-xs text-on-surface-variant mb-6 font-body">{labs.cs.title}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-primary uppercase">
                  <span>Mastery</span>
                  <span>{labs.cs.mastery}%</span>
                </div>
                <div className="w-full bg-background h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: `${labs.cs.mastery}%`, boxShadow: '0 0 8px rgba(133,173,255,0.6)' }}></div>
                </div>
              </div>
            </Link>

            <Link to="/lab/finance" className="bg-surface-container-high rounded-2xl p-6 border-l-4 border-secondary transition-all hover:bg-surface-bright group">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-secondary text-3xl">payments</span>
                <span className="text-[10px] font-bold text-on-surface-variant px-2 py-1 bg-surface-variant rounded">LVL {labs.finance.level}</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-1">Finance</h4>
              <p className="text-xs text-on-surface-variant mb-6 font-body">{labs.finance.title}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-secondary uppercase">
                  <span>Mastery</span>
                  <span>{labs.finance.mastery}%</span>
                </div>
                <div className="w-full bg-background h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full" style={{ width: `${labs.finance.mastery}%`, boxShadow: '0 0 8px rgba(193,128,255,0.6)' }}></div>
                </div>
              </div>
            </Link>

            <Link to="/lab/math" className="bg-surface-container-high rounded-2xl p-6 border-l-4 border-tertiary transition-all hover:bg-surface-bright group">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-tertiary text-3xl">functions</span>
                <span className="text-[10px] font-bold text-on-surface-variant px-2 py-1 bg-surface-variant rounded">LVL {labs.math.level}</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-1">Mathematics</h4>
              <p className="text-xs text-on-surface-variant mb-6 font-body">{labs.math.title}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-tertiary uppercase">
                  <span>Mastery</span>
                  <span>{labs.math.mastery}%</span>
                </div>
                <div className="w-full bg-background h-1.5 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full" style={{ width: `${labs.math.mastery}%`, boxShadow: '0 0 8px rgba(197,255,201,0.6)' }}></div>
                </div>
              </div>
            </Link>
          </section>

          <section className="space-y-4">
            <div className="flex justify-between items-end">
              <h3 className="text-xl font-bold font-headline tracking-tight">Recent Achievements</h3>
              <a className="text-xs font-bold text-primary uppercase tracking-widest hover:underline" href="#">
                View All
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/10 w-full sm:w-auto flex-1">
                <div className="w-12 h-12 achievement-blob bg-gradient-to-br from-primary-fixed to-primary-dim flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-xl">code_off</span>
                </div>
                <div>
                  <h5 className="text-sm font-bold font-headline">Binary Master</h5>
                  <p className="text-[10px] text-on-surface-variant">Complete 50 bitwise challenges</p>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/10 w-full sm:w-auto flex-1">
                <div className="w-12 h-12 achievement-blob bg-gradient-to-br from-tertiary to-on-tertiary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary-container text-xl">bolt</span>
                </div>
                <div>
                  <h5 className="text-sm font-bold font-headline">Quick Solver</h5>
                  <p className="text-[10px] text-on-surface-variant">Solve 5 problems under 2 mins</p>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/10 w-full sm:w-auto flex-1 opacity-50">
                <div className="w-12 h-12 achievement-blob bg-slate-800 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-slate-400 text-xl">lock</span>
                </div>
                <div>
                  <h5 className="text-sm font-bold font-headline">Market Maker</h5>
                  <p className="text-[10px] text-on-surface-variant">Locked achievement</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="xl:col-span-4 space-y-8">
          <section className="bg-surface-container-high rounded-3xl overflow-hidden flex flex-col h-full shadow-xl">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
              <h3 className="font-headline font-bold text-xl">Leaderboard</h3>
              <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded uppercase">Global Rank: #42</span>
            </div>
            <div className="p-4 flex-1 space-y-2">
              <div className="flex items-center gap-4 p-3 bg-primary/10 rounded-xl border border-primary/20">
                <span className="text-sm font-bold text-primary w-4">1</span>
                <img alt="Leader" className="w-10 h-10 rounded-full object-cover border-2 border-primary" src={leaderboard[0].avatar} />
                <div className="flex-1">
                  <p className="text-sm font-bold font-headline">{leaderboard[0].name}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">{leaderboard[0].role}</p>
                </div>
                <span className="text-xs font-bold text-primary">{leaderboard[0].xp.toLocaleString()} XP</span>
              </div>

              <div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-colors">
                <span className="text-sm font-medium text-on-surface-variant w-4">2</span>
                <img alt="Leader" className="w-10 h-10 rounded-full object-cover grayscale" src={leaderboard[1].avatar} />
                <div className="flex-1">
                  <p className="text-sm font-bold font-headline">{leaderboard[1].name}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">{leaderboard[1].role}</p>
                </div>
                <span className="text-xs font-bold text-on-surface">{leaderboard[1].xp.toLocaleString()} XP</span>
              </div>

              <div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-colors">
                <span className="text-sm font-medium text-on-surface-variant w-4">3</span>
                <img alt="Leader" className="w-10 h-10 rounded-full object-cover grayscale" src={leaderboard[2].avatar} />
                <div className="flex-1">
                  <p className="text-sm font-bold font-headline">{leaderboard[2].name}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">{leaderboard[2].role}</p>
                </div>
                <span className="text-xs font-bold text-on-surface">{leaderboard[2].xp.toLocaleString()} XP</span>
              </div>

              <div className="py-4 flex justify-center">
                <div className="h-1.5 w-1.5 bg-outline-variant/40 rounded-full mx-1"></div>
                <div className="h-1.5 w-1.5 bg-outline-variant/40 rounded-full mx-1"></div>
                <div className="h-1.5 w-1.5 bg-outline-variant/40 rounded-full mx-1"></div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-surface-bright rounded-xl border border-secondary/20 ring-2 ring-secondary/20">
                <span className="text-sm font-bold text-secondary w-4">{leaderboard[3].rank}</span>
                <img className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary" src={leaderboard[3].avatar} alt={leaderboard[3].name} />
                <div className="flex-1">
                  <p className="text-sm font-bold font-headline">{leaderboard[3].name}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">{leaderboard[3].role}</p>
                </div>
                <span className="text-xs font-bold text-secondary">{leaderboard[3].xp.toLocaleString()} XP</span>
              </div>
            </div>

            <button className="m-6 bg-surface-variant text-on-surface-variant font-bold py-3 rounded-xl hover:text-on-surface transition-all border border-outline-variant/10">
              View Full Rankings
            </button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;