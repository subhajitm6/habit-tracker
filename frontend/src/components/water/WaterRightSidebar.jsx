import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faLightbulb, faMedal, faDroplet } from '@fortawesome/free-solid-svg-icons';

export default function WaterRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Smart Reminders */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faBell} className="text-blue-500" />
            Next Drink
          </h3>
          <span className="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full">In 45m</span>
        </div>
        
        <div className="text-center py-4 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
          <div className="text-3xl font-black text-foreground mb-1">1:00 PM</div>
          <div className="text-xs text-muted font-medium mb-4">Time for a 250ml glass</div>
          <div className="flex gap-2 justify-center px-4">
            <button className="flex-1 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition-colors shadow-sm">
              Drink Now
            </button>
            <button className="flex-1 py-1.5 bg-background hover:bg-card border border-border text-foreground text-xs font-bold rounded-lg transition-colors">
              Snooze
            </button>
          </div>
        </div>
      </div>

      {/* AI Coach */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-100 dark:border-cyan-800/30 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">Hydration Coach</h3>
        </div>
        
        <div className="bg-background border border-border rounded-xl p-4 text-sm text-foreground font-medium shadow-sm leading-relaxed relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 rounded-l-xl"></div>
          You're drinking <strong className="text-cyan-600 dark:text-cyan-400">15% more water</strong> than last week. Hot weather today means you should keep it up!
        </div>
      </div>

      {/* Hydration Tips */}
      <motion.div whileHover={{ y: -2 }} className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-5 text-white shadow-sm cursor-pointer relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
          <FontAwesomeIcon icon={faDroplet} />
        </div>
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-emerald-100">Daily Tip</div>
        <div className="font-bold text-lg leading-tight mb-1 relative z-10">Drink before meals</div>
        <div className="text-sm text-emerald-50 font-medium relative z-10">It helps with digestion and prevents overeating.</div>
      </motion.div>

      {/* Recent Achievements */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faMedal} className="text-amber-500" />
          Badges
        </h3>
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 border-2 border-cyan-300 dark:border-cyan-700 flex items-center justify-center text-xl shadow-sm hover:scale-110 transition-transform cursor-pointer">
            🌊
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 border-2 border-amber-300 dark:border-amber-700 flex items-center justify-center text-xl shadow-sm hover:scale-110 transition-transform cursor-pointer">
            🔥
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-400 text-sm font-bold">
            +3
          </div>
        </div>
      </div>

    </div>
  );
}
