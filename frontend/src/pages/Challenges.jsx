import React from 'react';
import { motion } from 'framer-motion';
import ChallengeHero from '../components/challenges/ChallengeHero';
import ChallengeStats from '../components/challenges/ChallengeStats';
import ChallengeCenterColumn from '../components/challenges/ChallengeCenterColumn';
import ChallengeRightSidebar from '../components/challenges/ChallengeRightSidebar';

export default function Challenges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-24"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">🏆 Challenges</h1>
          <p className="text-muted mt-1">Compete, stay motivated, and achieve your goals together.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white dark:bg-card border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Explore
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-medium shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            <span>+</span> Create Challenge
          </button>
        </div>
      </div>
      
      {/* Top Section */}
      <div className="space-y-8">
        <ChallengeHero />
        <ChallengeStats />
      </div>
      
      {/* Main Layout - Center and Right Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <ChallengeCenterColumn />
        </div>
        
        <div className="w-full lg:w-[320px] xl:w-[380px] shrink-0">
          <ChallengeRightSidebar />
        </div>
      </div>

    </motion.div>
  );
}
