import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faHeart, faWind, faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function MoodSidebar() {
  const [breathing, setBreathing] = useState(false);
  
  return (
    <div className="space-y-6">
      
      {/* Today's Reflection */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground mb-4">Today's Reflection</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted block mb-2">What made today special?</label>
            <textarea 
              rows={2} 
              className="w-full bg-background border border-border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="A nice walk, a good meal..."
            ></textarea>
          </div>
          <div>
            <label className="text-sm font-medium text-muted block mb-2">What could be improved?</label>
            <textarea 
              rows={2} 
              className="w-full bg-background border border-border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Slept too late..."
            ></textarea>
          </div>
        </div>
      </div>

      {/* AI Emotional Insights */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white flex items-center justify-center shadow-sm">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
          </div>
          <h3 className="font-bold text-foreground">AI Insights</h3>
        </div>
        
        <div className="space-y-3">
          <div className="bg-card backdrop-blur-sm rounded-xl p-3 border border-border shadow-sm text-sm text-foreground font-medium flex gap-3 items-start">
            <span className="text-xl">🏃</span>
            <span>You feel happiest on days when you exercise.</span>
          </div>
          <div className="bg-card backdrop-blur-sm rounded-xl p-3 border border-border shadow-sm text-sm text-foreground font-medium flex gap-3 items-start">
            <span className="text-xl">📖</span>
            <span>Reading consistently improves your emotional stability over the week.</span>
          </div>
        </div>
      </div>

      {/* Breathing Exercise */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm overflow-hidden relative">
        <div className="flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faWind} className="text-cyan-500" />
          <h3 className="font-bold text-foreground">Breathe</h3>
        </div>
        
        <div className="flex flex-col items-center justify-center py-4">
          <div className="relative w-24 h-24 flex items-center justify-center mb-6">
            {/* Animated breathing circle */}
            <motion.div
              animate={breathing ? { scale: [1, 1.5, 1.5, 1] } : { scale: 1 }}
              transition={{ repeat: breathing ? Infinity : 0, duration: 8, times: [0, 0.4, 0.6, 1], ease: "easeInOut" }}
              className="absolute inset-0 bg-cyan-100 dark:bg-cyan-900/30 rounded-full border border-cyan-200 dark:border-cyan-800"
            ></motion.div>
            <motion.div
              animate={breathing ? { scale: [1, 1.2, 1.2, 1] } : { scale: 1 }}
              transition={{ repeat: breathing ? Infinity : 0, duration: 8, times: [0, 0.4, 0.6, 1], ease: "easeInOut" }}
              className="absolute inset-4 bg-cyan-200 dark:bg-cyan-800/40 rounded-full"
            ></motion.div>
            <div className="absolute z-10 text-cyan-600 dark:text-cyan-400 font-medium text-sm">
              {breathing ? "Inhale..." : "Ready"}
            </div>
          </div>
          
          <button 
            onClick={() => setBreathing(!breathing)}
            className="px-6 py-2 bg-cyan-50 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-400 rounded-full font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors flex items-center gap-2 text-sm border border-cyan-200 dark:border-cyan-800"
          >
            {breathing ? (
              <>Stop Session</>
            ) : (
              <><FontAwesomeIcon icon={faPlay} className="text-xs" /> Start 1 Min</>
            )}
          </button>
        </div>
      </div>

      {/* Gratitude Section */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm text-center">
        <div className="w-12 h-12 rounded-full bg-pink-50 dark:bg-pink-500/10 text-pink-500 flex items-center justify-center mx-auto mb-3">
          <FontAwesomeIcon icon={faHeart} className="text-xl" />
        </div>
        <h3 className="font-bold text-foreground mb-1">Gratitude</h3>
        <p className="text-sm text-muted mb-4">Write one thing you're grateful for today.</p>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="I am grateful for..." 
            className="w-full bg-background border border-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 pr-10"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-pink-500 hover:text-pink-600">
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      </div>

    </div>
  );
}
