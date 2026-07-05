import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMedal, faBed, faClock, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function SleepRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Upcoming Bedtime */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faClock} className="text-indigo-500" />
          Next Bedtime
        </h3>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500 text-xl">
            <FontAwesomeIcon icon={faBed} />
          </div>
          <div>
            <div className="text-2xl font-black text-foreground">10:30 PM</div>
            <div className="text-xs text-muted font-medium">In 1h 45m</div>
          </div>
        </div>

        <button className="w-full py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-bold rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors">
          Start Wind Down
        </button>
      </div>

      {/* AI Sleep Coach */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">Sleep Coach</h3>
        </div>
        
        <div className="bg-background border border-border rounded-xl p-4 text-sm text-foreground font-medium shadow-sm leading-relaxed relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-xl"></div>
          Your best sleep happens when you go to bed <strong className="text-indigo-600 dark:text-indigo-400">before 11 PM</strong>. Try to stick to this schedule tonight!
        </div>
      </div>

      {/* Sleep Tips */}
      <motion.div whileHover={{ y: -2 }} className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-5 text-white shadow-sm cursor-pointer relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
          <FontAwesomeIcon icon={faMoon} />
        </div>
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-indigo-200">Sleep Tip</div>
        <div className="font-bold text-lg leading-tight mb-1 relative z-10">Avoid Screens</div>
        <div className="text-sm text-indigo-100 font-medium relative z-10">Stop looking at screens 30 mins before bed for better deep sleep.</div>
      </motion.div>

      {/* Achievements */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faMedal} className="text-yellow-500" />
          Badges
        </h3>
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 border-2 border-purple-300 dark:border-purple-700 flex items-center justify-center text-xl shadow-sm hover:scale-110 transition-transform cursor-pointer">
            🌙
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-100 to-amber-100 dark:from-yellow-900/40 dark:to-amber-900/40 border-2 border-yellow-300 dark:border-yellow-700 flex items-center justify-center text-xl shadow-sm hover:scale-110 transition-transform cursor-pointer">
            ⭐
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-400 text-sm font-bold">
            +1
          </div>
        </div>
      </div>

    </div>
  );
}
