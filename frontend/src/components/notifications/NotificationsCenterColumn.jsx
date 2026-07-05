import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashCan, faBoxArchive, faSearch, faSliders, faTrophy, faDroplet, faUserPlus, faChartSimple } from '@fortawesome/free-solid-svg-icons';

export default function NotificationsCenterColumn() {
  return (
    <div className="space-y-6">
      
      {/* Search & Filter Bar */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-muted" />
          </div>
          <input 
            type="text" 
            placeholder="Search notifications..." 
            className="w-full bg-card border border-border text-foreground rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
          />
        </div>
        <button className="px-4 py-2.5 bg-card border border-border text-foreground rounded-xl shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
          <FontAwesomeIcon icon={faSliders} className="text-muted" />
          <span className="hidden sm:inline">Filter</span>
        </button>
      </div>

      {/* Notification Group: Today */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-2 ml-1">Today</h3>
        
        {/* Unread Notification: Achievement */}
        <motion.div 
          whileHover={{ y: -2 }}
          className="group relative bg-card border border-border hover:border-yellow-500/50 rounded-2xl p-4 shadow-sm transition-all cursor-pointer overflow-hidden"
        >
          {/* Unread Indicator Glow */}
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 flex items-center justify-center shrink-0 text-xl border border-yellow-200 dark:border-yellow-800/50">
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-foreground text-sm truncate pr-4">Achievement Unlocked!</h4>
                <span className="text-[10px] font-bold text-indigo-500 shrink-0">10m ago</span>
              </div>
              <p className="text-sm text-muted font-medium line-clamp-2">
                You've completed your habits for 7 consecutive days. You earned the "Consistency Master" badge and 100 XP.
              </p>
              
              {/* Hover Actions */}
              <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-card shadow-sm border border-border rounded-lg p-1">
                <button className="w-8 h-8 rounded bg-gray-50 dark:bg-gray-800 hover:text-indigo-500 text-muted flex items-center justify-center transition-colors tooltip-trigger" title="Mark Read">
                  <FontAwesomeIcon icon={faCheck} className="text-sm" />
                </button>
                <button className="w-8 h-8 rounded bg-gray-50 dark:bg-gray-800 hover:text-orange-500 text-muted flex items-center justify-center transition-colors tooltip-trigger" title="Archive">
                  <FontAwesomeIcon icon={faBoxArchive} className="text-sm" />
                </button>
                <button className="w-8 h-8 rounded bg-red-50 dark:bg-red-900/20 hover:bg-red-100 hover:text-red-600 text-red-500 flex items-center justify-center transition-colors tooltip-trigger" title="Delete">
                  <FontAwesomeIcon icon={faTrashCan} className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Unread Notification: High Priority Reminder */}
        <motion.div 
          whileHover={{ y: -2 }}
          className="group relative bg-card border border-border hover:border-blue-500/50 rounded-2xl p-4 shadow-sm transition-all cursor-pointer overflow-hidden"
        >
          {/* Unread Indicator Glow */}
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center shrink-0 text-xl border border-blue-200 dark:border-blue-800/50">
              <FontAwesomeIcon icon={faDroplet} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-foreground text-sm truncate pr-4">Hydration Goal Falling Behind</h4>
                <span className="text-[10px] font-bold text-indigo-500 shrink-0">1h ago</span>
              </div>
              <p className="text-sm text-muted font-medium line-clamp-2">
                You're 3 glasses behind your daily water intake goal. Grab a glass of water now!
              </p>
              
              <div className="mt-3 flex gap-2">
                 <button className="px-3 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
                   Log Water
                 </button>
              </div>

              {/* Hover Actions */}
              <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-card shadow-sm border border-border rounded-lg p-1">
                <button className="w-8 h-8 rounded bg-gray-50 dark:bg-gray-800 hover:text-indigo-500 text-muted flex items-center justify-center transition-colors">
                  <FontAwesomeIcon icon={faCheck} className="text-sm" />
                </button>
                <button className="w-8 h-8 rounded bg-gray-50 dark:bg-gray-800 hover:text-orange-500 text-muted flex items-center justify-center transition-colors">
                  <FontAwesomeIcon icon={faBoxArchive} className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Notification Group: Yesterday */}
      <div className="space-y-3 pt-4">
        <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-2 ml-1">Yesterday</h3>
        
        {/* Read Notification: Social */}
        <motion.div 
          whileHover={{ y: -2 }}
          className="group relative bg-gray-50/50 dark:bg-card/50 border border-border/50 hover:border-border rounded-2xl p-4 transition-all cursor-pointer opacity-80 hover:opacity-100"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center shrink-0 text-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <FontAwesomeIcon icon={faUserPlus} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-foreground text-sm truncate pr-4">New Friend Request</h4>
                <span className="text-[10px] font-medium text-muted shrink-0">Yesterday, 4:20 PM</span>
              </div>
              <p className="text-sm text-muted font-medium line-clamp-2">
                Sarah Jenkins wants to connect with you on HabitFlow.
              </p>
              
              {/* Hover Actions */}
              <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-card shadow-sm border border-border rounded-lg p-1">
                <button className="w-8 h-8 rounded bg-gray-50 dark:bg-gray-800 hover:text-orange-500 text-muted flex items-center justify-center transition-colors">
                  <FontAwesomeIcon icon={faBoxArchive} className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Read Notification: System Report */}
        <motion.div 
          whileHover={{ y: -2 }}
          className="group relative bg-gray-50/50 dark:bg-card/50 border border-border/50 hover:border-border rounded-2xl p-4 transition-all cursor-pointer opacity-80 hover:opacity-100"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-500 flex items-center justify-center shrink-0 text-xl border border-purple-200/50 dark:border-purple-800/30">
              <FontAwesomeIcon icon={faChartSimple} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-foreground text-sm truncate pr-4">Weekly Report Ready</h4>
                <span className="text-[10px] font-medium text-muted shrink-0">Yesterday, 9:00 AM</span>
              </div>
              <p className="text-sm text-muted font-medium line-clamp-2">
                Your performance summary for last week is ready to view. You had a great week for productivity!
              </p>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
