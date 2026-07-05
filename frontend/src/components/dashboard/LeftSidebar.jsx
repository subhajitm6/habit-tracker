import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faHourglassHalf, 
  faFire, 
  faStar 
} from '@fortawesome/free-solid-svg-icons';

export default function LeftSidebar() {
  const completionPercentage = 72;
  const completedHabits = 14;
  const totalHabits = 20;

  return (
    <div className="space-y-6 flex flex-col h-full">
      
      {/* Progress Ring Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl p-6 shadow-sm border border-border flex flex-col items-center justify-center text-center relative overflow-hidden group"
      >
        <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-4 w-full text-left">Today's Progress</div>
        
        <div className="relative w-32 h-32 mb-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-border" />
            <motion.circle 
              cx="50" cy="50" r="40" 
              stroke="currentColor" 
              strokeWidth="8" 
              fill="none" 
              className="text-primary"
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 - (251.2 * completionPercentage) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">{completionPercentage}%</span>
          </div>
        </div>

        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{completedHabits} of {totalHabits} Habits Completed</div>
        <div className="text-sm text-success mt-1 font-medium">Great Job! Keep Going!</div>
      </motion.div>

      {/* Summary Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-4 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all flex flex-col items-center text-center"
        >
          <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-500/10 text-success flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="text-xl font-bold text-foreground">{completedHabits}</div>
          <div className="text-xs text-muted">Completed</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-4 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all flex flex-col items-center text-center"
        >
          <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-500/10 text-warning flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faHourglassHalf} />
          </div>
          <div className="text-xl font-bold text-foreground">{totalHabits - completedHabits}</div>
          <div className="text-xs text-muted">Pending</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl p-4 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all flex flex-col items-center text-center"
        >
          <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-500 flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faFire} />
          </div>
          <div className="text-xl font-bold text-foreground">12</div>
          <div className="text-xs text-muted">Day Streak</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-card rounded-2xl p-4 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all flex flex-col items-center text-center"
        >
          <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-500/10 text-primary flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="text-xl font-bold text-foreground">150</div>
          <div className="text-xs text-muted">XP Today</div>
        </motion.div>
      </div>

      {/* Mini Calendar Mock */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="bg-card rounded-2xl p-5 shadow-sm border border-border"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-semibold text-foreground">July 2026</div>
          <div className="flex gap-2">
             <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-background text-muted text-xs">&lt;</button>
             <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-background text-muted text-xs">&gt;</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[11px] mb-2 text-muted font-medium uppercase">
          <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {/* Padding days for July 2026 (Starts on Wednesday) */}
          <div className="w-7 h-7"></div>
          <div className="w-7 h-7"></div>
          <div className="w-7 h-7"></div>
          {Array.from({ length: 31 }).map((_, i) => {
             const day = i + 1;
             const isToday = day === 4; // Assuming today is 4th
             return (
               <div 
                 key={day} 
                 className={`w-7 h-7 mx-auto flex items-center justify-center rounded-full text-xs transition-colors ${isToday ? 'bg-primary text-white font-bold shadow-md' : 'text-foreground hover:bg-background cursor-pointer'}`}
               >
                 {day}
               </div>
             )
          })}
        </div>
      </motion.div>
    </div>
  );
}
