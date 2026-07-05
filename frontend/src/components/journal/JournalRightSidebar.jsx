import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faListCheck, faPenNib } from '@fortawesome/free-solid-svg-icons';

export default function JournalRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* AI Journal Insights */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">AI Insights</h3>
        </div>
        
        <div className="space-y-3">
          <div className="bg-card backdrop-blur-sm rounded-xl p-3 border border-border shadow-sm text-sm text-foreground font-medium flex gap-3 items-start">
            <span className="text-xl">🏃</span>
            <span>Your happiest entries are often linked to morning exercise.</span>
          </div>
          <div className="bg-card backdrop-blur-sm rounded-xl p-3 border border-border shadow-sm text-sm text-foreground font-medium flex gap-3 items-start">
            <span className="text-xl">📈</span>
            <span>Writing daily increases your habit completion by 15%.</span>
          </div>
        </div>
      </div>

      {/* Linked Items */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <FontAwesomeIcon icon={faListCheck} className="text-muted" />
          Linked Items
        </h3>
        
        <div className="space-y-3">
          <div>
            <div className="text-xs text-muted mb-2 font-medium">Habits</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-background text-foreground rounded-lg text-xs font-medium border border-border">
                Morning Jog
              </span>
              <span className="px-3 py-1.5 bg-background text-foreground rounded-lg text-xs font-medium border border-border">
                Read 20 Pages
              </span>
            </div>
          </div>
          <div>
            <div className="text-xs text-muted mb-2 font-medium mt-4">Goals</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-background text-foreground rounded-lg text-xs font-medium border border-border">
                Run a Marathon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Writing Prompts */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faPenNib} className="text-muted" />
            Daily Prompts
          </h3>
          <button className="text-xs text-primary font-medium hover:underline">Shuffle</button>
        </div>
        
        <ul className="space-y-2">
          <li>
            <button className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800 text-sm font-medium text-foreground transition-colors border border-border">
              What made you smile today?
            </button>
          </li>
          <li>
            <button className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800 text-sm font-medium text-foreground transition-colors border border-border">
              What challenge did you overcome?
            </button>
          </li>
          <li>
            <button className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800 text-sm font-medium text-foreground transition-colors border border-border">
              What's one lesson you learned today?
            </button>
          </li>
        </ul>
      </div>

    </div>
  );
}
