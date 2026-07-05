import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faListCheck, 
  faCalendarCheck, 
  faCalendarDays, 
  faChartSimple,
  faFire,
  faBullseye,
  faFaceSmile,
  faBookOpen,
  faTrophy,
  faMedal,
  faUserGroup,
  faStopwatch,
  faDroplet,
  faMoon,
  faPersonRunning,
  faChartPie,
  faBell,
  faUser,
  faGear
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

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
  return (
    <motion.aside 
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      className="w-[280px] bg-sidebar border-r border-border h-screen flex flex-col hidden md:flex sticky top-0 transition-colors duration-300"
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
            <FontAwesomeIcon icon={faListCheck} />
          </div>
          HabitFlow
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-1 scrollbar-hide">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-[14px] transition-all duration-300 ${
                isActive
                  ? 'bg-primary text-white font-medium shadow-md'
                  : 'text-muted hover:bg-primary/10 hover:text-primary'
              }`
            }
          >
            <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-border mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary text-white flex items-center justify-center font-bold shadow-sm">
            S
          </div>
          <div className="flex-1 overflow-hidden">
            <h4 className="text-sm font-semibold text-foreground truncate">Subhajit</h4>
            <p className="text-xs text-muted truncate">Level 12 Explorer</p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
