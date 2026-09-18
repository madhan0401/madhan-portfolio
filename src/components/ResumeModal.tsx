import React from 'react';
import { X, Download, FileText, Printer, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeText = `
================================================================================
                                MADHAN M
            Software Engineer | Full-Stack Developer
================================================================================
Email: ${PERSONAL_INFO.email} | Alt: ${PERSONAL_INFO.altEmail}
Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

--------------------------------------------------------------------------------
SUMMARY
--------------------------------------------------------------------------------
${PERSONAL_INFO.bioShort}

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
1. ${EDUCATION_LIST[0].institution}
   Degree: ${EDUCATION_LIST[0].degree}
   Duration: ${EDUCATION_LIST[0].duration}
   Grade: ${EDUCATION_LIST[0].grade}
   Location: ${EDUCATION_LIST[0].location}

2. ${EDUCATION_LIST[1].institution}
   Degree: ${EDUCATION_LIST[1].degree}
   Duration: ${EDUCATION_LIST[1].duration}
   Grade: ${EDUCATION_LIST[1].grade}
   Location: ${EDUCATION_LIST[1].location}

--------------------------------------------------------------------------------
EXPERIENCE
--------------------------------------------------------------------------------
Position: ${EXPERIENCES[0].position}
Company: ${EXPERIENCES[0].company} (${EXPERIENCES[0].locationType})
Duration: ${EXPERIENCES[0].duration}
Description: ${EXPERIENCES[0].description}

Key Responsibilities:
${EXPERIENCES[0].responsibilities.map(r => `  * ${r}`).join('\n')}

Technologies: ${EXPERIENCES[0].technologies.join(', ')}

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
${SKILL_CATEGORIES.map(cat => `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

--------------------------------------------------------------------------------
KEY PROJECTS
--------------------------------------------------------------------------------
1. CampusCare Hub (Campus Grievance Management Portal)
   - Technologies: React, JavaScript, HTML, CSS, Supabase
   - Role-based complaint reporting, QR-based tracking, Supabase auth.

2. API Standardization & SDK Development
   - Technologies: OpenAPI, Go, Python, JavaScript, Terraform
   - Hydrozen.io & Nitrozen.io REST API standardization & SDK generation.

3. Recipe Recommendation Website
   - Technologies: HTML, CSS, JavaScript, Node.js, Express.js, Spoonacular API
   - Culinary discovery engine with full-stack Spoonacular API backend.

--------------------------------------------------------------------------------
ACHIEVEMENTS & PROBLEM SOLVING
--------------------------------------------------------------------------------
- 250+ Coding Problems Solved (200+ LeetCode, 50+ GeeksforGeeks)
- 3+ Full-Stack Web Applications
- 4-Month Software Development Internship
================================================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Madhan_M_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel w-full max-w-4xl rounded-2xl border border-slate-700 shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Madhan M — Resume Preview</h3>
              <p className="text-xs text-slate-400 font-mono-code">Official Developer Resume Specification</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs font-mono-code flex items-center gap-1.5"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs font-mono-code hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Paper Resume Layout */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900/90 text-slate-200 space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
              <p className="text-base font-semibold text-cyan-400 font-mono-code mt-1">{PERSONAL_INFO.title}</p>
              <p className="text-xs text-slate-400 mt-1">{PERSONAL_INFO.institution}</p>
            </div>
            <div className="text-xs font-mono-code text-slate-300 space-y-1">
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline">{PERSONAL_INFO.email}</a></div>
              <div>Phone: <span className="text-slate-200">{PERSONAL_INFO.phone}</span></div>
              <div>Location: <span className="text-slate-200">{PERSONAL_INFO.location}</span></div>
              <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Profile</a></div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono-code text-cyan-400 uppercase tracking-widest font-bold">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bioShort}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h2>
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-white">{exp.position} — <span className="text-cyan-300">{exp.company}</span></span>
                  <span className="text-xs font-mono-code text-slate-400">{exp.duration} ({exp.locationType})</span>
                </div>
                <p className="text-xs text-slate-300 italic">{exp.description}</p>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pt-1">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="font-bold text-white block mb-1">{cat.title}:</span>
                  <span className="text-slate-300">{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <span className="font-bold text-white block">{edu.institution}</span>
                  <span className="text-cyan-300 block">{edu.degree}</span>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>{edu.duration}</span>
                    <span className="text-emerald-400 font-bold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
