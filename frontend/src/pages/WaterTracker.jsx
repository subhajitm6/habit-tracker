import React from 'react';
import { motion } from 'framer-motion';
import WaterLeftSidebar from '../components/water/WaterLeftSidebar';
import WaterCenterColumn from '../components/water/WaterCenterColumn';
import WaterRightSidebar from '../components/water/WaterRightSidebar';

export default function WaterTracker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 pb-24 min-h-screen flex flex-col"
    >
      <div className="flex justify-between items-center mb-4 shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">💧 Water Tracker</h1>
          <p className="text-muted mt-1">Stay hydrated and build healthier habits every day.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white dark:bg-card border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Edit Goal
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            History
          </button>
        </div>
      </div>
      
      {/* 3-Column Layout */}
      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0">
          <WaterLeftSidebar />
        </div>
        
        {/* Center Dashboard */}
        <div className="flex-1 min-w-0">
          <WaterCenterColumn />
        </div>
        
        {/* Right Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0">
          <WaterRightSidebar />
        </div>

      </div>

    </motion.div>
  );
}
