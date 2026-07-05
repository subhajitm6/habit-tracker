import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faFire, faCrown, faMedal } from '@fortawesome/free-solid-svg-icons';

export default function FriendCenterColumn() {
  return (
    <div className="space-y-8">
      
      {/* Activity Feed */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-foreground mb-6">Activity Feed</h2>
        
        <div className="space-y-6">
          {/* Post 1 */}
          <div className="flex gap-4 group">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 flex items-center justify-center font-bold shrink-0">
              R
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <div className="text-sm">
                  <span className="font-bold text-foreground">Rahul M.</span> <span className="text-muted">completed a 30-day streak.</span>
                </div>
                <span className="text-xs text-muted">2h</span>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10 border border-orange-100 dark:border-orange-500/20 rounded-xl p-4 my-3 flex items-center gap-4">
                <div className="text-4xl">🔥</div>
                <div>
                  <div className="font-bold text-orange-600 dark:text-orange-400">30 Days Unlocked!</div>
                  <div className="text-xs text-muted">Consistency is key.</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="text-xs font-bold text-muted hover:text-red-500 transition-colors flex items-center gap-1 group/btn">
                  <motion.div whileTap={{ scale: 0.8 }} className="group-hover/btn:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faHeart} />
                  </motion.div>
                  Cheer (12)
                </button>
                <button className="text-xs font-bold text-muted hover:text-blue-500 transition-colors flex items-center gap-1">
                  <FontAwesomeIcon icon={faComment} /> Comment
                </button>
                <button className="text-xs font-bold text-muted hover:text-green-500 transition-colors flex items-center gap-1">
                  <FontAwesomeIcon icon={faShare} /> Share
                </button>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-border"></div>

          {/* Post 2 */}
          <div className="flex gap-4 group">
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 flex items-center justify-center font-bold shrink-0">
              P
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <div className="text-sm">
                  <span className="font-bold text-foreground">Priya K.</span> <span className="text-muted">unlocked a new badge.</span>
                </div>
                <span className="text-xs text-muted">5h</span>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/10 border border-purple-100 dark:border-purple-500/20 rounded-xl p-4 my-3 flex items-center gap-4">
                <div className="text-4xl drop-shadow-sm">🏆</div>
                <div>
                  <div className="font-bold text-purple-600 dark:text-purple-400">Productivity Master</div>
                  <div className="text-xs text-muted">Epic Achievement</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="text-xs font-bold text-muted hover:text-red-500 transition-colors flex items-center gap-1 group/btn">
                  <motion.div whileTap={{ scale: 0.8 }} className="group-hover/btn:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faHeart} />
                  </motion.div>
                  Cheer (24)
                </button>
                <button className="text-xs font-bold text-muted hover:text-blue-500 transition-colors flex items-center gap-1">
                  <FontAwesomeIcon icon={faComment} /> Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Friends Grid */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Friend Card 1 */}
          <motion.div whileHover={{ y: -5 }} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm group">
            <div className="h-16 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <div className="px-4 pb-4 -mt-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-card flex items-center justify-center font-bold text-xl shadow-sm mb-2 text-indigo-500 relative">
                S
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
              </div>
              <div className="font-bold text-foreground">Sarah J.</div>
              <div className="text-xs text-muted mb-3 flex items-center gap-2 justify-center w-full">
                <span>Lvl 24</span> • <span className="text-orange-500 flex items-center gap-1"><FontAwesomeIcon icon={faFire} /> 12 Days</span>
              </div>
              <div className="flex gap-2 w-full">
                <button className="flex-1 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded-lg transition-colors">
                  Cheer
                </button>
                <button className="flex-1 py-1.5 bg-background hover:bg-card border border-border text-foreground text-xs font-bold rounded-lg transition-colors">
                  Profile
                </button>
              </div>
            </div>
          </motion.div>

          {/* Friend Card 2 */}
          <motion.div whileHover={{ y: -5 }} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm group">
            <div className="h-16 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
            <div className="px-4 pb-4 -mt-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-card flex items-center justify-center font-bold text-xl shadow-sm mb-2 text-emerald-500 relative">
                M
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 border-2 border-white dark:border-slate-800 rounded-full"></div>
              </div>
              <div className="font-bold text-foreground">Mike T.</div>
              <div className="text-xs text-muted mb-3 flex items-center gap-2 justify-center w-full">
                <span>Lvl 19</span> • <span className="text-orange-500 flex items-center gap-1"><FontAwesomeIcon icon={faFire} /> 4 Days</span>
              </div>
              <div className="flex gap-2 w-full">
                <button className="flex-1 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded-lg transition-colors">
                  Nudge
                </button>
                <button className="flex-1 py-1.5 bg-background hover:bg-card border border-border text-foreground text-xs font-bold rounded-lg transition-colors">
                  Profile
                </button>
              </div>
            </div>
          </motion.div>

          {/* Friend Card 3 */}
          <motion.div whileHover={{ y: -5 }} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm group">
            <div className="h-16 bg-gradient-to-r from-orange-400 to-pink-500"></div>
            <div className="px-4 pb-4 -mt-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-card flex items-center justify-center font-bold text-xl shadow-sm mb-2 text-pink-500 relative">
                E
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
              </div>
              <div className="font-bold text-foreground">Emma W.</div>
              <div className="text-xs text-muted mb-3 flex items-center gap-2 justify-center w-full">
                <span>Lvl 32</span> • <span className="text-orange-500 flex items-center gap-1"><FontAwesomeIcon icon={faFire} /> 45 Days</span>
              </div>
              <div className="flex gap-2 w-full">
                <button className="flex-1 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded-lg transition-colors">
                  Cheer
                </button>
                <button className="flex-1 py-1.5 bg-background hover:bg-card border border-border text-foreground text-xs font-bold rounded-lg transition-colors">
                  Profile
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
