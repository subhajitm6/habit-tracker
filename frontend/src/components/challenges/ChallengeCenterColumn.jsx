import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrophy, 
  faFire, 
  faCrown, 
  faMedal, 
  faUserGroup,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

export default function ChallengeCenterColumn() {
  return (
    <div className="space-y-6">
      
      {/* Active Challenges Grid */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-foreground">Active Challenges</h2>
        <button className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
          View All <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Challenge Card 1 */}
        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <div className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded text-[10px] font-bold uppercase tracking-wider mb-2">Reading</div>
              <h3 className="font-bold text-foreground">1 Book a Week</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 flex items-center justify-center text-lg">
              📚
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted mb-4 relative z-10">
            <span className="flex items-center gap-1"><FontAwesomeIcon icon={faUserGroup} className="text-xs" /> 8.4k</span>
            <span className="flex items-center gap-1 text-yellow-500"><FontAwesomeIcon icon={faStar} className="text-xs" /> 200 XP</span>
          </div>

          <div className="space-y-2 relative z-10">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-muted">Progress</span>
              <span className="text-foreground">3/4 Books</span>
            </div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: '75%' }} 
                viewport={{ once: true }}
                className="h-full bg-blue-500 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Challenge Card 2 */}
        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <div className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 rounded text-[10px] font-bold uppercase tracking-wider mb-2">Health</div>
              <h3 className="font-bold text-foreground">Sleep 8 Hours</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400 flex items-center justify-center text-lg">
              😴
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted mb-4 relative z-10">
            <span className="flex items-center gap-1"><FontAwesomeIcon icon={faUserGroup} className="text-xs" /> 12k</span>
            <span className="flex items-center gap-1 text-yellow-500"><FontAwesomeIcon icon={faStar} className="text-xs" /> 150 XP</span>
          </div>

          <div className="space-y-2 relative z-10">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-muted">Progress</span>
              <span className="text-foreground">5/7 Days</span>
            </div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: '71%' }} 
                viewport={{ once: true }}
                className="h-full bg-emerald-500 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm mt-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faCrown} className="text-yellow-500" /> Global Leaderboard
          </h2>
          <select className="bg-background border border-border text-foreground text-sm rounded-lg px-3 py-1.5 outline-none">
            <option>This Week</option>
            <option>All Time</option>
          </select>
        </div>

        {/* Podium for top 3 */}
        <div className="flex justify-center items-end h-40 mb-8 gap-2 md:gap-4 px-4">
          
          {/* Silver */}
          <motion.div 
            initial={{ height: 0 }} animate={{ height: '70%' }} transition={{ duration: 0.8 }}
            className="w-1/3 max-w-[100px] bg-gradient-to-t from-gray-200 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-t-xl relative flex flex-col justify-start items-center pt-4 border-t-4 border-[#CBD5E1]"
          >
            <div className="absolute -top-12 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[#CBD5E1] shadow-sm flex items-center justify-center font-bold text-gray-700">2</div>
              <div className="text-xs font-bold mt-1 text-foreground truncate w-full text-center">Alex M.</div>
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-300">21.5k XP</div>
          </motion.div>

          {/* Gold */}
          <motion.div 
            initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ duration: 0.8, delay: 0.2 }}
            className="w-1/3 max-w-[120px] bg-gradient-to-t from-yellow-100 to-yellow-50 dark:from-yellow-900/40 dark:to-yellow-800/20 rounded-t-xl relative flex flex-col justify-start items-center pt-4 border-t-4 border-[#FBBF24] shadow-[0_0_15px_rgba(251,191,36,0.3)] z-10"
          >
            <div className="absolute -top-16 flex flex-col items-center">
              <FontAwesomeIcon icon={faCrown} className="text-yellow-500 text-xl mb-1 drop-shadow-md" />
              <div className="w-12 h-12 rounded-full bg-yellow-400 border-2 border-[#FBBF24] shadow-md flex items-center justify-center font-bold text-yellow-900 text-lg">1</div>
              <div className="text-xs font-bold mt-1 text-foreground truncate w-full text-center">Sarah J.</div>
            </div>
            <div className="text-sm font-bold text-yellow-800 dark:text-yellow-300">24.2k XP</div>
          </motion.div>

          {/* Bronze */}
          <motion.div 
            initial={{ height: 0 }} animate={{ height: '55%' }} transition={{ duration: 0.8, delay: 0.1 }}
            className="w-1/3 max-w-[100px] bg-gradient-to-t from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/10 rounded-t-xl relative flex flex-col justify-start items-center pt-4 border-t-4 border-[#B45309]"
          >
            <div className="absolute -top-12 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-orange-200 border-2 border-[#B45309] shadow-sm flex items-center justify-center font-bold text-orange-800">3</div>
              <div className="text-xs font-bold mt-1 text-foreground truncate w-full text-center">Mike T.</div>
            </div>
            <div className="text-sm font-bold text-orange-800 dark:text-orange-300">19.8k XP</div>
          </motion.div>

        </div>

        {/* Leaderboard Table List */}
        <div className="space-y-2 mt-4">
          {[
            { rank: 4, name: 'Emma W.', level: 42, xp: '18,400', streak: 45 },
            { rank: 5, name: 'David L.', level: 39, xp: '17,200', streak: 21 },
            { rank: 6, name: 'You', level: 35, xp: '15,800', streak: 12, isUser: true },
            { rank: 7, name: 'Chris P.', level: 31, xp: '14,100', streak: 8 },
          ].map((user) => (
            <div key={user.rank} className={`flex items-center justify-between p-3 rounded-xl transition-colors ${user.isUser ? 'bg-primary/10 border border-primary/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}>
              <div className="flex items-center gap-4">
                <div className="w-6 text-center font-bold text-muted">{user.rank}</div>
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <div className={`font-bold ${user.isUser ? 'text-primary' : 'text-foreground'}`}>{user.name}</div>
                  <div className="text-xs text-muted flex items-center gap-2">
                    <span>Lvl {user.level}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-orange-500"><FontAwesomeIcon icon={faFire} className="text-[10px]" /> {user.streak} Days</span>
                  </div>
                </div>
              </div>
              <div className="font-bold text-foreground">
                {user.xp} <span className="text-xs text-muted font-normal">XP</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// Add the missing faStar icon to imports
import { faStar } from '@fortawesome/free-solid-svg-icons';
