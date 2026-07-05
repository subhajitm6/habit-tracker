import React from 'react';
import { motion } from 'framer-motion';
import NotificationsLeftSidebar from '../components/notifications/NotificationsLeftSidebar';
import NotificationsCenterColumn from '../components/notifications/NotificationsCenterColumn';
import NotificationsRightSidebar from '../components/notifications/NotificationsRightSidebar';

export default function Notifications() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 pb-24 min-h-screen flex flex-col"
    >
      <div className="flex justify-between items-center mb-4 shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">🔔 Notifications</h1>
          <p className="text-muted mt-1">Stay informed about every achievement, reminder, challenge, and update.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white dark:bg-card border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Settings
          </button>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2">
            Mark All Read
          </button>
        </div>
      </div>
      
      {/* 3-Column Layout */}
      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0">
          <NotificationsLeftSidebar />
        </div>
        
        {/* Center Inbox Feed */}
        <div className="flex-1 min-w-0">
          <NotificationsCenterColumn />
        </div>
        
        {/* Right Sidebar */}
        <div className="w-full lg:w-[300px] xl:w-[320px] shrink-0">
          <NotificationsRightSidebar />
        </div>

      </div>

    </motion.div>
  );
}
