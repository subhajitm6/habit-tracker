import React from 'react';
import GoalCard from './GoalCard';

export default function GoalGrid({ goals }) {
  if (!goals || goals.length === 0) {
    return (
      <div className="py-20 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-[24px] bg-card/50">
        <div className="w-24 h-24 mb-6 relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-primary text-white w-full h-full rounded-full flex items-center justify-center text-4xl shadow-lg">
            🎯
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">No Goals Yet</h3>
        <p className="text-muted text-center max-w-sm mb-6">
          Create your first goal and start achieving something amazing today.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
          Create Your First Goal
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {goals.map((goal, index) => (
        <GoalCard key={goal.id} goal={goal} index={index} />
      ))}
    </div>
  );
}
