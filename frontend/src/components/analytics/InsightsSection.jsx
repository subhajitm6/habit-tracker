import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faMedal, 
  faArrowRight, 
  faStar,
  faBolt,
  faShieldHalved,
  faTrophy,
  faBookOpen,
  faFire
} from '@fortawesome/free-solid-svg-icons';

const AIInsightCard = ({ title, desc, delay, icon, color, bg }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-card rounded-2xl p-5 border border-border shadow-sm flex gap-4 hover:shadow-md transition-shadow relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 ${bg} rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}></div>
    <div className={`w-12 h-12 shrink-0 rounded-xl ${bg} ${color} flex items-center justify-center text-xl shadow-inner`}>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className="relative z-10">
      <h4 className="text-[15px] font-bold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const AchievementBadge = ({ name, icon, locked, color }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-sm border-2 transition-transform group-hover:scale-110 ${
      locked 
        ? 'bg-background border-border text-muted/50 grayscale' 
        : `bg-card border-${color.split('-')[1]}-400 ${color}`
    }`}>
      <FontAwesomeIcon icon={icon} />
    </div>
    <span className={`text-xs font-bold text-center ${locked ? 'text-muted/50' : 'text-foreground'}`}>{name}</span>
  </div>
);

export default function InsightsSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      
      {/* AI Insights Panel */}
      <div className="xl:col-span-2 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faBrain} className="text-primary" /> AI Insights
          </h3>
          <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
            View All <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AIInsightCard 
            title="Peak Productivity" 
            desc="You are consistently most productive on Tuesdays between 9 AM and 11 AM. Consider scheduling hard tasks then."
            icon={faBolt} color="text-amber-500" bg="bg-amber-500/10" delay={0.1}
          />
          <AIInsightCard 
            title="Habit Growth" 
            desc="Your reading habit completion has improved by 28% this month compared to last month. Keep it up!"
            icon={faArrowRight} color="text-emerald-500" bg="bg-emerald-500/10" delay={0.2}
          />
          <AIInsightCard 
            title="Warning: Meditation" 
            desc="You've missed Meditation three times this week. Try moving it to your morning routine instead of evening."
            icon={faBrain} color="text-rose-500" bg="bg-rose-500/10" delay={0.3}
          />
          <AIInsightCard 
            title="Goal Approaching" 
            desc="You are only 3 days away from unlocking the 'Consistency Master' badge. Don't break the streak!"
            icon={faMedal} color="text-blue-500" bg="bg-blue-500/10" delay={0.4}
          />
        </div>
      </div>

      {/* Achievements & Level Progress */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col h-full"
      >
        <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
          <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" /> Achievements
        </h3>
        
        {/* Level Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div>
                <div className="text-[11px] font-bold text-muted uppercase tracking-wider">Current Level</div>
                <div className="text-lg font-bold text-foreground">Level 12 Explorer</div>
              </div>
            </div>
            <div className="text-sm font-bold text-primary">4,250 / 5,000 XP</div>
          </div>
          <div className="h-2.5 w-full bg-background rounded-full overflow-hidden shadow-inner">
            <motion.div 
              initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1, delay: 0.8 }}
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            ></motion.div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex-1">
          <div className="text-[13px] font-bold text-muted uppercase tracking-wider mb-4">Recent Badges</div>
          <div className="flex justify-between items-center px-2">
            <AchievementBadge name="7-Day Streak" icon={faFire} locked={false} color="text-orange-500" />
            <AchievementBadge name="Early Bird" icon={faStar} locked={false} color="text-yellow-500" />
            <AchievementBadge name="Bookworm" icon={faBookOpen} locked={false} color="text-purple-500" />
            <AchievementBadge name="30-Day" icon={faTrophy} locked={true} color="text-gray-500" />
          </div>
        </div>
      </motion.div>

    </div>
  );
}
