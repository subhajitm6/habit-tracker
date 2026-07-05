import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faQuoteLeft, 
  faClock, 
  faDroplet,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

export default function RightSidebar() {
  return (
    <div className="space-y-6 flex flex-col h-full">
      
      {/* AI Coach Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 shadow-sm border border-indigo-400 text-white flex flex-col relative overflow-hidden group"
      >
        <div className="absolute top-4 right-4 opacity-20 transform rotate-12 scale-150 transition-transform group-hover:rotate-45 group-hover:scale-110">
          <FontAwesomeIcon icon={faStar} className="text-6xl" />
        </div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-sm" />
            </div>
            <span className="font-semibold text-sm tracking-wide">AI COACH</span>
          </div>
          
          <h3 className="text-lg font-bold leading-tight mb-1">
            Peak Productivity Time
          </h3>
          <div className="text-3xl font-extrabold text-yellow-300 mb-4">
            9 AM - 11 AM
          </div>
          
          <p className="text-indigo-100 text-sm mb-6 flex-1">
            You're most focused now. Tackle your most challenging habits first!
          </p>
          
          <button className="w-full bg-white text-indigo-600 font-semibold py-2.5 rounded-xl shadow-md hover:bg-indigo-50 transition-colors transform hover:-translate-y-0.5 text-sm">
            Ask AI Coach
          </button>
        </div>
      </motion.div>

      {/* Motivation Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl p-6 shadow-sm border border-border flex flex-col items-center text-center relative"
      >
        <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-primary/20 mb-4 absolute top-4 left-4" />
        <div className="w-24 h-24 bg-gradient-to-tr from-orange-200 to-yellow-100 dark:from-orange-500/20 dark:to-yellow-500/10 rounded-full mb-4 flex items-center justify-center">
           <span className="text-4xl">🚀</span>
        </div>
        <p className="text-[15px] font-medium text-foreground italic relative z-10">
          "Small habits repeated daily create remarkable results."
        </p>
      </motion.div>

      {/* Upcoming Reminders */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="bg-card rounded-2xl p-6 shadow-sm border border-border"
      >
        <h3 className="text-[15px] font-semibold text-foreground mb-4 uppercase tracking-wider">Upcoming</h3>
        
        <div className="relative border-l-2 border-border ml-3 space-y-6">
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-card"></div>
            <div className="text-sm font-bold text-foreground">08:30 AM</div>
            <div className="text-sm text-muted">Drink Water</div>
          </div>
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-1.5 ring-4 ring-card"></div>
            <div className="text-sm font-bold text-foreground">10:00 AM</div>
            <div className="text-sm text-muted">Read Book</div>
          </div>
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-1.5 ring-4 ring-card"></div>
            <div className="text-sm font-bold text-foreground">12:00 PM</div>
            <div className="text-sm text-muted">Meditation</div>
          </div>
        </div>
      </motion.div>

      {/* Water Tracker */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-cyan-50 dark:bg-cyan-950/30 rounded-2xl p-5 shadow-sm border border-cyan-100 dark:border-cyan-900 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white dark:bg-cyan-900 rounded-full shadow-sm flex items-center justify-center text-cyan-500">
            <FontAwesomeIcon icon={faDroplet} className="text-xl" />
          </div>
          <div>
            <div className="text-[13px] font-semibold text-cyan-800 dark:text-cyan-400 uppercase tracking-wide">Hydration</div>
            <div className="text-lg font-bold text-foreground">3 / 8 <span className="text-sm font-normal text-muted">glasses</span></div>
          </div>
        </div>
        <button className="w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center shadow-sm transition-transform hover:scale-105">
          <FontAwesomeIcon icon={faPlus} className="text-sm" />
        </button>
      </motion.div>
      
    </div>
  );
}
