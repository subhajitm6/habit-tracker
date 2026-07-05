import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarDays,
  faChevronDown,
  faDownload,
  faRotateRight,
  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

export default function AnalyticsHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[34px] font-bold text-foreground leading-tight">Analytics</h1>
          <p className="text-[15px] text-muted">Understand your progress and improve your daily habits.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Date Range Selector */}
          <button className="bg-card border border-border hover:border-primary/50 text-foreground px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all flex items-center gap-2 group">
            <FontAwesomeIcon icon={faCalendarDays} className="text-muted group-hover:text-primary transition-colors" />
            <span>Last 30 Days</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-[10px] text-muted ml-1" />
          </button>

          {/* Export Button */}
          <button className="bg-card border border-border hover:border-primary/50 text-foreground px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all flex items-center gap-2 group">
            <FontAwesomeIcon icon={faDownload} className="text-muted group-hover:text-primary transition-colors" />
            <span>Export</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-[10px] text-muted ml-1" />
          </button>

          {/* Refresh Button */}
          <button className="bg-primary hover:bg-primary/90 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform hover:-translate-y-0.5">
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
        </div>
      </div>

      {/* Quick Filters Row */}
      <div className="bg-card border border-border rounded-2xl p-2 flex flex-col md:flex-row items-center gap-2 shadow-sm">
        
        {/* Search */}
        <div className="relative flex-1 w-full md:w-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-muted w-4 h-4" />
          </div>
          <input 
            type="text" 
            placeholder="Search analytics..." 
            className="w-full bg-background/50 border border-transparent hover:border-border focus:border-primary focus:bg-background text-sm rounded-xl pl-9 pr-3 py-2 transition-all outline-none"
          />
        </div>

        <div className="hidden md:block w-px h-6 bg-border mx-2"></div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto scrollbar-hide pb-1 md:pb-0">
          <button className="whitespace-nowrap px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">All Data</button>
          <button className="whitespace-nowrap px-4 py-1.5 bg-background hover:bg-background/80 text-muted hover:text-foreground text-sm font-medium rounded-full transition-colors border border-border">Health</button>
          <button className="whitespace-nowrap px-4 py-1.5 bg-background hover:bg-background/80 text-muted hover:text-foreground text-sm font-medium rounded-full transition-colors border border-border">Productivity</button>
          <button className="whitespace-nowrap px-4 py-1.5 bg-background hover:bg-background/80 text-muted hover:text-foreground text-sm font-medium rounded-full transition-colors border border-border flex items-center gap-2">
            <FontAwesomeIcon icon={faFilter} className="text-xs" /> More Filters
          </button>
        </div>
      </div>

    </motion.div>
  );
}
