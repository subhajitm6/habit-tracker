import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faFilePdf, faFileExcel, faDownload, faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function ReportsRightSidebar() {
  return (
    <div className="space-y-6">
      
      {/* AI Report Summary */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-5 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none"></div>
        
        <div className="flex items-center gap-2 mb-4 relative z-10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">AI Insights</h3>
        </div>
        
        <div className="space-y-3 relative z-10">
          <div className="bg-background border border-border rounded-xl p-3 text-sm text-foreground font-medium shadow-sm leading-relaxed relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-xl"></div>
            Your <strong className="text-indigo-600 dark:text-indigo-400">productivity increased by 18%</strong> this month, largely driven by better sleep consistency.
          </div>
          
          <div className="bg-background border border-border rounded-xl p-3 text-sm text-foreground font-medium shadow-sm leading-relaxed relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-l-xl"></div>
            You performed best on <strong className="text-purple-600 dark:text-purple-400">Tuesdays</strong>. Consider scheduling your most demanding tasks for this day.
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground mb-4">Export Options</h3>
        
        <div className="space-y-2 mb-4">
          <label className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
            <span className="text-sm font-medium text-foreground">Include Charts</span>
          </label>
          <label className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
            <span className="text-sm font-medium text-foreground">Include AI Summary</span>
          </label>
          <label className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
            <span className="text-sm font-medium text-foreground">Raw Data (CSV)</span>
          </label>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-bold rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center justify-center gap-2 border border-red-200 dark:border-red-800/50">
            <FontAwesomeIcon icon={faFilePdf} /> PDF
          </button>
          <button className="flex-1 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors flex items-center justify-center gap-2 border border-emerald-200 dark:border-emerald-800/50">
            <FontAwesomeIcon icon={faFileExcel} /> Excel
          </button>
        </div>
      </div>

      {/* Saved Reports */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faBookmark} className="text-muted" />
          Saved Reports
        </h3>
        
        <div className="space-y-3">
          
          <div className="group flex items-center justify-between p-3 border border-border rounded-xl hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-colors cursor-pointer">
            <div>
              <div className="font-bold text-sm text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Q1 Performance</div>
              <div className="text-[10px] font-medium text-muted mt-0.5">Apr 1, 2026 • 2.4 MB</div>
            </div>
            <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-muted flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              <FontAwesomeIcon icon={faDownload} className="text-xs" />
            </button>
          </div>

          <div className="group flex items-center justify-between p-3 border border-border rounded-xl hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-colors cursor-pointer">
            <div>
              <div className="font-bold text-sm text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">March Health Sync</div>
              <div className="text-[10px] font-medium text-muted mt-0.5">Apr 1, 2026 • 1.1 MB</div>
            </div>
            <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-muted flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              <FontAwesomeIcon icon={faDownload} className="text-xs" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
