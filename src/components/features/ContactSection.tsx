import React from 'react';
import {
  ChatSquareText,
  Clipboard,
  ClipboardCheck,
  Send,
  Github,
  Linkedin,
  Stars,
  Telephone,
} from 'react-bootstrap-icons';
import { portfolioService } from '../../services/portfolioService';
import { useContactForm } from '../../hooks/useContactForm';
import { useClipboard } from '../../hooks/useClipboard';

export const ContactSection: React.FC = () => {
  const data = portfolioService.getPortfolioData();
  const { copy, isCopied } = useClipboard({ timeout: 2500 });
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useContactForm();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info & Quick Copy */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-cyan flex items-center gap-1.5">
              <Stars className="w-3.5 h-3.5" aria-hidden="true" />
              Direct Communication
            </span>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
              Let us Build Something <span className="gradient-accent">Exceptional</span>
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you are looking to architect a new high-throughput platform, scale existing infrastructure, or explore full-stack technical collaboration, my inbox is always open.
          </p>

          {/* Quick Copy Email Card */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-xs font-mono text-slate-400">Direct Email Address:</span>
            <div className="flex items-center justify-between gap-3 bg-white/[0.03] p-3 rounded-xl border border-white/5">
              <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                {data.email}
              </span>
              <button
                type="button"
                onClick={() => copy(data.email)}
                data-agent-action="copy-email"
                aria-label={isCopied(data.email) ? 'Email copied' : 'Copy email address'}
                className="px-3.5 py-2 rounded-lg bg-cyber-cyan/15 hover:bg-cyber-cyan/25 border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono flex items-center gap-1.5 transition-all shrink-0 min-h-[44px] focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none"
              >
                {isCopied(data.email) ? (
                  <>
                    <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-400 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Clipboard className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Direct Phone Card */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-xs font-mono text-slate-400">Phone & Communication:</span>
            <div className="flex items-center justify-between gap-3 bg-white/[0.03] p-3 rounded-xl border border-white/5">
              <span className="font-mono text-xs sm:text-sm text-slate-200 flex items-center gap-2">
                <Telephone className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                {data.phone}
              </span>
              <button
                type="button"
                onClick={() => copy(data.phone)}
                data-agent-action="copy-phone"
                aria-label={isCopied(data.phone) ? 'Phone copied' : 'Copy phone number'}
                className="px-3.5 py-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-400 text-xs font-mono flex items-center gap-1.5 transition-all shrink-0 min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                {isCopied(data.phone) ? (
                  <>
                    <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-400 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Clipboard className="w-3.5 h-3.5" aria-hidden="true" />
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
                href={data.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${data.name} on GitHub`}
                data-agent-action="open-github"
                className="px-4 py-2.5 rounded-xl glass-panel border border-white/10 hover:border-cyber-cyan/40 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${data.name} on LinkedIn`}
                data-agent-action="open-linkedin"
                className="px-4 py-2.5 rounded-xl glass-panel border border-white/10 hover:border-cyber-cyan/40 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none"
              >
                <Linkedin className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Accessible Message Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <ChatSquareText className="w-5 h-5 text-cyber-cyan" aria-hidden="true" />
              Transmit Message
            </h3>

            {isSubmitted ? (
              <div role="status" aria-live="polite" className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-cyan">
                  <ClipboardCheck className="w-6 h-6" aria-hidden="true" />
                </div>
                <h4 className="text-xl font-bold text-white">Transmission Successful</h4>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out. Your transmission has been dispatched directly to my inbox, and I will reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  data-agent-action="send-another-message"
                  className="mt-4 px-4 py-2.5 rounded-xl text-xs font-mono bg-white/10 hover:bg-white/15 text-white transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none"
                >
                  Send another transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(touched.name && errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Ada Lovelace"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                      touched.name && errors.name
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-white/10 focus:border-cyber-cyan/60'
                    } focus:bg-white/[0.05] outline-none text-slate-100 text-sm font-sans transition-all min-h-[44px]`}
                  />
                  {touched.name && errors.name && (
                    <p id="contact-name-error" className="text-xs text-rose-400 font-mono mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Email Address <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(touched.email && errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="ada@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                      touched.email && errors.email
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-white/10 focus:border-cyber-cyan/60'
                    } focus:bg-white/[0.05] outline-none text-slate-100 text-sm font-sans transition-all min-h-[44px]`}
                  />
                  {touched.email && errors.email && (
                    <p id="contact-email-error" className="text-xs text-rose-400 font-mono mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message Scope <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    aria-required="true"
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about the system, challenge, or initiative you have in mind..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                      touched.message && errors.message
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-white/10 focus:border-cyber-cyan/60'
                    } focus:bg-white/[0.05] outline-none text-slate-100 text-sm font-sans transition-all resize-none min-h-[100px]`}
                  />
                  {touched.message && errors.message && (
                    <p id="contact-message-error" className="text-xs text-rose-400 font-mono mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div role="alert" className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-agent-action="submit-contact"
                  className="w-full py-3.5 px-6 rounded-xl font-bold font-sans text-sm tracking-wide bg-gradient-to-r from-cyber-cyan to-cyber-violet text-obsidian-950 hover:opacity-95 shadow-glow-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-50 min-h-[44px] focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-obsidian-950 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                      Dispatching Message...
                    </span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
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

