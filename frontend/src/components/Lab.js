import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLabTiles } from '../api';

const Lab = () => {
  const { subject } = useParams();
  const navigate = useNavigate();

  // Map tile IDs to quiz subjects
  const getQuizSubject = (tileId) => {
    const quizMapping = {
      'cs-1': 'python-mastery',
      'cs-2': 'data-structures',
      'cs-3': 'data-structures', // Could be algorithms quiz
      'math-1': 'linear-algebra',
      'math-2': 'linear-algebra',
      'finance-1': 'stochastic-calculus',
      'finance-2': 'stochastic-calculus'
    };
    return quizMapping[tileId] || 'general';
  };

  const handleTileClick = (tileId) => {
    const quizSubject = getQuizSubject(tileId);
    navigate(`/quiz/${quizSubject}`);
  };
  const getContent = () => {
    switch (subject) {
      case 'cs':
        return "Computer Science";
      case 'math':
        return "Mathematics";
      case 'finance':
        return "Finance";
      default:
        return "Lab";
    }
  };

  const descriptions = {
    cs: "Master the foundations of computation through high-intensity interactive drills and gamified mastery tracks.",
    math: "Dive into the world of numbers, equations, and proofs with interactive math challenges.",
    finance: "Learn financial modeling, risk assessment, and market analysis through practical exercises.",
  };

  const tiles = getLabTiles(subject);
  const colors = ['primary', 'secondary', 'tertiary'];

  return (
    <main className="lg:ml-64 pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold font-headline tracking-tight text-on-surface mb-2">
            {getContent()} <span className="text-primary">Core Lab</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl">
            {descriptions[subject] || "Explore the lab."}
          </p>
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile, index) => {
            const color = colors[index % colors.length];
            return (
              <div key={tile.id} className="glass-card rounded-xl p-6 border border-white/5 flex flex-col group hover:bg-surface-bright transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${color}/20 flex items-center justify-center text-${color} group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-3xl">{tile.icon}</span>
                  </div>
                  <div className="bg-secondary/20 text-secondary text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    +{tile.xp} XP
                  </div>
                </div>
                <h3 className="text-xl font-bold font-headline mb-1">{tile.title}</h3>
                <p className="text-sm text-on-surface-variant mb-6">{tile.description}</p>
                <div className="mt-auto space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-on-surface-variant font-medium">Mastery Progress</span>
                      <span className={`text-${color} font-bold`}>{tile.mastery}%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-${color} to-primary rounded-full`} style={{width: `${tile.mastery}%`}}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {Array.from({length: tile.badges.total}, (_, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-background ${i < tile.badges.earned ? 'bg-secondary-fixed-dim' : 'bg-surface-container-high opacity-40'} flex items-center justify-center`}>
                          <span className="material-symbols-outlined text-sm text-on-secondary-fixed" style={{fontVariationSettings: "'FILL' 1"}}>{i < tile.badges.earned ? 'verified' : 'lock'}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{tile.badges.earned}/{tile.badges.total} Badges</span>
                  </div>
                  <button
                    onClick={() => handleTileClick(tile.id)}
                    className={`w-full bg-${color} text-on-${color} font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(110,159,255,0.4)] transition-all active:scale-95`}
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Lab;