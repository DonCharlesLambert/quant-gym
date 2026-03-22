import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get quiz results from navigation state
  const { score, totalQuestions, subject, quizResults } = location.state || {
    score: 0,
    totalQuestions: 0,
    subject: 'general',
    quizResults: []
  };

  // Calculate metrics
  const accuracy = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const maxScore = totalQuestions * 50; // Assuming 50 XP per question
  const scoreDisplay = `${score}/${maxScore}`;

  // Mock additional data (in a real app, this would come from API)
  const timeSpent = "12:45";
  const streak = 14;
  const levelUp = score > maxScore * 0.8; // Level up if >80% score
  const currentXP = 2450;
  const nextLevelXP = 3000;
  const xpGained = score;
  const xpProgress = ((currentXP + xpGained) / nextLevelXP) * 100;

  // Generate review sessions based on actual quiz results
  const reviewSessions = quizResults.map((result, index) => ({
    id: index + 1,
    question: result.question,
    userAnswer: result.userAnswer,
    correctAnswer: result.correctAnswer,
    options: result.options,
    isCorrect: result.isCorrect,
    category: result.difficulty || 'General',
    explanation: result.explanation
  }));

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-blue-950/60 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold tracking-tighter text-blue-300 font-headline">QuantGym</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => navigate('/')} className="text-blue-300 font-bold font-headline hover:bg-white/10 transition-colors px-3 py-1 rounded-lg">Dashboard</button>
          <button className="text-blue-100/70 font-headline hover:bg-white/10 transition-colors px-3 py-1 rounded-lg">Explore</button>
          <button className="text-blue-100/70 font-headline hover:bg-white/10 transition-colors px-3 py-1 rounded-lg">Quizzes</button>
          <button className="text-blue-100/70 font-headline hover:bg-white/10 transition-colors px-3 py-1 rounded-lg">Achievements</button>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-blue-300 hover:bg-white/10 transition-colors rounded-full active:scale-95 duration-200">
            <span className="material-symbols-outlined">bolt</span>
          </button>
          <button className="p-2 text-blue-300 hover:bg-white/10 transition-colors rounded-full active:scale-95 duration-200">
            <span className="material-symbols-outlined">military_tech</span>
          </button>
          <button className="p-2 text-blue-300 hover:bg-white/10 transition-colors rounded-full active:scale-95 duration-200">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Hero Results Section */}
          <section className="relative flex flex-col items-center justify-center text-center py-12">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-bold uppercase tracking-widest">
                Quiz Completed
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter" style={{ textShadow: '0 0 15px rgba(133, 173, 255, 0.5)' }}>
                {scoreDisplay}
              </h1>
              <div className="flex flex-col items-center gap-4">
                {levelUp && (
                  <div className="flex items-center gap-2 text-secondary font-headline font-bold text-xl animate-pulse">
                    <span className="material-symbols-outlined">upgrade</span>
                    Level Up!
                  </div>
                )}
                {/* XP Bar */}
                <div className="w-64 md:w-80 h-4 bg-surface-container-highest rounded-full overflow-hidden p-0.5 border border-outline-variant/20">
                  <div
                    className="h-full bg-gradient-to-r from-tertiary to-primary rounded-full relative"
                    style={{ width: `${Math.min(xpProgress, 100)}%` }}
                  >
                    <div className="absolute -right-2 -top-8 px-2 py-1 bg-surface-bright rounded text-[10px] font-bold text-primary shadow-xl border border-primary/20">
                      +{xpGained} XP
                    </div>
                  </div>
                </div>
                <p className="text-sm font-label text-on-surface-variant">
                  {currentXP + xpGained} / {nextLevelXP} XP to Level {levelUp ? 15 : 14}
                </p>
              </div>
            </div>
          </section>

          {/* Stats Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Achievement Card */}
            <div className="glass-card p-6 rounded-2xl border border-outline-variant/10 flex flex-col items-center text-center justify-center space-y-4">
              <div className="w-20 h-20 bg-secondary-container/30 rounded-full flex items-center justify-center relative">
                <span className="material-symbols-outlined text-secondary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary animate-spin" style={{ animationDuration: '10s' }}></div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">New Achievement</p>
                <h3 className="font-headline text-xl font-bold text-on-surface mt-1">
                  {accuracy >= 90 ? 'Perfect Score' : accuracy >= 80 ? 'High Achiever' : 'Good Effort'}
                </h3>
                <p className="text-sm text-on-surface-variant mt-2">
                  {accuracy >= 90 ? 'Scored 90% or higher!' : accuracy >= 80 ? 'Scored 80% or higher!' : 'Completed the quiz successfully!'}
                </p>
              </div>
            </div>

            {/* Comparison Card */}
            <div className="glass-card p-6 rounded-2xl border border-outline-variant/10 md:col-span-2 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="font-headline text-2xl font-bold">Today's Standings</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Your performance puts you in the <span className="text-tertiary font-bold">
                    Top {accuracy >= 90 ? '5%' : accuracy >= 80 ? '15%' : '30%'}
                  </span> of all trainees. Keep up the great work!
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                    <span className="text-xs font-medium">You</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-surface-container-highest"></span>
                    <span className="text-xs font-medium">Avg. Peer</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-48 h-32 flex items-end gap-2 px-2 pb-2 bg-surface-container-low rounded-xl">
                <div className="w-1/4 bg-surface-container-highest h-[40%] rounded-t-lg"></div>
                <div className="w-1/4 bg-surface-container-highest h-[60%] rounded-t-lg"></div>
                <div className={`w-1/4 rounded-t-lg shadow-[0_0_20px_rgba(133,173,255,0.4)] relative`} style={{ height: `${accuracy}%`, backgroundColor: 'var(--primary)' }}>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">YOU</span>
                </div>
                <div className="w-1/4 bg-surface-container-highest h-[55%] rounded-t-lg"></div>
              </div>
            </div>

            {/* Accuracy Card */}
            <div className="bg-surface-container-high p-6 rounded-2xl flex items-center justify-between group hover:bg-surface-bright transition-all">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Accuracy</p>
                <h4 className="font-headline text-3xl font-bold text-tertiary">{accuracy}%</h4>
              </div>
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary">check_circle</span>
              </div>
            </div>

            {/* Time Card */}
            <div className="bg-surface-container-high p-6 rounded-2xl flex items-center justify-between group hover:bg-surface-bright transition-all">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Total Time</p>
                <h4 className="font-headline text-3xl font-bold text-primary">{timeSpent}</h4>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">timer</span>
              </div>
            </div>

            {/* Streak Card */}
            <div className="bg-surface-container-high p-6 rounded-2xl flex items-center justify-between group hover:bg-surface-bright transition-all">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Streak</p>
                <h4 className="font-headline text-3xl font-bold text-secondary">{streak} Days</h4>
              </div>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shadow-[0_0_15px_rgba(193,128,255,0.2)]">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              </div>
            </div>
          </section>

          {/* Review Section */}
          {reviewSessions.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Review Sessions</h2>
                <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                  View All {reviewSessions.length} Questions
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <div className="space-y-4">
                {reviewSessions.slice(0, 3).map((session, index) => (
                  <div key={session.id} className={`glass-card p-6 rounded-2xl border-l-4 overflow-hidden group ${
                    session.isCorrect ? 'border-tertiary' : 'border-error'
                  }`}>
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded ${
                        session.isCorrect
                          ? 'text-tertiary bg-tertiary/10'
                          : 'text-error bg-error/10'
                      }`}>
                        Question {String(session.id).padStart(2, '0')} • {session.category}
                      </span>
                      <span className={`material-symbols-outlined ${
                        session.isCorrect ? 'text-tertiary' : 'text-error'
                      }`}>
                        {session.isCorrect ? 'check' : 'close'}
                      </span>
                    </div>
                    <h5 className="font-headline text-lg font-bold mb-4">{session.question}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {session.options.map((option, optionIndex) => {
                        const isUserChoice = optionIndex === session.userAnswer;
                        const isCorrectChoice = optionIndex === session.correctAnswer;
                        const isSelectedCorrect = isUserChoice && session.isCorrect;
                        const isSelectedWrong = isUserChoice && !session.isCorrect;

                        return (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-lg border text-sm flex justify-between items-center ${
                              isSelectedCorrect
                                ? 'border-tertiary/50 bg-tertiary/5 font-bold text-tertiary'
                                : isSelectedWrong
                                ? 'border-error/50 bg-error/5 font-bold text-error'
                                : isCorrectChoice && !session.isCorrect
                                ? 'border-tertiary/50 bg-tertiary/10 font-bold text-tertiary'
                                : 'border-outline-variant/10 bg-surface-container-highest'
                            }`}
                          >
                            {String.fromCharCode(65 + optionIndex)}) {option}
                            {isUserChoice && (
                              <span className="text-[10px] uppercase font-bold">
                                Your Choice
                              </span>
                            )}
                            {isCorrectChoice && !isUserChoice && (
                              <span className="material-symbols-outlined text-sm">check</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {!session.isCorrect && session.explanation && (
                      <div className="mt-4 p-4 bg-surface-container rounded-lg border border-outline-variant/10">
                        <p className="text-xs text-on-surface-variant italic">
                          <strong className="text-primary not-italic">Explanation:</strong> {session.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom CTA */}
          <section className="flex flex-col md:flex-row gap-4 items-center justify-center pt-8">
            <button
              onClick={() => navigate('/')}
              className="w-full md:w-auto px-12 py-4 text-on-primary font-bold rounded-xl shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, #85adff 0%, #6e9fff 100%)' }}
            >
              Next Challenge
            </button>
            <button className="w-full md:w-auto px-12 py-4 bg-surface-container-high text-on-surface font-bold rounded-xl border border-outline-variant/20 hover:bg-surface-bright transition-all active:scale-95">
              Share Progress
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Results;