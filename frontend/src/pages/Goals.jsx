import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GoalHero from '../components/goals/GoalHero';
import GoalStats from '../components/goals/GoalStats';
import GoalFilterBar from '../components/goals/GoalFilterBar';
import GoalGrid from '../components/goals/GoalGrid';
import GoalSidebar from '../components/goals/GoalSidebar';
import GoalModal from '../components/goals/GoalModal';
import GoalDrawer from '../components/goals/GoalDrawer';

const mockGoals = [
  {
    id: 1,
    title: 'Run a Marathon',
    description: 'Train for and complete the city marathon in under 4 hours.',
    category: 'Fitness',
    priority: 'High',
    target: 42.2,
    current: 15,
    unit: 'km',
    deadline: '2024-11-15',
    daysRemaining: 135
  },
  {
    id: 2,
    title: 'Read 50 Books',
    description: 'Expand knowledge by reading a mix of fiction and non-fiction.',
    category: 'Learning',
    priority: 'Medium',
    target: 50,
    current: 12,
    unit: 'books',
    deadline: '2024-12-31',
    daysRemaining: 180
  },
  {
    id: 3,
    title: 'Launch SaaS App',
    description: 'Complete the MVP and get first 100 paying customers.',
    category: 'Coding',
    priority: 'High',
    target: 100,
    current: 15,
    unit: 'customers',
    deadline: '2024-09-01',
    daysRemaining: 60
  },
  {
    id: 4,
    title: 'Emergency Fund',
    description: 'Save $10,000 for unexpected expenses.',
    category: 'Finance',
    priority: 'Medium',
    target: 10000,
    current: 6500,
    unit: '$',
    deadline: '2024-10-31',
    daysRemaining: 120
  }
];

export default function Goals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null); // Will be used for Drawer
  // For now, let's just show Drawer if a goal is selected, but we haven't wired up GoalCard to set it.
  // We'll update GoalGrid/GoalCard to handle clicks later, or just keep it simple.

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-24 space-y-8"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">🎯 Goals</h1>
          <p className="text-muted mt-1">Turn your daily habits into meaningful achievements.</p>
        </div>
      </div>

      {/* Hero Section */}
      <GoalHero onNewGoal={() => setIsModalOpen(true)} />

      {/* Statistics */}
      <GoalStats />

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left/Center Column - Goals Grid */}
        <div className="flex-1 space-y-6">
          <GoalFilterBar />
          <GoalGrid goals={mockGoals} />
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[320px] xl:w-[380px] shrink-0">
          <GoalSidebar />
        </div>

      </div>

      <GoalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={() => console.log('Saved')} 
      />
      
      <GoalDrawer 
        isOpen={!!selectedGoal} 
        goal={selectedGoal} 
        onClose={() => setSelectedGoal(null)} 
      />
    </motion.div>
  );
}
