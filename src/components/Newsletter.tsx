import React, { useState } from 'react';
import { Mail, Check, Bell, AlertCircle } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'notice'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (siteConfig.integrations.newsletterEndpoint) {
      setStatus('loading');
      try {
        const res = await fetch(siteConfig.integrations.newsletterEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (res.ok) {
          setStatus('success');
        } else {
          setStatus('notice');
        }
      } catch (err) {
        setStatus('notice');
      }
    } else {
      // If no external newsletter service is configured, show the honest "Newsletter signup coming soon" notice per spec
      setStatus('notice');
    }
  };

  return (
    <section id="newsletter" className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-50 via-indigo-50/30 to-slate-50 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Practical Updates
              </span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
              Get Practical AI & Automation Ideas
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Short, useful ideas for using AI and automation at work. No spam, just actionable workflows.
            </p>
          </div>

          <div className="w-full md:w-auto md:min-w-[340px]">
            {status === 'success' ? (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  />
                  <button
                    id="newsletter-subscribe-btn"
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 font-semibold text-sm transition-colors shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>

                {status === 'notice' && (
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300 text-xs flex items-start gap-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Newsletter signup coming soon. In the meantime, feel free to connect directly via the contact form!
                    </span>
                  </div>
                )}
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
