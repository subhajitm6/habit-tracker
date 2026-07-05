import React, { useState } from 'react';
import { useSidebar } from './SidebarContext';
import { motion, AnimatePresence } from 'framer-motion';
import SidebarTooltip from './SidebarTooltip';

export default function ProfileCard() {
  const { isCollapsed } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="p-4 border-t border-border mt-auto relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer ${isCollapsed ? 'justify-center mx-auto w-fit' : 'gap-3'}`}>
        <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold shadow-sm relative">
          S
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-sidebar rounded-full"></div>
        </div>
        
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 overflow-hidden"
            >
              <h4 className="text-sm font-semibold text-foreground truncate">Subhajit</h4>
              <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider truncate">Pro Member</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {isCollapsed && (
        <SidebarTooltip text="Subhajit • Pro" isVisible={isHovered} />
      )}
    </div>
  );
}
