import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar, SidebarContext } from './SidebarContext';
import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';
import ProfileCard from './ProfileCard';

import { 
  faHome, faListCheck, faCalendarCheck, faCalendarDays, 
  faChartSimple, faFire, faBullseye, faFaceSmile, 
  faBookOpen, faTrophy, faMedal, faUserGroup, 
  faStopwatch, faDroplet, faMoon, faPersonRunning, 
  faChartPie, faBell, faUser, faGear
} from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { path: '/', icon: faHome, label: 'Dashboard' },
  { path: '/habits', icon: faListCheck, label: 'Habit Management' },
  { path: '/today', icon: faCalendarCheck, label: "Today's Habits" },
  { path: '/calendar', icon: faCalendarDays, label: 'Calendar' },
  { path: '/analytics', icon: faChartSimple, label: 'Analytics' },
  { path: '/streak', icon: faFire, label: 'Streak Center' },
  { path: '/goals', icon: faBullseye, label: 'Goals' },
  { path: '/mood', icon: faFaceSmile, label: 'Mood Tracker' },
  { path: '/journal', icon: faBookOpen, label: 'Journal' },
  { path: '/challenges', icon: faTrophy, label: 'Challenges' },
  { path: '/rewards', icon: faMedal, label: 'Rewards' },
  { path: '/friends', icon: faUserGroup, label: 'Friends' },
  { path: '/focus', icon: faStopwatch, label: 'Focus Mode' },
  { path: '/water', icon: faDroplet, label: 'Water Tracker' },
  { path: '/sleep', icon: faMoon, label: 'Sleep Tracker' },
  { path: '/activity', icon: faPersonRunning, label: 'Activity Tracker' },
  { path: '/reports', icon: faChartPie, label: 'Reports' },
  { path: '/notifications', icon: faBell, label: 'Notifications' },
  { path: '/profile', icon: faUser, label: 'Profile' },
  { path: '/settings', icon: faGear, label: 'Settings' },
];

export default function Sidebar() {
  const context = useSidebar();
  const { isCollapsed, isMobileOpen, closeMobileSidebar } = context;

  const sidebarContent = (
    <>
      <SidebarHeader />
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 space-y-1 hover:scrollbar-default scrollbar-hide relative">
        {navItems.map((item) => (
          <SidebarItem key={item.path} item={item} onClick={closeMobileSidebar} />
        ))}
      </div>
      <ProfileCard />
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isCollapsed ? 90 : 320 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.3 }}
        className="bg-sidebar border-r border-border h-screen flex-col hidden md:flex sticky top-0 transition-colors z-40 shrink-0"
      >
        {sidebarContent}
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <SidebarContext.Provider value={{ ...context, isCollapsed: false }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileSidebar}
              className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 w-[320px] max-w-[80vw] bg-sidebar border-r border-border h-screen flex flex-col md:hidden z-50 shadow-2xl"
            >
              {sidebarContent}
            </motion.aside>
          </SidebarContext.Provider>
        )}
      </AnimatePresence>
    </>
  );
}
