import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartPie, faArrowTrendUp, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

export default function ReportsCenterColumn() {
  return (
    <div className="space-y-6">
      
      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Weekly Performance Bar Chart */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <FontAwesomeIcon icon={faChartBar} className="text-indigo-500" />
                Weekly Performance
              </h3>
              <div className="text-xs text-muted font-medium mt-1">Habit completions by day</div>
            </div>
            <button className="text-xs font-bold text-indigo-500 hover:text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">Details</button>
          </div>
          
          <div className="h-40 w-full flex items-end justify-between gap-3 px-2">
            {[60, 85, 40, 95, 75, 20, 10].map((height, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2 group">
                <motion.div 
                  initial={{ height: 0 }} 
                  whileInView={{ height: `${height}%` }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`w-full rounded-t-lg relative ${i === 3 ? 'bg-indigo-500 shadow-sm' : 'bg-indigo-100 dark:bg-indigo-900/40 hover:bg-indigo-200 dark:hover:bg-indigo-900/60 transition-colors cursor-pointer'}`}
                >
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {height}%
                  </div>
                </motion.div>
                <div className={`text-[10px] font-bold ${i === 3 ? 'text-indigo-500' : 'text-muted'}`}>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Distribution Doughnut (CSS mock) */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <FontAwesomeIcon icon={faChartPie} className="text-purple-500" />
                Category Distribution
              </h3>
              <div className="text-xs text-muted font-medium mt-1">Where your time goes</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32 shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" className="text-gray-100 dark:text-gray-800" />
                <motion.circle 
                  initial={{ strokeDasharray: "0 251.2" }} animate={{ strokeDasharray: "150.7 251.2" }} transition={{ duration: 1 }}
                  cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" className="text-indigo-500" 
                />
                <motion.circle 
                  initial={{ strokeDasharray: "0 251.2" }} animate={{ strokeDasharray: "62.8 251.2" }} transition={{ duration: 1, delay: 0.2 }} strokeDashoffset="-150.7"
                  cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" className="text-purple-500" 
                />
                <motion.circle 
                  initial={{ strokeDasharray: "0 251.2" }} animate={{ strokeDasharray: "25.1 251.2" }} transition={{ duration: 1, delay: 0.4 }} strokeDashoffset="-213.5"
                  cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" className="text-emerald-500" 
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <div className="text-xl font-black text-foreground">60%</div>
                <div className="text-[9px] font-bold text-muted uppercase">Health</div>
              </div>
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div>Health</div>
                <div className="font-bold text-foreground">60%</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div>Productivity</div>
                <div className="font-bold text-foreground">25%</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div>Learning</div>
                <div className="font-bold text-foreground">10%</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>Other</div>
                <div className="font-bold text-foreground">5%</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Comparison Report Section */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faArrowsRotate} className="text-indigo-500" />
            Comparison Report
          </h2>
          <select className="bg-gray-50 dark:bg-gray-800 border border-border text-xs font-bold text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 outline-none">
            <option className="text-gray-900 dark:text-gray-100">This Month vs Last Month</option>
            <option className="text-gray-900 dark:text-gray-100">This Week vs Last Week</option>
            <option className="text-gray-900 dark:text-gray-100">Year over Year</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <div className="p-4 border border-border rounded-xl bg-background hover:border-emerald-500/50 transition-colors">
            <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Overall Growth</div>
            <div className="flex items-end gap-2 mb-2">
              <div className="text-2xl font-black text-foreground">92%</div>
              <div className="text-sm font-bold text-emerald-500 flex items-center gap-1 mb-1">
                <FontAwesomeIcon icon={faArrowTrendUp} /> +12%
              </div>
            </div>
            <div className="text-xs text-muted font-medium">vs 80% last month</div>
          </div>

          <div className="p-4 border border-border rounded-xl bg-background hover:border-emerald-500/50 transition-colors">
            <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Deep Focus Hours</div>
            <div className="flex items-end gap-2 mb-2">
              <div className="text-2xl font-black text-foreground">42.5h</div>
              <div className="text-sm font-bold text-emerald-500 flex items-center gap-1 mb-1">
                <FontAwesomeIcon icon={faArrowTrendUp} /> +5.2h
              </div>
            </div>
            <div className="text-xs text-muted font-medium">vs 37.3h last month</div>
          </div>

          <div className="p-4 border border-border rounded-xl bg-background hover:border-red-500/50 transition-colors">
            <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Missed Habits</div>
            <div className="flex items-end gap-2 mb-2">
              <div className="text-2xl font-black text-foreground">14</div>
              <div className="text-sm font-bold text-red-500 flex items-center gap-1 mb-1">
                <FontAwesomeIcon icon={faArrowTrendUp} /> +2
              </div>
            </div>
            <div className="text-xs text-muted font-medium">vs 12 last month</div>
          </div>

        </div>
      </div>

    </div>
  );
}
