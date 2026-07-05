import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faGlassWater, faBottleWater, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function WaterLeftSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Today's Goal Card */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold flex items-center gap-2 text-white/90">
              <FontAwesomeIcon icon={faTint} /> Today's Goal
            </h3>
          </div>
          <div className="text-4xl font-black mb-1 drop-shadow-md">3.0 <span className="text-xl text-white/80 font-bold">Liters</span></div>
          <div className="text-sm font-medium text-white/90">Weight-based recommendation</div>
        </div>
      </div>

      {/* Quick Add */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faGlassWater} className="text-cyan-500" />
          Quick Add
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          >
            <FontAwesomeIcon icon={faGlassWater} className="text-xl" />
            <span className="font-bold text-sm">+ 250 ml</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800/50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
          >
            <FontAwesomeIcon icon={faBottleWater} className="text-xl" />
            <span className="font-bold text-sm">+ 500 ml</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors col-span-2"
          >
            <span className="font-bold text-sm">+ Custom Amount</span>
          </motion.button>

        </div>
      </div>

      {/* Recent History */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faClockRotateLeft} className="text-muted" />
          Recent Log
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center">
                <FontAwesomeIcon icon={faBottleWater} className="text-xs" />
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">500 ml</div>
                <div className="text-[10px] text-muted">Bottle</div>
              </div>
            </div>
            <div className="text-xs font-bold text-muted">10:30 AM</div>
          </div>

          <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 flex items-center justify-center">
                <FontAwesomeIcon icon={faGlassWater} className="text-xs" />
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">250 ml</div>
                <div className="text-[10px] text-muted">Glass</div>
              </div>
            </div>
            <div className="text-xs font-bold text-muted">8:00 AM</div>
          </div>
        </div>
      </div>

    </div>
  );
}
