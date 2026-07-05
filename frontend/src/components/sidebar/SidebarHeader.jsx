import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { useSidebar } from './SidebarContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function SidebarHeader() {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`p-6 relative flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-md">
          <FontAwesomeIcon icon={faListCheck} />
        </div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.h1
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-bold text-foreground overflow-hidden whitespace-nowrap"
            >
              HabitFlow
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
