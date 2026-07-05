import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faGift, faCalendarPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ChallengeRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* AI Challenge Coach */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">Challenge Coach</h3>
        </div>
        
        <div className="space-y-3">
          <div className="bg-card backdrop-blur-sm rounded-xl p-3 border border-border shadow-sm text-sm text-foreground font-medium flex gap-3 items-start">
            <span className="text-xl">🎯</span>
            <span>You're 80% likely to complete the Marathon Prep if you log activity before 9 AM.</span>
          </div>
          <div className="bg-card backdrop-blur-sm rounded-xl p-3 border border-border shadow-sm text-sm text-foreground font-medium flex gap-3 items-start">
            <span className="text-xl">🤝</span>
            <span>Invite two friends to your reading challenge for a 50 XP bonus!</span>
          </div>
        </div>
      </div>

      {/* Rewards Center Preview */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -mr-10 -mt-10"></div>
        
        <div className="flex justify-between items-center mb-4 relative z-10">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faGift} className="text-yellow-500" />
            Rewards
          </h3>
          <button className="text-xs text-primary font-medium hover:underline">View All</button>
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="bg-background border border-border rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400 flex items-center justify-center text-lg">
                💰
              </div>
              <div>
                <div className="font-bold text-foreground">1,200 Coins</div>
                <div className="text-xs text-muted">Available to spend</div>
              </div>
            </div>
            <button className="px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-xs font-bold transition-colors">
              Shop
            </button>
          </div>

          <div className="bg-background border border-border rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 flex items-center justify-center text-lg">
                🎫
              </div>
              <div>
                <div className="font-bold text-foreground">Free Skip</div>
                <div className="text-xs text-muted">Protects streak</div>
              </div>
            </div>
            <span className="text-xs font-bold text-muted bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">x2</span>
          </div>
        </div>
      </div>

      {/* Upcoming Challenges */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faCalendarPlus} className="text-muted" />
          Upcoming
        </h3>
        
        <div className="space-y-3">
          <div className="p-3 border border-border rounded-xl hover:border-primary transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-1">
              <div className="font-bold text-foreground group-hover:text-primary transition-colors">No Sugar November</div>
              <div className="text-xs font-bold text-orange-500 bg-orange-50 dark:bg-orange-500/10 px-2 py-0.5 rounded">Starts in 2d</div>
            </div>
            <div className="text-xs text-muted mb-2">Health & Nutrition • 30 Days</div>
            <button className="w-full py-1.5 bg-background hover:bg-card border border-border text-foreground text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1">
              Preview <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="p-3 border border-border rounded-xl hover:border-primary transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-1">
              <div className="font-bold text-foreground group-hover:text-primary transition-colors">Code Every Day</div>
              <div className="text-xs font-bold text-blue-500 bg-blue-50 dark:bg-blue-500/10 px-2 py-0.5 rounded">Next Week</div>
            </div>
            <div className="text-xs text-muted mb-2">Learning • 100 Days</div>
            <button className="w-full py-1.5 bg-background hover:bg-card border border-border text-foreground text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1">
              Preview <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
