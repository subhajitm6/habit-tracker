import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight, 
  faChevronDown,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

export default function CalendarCenter() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Mock calendar data for July 2026 (Starts on Wednesday)
  // Generating 35 cells for a 5-week view
  const calendarCells = [];
  
  // Previous month padding (June 28, 29, 30)
  for (let i = 28; i <= 30; i++) {
    calendarCells.push({ day: i, currentMonth: false, dateStr: `2026-06-${i}` });
  }
  
  // Current month (July 1 - 31)
  for (let i = 1; i <= 31; i++) {
    // Generate some mock indicators for each day
    const indicators = [];
    if (Math.random() > 0.3) indicators.push({ type: 'completed', color: 'bg-success' });
    if (Math.random() > 0.7) indicators.push({ type: 'pending', color: 'bg-warning' });
    if (Math.random() > 0.85) indicators.push({ type: 'missed', color: 'bg-danger' });
    if (Math.random() > 0.6) indicators.push({ type: 'journal', color: 'bg-purple-500' });
    if (Math.random() > 0.5) indicators.push({ type: 'mood', color: 'bg-blue-500' });
    
    calendarCells.push({ 
      day: i, 
      currentMonth: true, 
      isToday: i === 4, // Assume today is July 4
      dateStr: `2026-07-${i.toString().padStart(2, '0')}`,
      indicators
    });
  }
  
  // Next month padding (August 1)
  for (let i = 1; i <= 35 - 34; i++) {
    calendarCells.push({ day: i, currentMonth: false, dateStr: `2026-08-01` });
  }

  // Heatmap mock data
  const heatmapCells = Array.from({ length: 365 }).map((_, i) => {
    const r = Math.random();
    let intensity = 'bg-gray-100 dark:bg-slate-800'; // none
    if (r > 0.9) intensity = 'bg-success'; // perfect
    else if (r > 0.7) intensity = 'bg-success/80'; // high
    else if (r > 0.4) intensity = 'bg-success/50'; // medium
    else if (r > 0.2) intensity = 'bg-success/30'; // light
    return intensity;
  });

  return (
    <div className="flex-1 w-full flex flex-col h-full space-y-6">
      
      {/* Calendar Header Controls */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col 2xl:flex-row justify-between items-start 2xl:items-center gap-4 bg-card p-4 rounded-2xl shadow-sm border border-border"
      >
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full 2xl:w-auto">
          <button className="px-3 sm:px-4 py-2 bg-background border border-border rounded-lg text-sm font-semibold text-foreground hover:bg-border transition-colors">
            Today
          </button>
          <div className="flex items-center gap-1 text-muted">
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-background transition-colors">
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-background transition-colors">
              <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>
          </div>
          <div className="flex items-center gap-2 ml-auto 2xl:ml-0">
            <button className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2 hover:opacity-80 transition-opacity">
              July <FontAwesomeIcon icon={faChevronDown} className="text-xs text-muted" />
            </button>
            <button className="text-lg sm:text-xl font-medium text-muted flex items-center gap-2 hover:opacity-80 transition-opacity">
              2026 <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full 2xl:w-auto justify-between 2xl:justify-end">
          <div className="bg-background border border-border rounded-lg p-1 flex w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md text-muted hover:text-foreground transition-colors">Day</button>
            <button className="flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md text-muted hover:text-foreground transition-colors">Week</button>
            <button className="flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md bg-card shadow-sm text-foreground">Month</button>
            <button className="flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md text-muted hover:text-foreground transition-colors">Year</button>
          </div>
          <button className="w-10 h-10 shrink-0 bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center justify-center shadow-md transition-transform hover:-translate-y-0.5 ml-auto sm:ml-0">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </motion.div>

      {/* Main Grid Calendar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden flex-1 flex flex-col min-h-[500px]"
      >
        {/* Days of week header */}
        <div className="grid grid-cols-7 border-b border-border bg-background/50">
          {daysOfWeek.map(day => (
            <div key={day} className="py-3 text-center text-xs font-semibold text-muted uppercase tracking-wider">
              <span className="hidden md:inline">{day}</span>
              <span className="md:hidden">{day.substring(0, 3)}</span>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 flex-1">
          {calendarCells.map((cell, idx) => (
            <div 
              key={idx}
              className={`
                border-b border-r border-border/50 p-2 min-h-[100px] flex flex-col group cursor-pointer transition-all duration-300
                ${cell.currentMonth ? 'hover:bg-background/80 hover:shadow-inner hover:z-10 relative' : 'bg-background/30 opacity-50'}
                ${cell.isToday ? 'bg-primary/5' : ''}
                ${(idx + 1) % 7 === 0 ? 'border-r-0' : ''}
              `}
            >
              <div className="flex justify-between items-start">
                <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${
                  cell.isToday 
                    ? 'bg-primary text-white shadow-sm font-bold' 
                    : 'text-foreground group-hover:text-primary transition-colors'
                }`}>
                  {cell.day}
                </span>
                
                {/* Plus button on hover */}
                {cell.currentMonth && (
                  <button className="opacity-0 group-hover:opacity-100 text-muted hover:text-primary transition-all p-1 w-6 h-6 flex items-center justify-center rounded hover:bg-background">
                    <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
                  </button>
                )}
              </div>

              {/* Indicators */}
              {cell.currentMonth && cell.indicators && cell.indicators.length > 0 && (
                <div className="mt-auto pt-2 flex flex-wrap gap-1">
                  {cell.indicators.map((ind, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full ${ind.color}`} 
                      title={ind.type}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Github Style Heatmap */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="bg-card rounded-2xl p-6 shadow-sm border border-border overflow-x-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[15px] font-bold text-foreground">Annual Contribution</h3>
          <div className="text-xs text-muted font-medium bg-background px-3 py-1 rounded-full border border-border">
            1,245 Habits Completed
          </div>
        </div>
        
        <div className="flex gap-[3px] min-w-[700px]">
          {/* Group into weeks (52 columns of 7 rows) */}
          {Array.from({ length: 52 }).map((_, col) => (
            <div key={col} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }).map((_, row) => {
                const idx = col * 7 + row;
                if (idx >= 365) return null;
                return (
                  <div 
                    key={idx} 
                    className={`w-3 h-3 rounded-[2px] ${heatmapCells[idx]} hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer`}
                    title={`Activity on day ${idx + 1}`}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4 text-[11px] text-muted font-medium uppercase tracking-wider">
          <div className="flex gap-12">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="w-2.5 h-2.5 bg-gray-100 dark:bg-slate-800 rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-success/30 rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-success/50 rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-success/80 rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-success rounded-sm"></div>
            <span>More</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
