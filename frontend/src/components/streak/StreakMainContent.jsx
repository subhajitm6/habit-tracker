import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faArrowUpRightDots, faMedal } from '@fortawesome/free-solid-svg-icons';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// --- MOCK DATA ---
const trendData = [
  { name: 'Mon', streak: 21 },
  { name: 'Tue', streak: 22 },
  { name: 'Wed', streak: 23 },
  { name: 'Thu', streak: 24 },
  { name: 'Fri', streak: 25 },
  { name: 'Sat', streak: 26 },
  { name: 'Sun', streak: 27 },
];

const consistencyData = [
  { name: 'Week 1', rate: 75 },
  { name: 'Week 2', rate: 82 },
  { name: 'Week 3', rate: 88 },
  { name: 'Week 4', rate: 92 },
];

const volumeData = [
  { name: 'Mon', completed: 4 },
  { name: 'Tue', completed: 5 },
  { name: 'Wed', completed: 5 },
  { name: 'Thu', completed: 6 },
  { name: 'Fri', completed: 4 },
  { name: 'Sat', completed: 7 },
  { name: 'Sun', completed: 6 },
];

const radarData = [
  { subject: 'Morning', A: 95, fullMark: 100 },
  { subject: 'Health', A: 85, fullMark: 100 },
  { subject: 'Focus', A: 70, fullMark: 100 },
  { subject: 'Evening', A: 60, fullMark: 100 },
  { subject: 'Learning', A: 90, fullMark: 100 },
];

const heatmapCells = Array.from({ length: 365 }).map((_, i) => {
  const r = Math.random();
  if (r > 0.9) return 'bg-orange-500'; // perfect
  if (r > 0.7) return 'bg-orange-400'; // high
  if (r > 0.4) return 'bg-orange-300'; // medium
  if (r > 0.2) return 'bg-orange-200'; // light
  return 'bg-background dark:bg-slate-800';
});

const timelineEvents = [
  { day: 1, title: 'Started Habit Journey', desc: 'Committed to 3 daily habits.' },
  { day: 7, title: 'First Weekly Streak', desc: 'Unlocked 7-Day Warrior Badge.' },
  { day: 14, title: 'Consistency Master', desc: 'Maintained 100% completion for two weeks.' },
  { day: 21, title: 'Habit Formation', desc: 'Routines are feeling automatic.' },
  { day: 27, title: 'Today', desc: 'Current active streak!' },
];

const ChartCard = ({ title, children, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}
    className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col h-[300px]"
  >
    <h3 className="text-[15px] font-bold text-foreground mb-4">{title}</h3>
    <div className="flex-1 w-full relative">
      {children}
    </div>
  </motion.div>
);

export default function StreakMainContent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(27), 100);
    return () => clearTimeout(timer);
  }, []);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 30) * circumference;

  return (
    <div className="space-y-6">
      
      {/* Top Section: Progress Ring & Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Current Streak Ring */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-1 bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-[15px] font-bold text-foreground self-start mb-6 w-full flex items-center justify-between">
            <span>Next Milestone</span>
            <FontAwesomeIcon icon={faMedal} className="text-yellow-500" />
          </h3>
          
          <div className="relative w-40 h-40 flex items-center justify-center mb-4">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background Ring */}
              <circle cx="80" cy="80" r={radius} stroke="currentColor" strokeWidth="12" fill="none" className="text-background" />
              {/* Progress Ring */}
              <circle 
                cx="80" cy="80" r={radius} 
                stroke="url(#orangeGradient)" 
                strokeWidth="12" fill="none" strokeLinecap="round"
                style={{ strokeDasharray: circumference, strokeDashoffset, transition: 'stroke-dashoffset 1.5s ease-in-out' }} 
              />
              <defs>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-foreground">27</span>
              <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Days</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm font-bold text-foreground">3 Days Remaining</p>
            <p className="text-[11px] text-muted uppercase tracking-wider mt-1">Until 30-Day Badge</p>
          </div>
        </motion.div>

        {/* Contribution Heatmap */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="lg:col-span-3 bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col justify-between overflow-x-auto"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[15px] font-bold text-foreground flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowUpRightDots} className="text-primary" /> Contribution History
            </h3>
            <div className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
              342 Habits Completed
            </div>
          </div>

          <div className="flex gap-[3px] min-w-[700px] py-2">
            {Array.from({ length: 52 }).map((_, col) => (
              <div key={col} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, row) => {
                  const idx = col * 7 + row;
                  if (idx >= 365) return null;
                  return (
                    <div 
                      key={idx} 
                      className={`w-3 h-3 rounded-[2px] ${heatmapCells[idx]} hover:ring-2 hover:ring-orange-500/50 transition-all cursor-pointer`}
                      title={`Day ${idx + 1}`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-2 text-[11px] text-muted font-bold uppercase tracking-wider">
            <div className="flex gap-12">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-2.5 h-2.5 bg-background dark:bg-slate-800 rounded-sm border border-border"></div>
              <div className="w-2.5 h-2.5 bg-orange-200 rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-orange-300 rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-orange-400 rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-sm"></div>
              <span>More</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Middle Section: Timeline & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Streak Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="lg:col-span-1 bg-card rounded-2xl p-6 border border-border shadow-sm h-full"
        >
          <h3 className="text-[15px] font-bold text-foreground mb-6">Streak Journey</h3>
          <div className="relative border-l-2 border-orange-500/30 ml-3 space-y-6">
            {timelineEvents.map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + idx * 0.1 }}
                className="relative pl-6"
              >
                <div className={`absolute w-3 h-3 rounded-full -left-[7px] top-1.5 ring-4 ring-card ${idx === timelineEvents.length - 1 ? 'bg-orange-500 animate-pulse' : 'bg-primary'}`}></div>
                <div className="text-[11px] font-bold text-orange-500 uppercase tracking-wider mb-0.5">Day {event.day}</div>
                <div className="text-sm font-bold text-foreground">{event.title}</div>
                <div className="text-[13px] text-muted leading-snug mt-1">{event.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Charts Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <ChartCard title="Current Streak Trend" delay={0.3}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--color-muted)' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--color-muted)' }} domain={['dataMin - 2', 'dataMax + 2']} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="streak" stroke="#F97316" strokeWidth={3} dot={{ strokeWidth: 2, r: 4, stroke: '#F97316' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Monthly Consistency" delay={0.4}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={consistencyData}>
                <defs>
                  <linearGradient id="colorConsistency" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--color-muted)' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--color-muted)' }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="rate" stroke="#22C55E" strokeWidth={3} fillOpacity={1} fill="url(#colorConsistency)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Weekly Volume" delay={0.5}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--color-muted)' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--color-muted)' }} />
                <Tooltip cursor={{ fill: 'var(--color-background)' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="completed" fill="#6366F1" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Streak Strengths" delay={0.6}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--color-muted)', fontSize: 11, fontWeight: 600 }} />
                <Radar name="User" dataKey="A" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

        </div>
      </div>

    </div>
  );
}
