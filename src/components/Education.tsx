import React from 'react';
import { GraduationCap, MapPin, Award, BookOpen } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-code text-cyan-400 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education <span className="bg-gradient-text">Timeline</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Formal academic background in Information Technology and Computer Engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-slate-800">
            {EDUCATION_LIST.map((edu, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-all">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Card Content Box */}
                <div className="ml-12 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)]">
                  <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 glass-panel-hover space-y-4">
                    
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code font-semibold">
                        {edu.duration}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {edu.institution}
                      </h3>
                      <p className="text-base font-semibold text-cyan-300">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs font-mono-code">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                        <Award className="w-3.5 h-3.5" />
                        <span>{edu.grade}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
