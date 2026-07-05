import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking, faPersonRunning, faBicycle, faDumbbell, faHistory, faFire } from '@fortawesome/free-solid-svg-icons';

export default function ActivityLeftSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Today's Goal Progress */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold flex items-center gap-2 text-white/90">
              <FontAwesomeIcon icon={faFire} /> Daily Goal
            </h3>
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded backdrop-blur-sm">70%</span>
          </div>
          
          <div className="text-4xl font-black mb-1 drop-shadow-md">7,000</div>
          <div className="text-sm font-medium text-white/90 mb-4">/ 10,000 Steps</div>
          
          <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: '70%' }} className="h-full bg-white rounded-full"></motion.div>
          </div>
        </div>
      </div>

      {/* Quick Activity Log */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faDumbbell} className="text-orange-500" />
          Quick Log
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          >
            <FontAwesomeIcon icon={faPersonWalking} className="text-xl" />
            <span className="font-bold text-sm">Walk</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors"
          >
            <FontAwesomeIcon icon={faPersonRunning} className="text-xl" />
            <span className="font-bold text-sm">Run</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors col-span-2"
          >
            <FontAwesomeIcon icon={faBicycle} className="text-xl" />
            <span className="font-bold text-sm">Cycling</span>
          </motion.button>

        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faHistory} className="text-muted" />
          Recent Workouts
        </h3>
        
        <div className="space-y-3">
          
          <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-border group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faPersonRunning} />
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">Morning Run</div>
                <div className="text-[10px] text-muted font-medium">320 kcal • 5.2 km</div>
              </div>
            </div>
            <div className="text-xs font-bold text-muted">Today</div>
          </div>

          <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-border group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faDumbbell} />
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">Strength Training</div>
                <div className="text-[10px] text-muted font-medium">210 kcal • 45 min</div>
              </div>
            </div>
            <div className="text-xs font-bold text-muted">Yesterday</div>
          </div>
          
        </div>
        
        <button className="w-full mt-2 py-2 text-xs font-bold text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/10 rounded-xl transition-colors">
          View All History
        </button>
      </div>

    </div>
  );
}
