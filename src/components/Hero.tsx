import React, { useState } from 'react';
import { Sparkles, ArrowDown, FileText, Cpu, Zap, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';
import { BookingButton } from './BookingButton';

export const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const workflowSteps = [
    {
      id: 0,
      title: 'Your Work',
      subtitle: 'Manual inputs & tasks',
      desc: 'Spreadsheets, repetitive emails, bug reports, and weekly documentation.',
      icon: FileText,
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-900',
    },
    {
      id: 1,
      title: 'AI',
      subtitle: 'Smart logic & parsing',
      desc: 'Prompt-tuned models that parse, extract, synthesize, and format messy text.',
      icon: Cpu,
      color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-900',
    },
    {
      id: 2,
      title: 'Automation',
      subtitle: 'n8n & connected tools',
      desc: 'Reliable no-code glue moving data seamlessly between your apps without code.',
      icon: Zap,
      color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200 dark:border-cyan-900',
    },
    {
      id: 3,
      title: 'More Time',
      subtitle: 'Focus & high-value output',
      desc: 'Hours saved each week, zero manual copy-pasting, and accelerated output.',
      icon: Clock,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900',
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-slate-50/50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800"
    >
      {/* Subtle background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Core Positioning & Geometric Typography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>{siteConfig.positioning.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.08]">
              Turn Repetitive Work <br className="hidden sm:inline" />
              Into <span className="text-indigo-600 dark:text-indigo-400">Automated</span> Workflows.
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl">
              {siteConfig.positioning.supporting}
            </p>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <BookingButton
                id="hero-primary-cta"
                variant="secondary"
                text="Explore Coaching Program"
                className="group"
              />
              <a
                id="hero-secondary-cta"
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-base sm:text-lg transition-all shadow-xs"
              >
                <span>View Workflow Demo</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Credibility Statement Badge */}
            <p className="text-sm text-slate-400 dark:text-slate-500 font-medium italic pt-2">
              Practical. Hands-on. Built around your real work.
            </p>
          </div>

          {/* Right Column: Geometric Workflow Demonstration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div
                id="hero-workflow-interactive-card"
                className="relative bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-800"
              >
                {/* Floating Geometric AI Badge */}
                <div className="absolute -top-3 -right-3 h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md shadow-indigo-500/20">
                  AI
                </div>

                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    Your New Workflow
                  </h3>
                  <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                    Interactive
                  </span>
                </div>

                {/* Vertical Step Nodes */}
                <div className="space-y-2 relative">
                  {workflowSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = activeStep === index;
                    return (
                      <div key={step.id} className="relative">
                        <button
                          id={`hero-flow-step-${index}`}
                          onClick={() => setActiveStep(index)}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${
                            isActive
                              ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800 shadow-xs'
                              : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 ${step.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                                {step.title}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">0{index + 1}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                              {step.subtitle}
                            </p>
                            {isActive && (
                              <p className="text-xs text-slate-600 dark:text-slate-300 pt-2 mt-2 border-t border-indigo-100 dark:border-indigo-900/60 leading-relaxed">
                                {step.desc}
                              </p>
                            )}
                          </div>
                        </button>

                        {index < workflowSteps.length - 1 && (
                          <div className="flex justify-center py-1">
                            <div className="h-4 w-[2px] bg-indigo-200 dark:bg-indigo-800" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Result Callout */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Save up to <span className="text-indigo-600 dark:text-indigo-400 font-bold">15 hours per week</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
