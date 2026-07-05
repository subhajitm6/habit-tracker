import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowUpRightDots, 
  faStar, 
  faTrophy, 
  faMedal, 
  faCoins, 
  faGift, 
  faCrown,
  faUnlockKeyhole
} from '@fortawesome/free-solid-svg-icons';

const stats = [
  { label: 'Current Level', value: '18', icon: faArrowUpRightDots, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
  { label: 'Total XP', value: '18,450', icon: faStar, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' },
  { label: 'Achievements', value: '42', icon: faTrophy, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-500/10' },
  { label: 'Badges Earned', value: '15', icon: faMedal, color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-500/10' },
  { label: 'Coins Available', value: '3,200', icon: faCoins, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10' },
  { label: 'Rewards Redeemed', value: '8', icon: faGift, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  { label: 'Current Rank', value: 'Diamond', icon: faCrown, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
  { label: 'Next Unlock', value: '250 XP', icon: faUnlockKeyhole, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-500/10' },
];

export default function RewardStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.05 }}
          className="bg-card border border-border rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md cursor-default group"
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 ${stat.bg} ${stat.color}`}>
            <FontAwesomeIcon icon={stat.icon} className="text-xl drop-shadow-sm" />
          </div>
          <div>
            <div className="text-[10px] sm:text-xs text-muted font-bold uppercase tracking-wider">{stat.label}</div>
            <div className="text-lg font-bold text-foreground mt-0.5">{stat.value}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
