import React from 'react';
import { motion } from 'framer-motion';
import RewardHero from '../components/rewards/RewardHero';
import RewardStats from '../components/rewards/RewardStats';
import RewardCenterColumn from '../components/rewards/RewardCenterColumn';
import RewardRightSidebar from '../components/rewards/RewardRightSidebar';

export default function Rewards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-24"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">🏆 Rewards</h1>
          <p className="text-muted mt-1">Celebrate every achievement and stay motivated on your journey.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white dark:bg-card border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Reward History
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            Reward Store
          </button>
        </div>
      </div>
      
      {/* Top Section */}
      <div className="space-y-8">
        <RewardHero />
        <RewardStats />
      </div>
      
      {/* Main Layout - Center and Right Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <RewardCenterColumn />
        </div>
        
        <div className="w-full lg:w-[320px] xl:w-[380px] shrink-0">
          <RewardRightSidebar />
        </div>
      </div>

    </motion.div>
  );
}
