import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChartLine, faRocket } from '@fortawesome/free-solid-svg-icons';

export default function GoalHero({ onNewGoal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gradient-to-r from-primary to-indigo-600 rounded-[24px] p-8 text-white relative overflow-hidden shadow-lg"
    >
      <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
        <FontAwesomeIcon icon={faRocket} className="text-8xl" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">You're making great progress!</h2>
          <p className="text-white/80 mb-6 max-w-md">
            "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
          </p>
          
          <div className="flex items-center gap-6">
            <div>
              <div className="text-sm text-white/70">Goals Completed</div>
              <div className="text-2xl font-bold">12</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div>
              <div className="text-sm text-white/70">Active Goals</div>
              <div className="text-2xl font-bold">5</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div>
              <div className="text-sm text-white/70">Overall Progress</div>
              <div className="text-2xl font-bold">68%</div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex gap-3">
          <button className="px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-medium transition-colors flex items-center gap-2 text-white">
            <FontAwesomeIcon icon={faChartLine} />
            View Analytics
          </button>
          <button 
            onClick={onNewGoal}
            className="px-5 py-2.5 bg-white text-primary hover:bg-gray-50 rounded-xl font-medium transition-colors shadow-sm flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faPlus} />
            New Goal
          </button>
        </div>
      </div>
    </motion.div>
  );
}
