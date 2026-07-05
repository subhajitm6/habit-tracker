import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDumbbell, 
  faBook, 
  faCode, 
  faBrain, 
  faWallet, 
  faBolt,
  faFilter,
  faFaceSmile,
  faArchive,
  faCircleCheck,
  faHourglassHalf,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

export default function CalendarLeftSidebar() {
  const categories = [
    { name: 'Health', icon: faDumbbell, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
    { name: 'Fitness', icon: faDumbbell, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
    { name: 'Reading', icon: faBook, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' },
    { name: 'Coding', icon: faCode, color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-500/10' },
    { name: 'Meditation', icon: faBrain, color: 'text-fuchsia-500', bg: 'bg-fuchsia-50 dark:bg-fuchsia-500/10' },
    { name: 'Finance', icon: faWallet, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
    { name: 'Productivity', icon: faBolt, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10' },
  ];

  const statusFilters = [
    { name: 'Completed', icon: faCircleCheck, color: 'text-success' },
    { name: 'Pending', icon: faHourglassHalf, color: 'text-warning' },
    { name: 'Missed', icon: faCircleXmark, color: 'text-danger' },
    { name: 'Archived', icon: faArchive, color: 'text-muted' },
  ];

  return (
    <div className="space-y-6 flex flex-col h-full pb-12">
      
      {/* Mini Calendar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl p-5 shadow-sm border border-border"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="text-[15px] font-bold text-foreground">July 2026</div>
          <div className="flex gap-1">
             <button className="w-7 h-7 rounded hover:bg-background text-muted flex items-center justify-center transition-colors">&lt;</button>
             <button className="w-7 h-7 rounded hover:bg-background text-muted flex items-center justify-center transition-colors">&gt;</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[11px] mb-2 text-muted font-medium uppercase">
          <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          <div className="w-7 h-7"></div>
          <div className="w-7 h-7"></div>
          <div className="w-7 h-7"></div>
          {Array.from({ length: 31 }).map((_, i) => {
             const day = i + 1;
             const isToday = day === 4;
             return (
               <div 
                 key={day} 
                 className={`w-7 h-7 mx-auto flex items-center justify-center rounded-full text-xs transition-colors ${isToday ? 'bg-primary text-white font-bold shadow-md' : 'text-foreground hover:bg-background hover:text-primary cursor-pointer'}`}
               >
                 {day}
               </div>
             )
          })}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl p-5 shadow-sm border border-border"
      >
        <div className="flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faFilter} className="text-muted text-sm" />
          <h3 className="text-[15px] font-bold text-foreground uppercase tracking-wide">Categories</h3>
        </div>
        <div className="space-y-1">
          {categories.map(cat => (
            <button key={cat.name} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-background transition-colors group text-left">
              <div className={`w-6 h-6 rounded-md ${cat.bg} ${cat.color} flex items-center justify-center text-xs`}>
                <FontAwesomeIcon icon={cat.icon} />
              </div>
              <span className="text-[14px] font-medium text-foreground group-hover:text-primary transition-colors">{cat.name}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Status Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="bg-card rounded-2xl p-5 shadow-sm border border-border"
      >
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-[15px] font-bold text-foreground uppercase tracking-wide">Status</h3>
        </div>
        <div className="space-y-1">
          {statusFilters.map(status => (
            <button key={status.name} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-background transition-colors group text-left">
              <FontAwesomeIcon icon={status.icon} className={`${status.color} text-sm`} />
              <span className="text-[14px] font-medium text-foreground group-hover:text-primary transition-colors">{status.name}</span>
            </button>
          ))}
          
          <div className="pt-2 mt-2 border-t border-border">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-background transition-colors group text-left">
              <FontAwesomeIcon icon={faFaceSmile} className="text-blue-500 text-sm" />
              <span className="text-[14px] font-medium text-foreground group-hover:text-primary transition-colors">Mood Filter</span>
            </button>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
