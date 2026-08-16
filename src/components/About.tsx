import React from 'react';
import { CheckSquare, Bot, GraduationCap, Quote, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';
import { BookingButton } from './BookingButton';

export const About: React.FC = () => {
  const getAboutIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <CheckSquare className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Brand & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Behind the Coaching
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                Meet Madhuri
              </h2>
              <p className="text-xs uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500">
                {siteConfig.coach.shortRole} • {siteConfig.coach.location}
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <p>{siteConfig.about.intro}</p>
              <p>{siteConfig.about.secondary}</p>
            </div>

            {/* Core Quote Box */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 relative">
              <Quote className="w-5 h-5 text-indigo-500 mb-2" />
              <p className="text-base font-bold text-slate-900 dark:text-slate-100 font-heading italic leading-relaxed">
                "{siteConfig.about.quote}"
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <BookingButton
                id="about-booking-cta"
                variant="secondary"
                text="Book a Discovery Call"
              />
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Based in {siteConfig.coach.location} (Remote Globally)</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Credibility Cards */}
          <div className="lg:col-span-6 space-y-4">
            {siteConfig.about.cards.map((card, idx) => (
              <div
                key={idx}
                id={`about-credibility-card-${idx}`}
                className="p-7 rounded-3xl bg-slate-50/60 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-xs">
                  {getAboutIcon(card.icon)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
                      {card.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
