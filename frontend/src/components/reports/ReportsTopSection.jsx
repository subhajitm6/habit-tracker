import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faChartLine, faCheckCircle, faFire } from '@fortawesome/free-solid-svg-icons';

export default function ReportsTopSection() {
  return (
    <div className="space-y-6">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Soft Background Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-20 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-lg">
          <h2 className="text-3xl font-black mb-2 leading-tight">Your Data, Your Growth</h2>
          <p className="text-indigo-100 font-medium mb-6 leading-relaxed">
            Generate comprehensive reports to uncover hidden trends in your habits, productivity, and wellness.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 bg-white text-indigo-600 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
              Generate New Report
            </button>
            <button className="px-5 py-2.5 bg-indigo-500/30 hover:bg-indigo-500/50 text-white font-bold rounded-xl backdrop-blur-sm transition-colors border border-indigo-400/30">
              Download Latest
            </button>
          </div>
        </div>

        {/* Abstract Chart Illustration (CSS) */}
        <div className="relative z-10 w-48 h-32 hidden md:block">
           <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between gap-2 px-2">
              <motion.div initial={{ height: 0 }} animate={{ height: '40%' }} transition={{ duration: 1, delay: 0.1 }} className="w-full bg-white/20 rounded-t-sm"></motion.div>
              <motion.div initial={{ height: 0 }} animate={{ height: '70%' }} transition={{ duration: 1, delay: 0.2 }} className="w-full bg-white/40 rounded-t-sm"></motion.div>
              <motion.div initial={{ height: 0 }} animate={{ height: '50%' }} transition={{ duration: 1, delay: 0.3 }} className="w-full bg-white/30 rounded-t-sm"></motion.div>
              <motion.div initial={{ height: 0 }} animate={{ height: '90%' }} transition={{ duration: 1, delay: 0.4 }} className="w-full bg-white/80 rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.5)]"></motion.div>
              <motion.div initial={{ height: 0 }} animate={{ height: '60%' }} transition={{ duration: 1, delay: 0.5 }} className="w-full bg-white/50 rounded-t-sm"></motion.div>
           </div>
           
           {/* Glowing Line */}
           <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <motion.path 
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 1 }}
               transition={{ duration: 1.5, delay: 0.5 }}
               d="M 5 60 L 28 30 L 52 50 L 76 10 L 95 40" 
               fill="none" 
               stroke="#FACC15" 
               strokeWidth="3" 
               strokeLinecap="round"
               strokeLinejoin="round"
               className="drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
             />
           </svg>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 flex items-center justify-center shrink-0">
              <FontAwesomeIcon icon={faFileLines} />
            </div>
            <div className="text-xs font-bold text-muted uppercase tracking-wider">Total Reports</div>
          </div>
          <div className="text-2xl font-black text-foreground">24</div>
          <div className="text-xs font-medium text-emerald-500 mt-1">+3 this month</div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center shrink-0">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div className="text-xs font-bold text-muted uppercase tracking-wider">Habit Rate</div>
          </div>
          <div className="text-2xl font-black text-foreground">87%</div>
          <div className="text-xs font-medium text-emerald-500 mt-1">+5.2% vs last month</div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center shrink-0">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div className="text-xs font-bold text-muted uppercase tracking-wider">Productivity</div>
          </div>
          <div className="text-2xl font-black text-foreground">92/100</div>
          <div className="text-xs font-medium text-muted mt-1">Excellent standing</div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/20 text-orange-500 flex items-center justify-center shrink-0">
              <FontAwesomeIcon icon={faFire} />
            </div>
            <div className="text-xs font-bold text-muted uppercase tracking-wider">Top Streak</div>
          </div>
          <div className="text-2xl font-black text-foreground">42 Days</div>
          <div className="text-xs font-medium text-orange-500 mt-1">Active right now!</div>
        </div>

      </div>

    </div>
  );
}
