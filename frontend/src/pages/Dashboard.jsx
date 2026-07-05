import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faBullseye, 
  faBookOpen, 
  faStopwatch, 
  faFire,
  faCheckCircle,
  faHourglassHalf,
  faStar,
  faShieldHalved,
  faCircleCheck,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

// Mock Data for Charts
const completionData = [
  { name: 'Mon', completed: 6 },
  { name: 'Tue', completed: 8 },
  { name: 'Wed', completed: 7 },
  { name: 'Thu', completed: 10 },
  { name: 'Fri', completed: 9 },
  { name: 'Sat', completed: 12 },
  { name: 'Sun', completed: 14 },
];

const categoryData = [
  { name: 'Health', value: 40, color: '#6366F1' },
  { name: 'Fitness', value: 25, color: '#8B5CF6' },
  { name: 'Productivity', value: 20, color: '#22C55E' },
  { name: 'Learning', value: 15, color: '#F59E0B' },
];

// Helper components for animation
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
  >
    {children}
  </motion.div>
);

export default function Dashboard() {
  return (
    <div className="space-y-6 pb-12">
      
      {/* Hero Section & Right Hero Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <FadeUp delay={0.1}>
          <div className="col-span-1 lg:col-span-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[24px] p-8 relative overflow-hidden shadow-sm border border-indigo-100 h-full flex flex-col justify-center">
            <div className="absolute right-0 top-0 opacity-20 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
              <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#6366F1" d="M45.7,-76.1C58.9,-69.3,69.1,-55.3,77.4,-40.7C85.7,-26.1,92.1,-10.9,90.4,3.5C88.7,17.9,78.9,31.4,69.5,44.2C60.1,57,51.1,69.1,39,76.5C26.9,83.9,11.7,86.6,-3.4,89.5C-18.5,92.4,-33.4,95.5,-45.5,89.4C-57.6,83.3,-66.8,68,-75.4,53.4C-84,38.8,-92,24.9,-93.6,10C-95.2,-4.9,-90.4,-20.8,-82.3,-34.1C-74.2,-47.4,-62.8,-58.1,-49.7,-64.9C-36.6,-71.7,-21.8,-74.6,-5.5,-73.2C10.8,-71.8,21.6,-66.1,32.5,-61.1C43.4,-56.1,54.4,-51.8,45.7,-76.1Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-[34px] font-bold text-foreground leading-tight mb-2">
                Good Morning, Subhajit 👋
              </h1>
              <p className="text-[15px] text-muted mb-8 max-w-md">
                Let's make today productive and meaningful. You have 4 pending habits for this morning.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                  <FontAwesomeIcon icon={faPlus} /> Add Habit
                </button>
                <div className="flex items-center gap-2">
                  <button className="w-12 h-12 bg-card rounded-full shadow-sm border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
                    <FontAwesomeIcon icon={faBullseye} />
                  </button>
                  <button className="w-12 h-12 bg-card rounded-full shadow-sm border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
                    <FontAwesomeIcon icon={faBookOpen} />
                  </button>
                  <button className="w-12 h-12 bg-card rounded-full shadow-sm border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
                    <FontAwesomeIcon icon={faStopwatch} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="bg-card rounded-[24px] p-8 shadow-sm border border-border h-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="w-16 h-16 rounded-full bg-orange-100 text-warning flex items-center justify-center text-3xl mb-4 shadow-inner relative z-10">
               <FontAwesomeIcon icon={faFire} />
             </div>
             <div className="text-[34px] font-bold text-foreground mb-1 relative z-10">12 Days</div>
             <div className="text-[15px] text-muted mb-6 relative z-10">Current Streak</div>
             <button className="text-sm font-medium text-primary hover:text-secondary transition-colors flex items-center gap-1 relative z-10">
               View Streaks <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
             </button>
          </div>
        </FadeUp>

      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* Card 1 */}
        <FadeUp delay={0.3}>
          <div className="bg-card rounded-[20px] p-5 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between h-full group">
            <div className="flex justify-between items-start mb-4">
              <div className="text-[15px] text-muted font-medium">Today's Progress</div>
              <div className="w-10 h-10 rounded-full border-[3px] border-primary/20 flex items-center justify-center relative">
                 {/* Fake Progress Ring */}
                 <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                   <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary" strokeDasharray="100" strokeDashoffset="28" />
                 </svg>
                 <span className="text-[10px] font-bold text-primary">72%</span>
              </div>
            </div>
            <div className="text-[22px] font-bold text-foreground">14/20</div>
            <div className="text-[13px] text-muted mt-1">Habits Completed</div>
          </div>
        </FadeUp>

        {/* Card 2 */}
        <FadeUp delay={0.4}>
          <div className="bg-card rounded-[20px] p-5 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="text-[15px] text-muted font-medium">Completed</div>
              <div className="w-10 h-10 rounded-full bg-green-50 text-success flex items-center justify-center text-lg">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
            </div>
            <div className="text-[22px] font-bold text-foreground">14</div>
            <div className="text-[13px] text-success font-medium mt-1">+2 from yesterday</div>
          </div>
        </FadeUp>

        {/* Card 3 */}
        <FadeUp delay={0.5}>
          <div className="bg-card rounded-[20px] p-5 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="text-[15px] text-muted font-medium">Pending</div>
              <div className="w-10 h-10 rounded-full bg-orange-50 text-warning flex items-center justify-center text-lg">
                <FontAwesomeIcon icon={faHourglassHalf} />
              </div>
            </div>
            <div className="text-[22px] font-bold text-foreground">4</div>
            <div className="text-[13px] text-muted mt-1">Tasks remaining</div>
          </div>
        </FadeUp>

        {/* Card 4 */}
        <FadeUp delay={0.6}>
          <div className="bg-card rounded-[20px] p-5 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="text-[15px] text-muted font-medium">XP Points</div>
              <div className="w-10 h-10 rounded-full bg-purple-50 text-primary flex items-center justify-center text-lg">
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="text-[22px] font-bold text-foreground">1,250</div>
            <div className="text-[13px] text-primary font-medium mt-1">+150 XP today</div>
          </div>
        </FadeUp>

        {/* Card 5 */}
        <FadeUp delay={0.7}>
          <div className="bg-card rounded-[20px] p-5 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="text-[15px] text-muted font-medium">Current Level</div>
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-lg">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
            </div>
            <div className="text-[22px] font-bold text-foreground">Lvl 12</div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="bg-blue-500 h-1.5 rounded-full"
              ></motion.div>
            </div>
          </div>
        </FadeUp>

      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <FadeUp delay={0.8}>
          <div className="col-span-1 lg:col-span-2 bg-card rounded-[24px] p-6 shadow-sm border border-border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[18px] font-semibold text-foreground">Habit Completion Overview</h3>
              <select className="bg-background border border-border text-sm rounded-lg px-3 py-1.5 text-muted focus:ring-primary focus:border-primary outline-none">
                <option>This Week</option>
                <option>Last Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={completionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-muted)', fontSize: 13 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-muted)', fontSize: 13 }} />
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="completed" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorCompleted)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.9}>
          <div className="bg-card rounded-[24px] p-6 shadow-sm border border-border h-full flex flex-col">
            <h3 className="text-[18px] font-semibold text-foreground mb-4">Categories</h3>
            <div className="flex-1 min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '13px' }}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FadeUp>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Activity Heatmap placeholder */}
        <FadeUp delay={1.0}>
          <div className="bg-card rounded-[24px] p-6 shadow-sm border border-border h-full">
            <h3 className="text-[18px] font-semibold text-foreground mb-4">Activity Heatmap</h3>
            <div className="flex flex-wrap gap-1.5 mt-6">
               {/* Just a mockup pattern of squares */}
               {Array.from({ length: 84 }).map((_, i) => (
                 <div 
                   key={i} 
                   className={`w-3.5 h-3.5 rounded-sm ${
                     Math.random() > 0.7 ? 'bg-success/80' : 
                     Math.random() > 0.4 ? 'bg-success/40' : 
                     'bg-gray-100'
                   }`}
                   title={`${Math.floor(Math.random() * 5)} habits completed`}
                 ></div>
               ))}
            </div>
            <div className="flex justify-between text-[11px] text-muted mt-3 uppercase tracking-wider">
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
          </div>
        </FadeUp>

        {/* Today's Habits */}
        <FadeUp delay={1.1}>
          <div className="bg-card rounded-[24px] p-6 shadow-sm border border-border h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[18px] font-semibold text-foreground">Today's Habits</h3>
              <button className="text-sm text-primary font-medium hover:underline">View All</button>
            </div>
            <div className="flex-1 space-y-3">
              {[
                { name: 'Morning Run', time: '07:00 AM', status: 'done', color: 'bg-blue-100 text-blue-600' },
                { name: 'Read 20 pages', time: '08:30 AM', status: 'done', color: 'bg-purple-100 text-purple-600' },
                { name: 'Drink Water', time: '12:00 PM', status: 'pending', color: 'bg-cyan-100 text-cyan-600' },
                { name: 'Meditation', time: '09:00 PM', status: 'pending', color: 'bg-orange-100 text-orange-600' }
              ].map((habit, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-[16px] hover:bg-background transition-colors border border-transparent hover:border-border cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${habit.color}`}>
                      <span className="font-bold text-sm">{habit.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className={`text-[15px] font-medium ${habit.status === 'done' ? 'line-through text-muted' : 'text-foreground'}`}>{habit.name}</h4>
                      <p className="text-[13px] text-muted">{habit.time}</p>
                    </div>
                  </div>
                  <button className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    habit.status === 'done' ? 'bg-primary border-primary text-white' : 'border-border text-transparent group-hover:border-primary/50'
                  }`}>
                    {habit.status === 'done' && <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* AI Insight Card */}
        <FadeUp delay={1.2}>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[24px] p-6 shadow-sm border border-indigo-400 h-full text-white flex flex-col relative overflow-hidden">
             <div className="absolute top-4 right-4 opacity-20 transform rotate-12 scale-150">
               <FontAwesomeIcon icon={faStar} className="text-6xl" />
             </div>
             
             <div className="relative z-10 flex flex-col h-full">
               <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                   <FontAwesomeIcon icon={faStar} className="text-yellow-300 text-sm" />
                 </div>
                 <span className="font-semibold text-sm tracking-wide">AI INSIGHT</span>
               </div>
               
               <h3 className="text-[22px] font-bold leading-tight mb-2">
                 You're most productive between
               </h3>
               <div className="text-[34px] font-extrabold text-yellow-300 mb-6">
                 9 AM - 11 AM
               </div>
               
               <p className="text-indigo-100 text-[15px] mb-8 flex-1">
                 Consider scheduling your most challenging habits during this peak energy window.
               </p>
               
               <button className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-xl shadow-md hover:bg-indigo-50 transition-colors transform hover:-translate-y-0.5">
                 View Insights
               </button>
             </div>
          </div>
        </FadeUp>

      </div>
    </div>
  );
}
