import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCalendar, faBullseye, faWandMagicSparkles, faHistory } from '@fortawesome/free-solid-svg-icons';

export default function GoalDrawer({ isOpen, onClose, goal }) {
  if (!isOpen || !goal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm flex justify-end">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          className="bg-card w-full max-w-md h-full shadow-2xl flex flex-col border-l border-border"
        >
          {/* Header */}
          <div className="p-6 border-b border-border flex justify-between items-start">
            <div>
              <div className="flex gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-gray-100 text-muted uppercase tracking-wider">
                  {goal.category}
                </span>
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-blue-50 text-blue-600 uppercase tracking-wider">
                  {goal.priority}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">{goal.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-muted transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            
            {/* Progress Section */}
            <section>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-foreground">Overall Progress</span>
                <span className="text-primary font-bold">{Math.round((goal.current / goal.target) * 100)}%</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-indigo-500 rounded-full"
                  style={{ width: `${(goal.current / goal.target) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-muted">
                <span>Current: {goal.current} {goal.unit}</span>
                <span>Target: {goal.target} {goal.unit}</span>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} className="text-muted" />
                Timeline
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-2 border border-border">
                <div className="flex justify-between">
                  <span className="text-muted">Start Date:</span>
                  <span className="font-medium text-foreground">Oct 1, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Deadline:</span>
                  <span className="font-medium text-foreground">{new Date(goal.deadline).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Remaining:</span>
                  <span className="font-medium text-orange-500">{goal.daysRemaining} days</span>
                </div>
              </div>
            </section>

            <section>
               <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="text-purple-500" />
                AI Insights
              </h3>
              <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-sm text-purple-900">
                You are slightly behind schedule. Try to increase your weekly output by 15% to hit your target date comfortably.
              </div>
            </section>

             <section>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faHistory} className="text-muted" />
                Milestones
              </h3>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-card bg-primary text-white shadow shrink-0 z-10 text-[10px]">
                    ✓
                  </div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-3 rounded-xl shadow-sm">
                    <div className="font-semibold text-sm">25% Completed</div>
                    <div className="text-xs text-muted">Nov 15, 2023</div>
                  </div>
                </div>
                 <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-card bg-gray-200 text-transparent shadow shrink-0 z-10 text-[10px]">
                    ✓
                  </div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-3 rounded-xl shadow-sm opacity-60">
                    <div className="font-semibold text-sm">50% Completed</div>
                    <div className="text-xs text-muted">Upcoming</div>
                  </div>
                </div>
              </div>
            </section>
            
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-border flex gap-3 bg-gray-50/50">
            <button className="flex-1 py-2.5 bg-primary text-white rounded-xl font-medium shadow-sm hover:bg-primary/90 transition-colors">
              Update Progress
            </button>
            <button className="px-4 py-2.5 bg-white border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 transition-colors">
              Edit
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
