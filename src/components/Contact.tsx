import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, Sparkles, AlertCircle } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Individual Coaching',
    targetWorkflow: '',
    challenge: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.coach.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // If a Formspree or Web3Forms endpoint is configured
    if (siteConfig.integrations.formspreeEndpoint || siteConfig.integrations.web3formsKey) {
      setLoading(true);
      try {
        const endpoint =
          siteConfig.integrations.formspreeEndpoint || 'https://api.web3forms.com/submit';
        const payload = siteConfig.integrations.web3formsKey
          ? { ...formData, access_key: siteConfig.integrations.web3formsKey }
          : formData;

        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          setSubmitted(true);
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        // Fallback to mailto if external endpoint fails
        triggerMailto();
      } finally {
        setLoading(false);
      }
    } else {
      // Default: Clean static mailto trigger with prefilled structured contents
      triggerMailto();
    }
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(
      `Coaching Inquiry: ${formData.interest} - ${formData.name || 'New Client'}`
    );
    const body = encodeURIComponent(
      `Hi Madhuri,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInterest: ${formData.interest}\n\nWhat I want to automate: ${formData.targetWorkflow}\nCurrent challenge / bottlenecks: ${formData.challenge}\n\nAdditional details:\n${formData.message}\n\nLooking forward to speaking with you!`
    );
    window.location.href = `mailto:${siteConfig.coach.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct contact & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
                Let's Talk About Your Workflow
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you have a specific task in mind or simply want to explore how AI can streamline your day, send a note and let's discuss what's possible.
              </p>
            </div>

            {/* Direct Contact Info Cards */}
            <div className="space-y-3 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Direct Email</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white font-mono">
                      {siteConfig.coach.email}
                    </span>
                  </div>
                </div>

                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Location</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {siteConfig.coach.location} <span className="text-xs text-slate-500 font-normal">(Available Globally Online)</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
              <span className="font-bold text-indigo-950 dark:text-indigo-200 block">
                ⚡ Rapid Response Commitment:
              </span>
              <p>
                Inquiries typically receive a personal response within 24 business hours with initial workflow ideas.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              
              {submitted ? (
                <div className="p-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                    Message Prepared & Sent!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name || 'there'}. I've received your workflow details and will be in touch shortly.
                  </p>
                  <button
                    id="contact-send-another-btn"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline pt-2 cursor-pointer"
                  >
                    <span>Send another message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        required
                        placeholder="e.g. Maya Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-input-email"
                        type="email"
                        required
                        placeholder="maya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      I'm interested in:
                    </label>
                    <select
                      id="contact-select-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    >
                      <option value="Individual Coaching">Individual Coaching</option>
                      <option value="AI Productivity">AI Productivity</option>
                      <option value="Workflow Automation">Workflow Automation</option>
                      <option value="AI-Powered QA">AI-Powered QA</option>
                      <option value="Team Workshop">Team Workshop</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      What do you want to automate?
                    </label>
                    <input
                      id="contact-input-workflow"
                      type="text"
                      placeholder="e.g. Weekly KPI reports, bug ticket generation, customer email sorting..."
                      value={formData.targetWorkflow}
                      onChange={(e) => setFormData({ ...formData, targetWorkflow: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Current challenge or bottleneck:
                    </label>
                    <input
                      id="contact-input-challenge"
                      type="text"
                      placeholder="e.g. Takes 3 hours of manual copy paste between spreadsheets every Friday..."
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message / Additional Context
                    </label>
                    <textarea
                      id="contact-input-message"
                      rows={3}
                      placeholder="Tell me a bit more about your team or workflow goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
