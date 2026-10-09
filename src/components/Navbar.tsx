import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/content';
import { Menu, X, ArrowRight, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFounderModal, setShowFounderModal] = useState(false);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Solutions', route: 'solutions' },
    { label: 'AgriTech', route: 'agritech' },
    { label: 'Products', route: 'product-studio' },
    { label: 'Projects', route: 'projects' },
    { label: 'About', route: 'about' },
  ];

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto h-16 bg-white/70 backdrop-blur-xl border border-white/80 rounded-full px-5 sm:px-6 flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] pointer-events-auto">
          {/* Brand */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full group cursor-pointer text-left"
            aria-label="SOUICE Home"
          >
            <img 
              src={COMPANY_INFO.logoUrl} 
              alt="SOUICE Logo" 
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <span className="font-headline font-semibold text-xl tracking-tight text-[#1a1c1b]">
              SOUICE
            </span>
          </button>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route || (item.route === 'solutions' && currentRoute === 'ai-ml');
              return (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route)}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#4e39e5] text-white shadow-sm shadow-[#4e39e5]/30'
                      : 'text-[#474556] hover:text-[#1a1c1b] hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#4e39e5] text-white text-[13px] font-medium hover:bg-[#3d29cf] transition-all shadow-md shadow-[#4e39e5]/25 cursor-pointer whitespace-nowrap"
            >
              Contact
            </button>

            {/* Founder Profile Pill Icon */}
            <button
              onClick={() => setShowFounderModal(true)}
              className="w-8 h-8 rounded-full bg-[#4e39e5]/10 hover:bg-[#4e39e5]/20 flex items-center justify-center text-[#4e39e5] transition-colors cursor-pointer"
              title="Founder: Bhargavi"
              aria-label="View Founder Profile"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-[#1a1c1b] hover:bg-black/10 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-50 p-6 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-2xl lg:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleLinkClick(item.route)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#4e39e5] text-white'
                        : 'text-[#1a1c1b] hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} className={isActive ? 'text-white' : 'text-slate-400'} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 rounded-full bg-[#4e39e5] text-white text-center font-medium shadow-lg shadow-[#4e39e5]/30"
              >
                Start a Project
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowFounderModal(true);
                }}
                className="w-full py-2.5 rounded-full bg-slate-100 text-slate-700 text-center text-xs font-medium"
              >
                Meet Founder: Bhargavi
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Founder Info Modal */}
      <AnimatePresence>
        {showFounderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-white/80 p-6 relative"
            >
              <button
                onClick={() => setShowFounderModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-4 mb-5">
                <img
                  src={COMPANY_INFO.founder.imageUrl}
                  alt="Bhargavi - Founder & Owner"
                  className="w-16 h-16 rounded-2xl object-cover object-top shadow-md border-2 border-white"
                />
                <div>
                  <h3 className="font-headline font-semibold text-lg text-slate-900">{COMPANY_INFO.founder.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#4e39e5] font-medium">
                    <UserCheck size={14} />
                    <span>Founder & Owner</span>
                  </div>
                  <span className="text-xs text-slate-500">SOUICE Technologies</span>
                </div>
              </div>

              <blockquote className="p-4 rounded-2xl bg-[#edebff]/60 border border-[#4e39e5]/10 text-xs text-slate-700 italic leading-relaxed mb-4">
                "{COMPANY_INFO.founder.quote}"
              </blockquote>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Bhargavi directs company strategy, technological architecture, and product engineering, ensuring that SOUICE solutions solve real-world problems with robust security and scalability.
              </p>

              <div className="grid grid-cols-2 gap-3 text-center mb-6">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-headline text-lg font-bold text-[#4e39e5]">100%</div>
                  <div className="text-[11px] text-slate-500">Independent Ownership</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-headline text-lg font-bold text-[#4e39e5]">Zero</div>
                  <div className="text-[11px] text-slate-500">Compromise on Security</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowFounderModal(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-[#4e39e5] text-white text-xs font-medium hover:bg-[#3d29cf] transition-colors"
              >
                Reach Out Directly
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
