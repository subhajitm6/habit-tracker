import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faWandMagicSparkles, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default function MoodHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 rounded-[24px] p-8 text-amber-900 dark:text-amber-100 relative overflow-hidden shadow-sm border border-amber-200 dark:border-amber-800/50"
    >
      <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
        <FontAwesomeIcon icon={faCloudSun} className="text-8xl" />
      </div>
      
      {/* Floating emojis decoration */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-6 right-1/4 text-4xl opacity-40 pointer-events-none"
      >
        ☀️
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-6 right-1/3 text-3xl opacity-30 pointer-events-none"
      >
        ☁️
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">Good morning, Subhajit</h2>
          <p className="text-amber-800/80 dark:text-amber-200/80 mb-6 max-w-md">
            "Your mind will answer most questions if you learn to relax and wait for the answer." - William S. Burroughs
          </p>
          
          <div className="flex items-center gap-6">
            <div>
              <div className="text-sm text-amber-800/70 dark:text-amber-200/70">Today's Mood</div>
              <div className="text-2xl font-bold flex items-center gap-2">😊 Happy</div>
            </div>
            <div className="w-px h-10 bg-amber-300 dark:bg-amber-700/50"></div>
            <div>
              <div className="text-sm text-amber-800/70 dark:text-amber-200/70">Mood Score</div>
              <div className="text-2xl font-bold">8.5<span className="text-lg text-amber-600 dark:text-amber-400">/10</span></div>
            </div>
            <div className="w-px h-10 bg-amber-300 dark:bg-amber-700/50"></div>
            <div>
              <div className="text-sm text-amber-800/70 dark:text-amber-200/70">Streak</div>
              <div className="text-2xl font-bold text-orange-500">🔥 7 Days</div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex gap-3 flex-col sm:flex-row w-full md:w-auto shrink-0">
          <button className="px-4 py-2 text-sm whitespace-nowrap bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 backdrop-blur-md rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faCalendarAlt} />
            History
          </button>
          <button className="px-4 py-2 text-sm whitespace-nowrap bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            AI Reflection
          </button>
        </div>
      </div>
    </motion.div>
  );
}
