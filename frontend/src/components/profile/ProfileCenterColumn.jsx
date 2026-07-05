import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faFire, faClock, faDroplet, faMedal, faCrown, faRocket, faBook, faDumbbell, faRoute } from '@fortawesome/free-solid-svg-icons';

export default function ProfileCenterColumn() {
  
  const badges = [
    { icon: faCrown, title: "Habit Master", desc: "Completed 1,000 total habits", color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/30", border: "border-amber-200 dark:border-amber-800/50", unlocked: true },
    { icon: faFire, title: "365-Day Streak", desc: "Maintained a streak for a full year", color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30", border: "border-orange-200 dark:border-orange-800/50", unlocked: true },
    { icon: faRocket, title: "Productivity Hero", desc: "100 hours of deep focus", color: "text-indigo-500", bg: "bg-indigo-100 dark:bg-indigo-900/30", border: "border-indigo-200 dark:border-indigo-800/50", unlocked: true },
    { icon: faBook, title: "Reading Champion", desc: "Read for 30 consecutive days", color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30", border: "border-purple-200 dark:border-purple-800/50", unlocked: true },
    { icon: faDumbbell, title: "Fitness Warrior", desc: "Completed 50 workouts", color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/30", border: "border-emerald-200 dark:border-emerald-800/50", unlocked: false },
    { icon: faDroplet, title: "Hydration Master", desc: "Logged 100 gallons of water", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", border: "border-blue-200 dark:border-blue-800/50", unlocked: false },
  ];

  return (
    <div className="space-y-6">
      
      {/* Lifetime Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="bg-card border border-border rounded-2xl p-4 shadow-sm hover:border-indigo-500/50 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 flex items-center justify-center">
              <FontAwesomeIcon icon={faCheckDouble} className="text-sm" />
            </div>
            <div className="text-[10px] font-bold text-muted uppercase tracking-wider">Completed</div>
          </div>
          <div className="text-2xl font-black text-foreground">1,248</div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-4 shadow-sm hover:border-orange-500/50 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-500 flex items-center justify-center">
              <FontAwesomeIcon icon={faFire} className="text-sm" />
            </div>
            <div className="text-[10px] font-bold text-muted uppercase tracking-wider">Top Streak</div>
          </div>
          <div className="text-2xl font-black text-foreground">365</div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-4 shadow-sm hover:border-blue-500/50 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center">
              <FontAwesomeIcon icon={faClock} className="text-sm" />
            </div>
            <div className="text-[10px] font-bold text-muted uppercase tracking-wider">Focus Hrs</div>
          </div>
          <div className="text-2xl font-black text-foreground">420</div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-4 shadow-sm hover:border-emerald-500/50 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center">
              <FontAwesomeIcon icon={faMedal} className="text-sm" />
            </div>
            <div className="text-[10px] font-bold text-muted uppercase tracking-wider">Badges</div>
          </div>
          <div className="text-2xl font-black text-foreground">24</div>
        </div>

      </div>

      {/* Yearly Heatmap (GitHub Style Mock) */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-foreground">Consistency Heatmap</h3>
          <select className="bg-gray-50 dark:bg-gray-800 border border-border text-xs font-bold text-gray-900 dark:text-gray-100 rounded-lg px-2 py-1 outline-none">
            <option>2026</option>
            <option>2025</option>
          </select>
        </div>
        
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1 min-w-max">
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  // Randomize heatmap colors for mock
                  const intensities = [
                    'bg-gray-100 dark:bg-gray-800', 
                    'bg-indigo-200 dark:bg-indigo-900/40', 
                    'bg-indigo-300 dark:bg-indigo-700/60', 
                    'bg-indigo-400 dark:bg-indigo-500/80', 
                    'bg-indigo-500 dark:bg-indigo-500'
                  ];
                  const intensity = weekIndex > 45 ? 0 : Math.floor(Math.random() * 5);
                  return (
                    <div 
                      key={dayIndex} 
                      className={`w-3 h-3 rounded-sm ${intensities[intensity]} hover:ring-1 hover:ring-indigo-500 hover:ring-offset-1 hover:ring-offset-card transition-all cursor-pointer`}
                      title="Habits completed"
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center gap-2 mt-4 text-[10px] font-medium text-muted">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800"></div>
            <div className="w-3 h-3 rounded-sm bg-indigo-200 dark:bg-indigo-900/40"></div>
            <div className="w-3 h-3 rounded-sm bg-indigo-300 dark:bg-indigo-700/60"></div>
            <div className="w-3 h-3 rounded-sm bg-indigo-400 dark:bg-indigo-500/80"></div>
            <div className="w-3 h-3 rounded-sm bg-indigo-500 dark:bg-indigo-500"></div>
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Achievement Showcase */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faMedal} className="text-yellow-500" />
            Achievement Showcase
          </h3>
          <button className="text-xs font-bold text-indigo-500 hover:text-indigo-600">View All</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {badges.map((badge, idx) => (
            <motion.div 
              key={idx}
              whileHover={badge.unlocked ? { y: -4, scale: 1.02 } : {}}
              className={`relative border rounded-xl p-4 flex flex-col items-center text-center transition-all cursor-pointer ${
                badge.unlocked 
                  ? 'border-border bg-background shadow-sm hover:shadow-md hover:border-indigo-500/50' 
                  : 'border-border/50 bg-gray-50/50 dark:bg-gray-800/20 opacity-60 grayscale'
              }`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-3 ${badge.bg} ${badge.color} border ${badge.border}`}>
                <FontAwesomeIcon icon={badge.icon} />
              </div>
              <div className="font-bold text-sm text-foreground mb-1">{badge.title}</div>
              <div className="text-[10px] text-muted font-medium line-clamp-2 leading-relaxed">{badge.desc}</div>
              
              {!badge.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[1px] rounded-xl opacity-0 hover:opacity-100 transition-opacity">
                  <span className="bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded">Locked</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Personal Journey Timeline */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faRoute} className="text-emerald-500" />
          Personal Journey
        </h3>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
          
          <div className="relative flex items-start gap-4 group">
            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border-2 border-card shadow-sm flex items-center justify-center shrink-0 z-10 text-indigo-500 text-xs group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
              <FontAwesomeIcon icon={faMedal} />
            </div>
            <div className="bg-background border border-border rounded-xl p-4 flex-1 shadow-sm group-hover:border-indigo-500/50 transition-colors">
              <div className="flex justify-between items-start mb-1">
                <div className="font-bold text-sm text-foreground">Reached Level 12</div>
                <div className="text-[10px] font-bold text-indigo-500">+500 XP</div>
              </div>
              <div className="text-xs text-muted font-medium">Unlocked the "Gold League" rank border.</div>
              <div className="text-[10px] text-muted mt-2 font-medium">April 15, 2026</div>
            </div>
          </div>

          <div className="relative flex items-start gap-4 group">
            <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 border-2 border-card shadow-sm flex items-center justify-center shrink-0 z-10 text-orange-500 text-xs group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
              <FontAwesomeIcon icon={faFire} />
            </div>
            <div className="bg-background border border-border rounded-xl p-4 flex-1 shadow-sm group-hover:border-orange-500/50 transition-colors">
              <div className="flex justify-between items-start mb-1">
                <div className="font-bold text-sm text-foreground">365-Day Streak Achieved</div>
                <div className="text-[10px] font-bold text-indigo-500">+1000 XP</div>
              </div>
              <div className="text-xs text-muted font-medium">A full year of building better habits!</div>
              <div className="text-[10px] text-muted mt-2 font-medium">January 1, 2026</div>
            </div>
          </div>

          <div className="relative flex items-start gap-4 group">
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-card shadow-sm flex items-center justify-center shrink-0 z-10 text-gray-500 text-xs group-hover:scale-110 transition-all">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <div className="py-1">
              <div className="font-bold text-sm text-foreground">Joined HabitFlow</div>
              <div className="text-[10px] text-muted mt-1 font-medium">January 1, 2025</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
