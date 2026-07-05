import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faRocket, faTrophy, faUserPlus, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default function FriendHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-[24px] p-8 text-white relative overflow-hidden shadow-xl"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
        <FontAwesomeIcon icon={faUsers} className="text-9xl" />
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-8 right-1/4 text-4xl text-blue-200 pointer-events-none drop-shadow-lg opacity-80"
      >
        <FontAwesomeIcon icon={faRocket} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }} 
        transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/3 text-3xl text-yellow-300 pointer-events-none drop-shadow-md opacity-90"
      >
        <FontAwesomeIcon icon={faTrophy} />
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left Side: Info */}
        <div className="w-full md:w-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30 text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            12 Friends Online
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 drop-shadow-sm">
            Community Focus
          </h2>
          <p className="text-white/90 mb-6 max-w-md text-sm md:text-base font-medium">
            Building habits is easier together. Connect with friends, join accountability groups, and celebrate each other's success.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
              <FontAwesomeIcon icon={faUserPlus} /> Find Friends
            </button>
            <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all backdrop-blur-sm border border-white/20 flex items-center gap-2">
              <FontAwesomeIcon icon={faUserGroup} /> Create Group
            </button>
          </div>
        </div>

        {/* Right Side: Quick Stats */}
        <div className="shrink-0 flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col items-center min-w-[120px]">
            <div className="text-3xl font-black mb-1">42</div>
            <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider text-center">Total Friends</div>
          </div>
          
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col items-center min-w-[120px]">
            <div className="text-3xl font-black mb-1 text-yellow-300">3</div>
            <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider text-center">Shared Challenges</div>
          </div>
          
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col items-center min-w-[120px]">
            <div className="text-3xl font-black mb-1 text-emerald-300">14k</div>
            <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider text-center">Community XP</div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
