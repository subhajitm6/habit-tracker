import React from 'react';
import { motion } from 'framer-motion';
import AnalyticsHeader from '../components/analytics/AnalyticsHeader';
import SummaryCards from '../components/analytics/SummaryCards';
import MainCharts from '../components/analytics/MainCharts';
import InsightsSection from '../components/analytics/InsightsSection';

export default function Analytics() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 pb-12"
    >
      <AnalyticsHeader />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <SummaryCards />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <MainCharts />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <InsightsSection />
      </motion.div>

    </motion.div>
  );
}
