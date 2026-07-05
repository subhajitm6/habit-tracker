import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const moods = [
  { id: 'amazing', emoji: '😁', label: 'Amazing', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', border: 'border-green-200 dark:border-green-800' },
  { id: 'happy', emoji: '😊', label: 'Happy', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300', border: 'border-emerald-200 dark:border-emerald-800' },
  { id: 'good', emoji: '🙂', label: 'Good', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300', border: 'border-teal-200 dark:border-teal-800' },
  { id: 'neutral', emoji: '😐', label: 'Neutral', color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300', border: 'border-gray-200 dark:border-gray-700' },
  { id: 'sad', emoji: '😔', label: 'Sad', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800' },
  { id: 'angry', emoji: '😡', label: 'Angry', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300', border: 'border-red-200 dark:border-red-800' },
  { id: 'tired', emoji: '😴', label: 'Tired', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800' },
  { id: 'stressed', emoji: '😰', label: 'Stressed', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800' },
];

export default function QuickMoodCheckIn() {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelect = (id) => {
    setSelectedMood(id);
    // Simulate save
    setTimeout(() => {
      setSelectedMood(null); // Reset after saving animation if desired, or keep it selected
    }, 1500);
  };

  return (
    <div className="bg-card border border-border rounded-[24px] p-6 md:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-foreground mb-6 text-center">How are you feeling right now?</h3>
      
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {moods.map((mood) => {
          const isSelected = selectedMood === mood.id;
          
          return (
            <motion.button
              key={mood.id}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(mood.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all duration-300 relative ${
                isSelected 
                  ? `${mood.color} ${mood.border} shadow-lg scale-110 z-10 ring-4 ring-offset-2 ring-offset-card ring-opacity-50` 
                  : `border-transparent hover:${mood.border} hover:bg-gray-50 dark:hover:bg-gray-800/50`
              }`}
            >
              <div className="text-4xl mb-2 filter drop-shadow-sm">{mood.emoji}</div>
              <div className={`text-xs font-medium ${isSelected ? 'font-bold' : 'text-muted'}`}>
                {mood.label}
              </div>
              
              {/* Selected Ripple Effect */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 1.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 rounded-2xl bg-current opacity-20 pointer-events-none`}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
      
      <AnimatePresence>
        {selectedMood && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            className="mt-6 text-center text-sm font-medium text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 p-3 rounded-xl"
          >
            Mood logged successfully! Keep up the great tracking.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
