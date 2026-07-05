import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faHardDrive, faHistory, faLifeRing } from '@fortawesome/free-solid-svg-icons';

export default function SettingsRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Profile Summary */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm text-center">
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" 
          alt="Profile" 
          className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-indigo-100 dark:border-indigo-900 bg-white"
        />
        <h3 className="font-bold text-foreground">Alex Johnson</h3>
        <p className="text-xs text-muted font-medium mb-3">alex@example.com</p>
        <div className="inline-flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
          Pro Plan
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-5 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none"></div>
        
        <div className="flex items-center gap-2 mb-4 relative z-10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">AI Suggestions</h3>
        </div>
        
        <div className="space-y-3 relative z-10">
          <div className="bg-background border border-border rounded-xl p-3 text-sm text-foreground font-medium shadow-sm leading-relaxed flex gap-3">
            <div className="w-1.5 h-auto bg-indigo-500 rounded-full shrink-0"></div>
            <div><strong className="text-indigo-600 dark:text-indigo-400">Dark mode</strong> is recommended based on your evening usage.</div>
          </div>
          <div className="bg-background border border-border rounded-xl p-3 text-sm text-foreground font-medium shadow-sm leading-relaxed flex gap-3">
            <div className="w-1.5 h-auto bg-orange-500 rounded-full shrink-0"></div>
            <div>Backup hasn't been created in 10 days. <button className="text-orange-500 hover:underline">Backup now</button></div>
          </div>
        </div>
      </div>

      {/* Storage Usage */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faHardDrive} className="text-muted" />
          Storage Usage
        </h3>
        
        <div className="mb-2 flex justify-between items-end">
          <div className="text-2xl font-black text-foreground">1.2 GB</div>
          <div className="text-xs font-bold text-muted">of 5.0 GB</div>
        </div>
        
        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden flex mb-4">
          <div className="h-full bg-indigo-500 w-[40%]" title="Images"></div>
          <div className="h-full bg-purple-500 w-[15%]" title="Attachments"></div>
          <div className="h-full bg-emerald-500 w-[5%]" title="Data"></div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-2 text-foreground font-medium"><div className="w-2 h-2 rounded-full bg-indigo-500"></div>Images</div>
            <div className="text-muted font-bold">800 MB</div>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-2 text-foreground font-medium"><div className="w-2 h-2 rounded-full bg-purple-500"></div>Attachments</div>
            <div className="text-muted font-bold">300 MB</div>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-2 text-foreground font-medium"><div className="w-2 h-2 rounded-full bg-emerald-500"></div>App Data</div>
            <div className="text-muted font-bold">100 MB</div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <FontAwesomeIcon icon={faHistory} className="w-4 text-muted" />
            <span>View Changelog</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <FontAwesomeIcon icon={faLifeRing} className="w-4 text-muted" />
            <span>Help & Support</span>
          </button>
        </div>
      </div>

    </div>
  );
}
