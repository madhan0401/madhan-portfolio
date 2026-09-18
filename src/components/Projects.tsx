import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Star,
  Network
} from 'lucide-react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { ArchitectureModal } from './ArchitectureModal';
import { GitHubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [architectureOpen, setArchitectureOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'fullstack' | 'api' | 'web'>('all');

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p: Project) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-code text-cyan-400 uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            Featured Software Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Key Engineering <span className="bg-gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Real-world full-stack web applications, API specifications, client SDK tools, and backend integrations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all ${
              selectedFilter === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            All Projects ({PROJECTS.length})
          </button>
          <button
            onClick={() => setSelectedFilter('fullstack')}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all ${
              selectedFilter === 'fullstack'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Full-Stack Apps
          </button>
          <button
            onClick={() => setSelectedFilter('api')}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all ${
              selectedFilter === 'api'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            API & Infrastructure
          </button>
        </div>

        {/* Projects Showcase Stack */}
        <div className="space-y-10">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className={`glass-panel rounded-2xl border transition-all duration-300 ${
                project.featured
                  ? 'border-cyan-500/50 shadow-xl shadow-cyan-950/40 bg-slate-900/80'
                  : 'border-slate-800/80 glass-panel-hover'
              }`}
            >
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Project Top Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-code font-semibold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          FEATURED PROJECT
                        </span>
                      )}
                      <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider">
                        {project.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Action Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    {project.architectureAvailable && (
                      <button
                        onClick={() => setArchitectureOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/40 text-purple-300 text-xs font-mono-code font-bold hover:bg-purple-500/20 hover:border-purple-400 transition-all shadow-md"
                      >
                        <Network className="w-4 h-4 text-purple-400" />
                        View Architecture Diagram
                      </button>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono-code hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                      >
                        <GitHubIcon className="w-4 h-4 text-slate-400" />
                        Code Repository
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs font-mono-code hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div>
                  <h4 className="text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-3">
                    Key Features & Technical Implementations:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Stack */}
                <div className="pt-2">
                  <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block mb-2">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono-code"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Architecture Diagram Modal */}
      <ArchitectureModal
        isOpen={architectureOpen}
        onClose={() => setArchitectureOpen(false)}
      />
    </section>
  );
};
