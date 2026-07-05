import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faDroplet, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';

export default function NotificationsRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* AI Smart Summary */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faBolt} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">Smart Summary</h3>
        </div>
        
        <div className="bg-background border border-border rounded-xl p-4 text-sm text-foreground font-medium shadow-sm leading-relaxed relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-xl"></div>
          You have <strong className="text-indigo-600 dark:text-indigo-400">5 unread reminders</strong>. Complete your morning habits soon to maintain your 12-day streak!
        </div>
      </div>

      {/* Actionable Upcoming Reminders */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faClock} className="text-muted" />
          Up Next
        </h3>
        
        <div className="space-y-3">
          
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-500 flex items-center justify-center">
                  <FontAwesomeIcon icon={faDroplet} className="text-sm" />
                </div>
                <div>
                  <div className="font-bold text-sm text-blue-900 dark:text-blue-100">Drink Water</div>
                  <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400">Due in 15 mins</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
                Complete
              </button>
              <button className="px-3 py-1.5 bg-white dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 text-xs font-bold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors">
                Snooze
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Recent Activity Timeline */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground mb-4">Recent Activity</h3>
        
        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-3 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
          
          <div className="relative flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0 z-10 text-emerald-500 text-[10px]">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <div className="font-bold text-sm text-foreground">Completed Morning Routine</div>
              <div className="text-[10px] text-muted">2 hours ago</div>
            </div>
          </div>

          <div className="relative flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0 z-10 text-indigo-500 text-[10px]">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <div className="font-bold text-sm text-foreground">Read 15 Pages</div>
              <div className="text-[10px] text-muted">Yesterday at 9:00 PM</div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
}
