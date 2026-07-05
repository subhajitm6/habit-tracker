import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, faFileImport, faFileExport, faEllipsisVertical,
  faListCheck, faCheckCircle, faHourglassHalf, faFire, faChartPie, faFolderTree,
  faSearch, faFilter, faSort, faGrip, faList, faTableColumns, faCalendar,
  faStar, faClock, faRotateRight, faPlay, faPause, faTrash, faBoxArchive, faCopy
} from '@fortawesome/free-solid-svg-icons';

// Mock Data
const habits = [
  { id: 1, name: 'Morning Run', desc: '5km run in the park', category: 'Health', color: 'text-blue-500', bg: 'bg-blue-100', icon: faPersonRunning, priority: 'High', difficulty: 'Hard', streak: 12, maxStreak: 15, completion: 80, time: '07:00 AM', repeat: 'Daily', lastDone: 'Today' },
  { id: 2, name: 'Read 20 pages', desc: 'Read a non-fiction book', category: 'Learning', color: 'text-purple-500', bg: 'bg-purple-100', icon: faBookOpen, priority: 'Medium', difficulty: 'Easy', streak: 5, maxStreak: 30, completion: 65, time: '08:30 PM', repeat: 'Daily', lastDone: 'Yesterday' },
  { id: 3, name: 'Meditation', desc: '10 mins mindfulness', category: 'Mindfulness', color: 'text-emerald-500', bg: 'bg-emerald-100', icon: faLeaf, priority: 'Medium', difficulty: 'Medium', streak: 2, maxStreak: 10, completion: 40, time: '06:00 AM', repeat: 'Weekdays', lastDone: 'Today' },
  { id: 4, name: 'Drink Water', desc: 'Drink 2L of water', category: 'Health', color: 'text-cyan-500', bg: 'bg-cyan-100', icon: faDroplet, priority: 'Low', difficulty: 'Easy', streak: 45, maxStreak: 45, completion: 100, time: 'All Day', repeat: 'Daily', lastDone: 'Today' },
  { id: 5, name: 'Learn React', desc: 'Complete 1 module', category: 'Coding', color: 'text-indigo-500', bg: 'bg-indigo-100', icon: faCode, priority: 'High', difficulty: 'Hard', streak: 0, maxStreak: 5, completion: 20, time: '02:00 PM', repeat: 'Weekends', lastDone: 'Last Week' },
];

// Reusing Icons just for mock
import { faPersonRunning, faBookOpen, faLeaf, faDroplet, faCode, faTrophy } from '@fortawesome/free-solid-svg-icons';

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="h-full"
  >
    {children}
  </motion.div>
);

