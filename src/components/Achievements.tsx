import React from 'react';
import { Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-purple-300 uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5 text-purple-400" />
            Empirical Accomplishments
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="gradient-neon-violet text-glow-purple">Achievements</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Statistical record of algorithmic problem solving, web application development, and software development internship.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_#a855f7]" />
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-7 rounded-3xl border border-purple-500/25 glass-panel-hover text-center space-y-4 flex flex-col justify-between card-tilt relative overflow-hidden group"
            >
              {/* Purple Glow Center Backdrop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-600/10 rounded-full blur-xl group-hover:bg-purple-600/25 transition-all" />

              <div className="space-y-3 relative z-10">
                <div className="text-4xl font-extrabold font-mono-code gradient-neon-violet tracking-tight text-glow-purple">
                  {item.metric}
                </div>
                
                <h3 className="text-sm font-bold text-white tracking-wide">
                  {item.label}
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-3 border-t border-purple-900/30 font-mono-code relative z-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
