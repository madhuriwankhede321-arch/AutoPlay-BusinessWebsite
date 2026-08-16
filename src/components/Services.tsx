import React, { useState } from 'react';
import { Sparkles, GitMerge, ShieldCheck, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig, CoachingService } from '../lib/siteConfig';
import { BookingModal } from './BookingModal';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<CoachingService | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'GitMerge':
        return <GitMerge className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="coaching" className="py-24 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Coaching & Training Tracks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            How I Can Help
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Focused, hands-on coaching tracks designed for specific workflows, roles, and organizational objectives.
          </p>
        </div>

        {/* 4 Geometric Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Card Top / Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">0{index + 1}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60 uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Tools Highlight Badge (if present) */}
                {service.toolsHighlight && (
                  <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Key Tools:</span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400">{service.toolsHighlight}</span>
                  </div>
                )}

                {/* Practical Topics List */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    What We Work On:
                  </span>
                  <ul className="space-y-2">
                    {service.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  id={`service-cta-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group cursor-pointer"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Booking / Detail Modal */}
      {selectedService && (
        <BookingModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          defaultInterest={selectedService.title}
        />
      )}
    </section>
  );
};
