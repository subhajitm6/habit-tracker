import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faUserPlus, 
  faWifi, 
  faGamepad, 
  faFire, 
  faStar, 
  faUserGroup,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

const stats = [
  { label: 'Total Friends', value: '42', icon: faUsers, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
  { label: 'Friend Requests', value: '3', icon: faUserPlus, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
  { label: 'Friends Online', value: '12', icon: faWifi, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  { label: 'Shared Challenges', value: '3', icon: faGamepad, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' },
  { label: 'Avg Friend Streak', value: '14 Days', icon: faFire, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-500/10' },
  { label: 'Community XP', value: '14,200', icon: faStar, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-500/10' },
  { label: 'Groups Joined', value: '2', icon: faUserGroup, color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-500/10' },
  { label: 'Motivations Sent', value: '156', icon: faHeart, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-500/10' },
];

export default function FriendStats() {
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
