import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faCheck, 
  faPlay, 
  faForwardStep,
  faEllipsisVertical,
  faDumbbell,
  faBookOpen,
  faGlassWater,
  faBed
} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-hot-toast';

const HabitCard = ({ habit, onComplete }) => {
  const [completed, setCompleted] = useState(habit.status === 'done');

  const handleComplete = (e) => {
    e.stopPropagation();
    if (!completed) {
      setCompleted(true);
      toast.success(`Completed: ${habit.name}`);
      onComplete();
    } else {
      setCompleted(false);
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
      className={`bg-card rounded-[20px] p-4 shadow-sm border ${completed ? 'border-success/30 bg-success/5' : 'border-border'} transition-all cursor-pointer group relative`}
    >
      <div className="flex items-center gap-4">
        {/* Checkbox */}
        <button 
          onClick={handleComplete}
          className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            completed 
              ? 'bg-success border-success text-white scale-110' 
              : 'border-muted text-transparent group-hover:border-success hover:bg-success/10'
          }`}
        >
          <motion.div
            initial={false}
            animate={{ scale: completed ? 1 : 0.5, opacity: completed ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
          </motion.div>
        </button>

        {/* Icon & Details */}
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 ${habit.colorClass}`}>
          <FontAwesomeIcon icon={habit.icon} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className={`text-base font-semibold truncate transition-colors ${completed ? 'text-muted line-through' : 'text-foreground'}`}>
              {habit.name}
            </h4>
            {habit.priority === 'high' && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-danger/10 text-danger uppercase tracking-wider">High</span>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="flex items-center gap-1 font-medium">{habit.time}</span>
            <span>•</span>
            <span>{habit.duration}</span>
            <span>•</span>
            <span className="text-orange-500 font-medium">🔥 {habit.streak} days</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          <button className="w-8 h-8 rounded-full hover:bg-background text-muted hover:text-primary transition-colors flex items-center justify-center" title="Start Focus">
            <FontAwesomeIcon icon={faPlay} className="w-3.5 h-3.5" />
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-background text-muted hover:text-warning transition-colors flex items-center justify-center" title="Skip">
            <FontAwesomeIcon icon={faForwardStep} className="w-3.5 h-3.5" />
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-background text-muted transition-colors flex items-center justify-center" title="More">
            <FontAwesomeIcon icon={faEllipsisVertical} className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const TimeBlock = ({ title, emoji, habits, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const completedCount = habits.filter(h => h.status === 'done').length;
  
  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 group mb-2"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h3>
          <span className="text-xs font-medium text-muted bg-background px-2 py-0.5 rounded-full ml-2">
            {completedCount}/{habits.length}
          </span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-muted text-sm">
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pt-2">
              {habits.map((habit, idx) => (
                <HabitCard key={habit.id} habit={habit} onComplete={() => console.log('completed')} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CenterContent() {
  const morningHabits = [
    { id: 1, name: 'Morning Workout', time: '07:00 AM', duration: '45 min', streak: 12, priority: 'high', status: 'pending', icon: faDumbbell, colorClass: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' },
    { id: 2, name: 'Read a Book', time: '08:15 AM', duration: '30 min', streak: 5, priority: 'normal', status: 'done', icon: faBookOpen, colorClass: 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400' }
  ];
  
  const afternoonHabits = [
    { id: 3, name: 'Drink Water', time: '12:00 PM', duration: '5 min', streak: 20, priority: 'normal', status: 'pending', icon: faGlassWater, colorClass: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400' }
  ];

  const eveningHabits = [
    { id: 4, name: 'Sleep Early', time: '10:00 PM', duration: '8 hrs', streak: 3, priority: 'high', status: 'pending', icon: faBed, colorClass: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400' }
  ];

  return (
    <div className="flex-1 max-w-3xl mx-auto w-full pb-20">
      
      {/* Header section in center content for Today's specific info */}
      <div className="flex justify-between items-end mb-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-[34px] font-bold text-foreground leading-tight tracking-tight">Today's Habits</h1>
          <p className="text-[15px] text-muted mt-1">Stay consistent and complete today's routine.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-right hidden sm:block">
          <div className="text-lg font-semibold text-foreground">Saturday</div>
          <div className="text-sm text-muted">July 4, 2026</div>
        </motion.div>
      </div>

      <TimeBlock title="Morning" emoji="🌅" habits={morningHabits} />
      <TimeBlock title="Afternoon" emoji="☀️" habits={afternoonHabits} />
      <TimeBlock title="Evening" emoji="🌇" habits={eveningHabits} defaultOpen={false} />
      <TimeBlock title="Night" emoji="🌙" habits={[]} defaultOpen={false} />

    </div>
  );
}
