import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFire, 
  faShareNodes,
  faChartSimple,
  faTrophy,
  faCalendarCheck,
  faBullseye,
  faCircleCheck,
  faCircleXmark,
  faHeartPulse,
  faStar,
  faArrowTrendUp
} from '@fortawesome/free-solid-svg-icons';

// Simple counter hook for animation
const useCounter = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

const StreakSummaryCard = ({ title, value, suffix = '', icon, color, bg, delay }) => {
  const animatedValue = useCounter(value);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`w-10 h-10 rounded-xl ${bg} ${color} flex items-center justify-center text-lg shadow-sm border border-white/20 dark:border-white/5`}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-full bg-success/10 text-success">
          <FontAwesomeIcon icon={faArrowTrendUp} className="text-[10px]" />
        </div>
      </div>
      <div>
        <h3 className="text-[12px] font-bold text-muted uppercase tracking-wider mb-1">{title}</h3>
        <div className="text-[26px] font-bold text-foreground">
          {animatedValue}{suffix}
        </div>
      </div>
    </motion.div>
  );
};

export default function StreakTopSection() {
  const currentStreak = useCounter(27);

  const summaryCards = [
    { title: 'Current Streak', value: 27, suffix: 'd', icon: faFire, color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-500/20' },
    { title: 'Longest Streak', value: 45, suffix: 'd', icon: faTrophy, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-500/20' },
    { title: 'Best Month', value: 28, suffix: 'd', icon: faCalendarCheck, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-500/20' },
    { title: 'Consistency', value: 92, suffix: '%', icon: faBullseye, color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-500/20' },
    { title: 'Perfect Days', value: 142, icon: faCircleCheck, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-500/20' },
    { title: 'Missed Days', value: 12, icon: faCircleXmark, color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-500/20' },
    { title: 'Recovery Used', value: 3, icon: faHeartPulse, color: 'text-fuchsia-500', bg: 'bg-fuchsia-100 dark:bg-fuchsia-500/20' },
    { title: 'Streak XP', value: 850, icon: faStar, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-500/20' },
  ];

  return (
    <div className="space-y-6 pb-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[34px] font-bold text-foreground leading-tight flex items-center gap-3">
            <span className="text-orange-500 animate-pulse">🔥</span> Streak Center
          </h1>
          <p className="text-[15px] text-muted">Consistency builds success. Keep your streak alive every day.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-card border border-border rounded-xl text-sm font-semibold text-foreground flex items-center gap-2 shadow-sm">
            July 4, 2026
          </div>
          <button className="px-4 py-2 bg-card border border-border hover:border-primary/50 text-foreground rounded-xl text-sm font-semibold transition-all shadow-sm flex items-center gap-2 group">
            <FontAwesomeIcon icon={faChartSimple} className="text-muted group-hover:text-primary transition-colors" /> View Analytics
          </button>
          <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-semibold shadow-md transition-transform hover:-translate-y-0.5 flex items-center gap-2">
            <FontAwesomeIcon icon={faShareNodes} /> Share Progress
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 rounded-3xl p-8 sm:p-12 shadow-lg overflow-hidden flex flex-col md:flex-row items-center justify-between text-white"
      >
        {/* Decorative Background Elements */}
        <div className="absolute -top-24 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-12 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex items-center gap-8 mb-6 md:mb-0">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full flex items-center justify-center text-5xl sm:text-7xl shadow-xl border-4 border-white/20"
          >
            🔥
          </motion.div>
          <div>
            <h2 className="text-[15px] font-bold text-white/80 uppercase tracking-widest mb-1">Current Streak</h2>
            <div className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-2">
              {currentStreak} <span className="text-2xl sm:text-4xl text-white/60 font-bold">Days</span>
            </div>
            <p className="text-lg sm:text-xl font-medium text-yellow-200">
              You're on Fire! Don't Break The Chain!
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto">
          <button className="w-full md:w-48 bg-white text-indigo-600 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-indigo-50 transition-colors transform hover:-translate-y-0.5">
            Start Today's Habit
          </button>
          <button className="w-full md:w-48 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-xl transition-colors">
            View History
          </button>
        </div>
      </motion.div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card, idx) => (
          <StreakSummaryCard key={card.title} {...card} delay={0.1 + (idx * 0.05)} />
        ))}
      </div>

    </div>
  );
}
