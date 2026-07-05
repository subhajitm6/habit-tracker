import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal, faLightbulb, faHeartPulse } from '@fortawesome/free-solid-svg-icons';

export default function ActivityRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Today's Challenge */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 dark:bg-yellow-400/5 rounded-full blur-xl"></div>
        
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4 relative z-10">
          <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" />
          Today's Challenge
        </h3>
        
        <div className="mb-4 relative z-10">
          <div className="font-black text-lg text-foreground leading-tight">Burn 500 Calories</div>
          <div className="text-xs text-muted font-medium mt-1">Push yourself a little further today!</div>
        </div>

        <div className="flex justify-between items-end mb-2 relative z-10">
          <div className="text-2xl font-black text-orange-500">320</div>
          <div className="text-xs font-bold text-muted pb-1">/ 500 kcal</div>
        </div>
        
        <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-4 overflow-hidden relative z-10">
          <motion.div initial={{ width: 0 }} animate={{ width: '64%' }} className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></motion.div>
        </div>

        <div className="flex justify-between items-center bg-orange-50 dark:bg-orange-900/10 p-2 rounded-lg border border-orange-100 dark:border-orange-800/30 relative z-10">
          <div className="text-xs font-bold text-orange-600 dark:text-orange-400">Reward: 50 XP</div>
          <button className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-md hover:bg-orange-600 transition-colors shadow-sm">
            Start Workout
          </button>
        </div>
      </div>

      {/* AI Fitness Coach */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/30 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">AI Coach</h3>
        </div>
        
        <div className="bg-background border border-border rounded-xl p-4 text-sm text-foreground font-medium shadow-sm leading-relaxed relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-xl"></div>
          You're only <strong className="text-blue-600 dark:text-blue-400">3,000 steps away</strong> from your daily goal. A 30-minute evening walk will get you there!
        </div>
      </div>

      {/* Health Insights */}
      <motion.div whileHover={{ y: -2 }} className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-5 text-white shadow-sm cursor-pointer relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
          <FontAwesomeIcon icon={faHeartPulse} />
        </div>
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-rose-100">Recovery</div>
        <div className="font-bold text-lg leading-tight mb-1 relative z-10">Great Recovery</div>
        <div className="text-sm text-rose-50 font-medium relative z-10">Your resting heart rate is lower today, indicating good recovery.</div>
      </motion.div>

      {/* Achievements */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faMedal} className="text-yellow-500" />
          Badges
        </h3>
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 border-2 border-orange-300 dark:border-orange-700 flex items-center justify-center text-xl shadow-sm hover:scale-110 transition-transform cursor-pointer">
            🔥
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 border-2 border-blue-300 dark:border-blue-700 flex items-center justify-center text-xl shadow-sm hover:scale-110 transition-transform cursor-pointer">
            🏃
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-400 text-sm font-bold">
            +5
          </div>
        </div>
      </div>

    </div>
  );
}