export default function HabitManagement() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  return (
    <div className="space-y-8 pb-20">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-[34px] font-bold text-foreground">My Habits</h1>
          <p className="text-[15px] text-muted">Manage, organize and track all your habits from one place.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-wrap items-center gap-3">
          <button className="bg-card border border-border text-foreground px-4 py-2 rounded-xl shadow-sm hover:bg-hover transition-colors font-medium text-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faFileImport} /> Import
          </button>
          <button className="bg-card border border-border text-foreground px-4 py-2 rounded-xl shadow-sm hover:bg-hover transition-colors font-medium text-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faFileExport} /> Export
          </button>
          <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-medium text-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} /> New Habit
          </button>
        </motion.div>
      </div>

      {/* Top Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {[
          { label: 'Total Habits', value: '42', sub: 'Habits', icon: faListCheck, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Completed Today', value: '18', sub: 'Habits', icon: faCheckCircle, color: 'text-success', bg: 'bg-green-50' },
          { label: 'Pending', value: '9', sub: 'Habits', icon: faHourglassHalf, color: 'text-warning', bg: 'bg-orange-50' },
          { label: 'Current Streak', value: '12', sub: 'Days', icon: faFire, color: 'text-red-500', bg: 'bg-red-50' },
          { label: 'Completion Rate', value: '82%', sub: 'Avg', icon: faChartPie, color: 'text-primary', bg: 'bg-indigo-50' },
          { label: 'Categories', value: '8', sub: 'Active', icon: faFolderTree, color: 'text-purple-500', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="bg-card rounded-[20px] p-5 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all flex flex-col items-center text-center h-full">
              <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center text-xl mb-3`}>
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className="text-[13px] text-muted font-medium mb-1">{stat.label}</div>
              <div className="text-[22px] font-bold text-foreground leading-none">{stat.value}</div>
              <div className="text-[11px] text-muted mt-1 uppercase tracking-wider">{stat.sub}</div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Filter Toolbar */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} delay={0.4} className="bg-card rounded-[24px] p-4 shadow-sm border border-border space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-muted" />
            </div>
            <input 
              type="text" 
              placeholder="Search habits..." 
              className="w-full bg-background border border-border text-sm rounded-xl focus:ring-2 focus:ring-primary focus:border-primary block pl-10 p-3 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
            {['Category', 'Status', 'Difficulty', 'Priority', 'Sort By'].map((filter) => (
              <button key={filter} className="whitespace-nowrap px-4 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground hover:bg-gray-50 transition-colors flex items-center gap-2">
                {filter} <FontAwesomeIcon icon={faFilter} className="text-xs text-muted" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 bg-background border border-border p-1 rounded-xl">
            <button className="p-2 rounded-lg bg-card shadow-sm text-primary"><FontAwesomeIcon icon={faGrip} /></button>
            <button className="p-2 rounded-lg text-muted hover:text-foreground"><FontAwesomeIcon icon={faList} /></button>
            <button className="p-2 rounded-lg text-muted hover:text-foreground"><FontAwesomeIcon icon={faTableColumns} /></button>
            <button className="p-2 rounded-lg text-muted hover:text-foreground"><FontAwesomeIcon icon={faCalendar} /></button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {['All', 'Active', 'Completed', 'Paused', 'Archived', 'Favorites'].map((chip) => (
            <button 
              key={chip}
              onClick={() => setActiveFilter(chip)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                activeFilter === chip ? 'bg-primary text-white' : 'bg-background border border-border text-muted hover:text-foreground'
              }`}
            >
              {chip}
            </button>
          ))}
          <button className="ml-auto text-[13px] text-muted hover:text-danger hover:underline">Clear Filters</button>
        </div>
      </motion.div>

      {/* Habit Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit, i) => (
          <FadeUp key={habit.id} delay={0.1 * i + 0.5}>
            <div className="bg-card rounded-[24px] shadow-sm hover:shadow-xl border border-border p-6 transition-all duration-300 transform hover:-translate-y-1 group relative">
              
              {/* Top Section */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2 items-center">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${habit.bg} ${habit.color}`}>
                    {habit.category}
                  </span>
                  {habit.priority === 'High' && <span className="w-2 h-2 rounded-full bg-danger" title="High Priority"></span>}
                </div>
                <button className="text-muted hover:text-foreground w-8 h-8 rounded-full hover:bg-background flex items-center justify-center transition-colors">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>

              {/* Center Section */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${habit.bg} ${habit.color} flex items-center justify-center text-2xl shadow-sm shrink-0`}>
                  <FontAwesomeIcon icon={habit.icon} />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{habit.name}</h3>
                  <p className="text-[13px] text-muted leading-snug">{habit.desc}</p>
                </div>
              </div>

              {/* Progress & Stats */}
              <div className="mb-6 space-y-3">
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted">Progress</span>
                  <span className="font-semibold text-foreground">{habit.completion}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className={`h-2 rounded-full ${habit.color.replace('text-', 'bg-')} transition-all duration-1000`} style={{ width: `${habit.completion}%` }}></div>
                </div>
                <div className="flex justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-[13px]">
                    <FontAwesomeIcon icon={faFire} className="text-orange-400" />
                    <span className="font-medium text-foreground">{habit.streak}</span>
                    <span className="text-muted text-[11px] uppercase">Streak</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px]">
                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-400" />
                    <span className="font-medium text-foreground">{habit.maxStreak}</span>
                    <span className="text-muted text-[11px] uppercase">Best</span>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="pt-4 border-t border-border flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[11px] text-muted">
                    <FontAwesomeIcon icon={faClock} /> {habit.time} • {habit.repeat}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-full bg-background border border-border text-muted hover:text-yellow-400 hover:border-yellow-400 flex items-center justify-center transition-colors">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </button>
                </div>
              </div>

            </div>
          </FadeUp>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center text-2xl z-40">
        <FontAwesomeIcon icon={faPlus} />
      </button>

    </div>
  );
}
