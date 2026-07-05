import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullseye, 
  faPersonRunning, 
  faCheckCircle, 
  faClockRotateLeft,
  faChartPie,
  faFlagCheckered,
  faStar,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

const stats = [
  { label: 'Total Goals', value: '24', icon: faBullseye, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Active Goals', value: '5', icon: faPersonRunning, color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Completed Goals', value: '12', icon: faCheckCircle, color: 'text-green-500', bg: 'bg-green-50' },
  { label: 'Overdue Goals', value: '2', icon: faClockRotateLeft, color: 'text-red-500', bg: 'bg-red-50' },
  { label: 'Completion Rate', value: '68%', icon: faChartPie, color: 'text-purple-500', bg: 'bg-purple-50' },
  { label: 'Current Milestones', value: '8', icon: faFlagCheckered, color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'XP Earned', value: '4,250', icon: faStar, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { label: 'Success Rate', value: '92%', icon: faTrophy, color: 'text-teal-500', bg: 'bg-teal-50' },
];

export default function GoalStats() {
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
            <div className="text-xl font-bold text-foreground mt-0.5">{stat.value}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
