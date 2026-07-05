import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SidebarTooltip({ text, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900/90 dark:bg-black/90 backdrop-blur-md text-white text-xs font-bold rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-left-1.5 before:-translate-y-1/2 before:border-t-4 before:border-t-transparent before:border-b-4 before:border-b-transparent before:border-r-4 before:border-r-gray-900/90 dark:before:border-r-black/90"
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
