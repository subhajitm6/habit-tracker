import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faEnvelopeOpenText, faAt, faCheckCircle, faComments, faTrophy, faGift, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

export default function NotificationsLeftSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Category Navigation */}
      <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
        
        <div className="space-y-1">
          <div className="flex items-center justify-between p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl font-bold cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faInbox} className="text-lg" />
              <span>All Notifications</span>
            </div>
            <span className="bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full">12</span>
          </div>

          <div className="flex items-center justify-between p-2 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl font-medium cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-lg text-muted group-hover:text-blue-500 transition-colors" />
              <span>Unread</span>
            </div>
            <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">5</span>
          </div>
          
          <div className="flex items-center justify-between p-2 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl font-medium cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faAt} className="text-lg text-muted group-hover:text-emerald-500 transition-colors" />
              <span>Mentions</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-border my-4 mx-2"></div>
        
        <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2 px-2">Folders</div>

        <div className="space-y-1">
          <div className="flex items-center justify-between p-2 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl font-medium cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-lg text-muted group-hover:text-emerald-500 transition-colors" />
              <span>Habits & Goals</span>
            </div>
            <span className="text-xs font-bold text-muted">3</span>
          </div>

          <div className="flex items-center justify-between p-2 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl font-medium cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faComments} className="text-lg text-muted group-hover:text-purple-500 transition-colors" />
              <span>Social</span>
            </div>
            <span className="text-xs font-bold text-muted">2</span>
          </div>

          <div className="flex items-center justify-between p-2 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl font-medium cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faTrophy} className="text-lg text-muted group-hover:text-yellow-500 transition-colors" />
              <span>Achievements</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-2 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl font-medium cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faGift} className="text-lg text-muted group-hover:text-rose-500 transition-colors" />
              <span>Rewards</span>
            </div>
            <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full">New</span>
          </div>

          <div className="flex items-center justify-between p-2 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl font-medium cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faShieldHalved} className="text-lg text-muted group-hover:text-red-500 transition-colors" />
              <span>Security Alerts</span>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Filters */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground mb-4">Quick Filters</h3>
        
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/50 text-xs font-bold rounded-lg hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors">
            High Priority
          </button>
          <button className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50 text-xs font-bold rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
            Reminders
          </button>
          <button className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-xs font-bold rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors">
            Today
          </button>
        </div>
      </div>

    </div>
  );
}
