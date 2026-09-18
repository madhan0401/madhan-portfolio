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
      formState.subject || 'Portfolio Inquiry from ' + formState.name
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-code text-cyan-400 uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build <span className="bg-gradient-text">Something Together</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Interested in working together or discussing an opportunity? Feel free to reach out.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800/80 space-y-6">
              
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Contact Details
              </h3>

              <div className="space-y-4">
                
                {/* Email Box */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-mono-code block uppercase">Email</span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-mono-code block uppercase">Phone</span>
                      <a
                        href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono-code block uppercase">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <Mail className="w-4 h-4" />
                  Send Email Directly
                </a>

                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <button
                    onClick={onOpenResume}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
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
            <div className="glass-panel p-8 rounded-2xl border border-slate-800/80">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6 font-mono-code">
                Fill out the form below to send an inquiry directly to {PERSONAL_INFO.email}
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Email client opened with your message parameters! Thank you for reaching out.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-code text-slate-400 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-400 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity / Pair Project"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-400 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25"
                >
                  <Send className="w-4 h-4" />
                  Send Message via Mail Client
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
