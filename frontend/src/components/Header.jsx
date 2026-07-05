import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faGear, faBars, faSun, faMoon, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import SidebarToggle from './sidebar/SidebarToggle';
import { useSidebar } from './sidebar/SidebarContext';

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const icons = {
    light: faSun,
    dark: faMoon,
    system: faDesktop
  };

  // Determine actual theme for the switch position
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="relative flex items-center gap-1">
      {/* Pill Switch */}
      <button 
        onClick={toggleTheme}
        className="relative w-16 h-9 rounded-full p-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-800 shadow-inner flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none"
        title="Toggle Theme"
      >
        {/* Track icons (Sun & Moon) */}
        <div className="absolute w-full flex justify-between px-2 text-indigo-400 dark:text-slate-400 text-xs pointer-events-none">
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faMoon} />
        </div>

        {/* Animated Thumb */}
        <motion.div
          layout
          className={`w-7 h-7 rounded-full flex items-center justify-center bg-white shadow-sm z-10`}
          animate={{
            x: isDark ? 28 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          <motion.div
            key={theme === 'system' ? 'system' : (isDark ? 'dark' : 'light')}
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon 
              icon={theme === 'system' ? faDesktop : (isDark ? faMoon : faSun)} 
              className={isDark ? "text-slate-700 w-3.5 h-3.5" : "text-amber-500 w-3.5 h-3.5"} 
            />
          </motion.div>
        </motion.div>
      </button>

      {/* Dropdown Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-muted hover:text-primary transition-colors flex items-center justify-center w-6 h-6 rounded-full hover:bg-background ml-1"
        title="Theme Options"
      >
        <span className="text-[10px]">▼</span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 w-36 bg-card rounded-xl shadow-lg border border-border z-50 overflow-hidden"
            >
              {['light', 'dark', 'system'].map((t) => (
                <button
                  key={t}
                  onClick={() => { setTheme(t); setIsOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${
                    theme === t ? 'bg-primary/10 text-primary font-medium' : 'text-foreground hover:bg-background'
                  }`}
                >
                  <FontAwesomeIcon icon={icons[t]} className="w-4 h-4" />
                  <span className="capitalize">{t}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const location = useLocation();
  const { toggleMobileSidebar } = useSidebar();
  
  const routeTitles = {
    '/': 'Dashboard',
    '/habits': 'Habit Management',
    '/today': "Today's Habits",
    '/calendar': 'Calendar',
    '/analytics': 'Analytics',
    '/streak': 'Streak Center',
    '/goals': 'Goals',
    '/mood': 'Mood Tracker',
    '/journal': 'Journal',
    '/challenges': 'Challenges',
    '/rewards': 'Rewards',
    '/friends': 'Friends',
    '/focus': 'Focus Mode',
    '/water': 'Water Tracker',
    '/sleep': 'Sleep Tracker',
    '/activity': 'Activity Tracker',
    '/reports': 'Reports',
    '/notifications': 'Notifications',
    '/profile': 'Profile',
    '/settings': 'Settings',
  };

  const currentTitle = routeTitles[location.pathname] || 'Dashboard';

  return (
    <header className="h-[72px] bg-header sticky top-0 z-30 px-6 flex items-center justify-between border-b border-border shadow-sm transition-colors duration-300">
      <div className="flex items-center gap-4">
        <SidebarToggle />
        <button 
          onClick={toggleMobileSidebar}
          className="md:hidden text-muted hover:text-primary transition-colors"
        >
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
        <h2 className="text-[22px] font-semibold text-foreground hidden sm:block">{currentTitle}</h2>
      </div>

      <div className="flex-1 max-w-md mx-4 hidden md:block relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-muted w-4 h-4" />
        </div>
        <input 
          type="text" 
          placeholder="Search habits, goals, notes..." 
          className="w-full bg-background border border-border text-sm rounded-full focus:ring-2 focus:ring-primary focus:border-primary block pl-10 p-2.5 transition-all shadow-inner text-foreground placeholder:text-muted"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-xs text-muted border border-border px-1.5 rounded bg-card shadow-sm">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        
        <ThemeToggle />

        <button className="text-muted hover:text-primary transition-colors relative">
          <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-danger ring-2 ring-card animate-pulse"></span>
        </button>
        
        <button className="text-muted hover:text-primary transition-colors">
          <FontAwesomeIcon icon={faGear} className="w-5 h-5" />
        </button>
        
        <div className="relative cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-secondary text-white flex items-center justify-center font-bold shadow-sm relative">
            S
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-success ring-2 ring-card"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
