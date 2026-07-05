import React from 'react';
import { motion } from 'framer-motion';
import CalendarLeftSidebar from '../components/calendar/CalendarLeftSidebar';
import CalendarCenter from '../components/calendar/CalendarCenter';
import CalendarRightSidebar from '../components/calendar/CalendarRightSidebar';

export default function Calendar() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 items-start"
    >
      {/* Left Sidebar - 1 column on Desktop */}
      <div className="lg:col-span-1 hidden lg:block sticky top-24">
        <CalendarLeftSidebar />
      </div>

      {/* Center Content - 2 columns on Desktop */}
      <div className="lg:col-span-2 w-full flex flex-col h-full">
        <CalendarCenter />
      </div>

      {/* Right Sidebar - 1 column on Desktop */}
      <div className="lg:col-span-1 hidden lg:block sticky top-24">
        <CalendarRightSidebar />
      </div>

      {/* For Mobile/Tablet, stack the sidebars below the center content */}
      <div className="lg:hidden col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <CalendarLeftSidebar />
        <CalendarRightSidebar />
      </div>

    </motion.div>
  );
}
