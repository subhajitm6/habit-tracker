import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faPlay, faCloudRain, faTree, faCoffee, faMusic, faHistory } from '@fortawesome/free-solid-svg-icons';

export default function FocusLeftSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Today's Tasks */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faListCheck} className="text-blue-500" />
          Today's Focus
        </h3>
        
        <div className="space-y-3">
          
          <div className="group flex items-start gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-border">
            <div className="mt-0.5 w-5 h-5 rounded border-2 border-muted flex items-center justify-center group-hover:border-blue-500 transition-colors shrink-0"></div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm text-foreground mb-0.5">Finish Q3 Report</div>
              <div className="flex gap-2 text-[10px] font-bold">
                <span className="text-red-500 bg-red-50 dark:bg-red-500/10 px-1.5 py-0.5 rounded">High</span>
                <span className="text-muted">45m</span>
              </div>
            </div>
          </div>

          <div className="group flex items-start gap-3 p-2 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl transition-colors cursor-pointer border border-blue-200 dark:border-blue-800/50">
            <div className="mt-0.5 w-5 h-5 rounded border-2 border-blue-500 flex items-center justify-center shrink-0">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm text-blue-700 dark:text-blue-400 mb-0.5">Code Review</div>
              <div className="flex gap-2 text-[10px] font-bold">
                <span className="text-orange-500 bg-orange-50 dark:bg-orange-500/10 px-1.5 py-0.5 rounded">Med</span>
                <span className="text-muted">30m</span>
              </div>
            </div>
            <div className="text-blue-500 animate-pulse">
              <FontAwesomeIcon icon={faPlay} className="text-xs" />
            </div>
          </div>

          <div className="group flex items-start gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-border opacity-60">
            <div className="mt-0.5 w-5 h-5 rounded border-2 border-emerald-500 bg-emerald-500 flex items-center justify-center shrink-0 text-white text-xs">
              ✓
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm text-foreground line-through mb-0.5">Reply to Emails</div>
              <div className="flex gap-2 text-[10px] font-bold">
                <span className="text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded">Done</span>
              </div>
            </div>
          </div>

        </div>
        
        <button className="w-full mt-4 py-2 border border-dashed border-border hover:border-blue-500 text-muted hover:text-blue-500 text-xs font-bold rounded-xl transition-colors">
          + Add Task
        </button>
      </div>

      {/* Ambient Sounds */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faMusic} className="text-purple-500" />
          Soundscapes
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <FontAwesomeIcon icon={faCloudRain} className="text-2xl text-blue-500 mb-2 group-hover:-translate-y-1 transition-transform" />
            <div className="font-bold text-xs text-foreground">Rain</div>
            <div className="w-full h-1 bg-blue-200 dark:bg-blue-800 mt-2 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-background border border-border rounded-xl p-3 flex flex-col items-center text-center cursor-pointer hover:border-emerald-500 transition-all hover:shadow-md group">
            <FontAwesomeIcon icon={faTree} className="text-2xl text-emerald-500 opacity-70 group-hover:opacity-100 mb-2 group-hover:-translate-y-1 transition-transform" />
            <div className="font-bold text-xs text-muted group-hover:text-foreground">Forest</div>
          </div>

          <div className="bg-background border border-border rounded-xl p-3 flex flex-col items-center text-center cursor-pointer hover:border-amber-500 transition-all hover:shadow-md group">
            <FontAwesomeIcon icon={faCoffee} className="text-2xl text-amber-500 opacity-70 group-hover:opacity-100 mb-2 group-hover:-translate-y-1 transition-transform" />
            <div className="font-bold text-xs text-muted group-hover:text-foreground">Cafe</div>
          </div>

        </div>
      </div>
      
      {/* Session History */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faHistory} className="text-muted" />
          History
        </h3>
        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
          
          <div className="relative flex items-start gap-4">
            <div className="w-5 h-5 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center shrink-0 z-10 mt-0.5"></div>
            <div>
              <div className="font-bold text-sm text-foreground">09:00 - 09:25</div>
              <div className="text-xs text-muted">Writing • 25m Focus</div>
            </div>
          </div>
          
          <div className="relative flex items-start gap-4">
            <div className="w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center shrink-0 z-10 mt-0.5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="font-bold text-sm text-blue-600 dark:text-blue-400">10:00 - Now</div>
              <div className="text-xs text-blue-500/80">Coding • In Progress</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
