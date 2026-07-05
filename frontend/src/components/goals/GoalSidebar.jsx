import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faClock, faCalendarDay, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function GoalSidebar() {
  return (
    <div className="space-y-6">
      {/* AI Coach */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">AI Goal Coach</h3>
        </div>
        
        <div className="space-y-3">
          <div className="bg-card backdrop-blur-sm rounded-xl p-3 border border-border shadow-md text-sm text-foreground font-medium">
            <span className="font-bold text-primary">Insight:</span> You're 82% toward your Coding Goal. Completing today's habits will keep you on track to finish 3 days early!
          </div>
          <div className="bg-card backdrop-blur-sm rounded-xl p-3 border border-border shadow-md text-sm text-foreground font-medium">
            <span className="font-bold text-secondary">Suggestion:</span> Focus on your Fitness goals this week, you've missed 2 milestones.
          </div>
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faClock} className="text-muted" />
          <h3 className="font-bold text-foreground">Upcoming Deadlines</h3>
        </div>

        <div className="space-y-4">
          <div className="relative pl-4 border-l-2 border-red-500">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-red-500 ring-4 ring-card"></div>
            <div className="text-sm font-semibold">Tomorrow</div>
            <div className="text-xs text-muted">Finish React Course</div>
          </div>
          
          <div className="relative pl-4 border-l-2 border-orange-400">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-orange-400 ring-4 ring-card"></div>
            <div className="text-sm font-semibold">3 Days</div>
            <div className="text-xs text-muted">Run 5k under 25 mins</div>
          </div>

          <div className="relative pl-4 border-l-2 border-blue-400">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-400 ring-4 ring-card"></div>
            <div className="text-sm font-semibold">Next Week</div>
            <div className="text-xs text-muted">Save $500 for Emergency</div>
          </div>
        </div>
      </div>

      {/* Today's Progress */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faCalendarDay} className="text-muted" />
          <h3 className="font-bold text-foreground">Today's Focus</h3>
        </div>
        
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-sm">
            <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
            <span className="line-through text-muted">Drink 2L Water</span>
          </li>
          <li className="flex items-center gap-3 text-sm">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-muted"></div>
            <span>Read 20 pages</span>
          </li>
          <li className="flex items-center gap-3 text-sm">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-muted"></div>
            <span>Code for 1 hour</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
