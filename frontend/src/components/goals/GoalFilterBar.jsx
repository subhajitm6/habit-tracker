import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faTableCellsLarge, faList, faSort } from '@fortawesome/free-solid-svg-icons';

export default function GoalFilterBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card border border-border rounded-2xl p-4 shadow-sm">
      <div className="relative w-full md:w-64">
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <input 
          type="text" 
          placeholder="Search goals..." 
          className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm font-medium bg-primary text-white rounded-lg transition-colors">
            Active
          </button>
          <button className="px-3 py-1.5 text-sm font-medium text-muted hover:bg-gray-100 rounded-lg transition-colors">
            Completed
          </button>
          <button className="px-3 py-1.5 text-sm font-medium text-muted hover:bg-gray-100 rounded-lg transition-colors">
            Overdue
          </button>
        </div>
        
        <div className="w-px h-6 bg-border hidden md:block"></div>

        <button className="p-2 text-muted hover:text-foreground hover:bg-gray-100 rounded-lg transition-colors" title="Filter">
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <button className="p-2 text-muted hover:text-foreground hover:bg-gray-100 rounded-lg transition-colors" title="Sort">
          <FontAwesomeIcon icon={faSort} />
        </button>

        <div className="flex bg-background border border-border rounded-lg overflow-hidden">
          <button className="p-2 px-3 bg-gray-100 text-foreground transition-colors" title="Grid View">
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </button>
          <button className="p-2 px-3 text-muted hover:text-foreground hover:bg-gray-50 transition-colors" title="List View">
            <FontAwesomeIcon icon={faList} />
          </button>
        </div>
      </div>
    </div>
  );
}
