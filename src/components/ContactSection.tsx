import React, { useState } from 'react';
import { Check, Copy, Send, Github, Linkedin, Twitter, Sparkles, MessageSquare, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    sound.playSuccess();
    setCopied(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00F0FF', '#8B5CF6', '#FFFFFF'],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.phone);
    sound.playSuccess();
    setPhoneCopied(true);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10B981', '#00F0FF', '#FFFFFF'],
    });

    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    sound.playClick();

    // Simulate dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      sound.playSuccess();

      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#00F0FF', '#10B981', '#8B5CF6'],
      });

      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info & Copy Button */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-cyan flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Initiate Handshake
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
              Let's Build Something <span className="gradient-accent">Exceptional</span>
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you are looking to architect a new high-throughput platform, scale existing infrastructure, or explore full-stack technical leadership, my inbox is always open.
          </p>

          {/* Quick Copy Email Card */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-xs font-mono text-slate-400">Direct Email Address:</span>
            <div className="flex items-center justify-between gap-3 bg-white/[0.03] p-3 rounded-xl border border-white/5">
              <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                {portfolioData.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-cyber-cyan/15 hover:bg-cyber-cyan/25 border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono flex items-center gap-1.5 transition-all shrink-0"
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Direct Phone Card */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-xs font-mono text-slate-400">Phone & WhatsApp:</span>
            <div className="flex items-center justify-between gap-3 bg-white/[0.03] p-3 rounded-xl border border-white/5">
              <span className="font-mono text-xs sm:text-sm text-slate-200 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {portfolioData.phone}
              </span>
              <button
                onClick={handleCopyPhone}
                className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-400 text-xs font-mono flex items-center gap-1.5 transition-all shrink-0"
                title="Copy phone"
              >
                {phoneCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono text-slate-400">Verified Profiles:</span>
            <div className="flex flex-wrap gap-3">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="px-4 py-2.5 rounded-xl glass-panel border border-white/10 hover:border-cyber-cyan/40 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="px-4 py-2.5 rounded-xl glass-panel border border-white/10 hover:border-cyber-cyan/40 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              {portfolioData.twitter && (
                <a
                  href={portfolioData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2.5 rounded-xl glass-panel border border-white/10 hover:border-cyber-cyan/40 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-sky-400" />
                  <span>X / Twitter</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Message Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyber-cyan" />
              Transmit Message
            </h3>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-cyan">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Transmission Successful</h4>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out! Your dispatch has been logged, and I will reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-white/10 hover:bg-white/15 text-white transition-colors"
                >
                  Send another transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name / Identity
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyber-cyan/60 focus:bg-white/[0.05] outline-none text-slate-100 text-sm font-sans transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="ada@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyber-cyan/60 focus:bg-white/[0.05] outline-none text-slate-100 text-sm font-sans transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message / Project Scope
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about the system, challenge, or initiative you have in mind..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyber-cyan/60 focus:bg-white/[0.05] outline-none text-slate-100 text-sm font-sans transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-bold font-sans text-sm tracking-wide bg-gradient-to-r from-cyber-cyan to-cyber-violet text-obsidian-950 hover:opacity-95 shadow-glow-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-obsidian-950 border-t-transparent rounded-full animate-spin" />
                      Dispatching Stream...
                    </span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
