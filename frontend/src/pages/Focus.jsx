import React from 'react';
import { motion } from 'framer-motion';
import FocusLeftSidebar from '../components/focus/FocusLeftSidebar';
import FocusWorkspace from '../components/focus/FocusWorkspace';
import FocusRightSidebar from '../components/focus/FocusRightSidebar';

export default function Focus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 pb-24 min-h-screen flex flex-col"
    >
      <div className="flex justify-between items-center mb-4 shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">🎯 Focus Mode</h1>
          <p className="text-muted mt-1">Enter deep work and eliminate distractions.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white dark:bg-card border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Settings
          </button>
          <button className="px-4 py-2 bg-foreground text-background dark:bg-foreground dark:text-background rounded-xl font-medium shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            Fullscreen
          </button>
        </div>
      </div>
      
      {/* 3-Column Layout */}
      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0">
          <FocusLeftSidebar />
        </div>
        
        {/* Center Workspace */}
        <div className="flex-1 min-w-0 bg-card border border-border rounded-3xl shadow-sm relative overflow-hidden flex flex-col">
          <FocusWorkspace />
        </div>
        
        {/* Right Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0">
          <FocusRightSidebar />
        </div>

      </div>

    </motion.div>
  );
}
