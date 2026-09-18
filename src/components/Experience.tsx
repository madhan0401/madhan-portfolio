import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Globe } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono-code text-emerald-400 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            Industry Internship
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work <span className="bg-emerald-gradient-text">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Professional software development internship contributing to production API specifications, client SDKs, and infrastructure providers.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-6">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 shadow-md shadow-emerald-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Main Internship Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 glass-panel-hover space-y-6">
                
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code">
                      Internship Role
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-medium text-base">
                      <Globe className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono-code text-slate-400">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.locationType}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-base leading-relaxed italic border-l-2 border-cyan-500/40 pl-4 py-1">
                  "{exp.description}"
                </p>

                {/* Responsibilities Grid */}
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono-code mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    Key Deliverables & Responsibilities:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-2">
                  <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block mb-2">
                    Technologies & Workflow:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/60 text-cyan-300 text-xs font-mono-code hover:border-cyan-400 transition-colors"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
