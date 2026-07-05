import React from 'react';
import { motion } from 'framer-motion';
import MoodHero from '../components/mood/MoodHero';
import QuickMoodCheckIn from '../components/mood/QuickMoodCheckIn';
import MoodStats from '../components/mood/MoodStats';
import MoodCenterColumn from '../components/mood/MoodCenterColumn';
import MoodSidebar from '../components/mood/MoodSidebar';

export default function MoodTracker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-24"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">😊 Mood Tracker</h1>
          <p className="text-muted mt-1">Understand your emotions and build healthier daily habits.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-sm text-muted font-medium mr-2">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
          <button className="px-4 py-2 bg-white dark:bg-card border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            📅
          </button>
        </div>
      </div>
      
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MoodHero />
        <QuickMoodCheckIn />
      </div>
      
      {/* Stats Summary */}
      <MoodStats />
      
      {/* Main Layout - Center and Right Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <MoodCenterColumn />
        </div>
        
        <div className="w-full lg:w-[320px] xl:w-[380px] shrink-0">
          <MoodSidebar />
        </div>
      </div>

    </motion.div>
  );
}
