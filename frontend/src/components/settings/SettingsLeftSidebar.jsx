import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, faUser, faPalette, faUniversalAccess, faBell, 
  faBullseye, faCalendarAlt, faShieldHalved, faEyeSlash, 
  faDatabase, faCloudArrowUp, faCreditCard, faCode, faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';

export default function SettingsLeftSidebar() {
  const [activeTab, setActiveTab] = useState('appearance');

  const navGroups = [
    {
      title: "Account",
      items: [
        { id: 'profile', icon: faUser, label: 'Profile' },
        { id: 'appearance', icon: faPalette, label: 'Appearance' },
        { id: 'accessibility', icon: faUniversalAccess, label: 'Accessibility' },
        { id: 'notifications', icon: faBell, label: 'Notifications' },
      ]
    },
    {
      title: "App Settings",
      items: [
        { id: 'habits', icon: faBullseye, label: 'Habits & Goals' },
        { id: 'calendar', icon: faCalendarAlt, label: 'Calendar' },
      ]
    },
    {
      title: "Privacy & Security",
      items: [
        { id: 'security', icon: faShieldHalved, label: 'Security' },
        { id: 'privacy', icon: faEyeSlash, label: 'Privacy' },
      ]
    },
    {
      title: "Data",
      items: [
        { id: 'data', icon: faDatabase, label: 'Data Management' },
        { id: 'backup', icon: faCloudArrowUp, label: 'Backup & Restore' },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Search Settings */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-muted text-sm" />
        </div>
        <input 
          type="text" 
          placeholder="Search settings..." 
          className="w-full bg-card border border-border text-foreground text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-shadow shadow-sm placeholder:text-muted"
        />
      </div>

      {/* Navigation Groups */}
      <div className="space-y-6">
        {navGroups.map((group, groupIdx) => (
          <div key={groupIdx}>
            <h3 className="font-bold text-xs text-muted uppercase tracking-wider mb-2 px-3">{group.title}</h3>
            <div className="space-y-1">
              {group.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold'
                      : 'text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={item.icon} className={`w-4 ${activeTab === item.id ? 'text-indigo-500' : 'text-muted'}`} />
                    <span>{item.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <FontAwesomeIcon icon={faCreditCard} className="w-4 text-muted" />
          <span>Subscription</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <FontAwesomeIcon icon={faCode} className="w-4 text-muted" />
          <span>Developer Options</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
          <FontAwesomeIcon icon={faTriangleExclamation} className="w-4" />
          <span>Danger Zone</span>
        </button>
      </div>
      
    </div>
  );
}
