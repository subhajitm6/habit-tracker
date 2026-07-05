import React from 'react';
import { motion } from 'framer-motion';
import StreakTopSection from '../components/streak/StreakTopSection';
import StreakMainContent from '../components/streak/StreakMainContent';
import StreakBottomSection from '../components/streak/StreakBottomSection';

export default function StreakCenter() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <StreakTopSection />
      <StreakMainContent />
      <StreakBottomSection />
    </motion.div>
  );
}
