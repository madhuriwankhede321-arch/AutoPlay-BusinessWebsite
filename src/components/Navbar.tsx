import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';
import { BookingButton } from './BookingButton';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800 py-3'
          : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Geometric Balance Lockup */}
        <a
          id="nav-logo-link"
          href="#hero"
          className="flex items-center gap-2.5 focus:outline-none group"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold shadow-sm shadow-indigo-200 dark:shadow-none group-hover:scale-105 transition-transform shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex items-center">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
              {siteConfig.brandName}
            </span>
            <span className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2.5 hidden sm:inline-block"></span>
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold hidden sm:inline-block">
              by {siteConfig.coach.name}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Desktop Booking CTA */}
          <div className="hidden sm:block">
            <BookingButton
              id="nav-booking-cta"
              variant="compact"
              text="Book a Discovery Call"
            />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden border-b border-slate-100 dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              id={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <BookingButton
              id="mobile-nav-booking-cta"
              variant="primary"
              text="Book a Discovery Call"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};
