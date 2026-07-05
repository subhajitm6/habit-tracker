import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBullseye, faCheckCircle, faLink, faMedal, faCode, faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons';

export default function ProfileRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* AI Personal Insights */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-5 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none"></div>
        
        <div className="flex items-center gap-2 mb-4 relative z-10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">Personal Insights</h3>
        </div>
        
        <div className="space-y-3 relative z-10">
          <div className="bg-background border border-border rounded-xl p-3 text-sm text-foreground font-medium shadow-sm leading-relaxed">
            You're most productive on <strong className="text-indigo-600 dark:text-indigo-400">Mondays</strong>. Try scheduling your hardest tasks then!
          </div>
          <div className="bg-background border border-border rounded-xl p-3 text-sm text-foreground font-medium shadow-sm leading-relaxed">
            Your consistency improved by <strong className="text-emerald-600 dark:text-emerald-400">24%</strong> this month. Great job!
          </div>
        </div>
      </div>

      {/* Goals Summary */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faBullseye} className="text-rose-500" />
            Goals Summary
          </h3>
          <button className="text-xs font-bold text-indigo-500 hover:text-indigo-600">View All</button>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <div className="text-sm font-bold text-foreground">Read 12 Books</div>
              <div className="text-xs font-bold text-indigo-500">6/12</div>
            </div>
            <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-1/2"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <div className="text-sm font-bold text-foreground">Run a 5K</div>
              <div className="text-xs font-bold text-emerald-500">90%</div>
            </div>
            <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faLink} className="text-muted" />
          Connected Accounts
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Google</div>
                <div className="text-[10px] text-emerald-500 font-bold">Connected</div>
              </div>
            </div>
            <button className="text-xs font-bold text-muted hover:text-red-500 transition-colors">Disconnect</button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">GitHub</div>
                <div className="text-[10px] text-emerald-500 font-bold">Connected</div>
              </div>
            </div>
            <button className="text-xs font-bold text-muted hover:text-red-500 transition-colors">Disconnect</button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Apple</div>
                <div className="text-[10px] text-muted font-bold">Not connected</div>
              </div>
            </div>
            <button className="text-xs font-bold text-indigo-500 hover:text-indigo-600 transition-colors">Connect</button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground mb-4">Recent Activity</h3>
        
        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-3 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
          
          <div className="relative flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0 z-10 text-emerald-500 text-[10px]">
              <FontAwesomeIcon icon={faMedal} />
            </div>
            <div>
              <div className="font-bold text-sm text-foreground">Earned Productivity Badge</div>
              <div className="text-[10px] text-muted mt-0.5">Today</div>
            </div>
          </div>

          <div className="relative flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 flex items-center justify-center shrink-0 z-10 text-blue-500 text-[10px]">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <div className="font-bold text-sm text-foreground">Joined Fitness Challenge</div>
              <div className="text-[10px] text-muted mt-0.5">Yesterday</div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
}
