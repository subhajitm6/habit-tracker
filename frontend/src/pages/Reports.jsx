import React from 'react';
import { motion } from 'framer-motion';
import ReportsTopSection from '../components/reports/ReportsTopSection';
import ReportsCenterColumn from '../components/reports/ReportsCenterColumn';
import ReportsRightSidebar from '../components/reports/ReportsRightSidebar';

export default function Reports() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-24 min-h-screen flex flex-col"
    >
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">📊 Reports</h1>
          <p className="text-muted mt-1">Analyze your progress with powerful insights and professional reports.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white dark:bg-card border border-border text-foreground rounded-xl font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Export
          </button>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2">
            Date Range
          </button>
        </div>
      </div>
      
      {/* Top Section (Hero & Stats) */}
      <ReportsTopSection />
      
      {/* 2-Column Dashboard Layout below */}
      <div className="flex flex-col xl:flex-row gap-6 flex-1">
        
        {/* Main Analytics Dashboard */}
        <div className="flex-1 min-w-0">
          <ReportsCenterColumn />
        </div>
        
        {/* Right Sidebar (AI & Export) */}
        <div className="w-full xl:w-[350px] shrink-0">
          <ReportsRightSidebar />
        </div>

      </div>

    </motion.div>
  );
}
