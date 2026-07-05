import React from 'react';
import { motion } from 'framer-motion';
import FriendHero from '../components/friends/FriendHero';
import FriendStats from '../components/friends/FriendStats';
import FriendCenterColumn from '../components/friends/FriendCenterColumn';
import FriendRightSidebar from '../components/friends/FriendRightSidebar';

export default function Friends() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-24"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">👥 Friends</h1>
          <p className="text-muted mt-1">Grow together, stay accountable, and celebrate every achievement.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white dark:bg-card border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Notifications
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            <span>+</span> Add Friend
          </button>
        </div>
      </div>
      
      {/* Top Section */}
      <div className="space-y-8">
        <FriendHero />
        <FriendStats />
      </div>
      
      {/* Main Layout - Center and Right Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <FriendCenterColumn />
        </div>
        
        <div className="w-full lg:w-[320px] xl:w-[380px] shrink-0">
          <FriendRightSidebar />
        </div>
      </div>

    </motion.div>
  );
}
