import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faChartPie, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SleepCenterColumn() {
  return (
    <div className="space-y-8">
      
      {/* Sleep Score Centerpiece */}
      <div className="bg-card border border-border rounded-3xl shadow-sm p-8 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-card to-indigo-950/10 dark:to-indigo-950/30">
        
        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none"></div>

        {/* Twinkling Stars Background (CSS Animated) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
          <motion.div animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 4, delay: 0 }} className="absolute top-[10%] left-[20%] w-1.5 h-1.5 bg-yellow-200 rounded-full blur-[1px]"></motion.div>
          <motion.div animate={{ opacity: [0.1, 0.6, 0.1] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} className="absolute top-[30%] left-[80%] w-1 h-1 bg-yellow-100 rounded-full blur-[1px]"></motion.div>
          <motion.div animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ repeat: Infinity, duration: 5, delay: 2 }} className="absolute top-[70%] left-[15%] w-2 h-2 bg-yellow-300 rounded-full blur-[2px]"></motion.div>
          <motion.div animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ repeat: Infinity, duration: 4.5, delay: 0.5 }} className="absolute top-[60%] left-[85%] w-1.5 h-1.5 bg-yellow-200 rounded-full blur-[1px]"></motion.div>
        </div>

        <h2 className="text-sm font-bold text-muted uppercase tracking-wider mb-8 relative z-10 flex items-center gap-2">
          <FontAwesomeIcon icon={faMoon} className="text-indigo-500" /> Sleep Score
        </h2>
        
        <div className="relative w-72 h-72 flex items-center justify-center mb-8 z-10">
          
          {/* Background Track */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-100 dark:text-gray-800" />
            
            {/* Progress Ring (Animated) */}
            <motion.circle 
              initial={{ strokeDasharray: "0 289.02" }}
              animate={{ strokeDasharray: "265.9 289.02" }} // 92%
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
              cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" 
              className="text-indigo-500 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            />
          </svg>

          {/* Inner Content */}
          <div className="absolute inset-4 rounded-full flex flex-col items-center justify-center">
            <div className="text-[64px] font-black text-indigo-600 dark:text-indigo-400 leading-none mb-1 font-mono tracking-tighter drop-shadow-md">
              92
            </div>
            <div className="text-sm font-bold text-indigo-500/80 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
              Excellent
            </div>
          </div>
        </div>

        <div className="text-center relative z-10 flex gap-8">
          <div>
            <div className="text-xs text-muted font-bold uppercase mb-1">Duration</div>
            <div className="text-lg font-black text-foreground">7h 45m</div>
          </div>
          <div className="w-px bg-border"></div>
          <div>
            <div className="text-xs text-muted font-bold uppercase mb-1">Restfulness</div>
            <div className="text-lg font-black text-foreground">95%</div>
          </div>
        </div>

      </div>

      {/* Sleep Timeline */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-foreground mb-6">Sleep Stages</h2>
        
        <div className="w-full h-12 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden flex relative">
          
          {/* Light Sleep */}
          <div className="h-full bg-blue-300 dark:bg-blue-600 w-[20%] group relative cursor-pointer hover:opacity-90 transition-opacity">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Light: 1h 30m
            </div>
          </div>
          
          {/* Deep Sleep */}
          <div className="h-full bg-indigo-500 dark:bg-indigo-500 w-[45%] group relative cursor-pointer hover:opacity-90 transition-opacity">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Deep: 3h 30m
            </div>
          </div>
          
          {/* REM Sleep */}
          <div className="h-full bg-purple-400 dark:bg-purple-500 w-[25%] group relative cursor-pointer hover:opacity-90 transition-opacity">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              REM: 2h 00m
            </div>
          </div>
          
          {/* Awake */}
          <div className="h-full bg-orange-300 dark:bg-orange-600 w-[10%] group relative cursor-pointer hover:opacity-90 transition-opacity">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Awake: 45m
            </div>
          </div>
          
        </div>
        
        <div className="flex justify-between text-xs font-bold text-muted mt-2">
          <span>11:00 PM</span>
          <span>6:45 AM</span>
        </div>
        
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <div className="flex items-center gap-2 text-xs font-bold text-muted">
            <div className="w-3 h-3 rounded-full bg-blue-300 dark:bg-blue-600"></div> Light
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-muted">
            <div className="w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-500"></div> Deep
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-muted">
            <div className="w-3 h-3 rounded-full bg-purple-400 dark:bg-purple-500"></div> REM
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-muted">
            <div className="w-3 h-3 rounded-full bg-orange-300 dark:bg-orange-600"></div> Awake
          </div>
        </div>

      </div>

      {/* Analytics Preview */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faChartPie} className="text-indigo-500" />
            Weekly Duration
          </h2>
          <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
            Trends <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
          </button>
        </div>
        
        {/* Mock Chart Area */}
        <div className="h-48 w-full flex items-end justify-between gap-2 px-2">
          {/* Day 1 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '70%' }} viewport={{ once: true }} className="w-full bg-indigo-100 dark:bg-indigo-900/40 rounded-t-lg relative group"></motion.div>
            <div className="text-xs font-bold text-muted">M</div>
          </div>
          {/* Day 2 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '85%' }} viewport={{ once: true }} className="w-full bg-indigo-500 rounded-t-lg shadow-sm relative group"></motion.div>
            <div className="text-xs font-bold text-indigo-500">T</div>
          </div>
          {/* Day 3 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '60%' }} viewport={{ once: true }} className="w-full bg-indigo-100 dark:bg-indigo-900/40 rounded-t-lg relative group"></motion.div>
            <div className="text-xs font-bold text-muted">W</div>
          </div>
          {/* Day 4 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '75%' }} viewport={{ once: true }} className="w-full bg-indigo-100 dark:bg-indigo-900/40 rounded-t-lg relative group"></motion.div>
            <div className="text-xs font-bold text-muted">T</div>
          </div>
          {/* Day 5 (Today) */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full h-[10%] bg-gray-100 dark:bg-gray-800 rounded-t-lg"></div>
            <div className="text-xs font-bold text-muted opacity-50">F</div>
          </div>
          {/* Day 6 (Future) */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full h-[10%] bg-gray-100 dark:bg-gray-800 rounded-t-lg"></div>
            <div className="text-xs font-bold text-muted opacity-50">S</div>
          </div>
          {/* Day 7 (Future) */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full h-[10%] bg-gray-100 dark:bg-gray-800 rounded-t-lg"></div>
            <div className="text-xs font-bold text-muted opacity-50">S</div>
          </div>
        </div>

      </div>

    </div>
  );
}
