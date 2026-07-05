import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChartArea, faBookOpen, faListUl } from '@fortawesome/free-solid-svg-icons';

export default function MoodCenterColumn() {
  return (
    <div className="space-y-6">
      
      {/* Mood Timeline */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FontAwesomeIcon icon={faListUl} />
          </div>
          <h2 className="text-xl font-bold text-foreground">Today's Timeline</h2>
        </div>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-card bg-white shadow shrink-0 z-10 text-xl">
              😁
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-1">
                <div className="font-bold text-foreground">Amazing</div>
                <div className="text-xs text-muted">8:00 PM</div>
              </div>
              <p className="text-sm text-muted">Just finished a great workout and feel energized!</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-card bg-white shadow shrink-0 z-10 text-xl">
              😌
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-1">
                <div className="font-bold text-foreground">Relaxed</div>
                <div className="text-xs text-muted">2:00 PM</div>
              </div>
              <p className="text-sm text-muted">Taking a nice coffee break, reading a book.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-card bg-white shadow shrink-0 z-10 text-xl">
              😰
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-1">
                <div className="font-bold text-foreground">Stressed</div>
                <div className="text-xs text-muted">11:00 AM</div>
              </div>
              <p className="text-sm text-muted">Lots of meetings today, feeling a bit overwhelmed.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-card bg-white shadow shrink-0 z-10 text-xl">
              😊
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-1">
                <div className="font-bold text-foreground">Happy</div>
                <div className="text-xs text-muted">8:00 AM</div>
              </div>
              <p className="text-sm text-muted">Woke up feeling fresh and ready for the day.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mood Calendar Placeholder */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <h2 className="text-xl font-bold text-foreground">Mood Calendar</h2>
          </div>
          <select className="bg-background border border-border text-foreground text-sm rounded-lg px-3 py-1.5 outline-none">
            <option>November 2023</option>
            <option>October 2023</option>
          </select>
        </div>
        
        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-muted font-medium py-1">{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {/* Creating some mock calendar days */}
          {Array.from({ length: 30 }).map((_, i) => {
            const isToday = i === 14;
            const moods = ['😊', '🙂', '😐', '😌', '😁', '😔', '😡'];
            // Randomly select a mood for past days, empty for future
            const mood = i <= 14 ? moods[i % moods.length] : null;
            
            return (
              <div 
                key={i} 
                className={`aspect-square rounded-xl flex flex-col items-center justify-center border transition-all cursor-pointer hover:border-primary ${
                  isToday ? 'border-primary ring-2 ring-primary/20' : 'border-transparent bg-gray-50 hover:bg-gray-100 dark:bg-gray-800/30'
                }`}
              >
                <span className="text-xs text-muted mb-1">{i + 1}</span>
                {mood && <span className="text-xl">{mood}</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Analytics Placeholder */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
            <FontAwesomeIcon icon={faChartArea} />
          </div>
          <h2 className="text-xl font-bold text-foreground">Mood Analytics</h2>
        </div>
        <div className="h-48 border-2 border-dashed border-border rounded-xl flex items-center justify-center text-muted">
          [Interactive Line Chart Placeholder: Mood Trend]
        </div>
      </div>

      {/* Journal Placeholder */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <FontAwesomeIcon icon={faBookOpen} />
          </div>
          <h2 className="text-xl font-bold text-foreground">Mood Journal</h2>
        </div>
        <div className="space-y-4">
           <textarea 
            placeholder="Write down your thoughts for the day..." 
            className="w-full h-32 bg-background border border-border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          ></textarea>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-muted rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200">#Work</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-muted rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200">#Family</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-muted rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200">+ Tag</span>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-colors text-sm">
              Save Entry
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
