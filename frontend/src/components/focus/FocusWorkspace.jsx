import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForwardStep, faRotateRight, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';

export default function FocusWorkspace() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] h-full relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Timer Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold rounded-full text-sm mb-4 border border-blue-200 dark:border-blue-800">
          <FontAwesomeIcon icon={faClock} /> Deep Work Session
        </div>
      </div>

      {/* The Timer */}
      <div className="relative w-80 h-80 flex items-center justify-center mb-12 z-10">
        
        {/* Background Track */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-100 dark:text-gray-800" />
          
          {/* Progress Ring (Animated) */}
          <motion.circle 
            initial={{ strokeDasharray: "0 301.59" }}
            animate={{ strokeDasharray: "220 301.59" }} // About 73% complete
            transition={{ duration: 2, ease: "easeOut" }}
            cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" 
            className="text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
          />
        </svg>

        {/* Pulsing rings for effect */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-2 rounded-full border border-blue-400/30"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0, 0.1] }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-4 rounded-full border border-blue-400/20"
        ></motion.div>
        
        {/* Time Text */}
        <div className="absolute flex flex-col items-center justify-center">
          <motion.div 
            className="text-[72px] font-black tracking-tighter text-foreground leading-none drop-shadow-sm font-mono"
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            24:18
          </motion.div>
          <div className="text-sm font-bold text-muted uppercase tracking-widest mt-2">
            Remaining
          </div>
        </div>
      </div>

      {/* Session Controls */}
      <div className="flex items-center gap-6 mb-16 z-10">
        
        <button className="w-14 h-14 rounded-full bg-card border border-border text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm transition-all hover:scale-105 flex items-center justify-center text-lg group">
          <FontAwesomeIcon icon={faRotateRight} className="group-hover:-rotate-90 transition-transform duration-300" />
        </button>

        <button className="w-20 h-20 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:shadow-[0_8px_40px_rgb(59,130,246,0.5)] transition-all hover:scale-105 flex items-center justify-center text-2xl group">
          <FontAwesomeIcon icon={faPause} className="group-hover:scale-90 transition-transform" />
        </button>

        <button className="w-14 h-14 rounded-full bg-card border border-border text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm transition-all hover:scale-105 flex items-center justify-center text-lg group">
          <FontAwesomeIcon icon={faForwardStep} className="group-hover:translate-x-1 transition-transform" />
        </button>

      </div>

      {/* Current Task Footer */}
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-5 shadow-lg flex items-center gap-4 z-10">
        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-500 shrink-0">
          <FontAwesomeIcon icon={faCheckCircle} className="text-xl opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold text-muted uppercase tracking-wider mb-0.5">Current Task</div>
          <div className="font-bold text-foreground text-lg truncate">Code Review for Core API</div>
        </div>
        <button className="px-3 py-1.5 bg-background border border-border text-xs font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          Switch
        </button>
      </div>

    </div>
  );
}
