import React from 'react';
import { motion } from 'framer-motion';
import LeftSidebar from '../components/dashboard/LeftSidebar';
import CenterContent from '../components/dashboard/CenterContent';
import RightSidebar from '../components/dashboard/RightSidebar';

export default function TodaysHabit() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 items-start"
    >
      {/* Left Sidebar - 1 column on Desktop */}
      <div className="lg:col-span-1 hidden lg:block sticky top-24">
        <LeftSidebar />
      </div>

      {/* Center Content - 2 columns on Desktop */}
      <div className="lg:col-span-2 w-full">
        <CenterContent />
      </div>

      {/* Right Sidebar - 1 column on Desktop */}
      <div className="lg:col-span-1 hidden lg:block sticky top-24">
        <RightSidebar />
      </div>

      {/* For Mobile/Tablet, we stack the sidebars below the center content or hide them based on design */}
      <div className="lg:hidden col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <LeftSidebar />
        <RightSidebar />
      </div>

    </motion.div>
  );
}
