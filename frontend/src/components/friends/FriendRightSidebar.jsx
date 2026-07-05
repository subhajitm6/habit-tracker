import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faWifi, faLightbulb, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';

export default function FriendRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Friend Requests */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faUserPlus} className="text-indigo-500" />
            Requests
          </h3>
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">2 New</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
              J
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-foreground text-sm truncate">Jessica L.</div>
              <div className="text-xs text-muted truncate">3 Mutual Friends</div>
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <button className="flex-1 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors">
              Accept
            </button>
            <button className="flex-1 py-1.5 bg-background hover:bg-card border border-border text-foreground text-xs font-bold rounded-lg transition-colors">
              Decline
            </button>
          </div>
        </div>
      </div>

      {/* Online Friends */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faWifi} className="text-emerald-500" />
          Online Now
        </h3>
        
        <div className="space-y-3">
          {['Sarah J.', 'Alex M.', 'Emma W.', 'Chris P.'].map((name, i) => (
            <div key={name} className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl cursor-pointer transition-colors">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 text-xs">
                  {name.charAt(0)}
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-card rounded-full"></div>
              </div>
              <div className="font-bold text-foreground text-sm flex-1">{name}</div>
              {i === 0 && <span className="text-[10px] text-muted font-medium bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">In Focus</span>}
            </div>
          ))}
        </div>
      </div>

      {/* AI Social Insights */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">Social Insights</h3>
        </div>
        
        <div className="space-y-3">
          <div className="bg-card backdrop-blur-sm rounded-xl p-3 border border-border shadow-sm text-sm text-foreground font-medium flex gap-3 items-start">
            <span className="text-xl">🤝</span>
            <span>You're more consistent when participating in group challenges. Try joining one!</span>
          </div>
        </div>
      </div>

      {/* Upcoming Group Challenges */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faUsersRectangle} className="text-orange-500" />
          Group Challenges
        </h3>
        
        <div className="space-y-3">
          <div className="p-3 border border-border rounded-xl hover:border-primary transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-1">
              <div className="font-bold text-foreground group-hover:text-primary transition-colors">Weekend Hikers</div>
              <div className="text-xs font-bold text-orange-500 bg-orange-50 dark:bg-orange-500/10 px-2 py-0.5 rounded">Tomorrow</div>
            </div>
            <div className="text-xs text-muted mb-2">4 Friends Joined</div>
            <button className="w-full py-1.5 bg-background hover:bg-card border border-border text-foreground text-xs font-bold rounded-lg transition-colors">
              Join Group
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
