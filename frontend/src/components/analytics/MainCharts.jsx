import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

// --- MOCK DATA ---
const weeklyData = [
  { name: 'Mon', completed: 4, pending: 1 },
  { name: 'Tue', completed: 5, pending: 0 },
  { name: 'Wed', completed: 3, pending: 2 },
  { name: 'Thu', completed: 6, pending: 0 },
  { name: 'Fri', completed: 4, pending: 1 },
  { name: 'Sat', completed: 7, pending: 0 },
  { name: 'Sun', completed: 5, pending: 0 },
];

const monthlyData = [
  { name: 'Week 1', rate: 75 },
  { name: 'Week 2', rate: 82 },
  { name: 'Week 3', rate: 78 },
  { name: 'Week 4', rate: 88 },
];

const categoryData = [
  { name: 'Health', value: 35, color: '#6366F1' },
  { name: 'Fitness', value: 25, color: '#8B5CF6' },
  { name: 'Reading', value: 20, color: '#22C55E' },
  { name: 'Coding', value: 20, color: '#F59E0B' },
];

const radarData = [
  { subject: 'Morning', A: 90, fullMark: 100 },
  { subject: 'Consistency', A: 85, fullMark: 100 },
  { subject: 'Focus', A: 70, fullMark: 100 },
  { subject: 'Evening', A: 60, fullMark: 100 },
  { subject: 'Health', A: 95, fullMark: 100 },
];

const heatmapCells = Array.from({ length: 365 }).map((_, i) => {
  const r = Math.random();
  if (r > 0.9) return 'bg-success';
  if (r > 0.7) return 'bg-success/80';
  if (r > 0.4) return 'bg-success/50';
  if (r > 0.2) return 'bg-success/30';
  return 'bg-background dark:bg-slate-800';
});

// --- CHART CARD WRAPPER ---
const ChartCard = ({ title, children, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col h-[350px]"
  >
    <h3 className="text-[16px] font-bold text-foreground mb-4">{title}</h3>
    <div className="flex-1 w-full relative">
      {children}
    </div>
  </motion.div>
);

export default function MainCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {/* 1. Daily Habit Completion (Line) */}
      <ChartCard title="Daily Completion Trend" delay={0.1}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted)' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted)' }} />
            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Line type="monotone" dataKey="completed" stroke="var(--color-primary)" strokeWidth={3} dot={{ strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 2. Weekly Progress (Bar) */}
      <ChartCard title="Weekly Volume" delay={0.2}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted)' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted)' }} />
            <Tooltip cursor={{ fill: 'var(--color-background)', opacity: 0.5 }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Bar dataKey="completed" fill="var(--color-primary)" radius={[4, 4, 0, 0]} maxBarSize={40} />
            <Bar dataKey="pending" fill="var(--color-warning)" radius={[4, 4, 0, 0]} maxBarSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 3. Monthly Performance (Area) */}
      <ChartCard title="Monthly Performance" delay={0.3}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-success)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-success)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted)' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-muted)' }} />
            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Area type="monotone" dataKey="rate" stroke="var(--color-success)" strokeWidth={3} fillOpacity={1} fill="url(#colorRate)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 4. Habit Categories (Doughnut) */}
      <ChartCard title="Category Distribution" delay={0.4}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%" cy="50%"
              innerRadius={70} outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
          </PieChart>
        </ResponsiveContainer>
        {/* Custom Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
           {categoryData.map(c => (
             <div key={c.name} className="flex items-center gap-1.5 text-xs text-muted font-medium">
               <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }}></div>
               {c.name}
             </div>
           ))}
        </div>
      </ChartCard>

      {/* 5. Habit Consistency (Radar) */}
      <ChartCard title="Strengths Profile" delay={0.5}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
            <PolarGrid stroke="var(--color-border)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--color-muted)', fontSize: 11, fontWeight: 600 }} />
            <Radar name="User" dataKey="A" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.3} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 6. Completion Heatmap (GitHub Style) */}
      <ChartCard title="Annual Heatmap" delay={0.6}>
        <div className="w-full h-full overflow-x-auto flex flex-col justify-center">
          <div className="flex gap-1 mx-auto">
            {Array.from({ length: 52 }).map((_, col) => (
              <div key={col} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, row) => {
                  const idx = col * 7 + row;
                  if (idx >= 365) return null;
                  return (
                    <div 
                      key={idx} 
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] ${heatmapCells[idx]} hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer`}
                      title={`Activity day ${idx + 1}`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4 text-[11px] text-muted font-medium gap-2">
            <span>Less</span>
            <div className="w-2.5 h-2.5 bg-background dark:bg-slate-800 rounded-sm border border-border"></div>
            <div className="w-2.5 h-2.5 bg-success/30 rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-success/60 rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-success rounded-sm"></div>
            <span>More</span>
          </div>
        </div>
      </ChartCard>

    </div>
  );
}
