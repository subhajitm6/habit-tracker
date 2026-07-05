import React from 'react';
import { motion } from 'framer-motion';
import ActivityLeftSidebar from '../components/activity/ActivityLeftSidebar';
import ActivityCenterColumn from '../components/activity/ActivityCenterColumn';
import ActivityRightSidebar from '../components/activity/ActivityRightSidebar';

export default function ActivityTracker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 pb-24 min-h-screen flex flex-col"
    >
      <div className="flex justify-between items-center mb-4 shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">🏃 Activity Tracker</h1>
          <p className="text-muted mt-1">Move more, stay active, and build a healthier lifestyle.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white dark:bg-card border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            History
          </button>
          <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2">
            Log Activity
          </button>
        </div>
      </div>
      
      {/* 3-Column Layout */}
      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0">
          <ActivityLeftSidebar />
        </div>
        
        {/* Center Dashboard */}
        <div className="flex-1 min-w-0">
          <ActivityCenterColumn />
        </div>
        
        {/* Right Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0">
          <ActivityRightSidebar />
        </div>

      </div>

    </motion.div>
  );
}
