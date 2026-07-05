import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheckCircle, faChevronRight, faStar, faMedal } from '@fortawesome/free-solid-svg-icons';

export default function RewardCenterColumn() {
  return (
    <div className="space-y-8">
      
      {/* Level Progression */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm overflow-hidden relative">
        <h2 className="text-xl font-bold text-foreground mb-6">Level Journey</h2>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 rounded-full z-0"></div>
          <div className="absolute top-1/2 left-0 w-3/5 h-1.5 bg-blue-500 -translate-y-1/2 rounded-full z-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

          <div className="flex justify-between items-center relative z-10 px-2">
            
            {/* Unlocked Level */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold border-4 border-card shadow-md">
                <FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
              </div>
              <div className="text-xs font-bold text-muted">Lvl 1</div>
            </div>

            {/* Unlocked Level */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold border-4 border-card shadow-md">
                <FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
              </div>
              <div className="text-xs font-bold text-muted">Lvl 10</div>
            </div>

            {/* Current Level */}
            <div className="flex flex-col items-center gap-2 relative">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 text-white flex items-center justify-center font-black text-xl border-4 border-card shadow-lg z-10"
              >
                18
              </motion.div>
              <div className="text-xs font-bold text-foreground absolute -bottom-6 w-24 text-center">Current</div>
            </div>

            {/* Locked Level */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-muted flex items-center justify-center font-bold border-4 border-card">
                20
              </div>
              <div className="text-xs font-bold text-muted">Lvl 20</div>
            </div>

            {/* Locked Level */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-muted flex items-center justify-center font-bold border-4 border-card">
                <FontAwesomeIcon icon={faLock} className="text-xs opacity-50" />
              </div>
              <div className="text-xs font-bold text-muted">Lvl 50</div>
            </div>

          </div>
        </div>
      </div>

      {/* Badge Gallery */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-foreground">Recent Badges</h2>
          <button className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            View Gallery <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Badge 1 */}
          <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/20 dark:to-card border border-yellow-200 dark:border-yellow-900/50 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm cursor-pointer relative overflow-hidden group">
            <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors"></div>
            <div className="text-4xl mb-3 drop-shadow-md group-hover:rotate-12 transition-transform duration-300">🔥</div>
            <div className="font-bold text-sm text-foreground mb-1">7-Day Streak</div>
            <div className="text-[10px] text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Rare</div>
          </motion.div>

          {/* Badge 2 */}
          <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-card border border-blue-200 dark:border-blue-900/50 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm cursor-pointer relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-4xl mb-3 drop-shadow-md group-hover:rotate-12 transition-transform duration-300">📚</div>
            <div className="font-bold text-sm text-foreground mb-1">Reading Master</div>
            <div className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Epic</div>
          </motion.div>

          {/* Badge 3 */}
          <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-card border border-purple-200 dark:border-purple-900/50 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm cursor-pointer relative overflow-hidden group">
            <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors"></div>
            <div className="text-4xl mb-3 drop-shadow-md group-hover:rotate-12 transition-transform duration-300">🚀</div>
            <div className="font-bold text-sm text-foreground mb-1">Productivity Pro</div>
            <div className="text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Epic</div>
          </motion.div>

          {/* Locked Badge */}
          <div className="bg-card border border-dashed border-border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="text-4xl mb-3 opacity-50">💎</div>
            <div className="font-bold text-sm text-muted mb-1">Habit Legend</div>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-gray-400 w-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Gallery */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faMedal} className="text-amber-500" /> Active Achievements
        </h2>
        
        <div className="space-y-4">
          {/* Achievement 1 */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 dark:bg-indigo-900/30 dark:text-indigo-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              ✍️
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-foreground">Write 100 Journal Entries</h3>
                <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-[10px]" /> 500 XP
                </span>
              </div>
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-1">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }} className="h-full bg-indigo-500 rounded-full"></motion.div>
              </div>
              <div className="text-xs text-muted text-right font-medium">85 / 100</div>
            </div>
          </div>

          <div className="h-px w-full bg-border"></div>

          {/* Achievement 2 */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 dark:bg-emerald-900/30 dark:text-emerald-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              💧
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-foreground">Hydration Hero</h3>
                <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-[10px]" /> 300 XP
                </span>
              </div>
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-1">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '40%' }} viewport={{ once: true }} className="h-full bg-emerald-500 rounded-full"></motion.div>
              </div>
              <div className="text-xs text-muted text-right font-medium">12 / 30 Days</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
