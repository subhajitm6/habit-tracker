import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarDay, 
  faFire, 
  faChartLine, 
  faSun, 
  faCloudRain, 
  faStar, 
  faTrophy,
  faScaleBalanced
} from '@fortawesome/free-solid-svg-icons';

const stats = [
  { label: "Today's Mood", value: 'Happy 😊', icon: faCalendarDay, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10' },
  { label: 'Mood Streak', value: '7 Days 🔥', icon: faFire, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-500/10' },
  { label: 'Average Mood', value: 'Good 🙂', icon: faChartLine, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
  { label: 'Positive Days', value: '24', icon: faSun, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-500/10' },
  { label: 'Negative Days', value: '3', icon: faCloudRain, color: 'text-gray-500', bg: 'bg-gray-100 dark:bg-gray-500/10' },
  { label: 'Current Week', value: '8.2/10', icon: faStar, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' },
  { label: 'Best Mood Day', value: 'Saturday', icon: faTrophy, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  { label: 'Stability Score', value: '94%', icon: faScaleBalanced, color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-500/10' },
];

export default function MoodStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.05 }}
          className="bg-card border border-border rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md cursor-default"
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
            <FontAwesomeIcon icon={stat.icon} className="text-xl" />
          </div>
          <div>
            <div className="text-xs text-muted font-medium uppercase tracking-wider">{stat.label}</div>
            <div className="text-lg font-bold text-foreground mt-0.5">{stat.value}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
