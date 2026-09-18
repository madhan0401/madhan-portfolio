import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory
    ? SKILL_CATEGORIES.filter((cat) => cat.title === selectedCategory)
    : SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-code text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="bg-gradient-text">Competencies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Categorized technical toolkit acquired through academic coursework, internship projects, and hands-on application development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all ${
              selectedCategory === null
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            All Skills ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all ${
                selectedCategory === category.title
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.iconName] || Layers;
            return (
              <div
                key={category.title}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                      <p className="text-xs text-slate-400 font-mono-code">
                        {category.skills.length} core items
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group relative flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/90 transition-all cursor-default"
                      >
                        <span className="text-xs font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:text-cyan-400 border border-slate-700/50">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
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
