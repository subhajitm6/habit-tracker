import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faDumbbell, faBook, faCode, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

const categoryIcons = {
  Fitness: { icon: faDumbbell, color: 'text-orange-500', bg: 'bg-orange-100' },
  Learning: { icon: faBook, color: 'text-blue-500', bg: 'bg-blue-100' },
  Coding: { icon: faCode, color: 'text-purple-500', bg: 'bg-purple-100' },
  Finance: { icon: faPiggyBank, color: 'text-green-500', bg: 'bg-green-100' },
};

export default function GoalCard({ goal, index }) {
  const cat = categoryIcons[goal.category] || categoryIcons.Fitness;
  const progressPercent = Math.min(100, Math.max(0, Math.round((goal.current / goal.target) * 100)));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 + index * 0.1 }}
      className="bg-card border border-border rounded-[20px] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
    >
      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.bg} ${cat.color}`}>
            <FontAwesomeIcon icon={cat.icon} className="text-xl" />
          </div>
          <div>
            <span className="text-xs font-semibold px-2 py-1 rounded-md bg-gray-100 text-muted uppercase tracking-wider">
              {goal.category}
            </span>
            <div className="mt-1">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                goal.priority === 'High' ? 'bg-red-100 text-red-600' :
                goal.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {goal.priority} Priority
              </span>
            </div>
          </div>
        </div>
        <button className="text-muted hover:text-foreground p-2 rounded-lg hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>

      {/* Center Section */}
      <div className="mb-6 flex-grow">
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">{goal.title}</h3>
        <p className="text-sm text-muted line-clamp-2 mb-4">
          {goal.description}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div className="bg-gray-50 p-2 rounded-lg">
            <div className="text-muted text-xs">Target</div>
            <div className="font-semibold">{goal.target} {goal.unit}</div>
          </div>
          <div className="bg-gray-50 p-2 rounded-lg">
            <div className="text-muted text-xs">Remaining</div>
            <div className="font-semibold">{goal.daysRemaining} days</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-foreground">{progressPercent}%</span>
            <span className="text-muted">{goal.current} / {goal.target}</span>
          </div>
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-indigo-500 rounded-full relative"
            >
               <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-4 border-t border-border flex justify-between items-center mt-auto">
        <div className="text-xs text-muted">
          Due: {new Date(goal.deadline).toLocaleDateString()}
        </div>
        <button className="text-sm font-medium text-primary hover:text-indigo-700 transition-colors">
          Update Progress
        </button>
      </div>
    </motion.div>
  );
}
