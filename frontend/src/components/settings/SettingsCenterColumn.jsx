import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faDesktop, faPalette, faBell, faEnvelope, faMobileScreen, faShieldHalved, faKey, faMobileButton } from '@fortawesome/free-solid-svg-icons';

export default function SettingsCenterColumn() {
  const [theme, setTheme] = useState('system');
  const [accent, setAccent] = useState('indigo');

  return (
    <div className="space-y-8">
      
      {/* APPEARANCE SECTION */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faPalette} className="text-indigo-500" />
            Appearance
          </h2>
          <p className="text-sm text-muted">Customize the look and feel of your workspace.</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm mb-4">
          <h3 className="font-bold text-foreground mb-4">Theme Preference</h3>
          
          <div className="grid grid-cols-3 gap-4">
            <button 
              onClick={() => setTheme('light')}
              className={`relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${theme === 'light' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-border hover:border-indigo-300'}`}
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xl shadow-sm">
                <FontAwesomeIcon icon={faSun} />
              </div>
              <span className={`font-bold text-sm ${theme === 'light' ? 'text-indigo-600 dark:text-indigo-400' : 'text-foreground'}`}>Light</span>
              {theme === 'light' && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-500"></div>}
            </button>

            <button 
              onClick={() => setTheme('dark')}
              className={`relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${theme === 'dark' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-border hover:border-indigo-300'}`}
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl shadow-sm">
                <FontAwesomeIcon icon={faMoon} />
              </div>
              <span className={`font-bold text-sm ${theme === 'dark' ? 'text-indigo-600 dark:text-indigo-400' : 'text-foreground'}`}>Dark</span>
              {theme === 'dark' && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-500"></div>}
            </button>

            <button 
              onClick={() => setTheme('system')}
              className={`relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${theme === 'system' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-border hover:border-indigo-300'}`}
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xl shadow-sm">
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <span className={`font-bold text-sm ${theme === 'system' ? 'text-indigo-600 dark:text-indigo-400' : 'text-foreground'}`}>System</span>
              {theme === 'system' && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-500"></div>}
            </button>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-foreground mb-4">Accent Color</h3>
          <div className="flex gap-4">
            {['indigo', 'purple', 'blue', 'emerald', 'orange', 'rose'].map((color) => (
              <button
                key={color}
                onClick={() => setAccent(color)}
                className={`w-10 h-10 rounded-full transition-transform hover:scale-110 flex items-center justify-center ${
                  accent === color ? 'ring-2 ring-offset-2 ring-offset-card ring-foreground' : ''
                } ${
                  color === 'indigo' ? 'bg-indigo-500' :
                  color === 'purple' ? 'bg-purple-500' :
                  color === 'blue' ? 'bg-blue-500' :
                  color === 'emerald' ? 'bg-emerald-500' :
                  color === 'orange' ? 'bg-orange-500' :
                  'bg-rose-500'
                }`}
              >
                {accent === color && <div className="w-3 h-3 bg-white rounded-full"></div>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NOTIFICATIONS SECTION */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faBell} className="text-rose-500" />
            Notifications
          </h2>
          <p className="text-sm text-muted">Manage how and when you receive alerts.</p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          
          <div className="p-4 flex items-center justify-between border-b border-border hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">Email Notifications</div>
                <div className="text-xs text-muted font-medium">Receive daily summaries and important alerts.</div>
              </div>
            </div>
            {/* Toggle Switch */}
            <div className="w-12 h-6 bg-indigo-500 rounded-full p-1 cursor-pointer flex justify-end transition-colors shadow-inner">
              <motion.div layout className="w-4 h-4 bg-white rounded-full shadow-sm"></motion.div>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center">
                <FontAwesomeIcon icon={faMobileScreen} />
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">Push Notifications</div>
                <div className="text-xs text-muted font-medium">Real-time alerts for habits and reminders.</div>
              </div>
            </div>
            {/* Toggle Switch */}
            <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer flex justify-start transition-colors shadow-inner">
              <motion.div layout className="w-4 h-4 bg-white rounded-full shadow-sm"></motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* SECURITY SECTION */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <FontAwesomeIcon icon={faShieldHalved} className="text-emerald-500" />
            Security
          </h2>
          <p className="text-sm text-muted">Keep your account safe and manage authentication.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm flex flex-col justify-between group hover:border-indigo-500/50 transition-colors cursor-pointer">
            <div>
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faKey} />
              </div>
              <h3 className="font-bold text-foreground mb-1">Change Password</h3>
              <p className="text-xs text-muted font-medium">Update your credentials to keep your account secure.</p>
            </div>
            <div className="mt-4 text-sm font-bold text-indigo-500 group-hover:text-indigo-600 transition-colors">Update &rarr;</div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm flex flex-col justify-between group hover:border-indigo-500/50 transition-colors cursor-pointer">
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faMobileButton} />
              </div>
              <h3 className="font-bold text-foreground mb-1">Two-Factor Auth</h3>
              <p className="text-xs text-muted font-medium">Add an extra layer of security to your account.</p>
            </div>
            <div className="mt-4 text-sm font-bold text-indigo-500 group-hover:text-indigo-600 transition-colors">Enable 2FA &rarr;</div>
          </div>

        </div>
      </section>

    </div>
  );
}
