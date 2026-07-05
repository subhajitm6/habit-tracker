import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal, faCrown, faStar } from '@fortawesome/free-solid-svg-icons';

export default function RewardHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 rounded-[24px] p-8 text-white relative overflow-hidden shadow-xl"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
        <FontAwesomeIcon icon={faCrown} className="text-9xl" />
      </div>
      
      {/* Sparkles */}
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.8, 0.2] }} 
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute top-10 right-1/4 text-2xl text-yellow-300 pointer-events-none drop-shadow-lg"
      >
        <FontAwesomeIcon icon={faStar} />
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.5, 0.1] }} 
        transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
        className="absolute bottom-8 right-1/3 text-4xl text-blue-200 pointer-events-none drop-shadow-md"
      >
        <FontAwesomeIcon icon={faStar} />
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Info */}
        <div className="w-full md:w-auto">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30 text-yellow-300 flex items-center gap-2 w-fit">
            <FontAwesomeIcon icon={faCrown} /> Diamond Rank
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 drop-shadow-sm">
            Level 18
          </h2>
          <p className="text-white/90 mb-6 max-w-md text-lg font-medium">
            You're in the top 5% of users this month. Keep up the momentum to reach Level 19!
          </p>
          
          <div className="flex gap-4">
            <button className="px-6 py-2.5 bg-yellow-400 text-yellow-900 hover:bg-yellow-300 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Redeem Rewards
            </button>
            <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all backdrop-blur-sm border border-white/20">
              View Achievements
            </button>
          </div>
        </div>

        {/* Right Side: XP Ring */}
        <div className="shrink-0 bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl flex flex-col items-center">
          <div className="relative w-40 h-40 flex items-center justify-center mb-4">
            {/* Background Track */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
              
              {/* Progress Ring */}
              <motion.circle 
                initial={{ strokeDasharray: "0 283" }}
                animate={{ strokeDasharray: "232 283" }} // ~82% completion
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                cx="50" cy="50" r="45" fill="none" stroke="#60A5FA" strokeWidth="8" strokeLinecap="round" 
                className="drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]"
              />
            </svg>
            
            {/* Inner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-black">82%</div>
              <div className="text-xs text-white/70 font-semibold uppercase tracking-wide mt-1">To Lvl 19</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-center w-full justify-between px-2">
            <div>
              <div className="text-xs text-white/60 font-medium uppercase">Current XP</div>
              <div className="font-bold text-lg">18,450</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-xs text-white/60 font-medium uppercase">Next Lvl</div>
              <div className="font-bold text-lg">22,500</div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
