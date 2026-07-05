import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlagCheckered, 
  faCheckDouble, 
  faStar, 
  faCoins, 
  faMedal, 
  faFire, 
  faPercent,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

const stats = [
  { label: 'Active Challenges', value: '3', icon: faFlagCheckered, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
  { label: 'Completed', value: '14', icon: faCheckDouble, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-500/10' },
  { label: 'Total XP Earned', value: '8,450', icon: faStar, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' },
  { label: 'Coins', value: '1,200', icon: faCoins, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-500/10' },
  { label: 'Badges Collected', value: '28', icon: faMedal, color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-500/10' },
  { label: 'Winning Streak', value: '5', icon: faFire, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-500/10' },
  { label: 'Success Rate', value: '88%', icon: faPercent, color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-500/10' },
  { label: 'Global Rank', value: '#4,392', icon: faGlobe, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
];

export default function ChallengeStats() {
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
            <div className="text-xs text-muted font-bold uppercase tracking-wider">{stat.label}</div>
            <div className="text-lg font-bold text-foreground mt-0.5">{stat.value}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
