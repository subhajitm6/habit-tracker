import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faChevronRight, faPersonWalking, faPersonRunning } from '@fortawesome/free-solid-svg-icons';

export default function ActivityCenterColumn() {
  return (
    <div className="space-y-8">
      
      {/* Activity Rings Centerpiece */}
      <div className="bg-card border border-border rounded-3xl shadow-sm p-8 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-card to-orange-900/5 dark:to-orange-900/20">
        
        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>

        <h2 className="text-sm font-bold text-muted uppercase tracking-wider mb-8 relative z-10">
          Activity Rings
        </h2>
        
        <div className="relative w-72 h-72 flex items-center justify-center mb-8 z-10">
          
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            
            {/* Move Ring (Red/Orange) */}
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" className="text-red-100 dark:text-red-900/30" />
            <motion.circle 
              initial={{ strokeDasharray: "0 263.89" }}
              animate={{ strokeDasharray: "184.7 263.89" }} // 70%
              transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
              cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" 
              className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
            />
            
            {/* Exercise Ring (Green) */}
            <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="6" className="text-green-100 dark:text-green-900/30" />
            <motion.circle 
              initial={{ strokeDasharray: "0 201.06" }}
              animate={{ strokeDasharray: "150.8 201.06" }} // 75%
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
              cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" 
              className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
            />

            {/* Stand Ring (Blue) */}
            <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="6" className="text-blue-100 dark:text-blue-900/30" />
            <motion.circle 
              initial={{ strokeDasharray: "0 138.23" }}
              animate={{ strokeDasharray: "69.1 138.23" }} // 50%
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" 
              className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            />
          </svg>
          
          <div className="absolute flex flex-col items-center justify-center">
             <div className="text-xs font-bold text-muted uppercase tracking-widest mt-1">Today</div>
          </div>
          
        </div>

        <div className="grid grid-cols-3 gap-6 w-full max-w-md relative z-10">
          <div className="text-center">
            <div className="text-xs font-bold text-red-500 uppercase mb-1 flex items-center justify-center gap-1">
              Move
            </div>
            <div className="text-xl font-black text-foreground">420<span className="text-xs text-muted ml-0.5">kcal</span></div>
          </div>
          <div className="text-center">
            <div className="text-xs font-bold text-green-500 uppercase mb-1 flex items-center justify-center gap-1">
              Exercise
            </div>
            <div className="text-xl font-black text-foreground">35<span className="text-xs text-muted ml-0.5">min</span></div>
          </div>
          <div className="text-center">
            <div className="text-xs font-bold text-blue-500 uppercase mb-1 flex items-center justify-center gap-1">
              Stand
            </div>
            <div className="text-xl font-black text-foreground">6<span className="text-xs text-muted ml-0.5">hr</span></div>
          </div>
        </div>

      </div>

      {/* Activity Timeline */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-foreground mb-6">Daily Timeline</h2>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
          
          <div className="relative flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-500 flex items-center justify-center shrink-0 z-10 text-orange-500 mt-1">
              <FontAwesomeIcon icon={faPersonRunning} />
            </div>
            <div className="flex-1 bg-background border border-border rounded-xl p-4 hover:border-orange-500/50 transition-colors shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-bold text-foreground">Morning Run</div>
                  <div className="text-xs text-muted font-medium">6:30 AM</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-orange-500">320 kcal</div>
                  <div className="text-xs text-muted font-medium">45 min</div>
                </div>
              </div>
              <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                 <div className="w-[80%] h-full bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="relative flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500 flex items-center justify-center shrink-0 z-10 text-blue-500 mt-1">
              <FontAwesomeIcon icon={faPersonWalking} />
            </div>
            <div className="flex-1 bg-background border border-border rounded-xl p-4 hover:border-blue-500/50 transition-colors shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-bold text-foreground">Lunch Walk</div>
                  <div className="text-xs text-muted font-medium">1:00 PM</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-500">110 kcal</div>
                  <div className="text-xs text-muted font-medium">20 min</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Analytics Preview */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faChartColumn} className="text-orange-500" />
            Weekly Steps
          </h2>
          <button className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1">
            Full Report <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
          </button>
        </div>
        
        {/* Mock Chart Area */}
        <div className="h-48 w-full flex items-end justify-between gap-2 px-2">
          {/* Day 1 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '70%' }} viewport={{ once: true }} className="w-full bg-orange-200 dark:bg-orange-900/40 rounded-t-lg relative group"></motion.div>
            <div className="text-xs font-bold text-muted">M</div>
          </div>
          {/* Day 2 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true }} className="w-full bg-orange-500 rounded-t-lg shadow-sm relative group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                12,400
              </div>
            </motion.div>
            <div className="text-xs font-bold text-orange-500">T</div>
          </div>
          {/* Day 3 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '50%' }} viewport={{ once: true }} className="w-full bg-orange-200 dark:bg-orange-900/40 rounded-t-lg relative group"></motion.div>
            <div className="text-xs font-bold text-muted">W</div>
          </div>
          {/* Day 4 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '80%' }} viewport={{ once: true }} className="w-full bg-orange-400 rounded-t-lg relative group"></motion.div>
            <div className="text-xs font-bold text-foreground">T</div>
          </div>
          {/* Day 5 (Today) */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full h-[30%] bg-gray-200 dark:bg-gray-700 rounded-t-lg relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-muted">3k</div>
            </div>
            <div className="text-xs font-bold text-muted opacity-80">F</div>
          </div>
          {/* Day 6 (Future) */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full h-[5%] bg-gray-100 dark:bg-gray-800 rounded-t-lg"></div>
            <div className="text-xs font-bold text-muted opacity-50">S</div>
          </div>
          {/* Day 7 (Future) */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full h-[5%] bg-gray-100 dark:bg-gray-800 rounded-t-lg"></div>
            <div className="text-xs font-bold text-muted opacity-50">S</div>
          </div>
        </div>

      </div>

    </div>
  );
}
