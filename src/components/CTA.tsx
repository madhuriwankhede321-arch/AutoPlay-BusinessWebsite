import React from 'react';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import { BookingButton } from './BookingButton';

export const CTA: React.FC = () => {
  return (
    <section id="cta-section" className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Subtle animated arrow icon */}
        <div className="flex justify-center">
          <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            What Would You Like to Automate?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Let's identify one repetitive task, explore what AI can do, and turn it into a practical workflow.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <BookingButton
            id="main-bottom-cta-btn"
            variant="secondary"
            text="Book a Discovery Call"
            className="w-full sm:w-auto"
          />
          <a
            id="cta-message-link"
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-base transition-all shadow-xs"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Send Me a Message</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
          No hard sales. Just practical, hands-on guidance on what's possible with AI.
        </p>

      </div>
    </section>
  );
};
