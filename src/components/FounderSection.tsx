import React from 'react';
import bhargaviPortrait from '../assets/images/founder_bhargavi.jpg';
import sathyaPortrait from '../assets/images/founder_sathya_sai.jpg';
import { 
  Cpu, 
  ShieldCheck, 
  Code2, 
  TrendingUp, 
  Layers, 
  Terminal, 
  Lock, 
  Sparkles,
  CheckCircle2,
  Workflow,
  Globe2,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section 
      id="founders" 
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#fafaf7] text-[#111216] border-t border-black/[0.06] relative overflow-hidden"
    >
      {/* Architectural subtle background grid accents */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#111216 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] text-xs font-mono tracking-widest uppercase text-stone-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#65558f]" />
            LEADERSHIP &amp; OWNERSHIP
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#111216] tracking-tight leading-[1.08] font-normal">
            The People Behind the Build
          </h2>

          <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed">
            Two founders. Different strengths. One shared vision.
          </p>
        </div>

        {/* Editorial Two-Founder Composition - Equal Importance & Status */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ================= FOUNDER 01: SATHYA SAI JS ================= */}
          <div className="lg:col-span-6 group relative bg-white rounded-3xl border border-black/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_44px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between">
            {/* Top Index & Identifier Header */}
            <div className="p-7 sm:p-9 pb-5 border-b border-black/[0.06] bg-stone-50/60 flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
                  Founder 01
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111216] tracking-tight mt-0.5">
                  Sathya Sai JS
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-full bg-stone-900 text-white text-xs font-mono font-medium tracking-wide shadow-sm">
                  Founder &amp; Owner
                </div>
              </div>
            </div>

            {/* Visual & Bio Core */}
            <div className="p-7 sm:p-9 space-y-7 flex-1 flex flex-col justify-between">
              {/* Media Frame & Focus Area */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                {/* Authentic Portrait - Clickable to Profile */}
              </div>
            </div>

            {/* Visual & Bio Core */}
            <div className="p-7 sm:p-9 space-y-7 flex-1 flex flex-col justify-between">
              {/* Media Frame & Focus Area */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                {/* Authentic Portrait - Clickable to Profile */}
                <span className="text-stone-500 font-mono inline-flex items-center gap-1">Profile</span>
            </div>
          </div>
        </div>

        {/* Unifying Shared Vision Banner */}
        <div className="rounded-2xl border border-black/[0.08] bg-white/70 backdrop-blur-sm p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#65558f] font-semibold block">
              Founding Mandate
            </span>
            <div className="text-base sm:text-lg font-serif text-[#111216]">
              "Two founders. Different strengths. One shared vision."
            </div>
            <p className="text-xs text-stone-500 max-w-xl">
              100% independent ownership with zero outside dilution. Direct engineering collaboration without intermediary bureaucracy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-stone-600 border-t md:border-t-0 md:border-l border-black/[0.08] pt-4 md:pt-0 md:pl-8">
            <div>
              <span className="text-2xl font-bold text-[#111216] block font-mono">100%</span>
              <span className="text-stone-500">Founder Owned</span>
            </div>
            <div className="w-px h-8 bg-black/10 hidden sm:block" />
            <div>
              <span className="text-2xl font-bold text-[#111216] block font-mono">0%</span>
              <span className="text-stone-500">Outside Bureaucracy</span>
            </div>
            <div className="w-px h-8 bg-black/10 hidden sm:block" />
            <div>
              <span className="text-2xl font-bold text-[#111216] block font-mono">2025</span>
              <span className="text-stone-500">First Principles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
