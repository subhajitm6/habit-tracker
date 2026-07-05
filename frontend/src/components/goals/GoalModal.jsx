import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faWandMagicSparkles, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function GoalModal({ isOpen, onClose, onSave }) {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-card w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-border flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-gray-50/50">
            <h2 className="text-xl font-bold text-foreground">Create New Goal</h2>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-muted transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Goal Title</label>
                  <input type="text" placeholder="e.g., Run a Marathon" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                  <textarea placeholder="Why is this important to you?" rows={3} className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all"></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                    <select className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                      <option>Fitness</option>
                      <option>Finance</option>
                      <option>Learning</option>
                      <option>Coding</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Priority</label>
                    <select className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>

                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex gap-3">
                  <div className="text-primary mt-0.5">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">AI Suggestion</h4>
                    <p className="text-xs text-indigo-800">Based on your past habits, setting a smaller initial target (like a Half Marathon first) increases success rate by 40%.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Target Value</label>
                    <input type="number" placeholder="42.2" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Unit</label>
                    <input type="text" placeholder="km" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Start Date</label>
                    <input type="date" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Target Date</label>
                    <input type="date" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                  </div>
                </div>
                
                <div className="border-t border-border pt-4 mt-4">
                  <h4 className="font-semibold text-foreground mb-3">Milestones (Optional)</h4>
                  <button className="w-full py-2 border-2 border-dashed border-border rounded-xl text-muted hover:border-primary hover:text-primary transition-colors text-sm font-medium">
                    + Add Milestone
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border bg-gray-50/50 flex justify-between items-center">
            <div className="flex gap-2">
              <div className={`w-2 h-2 rounded-full ${step === 1 ? 'bg-primary' : 'bg-gray-300'}`}></div>
              <div className={`w-2 h-2 rounded-full ${step === 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
            </div>
            
            <div className="flex gap-3">
              {step === 2 && (
                <button 
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-muted hover:text-foreground font-medium transition-colors"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                  Back
                </button>
              )}
              {step === 1 ? (
                <button 
                  onClick={() => setStep(2)}
                  className="px-6 py-2 bg-primary text-white rounded-xl font-medium shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Next
                  <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </button>
              ) : (
                <button 
                  onClick={() => {
                    onSave();
                    onClose();
                  }}
                  className="px-6 py-2 bg-primary text-white rounded-xl font-medium shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Create Goal
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
