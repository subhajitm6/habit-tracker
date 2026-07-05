import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faListCheck, faHistory } from '@fortawesome/free-solid-svg-icons';

export default function SleepLeftSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Today's Sleep Goal Card */}
      <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        {/* Soft glowing orb */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold flex items-center gap-2 text-indigo-200">
              <FontAwesomeIcon icon={faMoon} /> Tonight's Goal
            </h3>
          </div>
          <div className="text-4xl font-black mb-1 drop-shadow-md">8.0 <span className="text-xl text-indigo-200 font-bold">Hours</span></div>
          <div className="text-sm font-medium text-indigo-300">Target bedtime: 10:30 PM</div>
        </div>
      </div>

      {/* Bedtime Routine */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faListCheck} className="text-indigo-500" />
            Wind Down
          </h3>
          <span className="text-xs font-bold text-muted bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">2/4</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-4 overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: '50%' }} className="h-full bg-indigo-500 rounded-full"></motion.div>
        </div>

        <div className="space-y-2">
          
          <label className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl cursor-pointer group">
            <div className="w-5 h-5 rounded border-2 border-indigo-500 bg-indigo-500 flex items-center justify-center shrink-0 text-white text-xs">
              ✓
            </div>
            <span className="text-sm font-medium text-muted line-through group-hover:text-foreground transition-colors">Turn off phone</span>
          </label>

          <label className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl cursor-pointer group">
            <div className="w-5 h-5 rounded border-2 border-indigo-500 bg-indigo-500 flex items-center justify-center shrink-0 text-white text-xs">
              ✓
            </div>
            <span className="text-sm font-medium text-muted line-through group-hover:text-foreground transition-colors">Brush teeth</span>
          </label>

          <label className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl cursor-pointer group">
            <div className="w-5 h-5 rounded border-2 border-muted flex items-center justify-center group-hover:border-indigo-500 transition-colors shrink-0"></div>
            <span className="text-sm font-medium text-foreground">Read a book</span>
          </label>

          <label className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl cursor-pointer group">
            <div className="w-5 h-5 rounded border-2 border-muted flex items-center justify-center group-hover:border-indigo-500 transition-colors shrink-0"></div>
            <span className="text-sm font-medium text-foreground">Meditation</span>
          </label>

        </div>
      </div>

      {/* Sleep History */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faHistory} className="text-muted" />
          Recent Nights
        </h3>
        
        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
          
          <div className="relative flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0 z-10 text-xs font-bold text-indigo-600 dark:text-indigo-400">
              7.5h
            </div>
            <div>
              <div className="font-bold text-sm text-foreground">Yesterday</div>
              <div className="text-[10px] text-muted">11:00 PM - 6:30 AM</div>
            </div>
            <div className="ml-auto text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded">Good</div>
          </div>

          <div className="relative flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 flex items-center justify-center shrink-0 z-10 text-xs font-bold text-red-600 dark:text-red-400">
              5.2h
            </div>
            <div>
              <div className="font-bold text-sm text-foreground">Mon</div>
              <div className="text-[10px] text-muted">1:00 AM - 6:15 AM</div>
            </div>
            <div className="ml-auto text-xs font-bold text-red-500 bg-red-50 dark:bg-red-500/10 px-2 py-0.5 rounded">Poor</div>
          </div>
          
          <div className="relative flex items-center gap-4 opacity-70">
            <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200/50 dark:border-indigo-800/30 flex items-center justify-center shrink-0 z-10 text-xs font-bold text-indigo-500">
              8.1h
            </div>
            <div>
              <div className="font-bold text-sm text-foreground">Sun</div>
              <div className="text-[10px] text-muted">10:15 PM - 6:20 AM</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
