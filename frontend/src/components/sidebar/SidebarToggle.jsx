import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSidebar } from './SidebarContext';
import { motion } from 'framer-motion';

export default function SidebarToggle() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="hidden md:flex w-9 h-9 items-center justify-center rounded-xl text-muted hover:text-primary hover:bg-primary/10 transition-colors"
      title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isCollapsed ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
      </motion.div>
    </button>
  );
}
