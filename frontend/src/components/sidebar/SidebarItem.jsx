import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSidebar } from './SidebarContext';
import SidebarTooltip from './SidebarTooltip';
import { motion } from 'framer-motion';

export default function SidebarItem({ item, onClick }) {
  const { isCollapsed } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={({ isActive }) =>
        `relative flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
          isCollapsed ? 'justify-center mx-2' : 'gap-3 mx-4'
        } ${
          isActive
            ? 'bg-primary/10 text-primary font-bold shadow-sm'
            : 'text-muted hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-foreground'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.div 
              layoutId="activeTabIndicator"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"
            />
          )}
          
          <div className="relative shrink-0 flex items-center justify-center">
            <FontAwesomeIcon 
              icon={item.icon} 
              className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} 
            />
          </div>

          {!isCollapsed && (
            <span className="truncate flex-1">{item.label}</span>
          )}

          {isCollapsed && (
            <SidebarTooltip text={item.label} isVisible={isHovered} />
          )}
        </>
      )}
    </NavLink>
  );
}
