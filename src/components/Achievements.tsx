import React from 'react';
import { Trophy, Code, Terminal, CheckCircle2, Layers, Briefcase } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Terminal,
  CheckCircle2,
  Layers,
  Briefcase
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-code text-amber-400 uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            Key Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering & <span className="bg-gradient-text">Achievements</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Empirical summary of problem-solving metrics, web applications built, and industry software development internship.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <div
                key={index}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 glass-panel-hover text-center space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <div className="text-3xl font-extrabold text-white font-mono-code tracking-tight bg-gradient-text">
                    {item.metric}
                  </div>
                  
                  <h3 className="text-sm font-bold text-slate-200">
                    {item.label}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
