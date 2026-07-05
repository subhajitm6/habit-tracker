import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { SidebarProvider } from './components/sidebar/SidebarContext';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import HabitManagement from './pages/HabitManagement';
import TodaysHabit from './pages/TodaysHabit';
import Calendar from './pages/Calendar';
import Analytics from './pages/Analytics';
import StreakCenter from './pages/StreakCenter';
import Goals from './pages/Goals';
import MoodTracker from './pages/MoodTracker';
import Journal from './pages/Journal';
import Challenges from './pages/Challenges';
import Rewards from './pages/Rewards';
import Friends from './pages/Friends';
import Focus from './pages/Focus';
import WaterTracker from './pages/WaterTracker';
import SleepTracker from './pages/SleepTracker';
import ActivityTracker from './pages/ActivityTracker';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import './index.css';
import { ThemeContext } from './ThemeContext';



function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'system';
  });

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = () => {
      const isDark = theme === 'dark' || (theme === 'system' && mediaQuery.matches);
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();
    localStorage.setItem('theme', theme);

    // Listen for system changes if in system mode
    const listener = () => {
      if (theme === 'system') applyTheme();
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SmoothScrollProvider>
        <SidebarProvider>
          <Router>
            <ScrollToTop />
            <div className="bg-background text-foreground min-h-screen transition-colors duration-300 flex overflow-hidden font-sans">
              <Sidebar />

              <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <Header />

                <main className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                  <div className="max-w-7xl mx-auto">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/habits" element={<HabitManagement />} />
                      <Route path="/today" element={<TodaysHabit />} />
                      <Route path="/calendar" element={<Calendar />} />
                      <Route path="/analytics" element={<Analytics />} />
                      <Route path="/streak" element={<StreakCenter />} />
                      <Route path="/goals" element={<Goals />} />
                      <Route path="/mood" element={<MoodTracker />} />
                      <Route path="/journal" element={<Journal />} />
                      <Route path="/challenges" element={<Challenges />} />
                      <Route path="/rewards" element={<Rewards />} />
                      <Route path="/friends" element={<Friends />} />
                      <Route path="/focus" element={<Focus />} />
                      <Route path="/water" element={<WaterTracker />} />
                      <Route path="/sleep" element={<SleepTracker />} />
                      <Route path="/activity" element={<ActivityTracker />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/notifications" element={<Notifications />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </div>
                </main>
              </div>
            </div>
          </Router>
        </SidebarProvider>
      </SmoothScrollProvider>
    </ThemeContext.Provider>
  );
}

export default App;
