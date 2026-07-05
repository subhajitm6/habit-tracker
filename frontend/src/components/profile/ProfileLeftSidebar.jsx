import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUser, faPalette, faShieldHalved, faGear, faFire } from '@fortawesome/free-solid-svg-icons';

export default function ProfileLeftSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Profile Hero Card */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm relative">
        {/* Cover Banner (Glassmorphism/Gradient) */}
        <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
          {/* Abstract floating shapes */}
          <div className="absolute top-4 left-10 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-10 w-24 h-24 bg-indigo-900/30 rounded-full blur-xl"></div>
          
          <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm flex items-center justify-center transition-colors">
            <FontAwesomeIcon icon={faCamera} className="text-xs" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-6 relative">
          <div className="flex justify-between items-end -mt-12 mb-4">
            <div className="relative group cursor-pointer">
              {/* Avatar Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" 
                alt="Profile" 
                className="w-24 h-24 rounded-full border-4 border-card relative z-10 bg-white"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FontAwesomeIcon icon={faCamera} className="text-white text-xl" />
              </div>
            </div>
            
            <div className="flex flex-col items-end">
               <div className="text-[10px] font-bold text-muted uppercase tracking-wider mb-1">Rank</div>
               <div className="bg-gradient-to-r from-amber-200 to-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full shadow-sm">
                 Gold League
               </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-black text-foreground">Alex Johnson</h2>
            <div className="text-sm font-medium text-muted">@alexj_habits</div>
          </div>
          
          <p className="text-sm text-foreground/80 font-medium leading-relaxed mb-6">
            Building better habits one day at a time. Currently focusing on productivity and health. 🏃‍♂️📚
          </p>
          
          {/* Level & XP */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-border">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold text-sm text-foreground">Level 12</div>
              <div className="text-xs font-bold text-indigo-500">2,450 / 3,000 XP</div>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '81%' }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              ></motion.div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFire} className="text-orange-500" />
                <span className="text-xs font-bold text-foreground">12 Day Streak</span>
              </div>
              <span className="text-[10px] text-muted font-medium">Keep it up!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Account Navigation */}
      <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-xs text-muted uppercase tracking-wider mb-3 px-2">Account</h3>
        
        <div className="space-y-1">
          <div className="flex items-center justify-between p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl font-bold cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faUser} className="text-lg w-5" />
              <span>Personal Details</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-2 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl font-medium cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPalette} className="text-lg w-5 text-muted group-hover:text-purple-500 transition-colors" />
              <span>Customization</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-2 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl font-medium cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faGear} className="text-lg w-5 text-muted group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
              <span>Settings</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-2 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl font-medium cursor-pointer transition-colors group">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faShieldHalved} className="text-lg w-5 text-muted group-hover:text-emerald-500 transition-colors" />
              <span>Security</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
