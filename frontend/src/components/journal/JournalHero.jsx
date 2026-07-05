import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faPencil, faWandMagicSparkles, faFeather } from '@fortawesome/free-solid-svg-icons';

export default function JournalHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-[24px] p-8 text-purple-900 dark:text-purple-100 relative overflow-hidden shadow-sm border border-purple-200 dark:border-purple-800/50"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <FontAwesomeIcon icon={faBookOpen} className="text-8xl" />
      </div>

      <motion.div 
        animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-8 right-1/4 text-4xl opacity-20 pointer-events-none"
      >
        <FontAwesomeIcon icon={faFeather} />
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">Afternoon Reflection</h2>
          <p className="text-purple-800/80 dark:text-purple-200/80 mb-6 max-w-md">
            "We do not learn from experience... we learn from reflecting on experience." - John Dewey
          </p>
          
          <div className="flex items-center gap-6">
            <div>
              <div className="text-sm text-purple-800/70 dark:text-purple-200/70">Writing Streak</div>
              <div className="text-2xl font-bold flex items-center gap-2">🔥 12 Days</div>
            </div>
            <div className="w-px h-10 bg-purple-300 dark:bg-purple-700/50"></div>
            <div>
              <div className="text-sm text-purple-800/70 dark:text-purple-200/70">Total Entries</div>
              <div className="text-2xl font-bold">143</div>
            </div>
            <div className="w-px h-10 bg-purple-300 dark:bg-purple-700/50"></div>
            <div>
              <div className="text-sm text-purple-800/70 dark:text-purple-200/70">Words Written</div>
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">24,500</div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex gap-3 flex-col sm:flex-row w-full md:w-auto shrink-0">
          <button className="px-5 py-2.5 bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 backdrop-blur-md rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            AI Reflection
          </button>
          <button className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faPencil} />
            Start Writing
          </button>
        </div>
      </div>
    </motion.div>
  );
}
