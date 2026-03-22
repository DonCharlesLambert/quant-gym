import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Lab from './components/Lab';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-on-surface">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lab/:subject" element={<Lab />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;