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
    // Check if public/Madhan-M-Resume.pdf exists or trigger direct download
    const link = document.createElement('a');
    link.href = '/Madhan-M-Resume.pdf';
    link.download = 'Madhan-M-Resume.pdf';
    
    // Fallback handler if PDF is not present: download text resume spec
    const resumeText = `
================================================================================
                                MADHAN M
            Software Engineer | Full-Stack Developer
================================================================================
Email: ${PERSONAL_INFO.email}
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

Responsibilities:
${EXPERIENCES[0].responsibilities.map(r => `  * ${r}`).join('\n')}

Technologies: ${EXPERIENCES[0].technologies.join(', ')}

--------------------------------------------------------------------------------
TECHNICAL SKILLS (Intermediate & Beginner Proficiency Only)
--------------------------------------------------------------------------------
${SKILL_CATEGORIES.map(cat => `${cat.title}: ${cat.skills.map(s => `${s.name} (${s.level})`).join(', ')}`).join('\n')}

--------------------------------------------------------------------------------
ACHIEVEMENTS & PROBLEM SOLVING
--------------------------------------------------------------------------------
- 250+ Coding Problems Solved (200+ LeetCode, 50+ GeeksforGeeks)
- 3+ Full-Stack Web Applications
- 4 Months Software Development Internship
================================================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = 'Madhan-M-Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030108]/85 backdrop-blur-xl animate-in fade-in">
      <div className="glass-panel w-full max-w-4xl rounded-3xl border border-purple-500/40 shadow-2xl shadow-purple-950/80 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#070314] p-6 border-b border-purple-900/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-purple-950/80 border border-purple-500/30 text-purple-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Madhan M — Resume</h3>
              <p className="text-xs text-purple-300 font-mono-code">Developer Resume Document Specification</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-slate-300 hover:text-white transition-all text-xs font-mono-code flex items-center gap-1.5"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-purple-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs font-mono-code shadow-md shadow-purple-600/30 hover:opacity-90 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#05020c]/95 text-slate-200 space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-purple-900/40 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
              <p className="text-base font-semibold gradient-neon-violet font-mono-code mt-1">{PERSONAL_INFO.title} | {PERSONAL_INFO.subtitle}</p>
              <p className="text-xs text-slate-400 mt-1">{PERSONAL_INFO.institution}</p>
            </div>
            <div className="text-xs font-mono-code text-slate-300 space-y-1">
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-purple-400 hover:underline">{PERSONAL_INFO.email}</a></div>
              <div>Phone: <span className="text-slate-200">{PERSONAL_INFO.phone}</span></div>
              <div>Location: <span className="text-slate-200">{PERSONAL_INFO.location}</span></div>
              <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">Profile</a></div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono-code text-purple-400 uppercase tracking-widest font-bold">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bioShort}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code text-purple-400 uppercase tracking-widest font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h2>
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="p-4.5 rounded-2xl bg-purple-950/30 border border-purple-500/20 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-white">{exp.position} — <span className="text-purple-300">{exp.company}</span></span>
                  <span className="text-xs font-mono-code text-slate-400">{exp.duration} ({exp.locationType})</span>
                </div>
                <p className="text-xs text-slate-300 italic">"{exp.description}"</p>
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
            <h2 className="text-xs font-mono-code text-purple-400 uppercase tracking-widest font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technical Skills (Intermediate / Beginner)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/20">
                  <span className="font-bold text-white block mb-1">{cat.title}:</span>
                  <span className="text-slate-300">{cat.skills.map((s) => `${s.name} (${s.level})`).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code text-purple-400 uppercase tracking-widest font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 space-y-1">
                  <span className="font-bold text-white block">{edu.institution}</span>
                  <span className="text-purple-300 block">{edu.degree}</span>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono-code">
                    <span>{edu.duration}</span>
                    <span className="text-amber-300 font-bold">{edu.grade}</span>
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
