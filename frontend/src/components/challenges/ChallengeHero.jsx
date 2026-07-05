import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faRocket, faFireFlameCurved, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function ChallengeHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-[24px] p-8 text-white relative overflow-hidden shadow-lg"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
        <FontAwesomeIcon icon={faTrophy} className="text-9xl" />
      </div>
      <motion.div 
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-10 right-1/4 text-5xl opacity-40 pointer-events-none drop-shadow-lg"
      >
        <FontAwesomeIcon icon={faRocket} />
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-8 right-1/3 text-4xl pointer-events-none text-yellow-300 drop-shadow-md"
      >
        <FontAwesomeIcon icon={faFireFlameCurved} />
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
            Featured Challenge
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">30-Day Marathon Prep</h2>
          <p className="text-white/80 mb-6 max-w-lg text-sm md:text-base">
            Join 4,200 others in building the stamina for your first marathon. Daily running goals scaled to your fitness level.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-8 bg-black/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 w-fit">
            <div>
              <div className="text-xs text-white/70 uppercase font-semibold">Days Left</div>
              <div className="text-xl font-bold">12 Days</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-xs text-white/70 uppercase font-semibold">Reward</div>
              <div className="text-xl font-bold text-yellow-300 flex items-center gap-1">
                <FontAwesomeIcon icon={faTrophy} className="text-sm" /> 500 XP
              </div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-xs text-white/70 uppercase font-semibold">Participants</div>
              <div className="text-xl font-bold flex items-center gap-2">
                <FontAwesomeIcon icon={faUsers} className="text-sm opacity-80" /> 4.2k
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0 flex flex-col items-center gap-3 shrink-0">
          {/* Progress Ring Visualization */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
              <motion.circle 
                initial={{ strokeDasharray: "0 283" }}
                animate={{ strokeDasharray: "170 283" }} // ~60% completion
                transition={{ duration: 1.5, ease: "easeOut" }}
                cx="50" cy="50" r="45" fill="none" stroke="#FCD34D" strokeWidth="8" strokeLinecap="round" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">60%</span>
            </div>
          </div>
          
          <button className="px-8 py-3 bg-white text-purple-700 hover:bg-gray-50 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full text-center">
            Continue Challenge
          </button>
        </div>
      </div>
    </motion.div>
  );
}
