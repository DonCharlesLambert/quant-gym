export function getUserData() {
  return {
    username: 'GervontaeBell',
    displayName: 'Gervontae Bell',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDuuxxHOeBImG9gr7Gpcfr1Sk00U-kqNsEd3tlZG3UsjTEW5HXWRo0p9GyhLOtgHm58IKlMhusoKff33I57V1fK9Pge8fv_ygNGwUZWhBkwEg4mLy9Qrr9WknYS0gSIjfvP4A9gRxwO1m7MpFEMfK3Z0Cudztiv6MeoQaFJx8qEiBVA4xb2oIVR-9EUQ5ly4ArKKSvGsPmZkwMTwmL7HuUfwNsLzvyDLaKOJWUyGnzEWNc8gnMxegfX4U9uo2ejR093SjF2DNkQOyi_',
    level: 14,
    title: 'Quant Initiate',
    weeklyStreak: 7,
    xpTotal: 3400,
    xpDaily: { current: 450, goal: 600 },
  };
}

export function getLabProgress() {
  return {
    cs: { level: 8, mastery: 82, title: 'Data Structures & Algo', progress: 76 },
    math: { level: 15, mastery: 94, title: 'Linear Algebra', progress: 92 },
    finance: { level: 12, mastery: 45, title: 'Stochastic Calculus', progress: 51 },
  };
}

export function getLabTiles(subject) {
  const tiles = {
    cs: [
      {
        id: 'cs-1',
        title: 'Python Mastery',
        description: 'Functional programming, decorators, and memory management.',
        difficulty: 'Medium',
        mastery: 78,
        progress: 70,
        icon: 'terminal',
        xp: 500,
        badges: { earned: 2, total: 5 },
        buttonText: 'Start Quiz',
      },
      {
        id: 'cs-2',
        title: 'Data Structures',
        description: 'Trees, graphs, and advanced algorithms.',
        difficulty: 'Hard',
        mastery: 65,
        progress: 40,
        icon: 'account_tree',
        xp: 300,
        badges: { earned: 1, total: 4 },
        buttonText: 'Continue Learning',
      },
      {
        id: 'cs-3',
        title: 'Algorithms',
        description: 'Dynamic programming and optimization.',
        difficulty: 'Easy',
        mastery: 42,
        progress: 20,
        icon: 'psychology',
        xp: 400,
        badges: { earned: 1, total: 6 },
        buttonText: 'Start Challenge',
      },
    ],
    math: [
      {
        id: 'math-1',
        title: 'Matrix Transformations',
        description: 'Multiplication & inversion',
        difficulty: 'Medium',
        mastery: 88,
        progress: 74,
        icon: 'calculate',
        xp: 450,
        badges: { earned: 3, total: 5 },
        buttonText: 'Solve Problems',
      },
      {
        id: 'math-2',
        title: 'Eigen Values',
        description: 'Compute for 3x3 matrices',
        difficulty: 'Hard',
        mastery: 64,
        progress: 39,
        icon: 'insights',
        xp: 600,
        badges: { earned: 2, total: 4 },
        buttonText: 'Advanced Quiz',
      },
      {
        id: 'math-3',
        title: 'Vector Projections',
        description: 'Dot product geometry',
        difficulty: 'Easy',
        mastery: 97,
        progress: 100,
        icon: 'scatter_plot',
        xp: 250,
        badges: { earned: 4, total: 4 },
        buttonText: 'Review Basics',
      },
    ],
    finance: [
      {
        id: 'finance-1',
        title: 'Option Greeks',
        description: 'Delta / Gamma / Vega',
        difficulty: 'Medium',
        mastery: 58,
        progress: 45,
        icon: 'show_chart',
        xp: 550,
        badges: { earned: 2, total: 5 },
        buttonText: 'Calculate Greeks',
      },
      {
        id: 'finance-2',
        title: 'Black-Scholes',
        description: 'Pricing European options',
        difficulty: 'Hard',
        mastery: 32,
        progress: 20,
        icon: 'timeline',
        xp: 700,
        badges: { earned: 1, total: 6 },
        buttonText: 'Model Options',
      },
      {
        id: 'finance-3',
        title: 'Portfolio Sharpe',
        description: 'Risk-adjusted return',
        difficulty: 'Easy',
        mastery: 71,
        progress: 68,
        icon: 'account_balance',
        xp: 350,
        badges: { earned: 3, total: 4 },
        buttonText: 'Analyze Portfolio',
      },
    ],
  };
  return tiles[subject] ?? [];
}

export function getLeaderboard() {
  const user = getUserData();
  return [
    { rank: 1, name: 'Alex Chen', role: 'Quantitative dev', xp: 12400, avatar: user.avatar },
    { rank: 2, name: 'Sarah J.', role: 'Math Major', xp: 11900, avatar: user.avatar },
    { rank: 3, name: 'Marcus R.', role: 'CS Student', xp: 10200, avatar: user.avatar },
    { rank: 42, name: user.username, role: 'Initiate', xp: user.xpTotal, avatar: user.avatar },
  ];
}

export function getCurrentLab() {
  return 'cs';
}