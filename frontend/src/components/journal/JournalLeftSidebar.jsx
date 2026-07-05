import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faCalendarDay, 
  faHistory, 
  faStar, 
  faFolderOpen,
  faTag
} from '@fortawesome/free-solid-svg-icons';

export default function JournalLeftSidebar() {
  return (
    <div className="space-y-6">
      
      {/* Quick Search */}
      <div className="relative">
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm" />
        <input 
          type="text" 
          placeholder="Search journals..." 
          className="w-full bg-card border border-border rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
        />
      </div>

      {/* Navigation */}
      <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
        <ul className="space-y-1">
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 font-medium">
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>Today's Journal</span>
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-muted hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-foreground transition-colors">
              <FontAwesomeIcon icon={faHistory} />
              <span>Recent Entries</span>
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-muted hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-foreground transition-colors">
              <FontAwesomeIcon icon={faStar} />
              <span>Favorites</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Collections */}
      <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
        <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-3 px-3">Collections</h3>
        <ul className="space-y-1">
          <li>
            <button className="w-full flex justify-between items-center px-3 py-2 rounded-xl text-muted hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-foreground transition-colors">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faFolderOpen} className="text-blue-500" />
                <span>Morning Pages</span>
              </div>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">42</span>
            </button>
          </li>
          <li>
            <button className="w-full flex justify-between items-center px-3 py-2 rounded-xl text-muted hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-foreground transition-colors">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faFolderOpen} className="text-green-500" />
                <span>Gratitude</span>
              </div>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">89</span>
            </button>
          </li>
          <li>
            <button className="w-full flex justify-between items-center px-3 py-2 rounded-xl text-muted hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-foreground transition-colors">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faFolderOpen} className="text-orange-500" />
                <span>Ideas</span>
              </div>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">12</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
        <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-3 px-3">Popular Tags</h3>
        <div className="flex flex-wrap gap-2 px-1">
          {['Work', 'Family', 'Health', 'Travel', 'Reading', 'Coding'].map(tag => (
            <button key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background hover:opacity-80 text-xs font-medium text-foreground transition-colors border border-border">
              <FontAwesomeIcon icon={faTag} className="text-muted text-[10px]" />
              {tag}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
