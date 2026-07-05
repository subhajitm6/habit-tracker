import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faChartSimple, faLightbulb, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

export default function FocusRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Focus Streak */}
      <motion.div 
        whileHover={{ y: -2 }}
        className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-10 -mt-10"></div>
        
        <div className="flex items-center justify-between mb-4 relative z-10">
          <h3 className="font-bold flex items-center gap-2">
            <FontAwesomeIcon icon={faFire} className="text-orange-400" /> Focus Streak
          </h3>
          <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded backdrop-blur-sm">Top 10%</span>
        </div>
        
        <div className="relative z-10">
          <div className="text-5xl font-black mb-1 drop-shadow-md">7 <span className="text-2xl text-white/80">Days</span></div>
          <div className="text-sm font-medium text-white/90 mb-4">You're on a roll! Keep it up.</div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-white/80">
              <span>Today's Goal</span>
              <span>2.5 / 4 hrs</span>
            </div>
            <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full w-[60%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Focus Coach */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">AI Coach</h3>
        </div>
        
        <div className="bg-background border border-border rounded-xl p-4 text-sm text-foreground font-medium shadow-sm leading-relaxed relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-xl"></div>
          You focus best between <strong className="text-indigo-600 dark:text-indigo-400">9 AM and 11 AM</strong>. Try scheduling your most difficult tasks during this window!
        </div>
      </div>

      {/* Productivity Stats */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faChartSimple} className="text-blue-500" /> Quick Stats
        </h3>
        
        <div className="space-y-4">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center">
                <FontAwesomeIcon icon={faChartSimple} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted uppercase">This Week</div>
                <div className="font-bold text-foreground text-sm">18.5 Hours</div>
              </div>
            </div>
            <div className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg">
              +12%
            </div>
          </div>

          <div className="h-px w-full bg-border"></div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted uppercase">Focus Score</div>
                <div className="font-bold text-foreground text-sm">94 / 100</div>
              </div>
            </div>
            <div className="text-xs font-bold text-muted bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
              Elite
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
