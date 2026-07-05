import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faListCheck, 
  faChartPie, 
  faFire, 
  faTrophy, 
  faGaugeHigh, 
  faBullseye, 
  faCalculator, 
  faStar,
  faArrowTrendUp,
  faArrowTrendDown
} from '@fortawesome/free-solid-svg-icons';

// Simple counter hook for animation
const useCounter = (end, duration = 1000) => {
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

const SummaryCard = ({ title, value, prefix = '', suffix = '', icon, color, bg, trend, delay }) => {
  const animatedValue = useCounter(value);
  const isPositive = trend >= 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
    >
      {/* Decorative background blur */}
      <div className={`absolute -right-6 -top-6 w-24 h-24 ${bg} rounded-full opacity-50 blur-2xl group-hover:opacity-100 transition-opacity`}></div>

      <div className="relative z-10 flex justify-between items-start mb-4">
        <div className={`w-10 h-10 rounded-xl ${bg} ${color} flex items-center justify-center text-lg shadow-sm border border-white/20 dark:border-white/5`}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className={`flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
          <FontAwesomeIcon icon={isPositive ? faArrowTrendUp : faArrowTrendDown} className="text-[10px]" />
          {Math.abs(trend)}%
        </div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-[13px] font-bold text-muted uppercase tracking-wider mb-1">{title}</h3>
        <div className="text-[28px] font-bold text-foreground">
          {prefix}{animatedValue}{suffix}
        </div>
      </div>
    </motion.div>
  );
};

export default function SummaryCards() {
  const cards = [
    { title: 'Total Habits', value: 24, icon: faListCheck, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-500/20', trend: 12 },
    { title: 'Completion', value: 85, suffix: '%', icon: faChartPie, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-500/20', trend: 5 },
    { title: 'Current Streak', value: 12, suffix: 'd', icon: faFire, color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-500/20', trend: -2 },
    { title: 'Longest Streak', value: 45, suffix: 'd', icon: faTrophy, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-500/20', trend: 0 },
    { title: 'Productivity', value: 92, icon: faGaugeHigh, color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-500/20', trend: 8 },
    { title: 'Goals Achieved', value: 14, icon: faBullseye, color: 'text-success', bg: 'bg-success/20 dark:bg-success/20', trend: 20 },
    { title: 'Daily Avg', value: 6, icon: faCalculator, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-500/20', trend: 1 },
    { title: 'XP Earned', value: 4250, icon: faStar, color: 'text-pink-500', bg: 'bg-pink-100 dark:bg-pink-500/20', trend: 15 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <SummaryCard key={card.title} {...card} delay={idx * 0.05} />
      ))}
    </div>
  );
}
