import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Globe } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-purple-300 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            Industry Internship
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="gradient-neon-violet text-glow-purple">Experience</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Professional software development internship focusing on API specification standardization, client SDK automation, and Terraform IaC providers.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_#a855f7]" />
        </div>

        {/* Timeline Container with Vertical Glowing Purple Beam */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Purple Beam Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-900 rounded-full shadow-[0_0_15px_#a855f7]" />

          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-12 sm:pl-20 space-y-6">
              
              {/* Timeline Glowing Node Dot */}
              <div className="absolute left-[9px] sm:left-[25px] top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-[#070314] border-2 border-purple-400 shadow-[0_0_15px_#a855f7] flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              </div>

              {/* Large Glowing Experience Card */}
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 glass-panel-hover space-y-6 card-tilt">
                
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-900/40 pb-6">
                  <div className="space-y-1.5">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono-code font-semibold">
                      SOFTWARE DEVELOPMENT INTERNSHIP
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-base">
                      <Globe className="w-4 h-4 text-purple-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono-code text-slate-400">
                    <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/20 text-purple-200">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/20 text-emerald-400">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location} ({exp.locationType})</span>
                    </div>
                  </div>
                </div>

                {/* Description Narrative */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed italic border-l-2 border-purple-500/40 pl-4 py-1">
                  "{exp.description}"
                </p>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono-code mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-400" />
                    Key Accomplishments &amp; Responsibilities:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/15">
                        <CheckCircle2 className="w-4.5 h-4.5 text-purple-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Technology Badges */}
                <div className="pt-3 border-t border-purple-900/30">
                  <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block mb-3">
                    Technologies &amp; Workflow Tags:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-code font-bold hover:border-purple-400 hover:shadow-[0_0_10px_#a855f7] transition-all"
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
