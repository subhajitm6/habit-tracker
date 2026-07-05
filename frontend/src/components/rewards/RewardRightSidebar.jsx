import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faBoltLightning, faHistory, faClock } from '@fortawesome/free-solid-svg-icons';

export default function RewardRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Daily Bonus Card */}
      <motion.div 
        whileHover={{ y: -2 }}
        className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden cursor-pointer group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
        
        <div className="flex items-center justify-between mb-2 relative z-10">
          <h3 className="font-bold flex items-center gap-2">
            <FontAwesomeIcon icon={faGift} /> Daily Bonus
          </h3>
          <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded backdrop-blur-sm">Ready</span>
        </div>
        
        <div className="relative z-10 text-center py-4">
          <div className="text-5xl mb-2 drop-shadow-md group-hover:scale-110 transition-transform duration-300">🎁</div>
          <div className="text-sm font-medium text-white/90">Tap to open your mystery box!</div>
        </div>
        
        <button className="w-full py-2 bg-white text-orange-600 font-bold rounded-xl shadow-sm hover:shadow-md transition-all">
          Claim Reward
        </button>
      </motion.div>

      {/* AI Motivation */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faBoltLightning} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">AI Coach</h3>
        </div>
        
        <div className="bg-background border border-border rounded-xl p-3 text-sm text-foreground font-medium shadow-sm leading-relaxed relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-xl"></div>
          You're only <strong className="text-indigo-600 dark:text-indigo-400">250 XP</strong> away from Level 19. Complete your evening reading habit today to unlock a new tier!
        </div>
      </div>

      {/* Recent Rewards Timeline */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faHistory} className="text-muted" /> Recent Activity
        </h3>
        
        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          
          {/* Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 dark:bg-slate-700 dark:border-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="text-lg">🔥</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-background shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <div className="font-bold text-foreground text-sm">7-Day Streak</div>
                <time className="text-[10px] font-medium text-muted flex items-center gap-1"><FontAwesomeIcon icon={faClock} /> 2h ago</time>
              </div>
              <div className="text-xs text-muted">Unlocked Rare Badge</div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 dark:bg-slate-700 dark:border-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="text-lg">🎯</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-background shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <div className="font-bold text-foreground text-sm">Goal Crusher</div>
                <time className="text-[10px] font-medium text-muted flex items-center gap-1"><FontAwesomeIcon icon={faClock} /> 1d ago</time>
              </div>
              <div className="text-xs text-muted">Earned +150 XP</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
