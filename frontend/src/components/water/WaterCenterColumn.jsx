import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faChartBar, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function WaterCenterColumn() {
  return (
    <div className="space-y-8">
      
      {/* Hydration Progress Ring */}
      <div className="bg-card border border-border rounded-3xl shadow-sm p-8 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[60px] pointer-events-none"></div>

        <h2 className="text-sm font-bold text-muted uppercase tracking-wider mb-8 relative z-10 flex items-center gap-2">
          <FontAwesomeIcon icon={faTint} className="text-blue-500" /> Daily Intake
        </h2>
        
        <div className="relative w-72 h-72 flex items-center justify-center mb-8 z-10">
          
          {/* Background Track */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-100 dark:text-gray-800" />
            
            {/* Progress Ring (Animated) */}
            <motion.circle 
              initial={{ strokeDasharray: "0 289.02" }}
              animate={{ strokeDasharray: "173.4 289.02" }} // Exactly 60%
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" 
              className="text-cyan-500 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]"
            />
          </svg>

          {/* Bubbles Animation */}
          <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-b from-blue-50/50 to-cyan-100/30 dark:from-blue-900/10 dark:to-cyan-900/20 border border-blue-200/50 dark:border-blue-700/30 backdrop-blur-sm flex flex-col items-center justify-center shadow-inner">
            
            {/* Simulated Water Level Fill */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '60%' }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-400/40 to-blue-400/20 dark:from-cyan-500/30 dark:to-blue-500/10"
            ></motion.div>

            {/* Bubble Particles (CSS animated via framer motion for simplicity) */}
            <motion.div animate={{ y: [0, -50], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="absolute bottom-[10%] left-[30%] w-2 h-2 rounded-full bg-white/60"></motion.div>
            <motion.div animate={{ y: [0, -60], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} className="absolute bottom-[20%] right-[40%] w-3 h-3 rounded-full bg-white/40"></motion.div>
            <motion.div animate={{ y: [0, -40], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0 }} className="absolute bottom-[5%] right-[20%] w-1.5 h-1.5 rounded-full bg-white/70"></motion.div>
            
            {/* Text Overlay */}
            <div className="relative z-10 flex flex-col items-center drop-shadow-md">
              <div className="text-[56px] font-black text-blue-600 dark:text-cyan-400 leading-none mb-1 font-mono tracking-tighter">1.8</div>
              <div className="text-sm font-bold text-blue-500/80 uppercase tracking-widest">/ 3.0 Liters</div>
            </div>

          </div>
        </div>

        <div className="text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 font-bold rounded-full text-sm mb-1 border border-cyan-200 dark:border-cyan-800/50 shadow-sm">
            60% Hydrated
          </div>
          <div className="text-sm text-muted mt-2">Just 1.2L more to hit your daily goal!</div>
        </div>

      </div>

      {/* Analytics Preview */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faChartBar} className="text-cyan-500" />
            Weekly Intake
          </h2>
          <button className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">
            Full Report <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
          </button>
        </div>
        
        {/* Mock Chart Area */}
        <div className="h-48 w-full flex items-end justify-between gap-2 px-2">
          {/* Day 1 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '80%' }} viewport={{ once: true }} className="w-full bg-blue-100 dark:bg-blue-900/40 rounded-t-lg relative group">
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity rounded-t-lg"></div>
            </motion.div>
            <div className="text-xs font-bold text-muted">M</div>
          </div>
          {/* Day 2 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '60%' }} viewport={{ once: true }} className="w-full bg-blue-100 dark:bg-blue-900/40 rounded-t-lg relative group">
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity rounded-t-lg"></div>
            </motion.div>
            <div className="text-xs font-bold text-muted">T</div>
          </div>
          {/* Day 3 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true }} className="w-full bg-cyan-400 rounded-t-lg shadow-[0_0_10px_rgba(34,211,238,0.4)] relative group">
              <div className="absolute -top-6 text-[10px] font-bold text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">Goal!</div>
            </motion.div>
            <div className="text-xs font-bold text-foreground">W</div>
          </div>
          {/* Day 4 */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '90%' }} viewport={{ once: true }} className="w-full bg-blue-100 dark:bg-blue-900/40 rounded-t-lg relative group">
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity rounded-t-lg"></div>
            </motion.div>
            <div className="text-xs font-bold text-muted">T</div>
          </div>
          {/* Day 5 (Today) */}
          <div className="w-full flex flex-col items-center gap-2">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '60%' }} viewport={{ once: true }} className="w-full bg-blue-500 rounded-t-lg shadow-sm relative group">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
            </motion.div>
            <div className="text-xs font-bold text-blue-500">F</div>
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
