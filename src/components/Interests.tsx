import React from 'react';
import { Globe, BarChart3, Sparkles, CheckCircle2 } from 'lucide-react';
import { AREAS_OF_INTEREST } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  BarChart3
};

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-24 relative z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono-code text-indigo-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Specialization Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Areas of <span className="bg-gradient-text">Interest</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Key domains where I focus my software engineering skills, building production applications and analytical tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {AREAS_OF_INTEREST.map((interest, index) => {
            const IconComp = iconMap[interest.iconName] || Globe;
            const isFirst = index === 0;
            return (
              <div
                key={interest.title}
                className={`glass-panel p-8 rounded-2xl border transition-all duration-300 ${
                  isFirst
                    ? 'border-cyan-500/40 bg-slate-900/80 shadow-xl shadow-cyan-950/30 hover:border-cyan-400'
                    : 'border-indigo-500/40 bg-slate-900/80 shadow-xl shadow-indigo-950/30 hover:border-indigo-400'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3.5 rounded-2xl ${isFirst ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'}`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {interest.title}
                      </h3>
                      <span className="text-xs font-mono-code text-slate-400">Core Interest #{index + 1}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {interest.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block">
                      Focus Areas & Capabilities:
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {interest.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300"
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 ${isFirst ? 'text-cyan-400' : 'text-indigo-400'}`} />
                          <span className="font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
