import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrophy, faMedal, faCrown, faHeartPulse, faLock, faUnlock,
  faFire, faBrain, faBolt, faStar, faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';

const MilestoneCard = ({ days, unlocked, current, next, title, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}
    className={`rounded-2xl p-4 border flex flex-col relative overflow-hidden group ${
      unlocked 
        ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-500/10 dark:to-orange-500/5 border-orange-200 dark:border-orange-500/30 shadow-sm' 
        : 'bg-card border-border'
    }`}
  >
    <div className="flex justify-between items-start mb-6 z-10 relative">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm ${
        unlocked ? 'bg-orange-500 text-white' : 'bg-background text-muted border border-border'
      }`}>
        <FontAwesomeIcon icon={faFire} />
      </div>
      <div className={`text-xs font-bold px-2 py-1 rounded flex items-center gap-1 ${
        unlocked ? 'bg-orange-200/50 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400' : 'bg-background text-muted'
      }`}>
        <FontAwesomeIcon icon={unlocked ? faUnlock : faLock} className="text-[10px]" /> 
        {unlocked ? 'Unlocked' : 'Locked'}
      </div>
    </div>
    <div className="z-10 relative">
      <div className={`text-2xl font-black mb-1 ${unlocked ? 'text-orange-600 dark:text-orange-400' : 'text-foreground'}`}>{days} Days</div>
      <div className="text-sm font-bold text-muted">{title}</div>
    </div>
    
    {!unlocked && current !== undefined && next !== undefined && (
      <div className="mt-4 z-10 relative">
        <div className="flex justify-between text-[11px] font-bold text-muted mb-1">
          <span>{current} Days</span>
          <span>{next} Days</span>
        </div>
        <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
          <div className="h-full bg-orange-400 rounded-full" style={{ width: `${(current / next) * 100}%` }}></div>
        </div>
      </div>
    )}

    {unlocked && (
      <div className="absolute -bottom-4 -right-4 text-7xl text-orange-500/10 pointer-events-none group-hover:scale-110 transition-transform">
        <FontAwesomeIcon icon={faFire} />
      </div>
    )}
  </motion.div>
);

const LeaderboardRow = ({ rank, name, streak, longest, isCurrentUser }) => (
  <div className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
    isCurrentUser ? 'bg-primary/10 border border-primary/20 shadow-sm' : 'hover:bg-background border border-transparent'
  }`}>
    <div className="flex items-center gap-4">
      <div className={`w-6 text-center font-bold text-sm ${rank === 1 ? 'text-yellow-500' : rank === 2 ? 'text-gray-400' : rank === 3 ? 'text-amber-700' : 'text-muted'}`}>
        #{rank}
      </div>
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm shadow-inner">
        {name.charAt(0)}
      </div>
      <div className="font-semibold text-foreground text-sm">{name} {isCurrentUser && <span className="text-primary ml-1">(You)</span>}</div>
    </div>
    <div className="flex items-center gap-6">
      <div className="text-right">
        <div className="text-sm font-bold text-orange-500 flex items-center justify-end gap-1"><FontAwesomeIcon icon={faFire} className="text-xs"/> {streak}</div>
        <div className="text-[11px] text-muted">Current</div>
      </div>
      <div className="text-right hidden sm:block">
        <div className="text-sm font-bold text-foreground">{longest}</div>
        <div className="text-[11px] text-muted">Longest</div>
      </div>
    </div>
  </div>
);

export default function StreakBottomSection() {
  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Row: AI Insights & Recovery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col h-full relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-[15px] font-bold text-foreground mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faBrain} className="text-primary" /> AI Insights
          </h3>
          <ul className="space-y-4 relative z-10 flex-1">
            <li className="flex gap-3 items-start p-3 bg-background rounded-xl border border-border">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-500 flex items-center justify-center shrink-0 mt-0.5"><FontAwesomeIcon icon={faStar} className="text-xs"/></div>
              <div>
                <span className="text-sm font-semibold text-foreground">Peak Performance</span>
                <p className="text-[13px] text-muted leading-tight mt-0.5">Your longest streaks always happen when you complete Morning habits before 8 AM.</p>
              </div>
            </li>
            <li className="flex gap-3 items-start p-3 bg-background rounded-xl border border-border">
              <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0 mt-0.5"><FontAwesomeIcon icon={faBolt} className="text-xs"/></div>
              <div>
                <span className="text-sm font-semibold text-foreground">Danger Zone</span>
                <p className="text-[13px] text-muted leading-tight mt-0.5">You usually miss habits on Sundays. Try reducing your Sunday goals to maintain consistency.</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col h-full relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-[15px] font-bold text-foreground mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faHeartPulse} className="text-rose-500" /> Recovery Center
          </h3>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-500 flex items-center justify-center text-3xl mb-3 shadow-inner">
              <FontAwesomeIcon icon={faHeartPulse} />
            </div>
            <h4 className="text-lg font-bold text-foreground">Restore a Broken Streak</h4>
            <p className="text-sm text-muted mb-4 max-w-sm">You have <span className="font-bold text-foreground">2 Recovery Days</span> remaining this month. Use one to restore your 12-day streak from yesterday.</p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 px-6 rounded-xl shadow-md transition-transform hover:-translate-y-0.5 flex items-center gap-2">
              <FontAwesomeIcon icon={faHeartPulse} /> Restore Streak
            </button>
          </div>
        </motion.div>

      </div>

      {/* Middle Row: Milestones */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-4 px-1">
          <h3 className="text-[18px] font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faMedal} className="text-yellow-500" /> Journey Milestones
          </h3>
          <button className="text-sm font-semibold text-primary hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <MilestoneCard days={3} title="Getting Started" unlocked={true} delay={0.1} />
          <MilestoneCard days={7} title="One Week Strong" unlocked={true} delay={0.15} />
          <MilestoneCard days={14} title="Consistency Built" unlocked={true} delay={0.2} />
          <MilestoneCard days={21} title="Habit Formed" unlocked={true} delay={0.25} />
          <MilestoneCard days={30} title="Monthly Master" unlocked={false} current={27} next={30} delay={0.3} />
        </div>
      </motion.div>

      {/* Bottom Row: Leaderboard & Motivation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-card rounded-2xl p-6 border border-border shadow-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[15px] font-bold text-foreground flex items-center gap-2">
              <FontAwesomeIcon icon={faCrown} className="text-yellow-500" /> Global Leaderboard
            </h3>
            <span className="text-xs font-bold bg-background border border-border px-3 py-1 rounded-full text-muted">Top 1%</span>
          </div>
          <div className="space-y-1">
            <LeaderboardRow rank={1} name="Alex Chen" streak={142} longest={210} isCurrentUser={false} />
            <LeaderboardRow rank={2} name="Sarah Smith" streak={98} longest={112} isCurrentUser={false} />
            <LeaderboardRow rank={3} name="David J." streak={76} longest={85} isCurrentUser={false} />
            <div className="flex items-center justify-center py-1 text-muted text-xs font-bold tracking-widest">•••</div>
            <LeaderboardRow rank={124} name="Subhajit" streak={27} longest={45} isCurrentUser={true} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 shadow-md flex flex-col justify-center text-white relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 text-6xl opacity-10 pointer-events-none">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
          <div className="relative z-10">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo-300 text-3xl mb-4" />
            <p className="text-xl font-bold leading-relaxed mb-6">
              "Success is the sum of small efforts, repeated day in and day out."
            </p>
            <div className="text-sm font-medium text-indigo-200 mb-8">— Robert Collier</div>
            <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-xl transition-colors border border-white/20">
              Share Quote
            </button>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
