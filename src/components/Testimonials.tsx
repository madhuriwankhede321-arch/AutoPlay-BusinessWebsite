import React from 'react';
import { MessageSquareQuote, ShieldCheck, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

export const Testimonials: React.FC = () => {
  const { testimonialsConfig } = siteConfig;

  // If real testimonials exist, render them
  if (testimonialsConfig.items && testimonialsConfig.items.length > 0) {
    return (
      <section id="testimonials" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Client Feedback
            </span>
            <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mt-1">
              What Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsConfig.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4"
              >
                <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                  "{item.quote}"
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}{item.company ? ` • ${item.company}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Transparent placeholder section
  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
            <MessageSquareQuote className="w-6 h-6" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
            {testimonialsConfig.placeholderHeading}
          </span>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
            Real Feedback from Real Engagements
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            {testimonialsConfig.placeholderSubtext}
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Committed to authentic, measurable client outcomes</span>
          </div>
        </div>

      </div>
    </section>
  );
};
