import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Services } from './components/Services';
import { CoachingProgram } from './components/CoachingProgram';
import { Audience } from './components/Audience';
import { WhoNotFor } from './components/WhoNotFor';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { AutomationDemo } from './components/AutomationDemo';
import { BeforeAfter } from './components/BeforeAfter';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Resources } from './components/Resources';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  // Theme state persisted in localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Problem Section: Is repetitive work slowing you down? */}
        <Problem />

        {/* Solution Section: From AI Curiosity to Practical Automation */}
        <Solution />

        {/* Coaching Services: How I Can Help */}
        <Services />

        {/* Signature Coaching Program (4-week Example Framework) */}
        <CoachingProgram />

        {/* Target Audience: Who I Coach */}
        <Audience />

        {/* Who This Is Not For: Expectations & Qualification */}
        <WhoNotFor />

        {/* Interactive Automation Demo: See What Can Be Automated */}
        <AutomationDemo />

        {/* Before / After Comparison: From Manual to Automated */}
        <BeforeAfter />

        {/* Case Studies / Illustrative Workflows */}
        <CaseStudies />

        {/* About Madhuri: Meet Madhuri */}
        <About />

        {/* Coaching Philosophy: 4 Core Principles */}
        <Philosophy />

        {/* Testimonials Placeholder */}
        <Testimonials />

        {/* Common FAQ Accordion */}
        <FAQ />

        {/* Big Conversion Call To Action */}
        <CTA />

        {/* Contact Section: Let's Talk About Your Workflow */}
        <Contact />

        {/* Resources Section: Learn AI. Build Better Workflows. */}
        <Resources />

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
