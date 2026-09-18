import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject || 'Opportunity / Inquiry from ' + formState.name
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-purple-300 uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            Initiate Contact
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <span className="gradient-neon-violet text-glow-purple">Something Together</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Interested in working together or discussing an opportunity? Feel free to reach out.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_#a855f7]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Social Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 space-y-6 card-tilt">
              
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Contact Information
              </h3>

              <div className="space-y-4">
                
                {/* Email Box */}
                <div className="flex items-center justify-between p-4.5 rounded-2xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-purple-900/40 text-purple-300 border border-purple-500/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-mono-code block uppercase">Email Address</span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-bold text-white hover:text-purple-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2.5 rounded-xl bg-purple-950 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-purple-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center justify-between p-4.5 rounded-2xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-purple-900/40 text-purple-300 border border-purple-500/30">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-mono-code block uppercase">Phone Number</span>
                      <a
                        href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-bold text-white hover:text-purple-300 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2.5 rounded-xl bg-purple-950 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-purple-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="flex items-center gap-3.5 p-4.5 rounded-2xl bg-purple-950/40 border border-purple-500/20">
                  <div className="p-3 rounded-xl bg-purple-900/40 text-purple-300 border border-purple-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono-code block uppercase">Location</span>
                    <span className="text-sm font-bold text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct Buttons */}
              <div className="pt-4 border-t border-purple-900/40 space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:opacity-90 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>

                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-slate-300 hover:text-purple-300 hover:border-purple-400 transition-all"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-slate-300 hover:text-purple-300 hover:border-purple-400 transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <button
                    onClick={onOpenResume}
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-slate-300 hover:text-purple-300 hover:border-purple-400 transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    Resume
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 card-tilt">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mb-6 font-mono-code">
                Inquiries are directed to {PERSONAL_INFO.email}
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-purple-900/40 border border-purple-500/40 text-purple-300 text-xs font-mono-code flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0 text-purple-400" />
                  <span>Email client opened with pre-filled message!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-400 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#080414] border border-purple-500/25 text-slate-100 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-code text-slate-400 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#080414] border border-purple-500/25 text-slate-100 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#080414] border border-purple-500/25 text-slate-100 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-400 mb-1.5">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#080414] border border-purple-500/25 text-slate-100 text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:opacity-90 transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
