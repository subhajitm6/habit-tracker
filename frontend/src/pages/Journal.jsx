import React from 'react';
import { motion } from 'framer-motion';
import JournalHero from '../components/journal/JournalHero';
import JournalStats from '../components/journal/JournalStats';
import JournalLeftSidebar from '../components/journal/JournalLeftSidebar';
import JournalEditor from '../components/journal/JournalEditor';
import JournalRightSidebar from '../components/journal/JournalRightSidebar';

export default function Journal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-24"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">📖 Journal</h1>
          <p className="text-muted mt-1">Capture your thoughts, reflect on your journey, and preserve your memories.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white dark:bg-card border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            📅 Calendar
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            <span>+</span> New Journal
          </button>
        </div>
      </div>
      
      {/* Top Section */}
      <JournalHero />
      <JournalStats />
      
      {/* Main Layout - 3 Columns */}
      <div className="flex flex-col xl:flex-row gap-6 items-stretch">
        {/* Left Navigation/Sidebar */}
        <div className="w-full xl:w-[280px] shrink-0">
          <JournalLeftSidebar />
        </div>
        
        {/* Center Editor (grows to fill available space) */}
        <div className="flex-1 min-w-0">
          <JournalEditor />
        </div>
        
        {/* Right Sidebar */}
        <div className="w-full xl:w-[320px] shrink-0">
          <JournalRightSidebar />
        </div>
      </div>

    </motion.div>
  );
}
