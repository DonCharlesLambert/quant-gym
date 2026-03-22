import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuizData } from '../quiz_api';

const Quiz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [streak] = useState(14); // Mock streak data

  // Get quiz data based on subject
  const quizData = getQuizData(subject);

  const totalQuestions = quizData.questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return;

    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    if (answerIndex === quizData.questions[currentQuestion].correctAnswer) {
      setScore(score + quizData.questions[currentQuestion].xp);
    }
  };

  const handleContinue = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz completed - navigate to results
      navigate('/results', { state: { score, totalQuestions, subject } });
    }
  };

  const handleSkip = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const currentQ = quizData.questions[currentQuestion];

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

      {/* Quiz Header */}
      <header className="pt-24 pb-8 px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-high text-primary hover:bg-surface-bright transition-all">
              <span className="material-symbols-outlined">close</span>
            </button>
            <div>
              <span className="text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">Daily Sprint</span>
              <h1 className="text-headline-md font-headline text-on-surface">{quizData.title}</h1>
            </div>
          </div>
          {/* Streak Indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/30 border border-secondary/20 streak-glow">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <span className="font-headline font-bold text-secondary">{streak} DAY STREAK</span>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="relative w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full kinetic-gradient rounded-full shadow-[0_0_15px_rgba(133,173,255,0.4)]" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs font-medium text-primary">Question {currentQuestion + 1} of {totalQuestions}</span>
          <span className="text-xs font-medium text-on-surface-variant">{Math.round(progress)}% Completed</span>
        </div>
      </header>

      {/* Main Quiz Content */}
      <main className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question Section */}
          <div className="lg:col-span-12">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
              {/* Accent Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold tracking-tighter uppercase">{currentQ.difficulty}</span>
                  <span className="text-on-surface-variant text-xs">+{currentQ.xp} XP</span>
                </div>
                <h2 className="text-xl md:text-2xl font-headline font-medium text-on-surface leading-tight mb-8">
                  {currentQ.question}
                </h2>
                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`group relative flex items-center justify-between p-5 rounded-2xl transition-all text-left active:scale-[0.98] ${
                        selectedAnswer === index && index === currentQ.correctAnswer
                          ? 'bg-primary/5 border-2 border-primary/40 shadow-[0_0_20px_rgba(133,173,255,0.1)]'
                          : selectedAnswer === index && index !== currentQ.correctAnswer
                          ? 'bg-error/5 border-2 border-error/40'
                          : 'bg-surface-container-high border-2 border-transparent hover:border-primary/50 hover:bg-surface-bright'
                      }`}
                      disabled={showFeedback}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`w-10 h-10 flex items-center justify-center rounded-xl font-headline font-bold transition-colors ${
                          selectedAnswer === index && index === currentQ.correctAnswer
                            ? 'bg-primary text-on-primary'
                            : selectedAnswer === index && index !== currentQ.correctAnswer
                            ? 'bg-error text-on-error'
                            : 'bg-surface-container-low text-on-surface-variant group-hover:text-primary'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="font-medium text-on-surface">{option}</span>
                      </div>
                      <span className={`material-symbols-outlined transition-opacity ${
                        selectedAnswer === index && index === currentQ.correctAnswer
                          ? 'text-primary'
                          : selectedAnswer === index && index !== currentQ.correctAnswer
                          ? 'text-error'
                          : 'opacity-0 group-hover:opacity-100 text-primary'
                      }`} style={selectedAnswer === index && index === currentQ.correctAnswer ? { fontVariationSettings: "'FILL' 1" } : {}}>
                        {selectedAnswer === index && index === currentQ.correctAnswer ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          {showFeedback && (
            <div className="lg:col-span-12 space-y-6">
              <div className={`border rounded-3xl p-6 flex items-start gap-6 ${
                selectedAnswer === currentQ.correctAnswer
                  ? 'bg-tertiary/10 border-tertiary/20 success-glow'
                  : 'bg-error/10 border-error/20 shadow-[0_0_30px_rgba(255,113,108,0.2)]'
              }`}>
                <div className={`w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl shadow-lg ${
                  selectedAnswer === currentQ.correctAnswer
                    ? 'bg-tertiary text-on-tertiary'
                    : 'bg-error text-on-error'
                }`}>
                  <span className="material-symbols-outlined text-3xl" style={selectedAnswer === currentQ.correctAnswer ? { fontVariationSettings: "'FILL' 1" } : {}}>
                    {selectedAnswer === currentQ.correctAnswer ? 'auto_awesome' : 'heart_broken'}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-headline font-bold" style={{ color: selectedAnswer === currentQ.correctAnswer ? 'var(--tertiary)' : 'var(--error)' }}>
                      {selectedAnswer === currentQ.correctAnswer ? 'Brilliant! Correct Answer' : 'Not quite this time'}
                    </h3>
                    {selectedAnswer === currentQ.correctAnswer && (
                      <span className="text-tertiary text-sm font-bold">+{currentQ.xp} XP</span>
                    )}
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                    {currentQ.explanation}
                  </p>
                  {selectedAnswer === currentQ.correctAnswer && currentQ.tip && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-highest border border-outline-variant/30">
                      <span className="material-symbols-outlined text-primary text-sm">lightbulb</span>
                      <span className="text-xs font-bold text-primary-fixed uppercase tracking-wider">Quick Tip</span>
                      <span className="text-xs text-on-surface-variant">{currentQ.tip}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full p-6 bg-surface-container-low/80 backdrop-blur-xl border-t border-white/5 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all active:scale-95">
            <span className="material-symbols-outlined">help_outline</span>
            <span className="font-medium">Hint (50 Gems)</span>
          </button>
          <div className="flex items-center gap-4">
            <button onClick={handleSkip} className="px-8 py-3 rounded-xl font-headline font-bold text-primary-fixed hover:bg-primary/10 transition-all">
              Skip
            </button>
            <button
              onClick={handleContinue}
              disabled={!showFeedback}
              className={`px-12 py-3 rounded-xl font-headline font-bold transition-all ${
                showFeedback
                  ? 'text-on-primary shadow-[0_8px_20px_rgba(133,173,255,0.3)] hover:shadow-[0_12px_24px_rgba(133,173,255,0.5)] hover:-translate-y-0.5 active:translate-y-0'
                  : 'bg-surface-container-high text-on-surface-variant cursor-not-allowed opacity-50'
              }`}
              style={showFeedback ? {
                background: 'linear-gradient(135deg, #85adff 0%, #6e9fff 100%)'
              } : {}}
            >
              {currentQuestion < totalQuestions - 1 ? 'Continue' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Quiz;