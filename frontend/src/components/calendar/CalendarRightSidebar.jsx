import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarDay,
  faFire,
  faStar,
  faCheckCircle,
  faXmarkCircle,
  faFaceSmile,
  faBookOpen,
  faPlus,
  faDumbbell,
  faDroplet,
  faBed
} from '@fortawesome/free-solid-svg-icons';

export default function CalendarRightSidebar() {
  const timelineEvents = [
    { time: '06:00 AM', name: 'Morning Run', status: 'completed', icon: faDumbbell, color: 'text-blue-500', bg: 'bg-blue-100' },
    { time: '08:00 AM', name: 'Read Book', status: 'completed', icon: faBookOpen, color: 'text-purple-500', bg: 'bg-purple-100' },
    { time: '12:00 PM', name: 'Drink Water', status: 'pending', icon: faDroplet, color: 'text-cyan-500', bg: 'bg-cyan-100' },
    { time: '09:00 PM', name: 'Meditation', status: 'missed', icon: faBed, color: 'text-orange-500', bg: 'bg-orange-100' },
  ];

  return (
    <div className="space-y-6 flex flex-col h-full pb-12">
      
      {/* Selected Date Summary */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
        className="bg-card rounded-2xl p-6 shadow-sm border border-border"
      >
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl shadow-inner">
            <FontAwesomeIcon icon={faCalendarDay} />
          </div>
          <div>
            <div className="text-xl font-bold text-foreground">July 4, 2026</div>
            <div className="text-sm text-muted">Saturday</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <div className="text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Completion</div>
            <div className="text-2xl font-bold text-foreground">75%</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Habits</div>
            <div className="text-sm font-medium text-foreground">
              <span className="text-success mr-2"><FontAwesomeIcon icon={faCheckCircle} className="mr-1"/> 3</span>
              <span className="text-danger"><FontAwesomeIcon icon={faXmarkCircle} className="mr-1"/> 1</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Mood</div>
            <div className="text-xl">😃</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Journal</div>
            <div className="text-primary text-sm font-medium flex items-center gap-1 mt-1 cursor-pointer hover:underline">
              <FontAwesomeIcon icon={faBookOpen} /> Read Entry
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-background p-3 rounded-xl border border-border">
          <div className="flex items-center gap-2">
             <FontAwesomeIcon icon={faFire} className="text-orange-500" />
             <span className="text-sm font-semibold text-foreground">Streak</span>
          </div>
          <span className="text-sm font-bold text-success">+1 Day (12 Total)</span>
        </div>
      </motion.div>

      {/* Animated Timeline */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl p-6 shadow-sm border border-border flex-1"
      >
        <h3 className="text-[15px] font-bold text-foreground mb-6 uppercase tracking-wide">Daily Timeline</h3>
        
        <div className="relative border-l-2 border-border/50 ml-4 space-y-8">
          {timelineEvents.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + idx * 0.1 }}
              className="relative pl-6 group"
            >
              {/* Dot on the timeline */}
              <div className={`absolute w-4 h-4 rounded-full -left-[9px] top-1 ring-4 ring-card flex items-center justify-center ${
                event.status === 'completed' ? 'bg-success' : 
                event.status === 'missed' ? 'bg-danger' : 
                'bg-warning'
              }`}>
              </div>

              {/* Event Content */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-bold text-muted mb-1">{event.time}</div>
                  <div className={`text-sm font-semibold ${event.status === 'completed' ? 'line-through text-muted' : 'text-foreground'}`}>
                    {event.name}
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${event.bg} ${event.color} shadow-sm group-hover:scale-110 transition-transform`}>
                  <FontAwesomeIcon icon={event.icon} className="text-xs" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-3"
      >
        <button className="bg-primary hover:bg-primary/90 text-white rounded-xl py-3 px-4 text-sm font-semibold shadow-md transition-transform hover:-translate-y-0.5 flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Habit</span>
        </button>
        <button className="bg-card hover:bg-background border border-border text-foreground rounded-xl py-3 px-4 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5 flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faFaceSmile} className="text-blue-500" />
          <span>Log Mood</span>
        </button>
      </motion.div>

    </div>
  );
}
