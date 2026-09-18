import React from 'react';
import { Globe, BarChart3, Sparkles, CheckCircle2 } from 'lucide-react';
import { AREAS_OF_INTEREST } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  BarChart3
};

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-28 relative z-10 bg-[#06020e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-purple-300 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Specialization Domains
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Areas of <span className="gradient-neon-violet text-glow-purple">Interest</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Primary software engineering focus areas where I apply full-stack development and data analysis capabilities.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_#a855f7]" />
        </div>

        {/* 2 Large Glowing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {AREAS_OF_INTEREST.map((interest, index) => {
            const IconComp = iconMap[interest.iconName] || Globe;
            return (
              <div
                key={interest.title}
                className="glass-panel p-8 rounded-3xl border border-purple-500/30 glass-panel-hover card-tilt flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 text-purple-300">
                      <IconComp className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        {interest.title}
                      </h3>
                      <span className="text-xs font-mono-code text-purple-400">Primary Specialization 0{index + 1}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {interest.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-purple-900/40">
                    <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block">
                      Core Domain Capabilities:
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {interest.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/15 text-xs text-slate-200"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span className="font-medium">{cap}</span>
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
