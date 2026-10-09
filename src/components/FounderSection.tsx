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
                <div
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white hover:bg-stone-900 text-stone-700 hover:text-white border border-black/10 text-xs font-mono font-medium transition-all duration-200 shadow-sm group/btn"
                >
                  <span>View Profile</span>
                  
                </div>
              </div>
            </div>

            {/* Visual & Bio Core */}
            <div className="p-7 sm:p-9 space-y-7 flex-1 flex flex-col justify-between">
              {/* Media Frame & Focus Area */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                {/* Authentic Portrait - Clickable to Profile */}
                <div
                  className="sm:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 border border-black/[0.08] shadow-sm block group/img cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#65558f] focus:ring-offset-2"
                >
                  <img
                    src={sathyaPortrait}
                    alt="Sathya Sai JS — Founder & Owner of SOUICE Technologies, driving Cybersecurity, Technology, Business Development & Growth"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />

                  {/* Subtle hover overlay hint */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-mono text-stone-900 font-medium shadow-md flex items-center gap-1.5 transform translate-y-1 group-hover/img:translate-y-0 transition-transform duration-300">
                      View Profile 
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] font-mono text-stone-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-black/10 shadow-sm flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#65558f]" />
                    Cybersecurity &amp; Growth
                  </div>
                </div>

                {/* Focus Specs & Technical Pillars */}
                <div className="sm:col-span-7 space-y-3.5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold block">
                      Core Focus
                    </span>
                    <div className="text-base sm:text-lg font-medium text-[#111216] leading-snug">
                      Cybersecurity, Technology, Business Development &amp; Growth
                    </div>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    Driving cybersecurity, technology, business development and growth.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-700 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#65558f]" /> Zero-Trust Net
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-700 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-[#65558f]" /> Infra Hardening
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-700 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[#65558f]" /> Growth Strategy
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-700 flex items-center gap-1">
                      <Globe2 className="w-3 h-3 text-[#65558f]" /> Enterprise Reach
                    </span>
                  </div>
                </div>
              </div>

              {/* Editorial Quote */}
              <blockquote className="p-4.5 sm:p-5 rounded-2xl bg-[#f4f4f1]/80 border-l-2 border-[#65558f] italic text-sm text-stone-800 leading-relaxed font-serif">
                "Security is non-negotiable. Building sovereign digital posture alongside scalable business velocity is how enduring technology is forged."
              </blockquote>
            </div>

            {/* Bottom Proof Strip */}
            <div className="px-7 sm:px-9 py-3.5 bg-stone-50 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-stone-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Strategic &amp; Technical Leadership
              </span>
              <div
                className="text-[#65558f] hover:text-[#4f378b] hover:underline font-mono inline-flex items-center gap-1 transition-colors group/view"
              >
                <span>Verified Profile</span>
                
              </div>
            </div>
          </div>

          {/* ================= FOUNDER 02: BHARGAVI A ================= */}
          <div className="lg:col-span-6 group relative bg-white rounded-3xl border border-black/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_44px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between">
            {/* Top Index & Identifier Header */}
            <div className="p-7 sm:p-9 pb-5 border-b border-black/[0.06] bg-stone-50/60 flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
                  Founder 02
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111216] tracking-tight mt-0.5">
                  Bhargavi A
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-full bg-stone-900 text-white text-xs font-mono font-medium tracking-wide shadow-sm">
                  Founder &amp; Owner
                </div>
                <div
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white hover:bg-stone-900 text-stone-700 hover:text-white border border-black/10 text-xs font-mono font-medium transition-all duration-200 shadow-sm group/btn"
                >
                  <span>View Profile</span>
                  
                </div>
              </div>
            </div>

            {/* Visual & Bio Core */}
            <div className="p-7 sm:p-9 space-y-7 flex-1 flex flex-col justify-between">
              {/* Media Frame & Focus Area */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                {/* Authentic Portrait - Clickable to Profile */}
                <div
                  className="sm:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 border border-black/[0.08] shadow-sm block group/img cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#65558f] focus:ring-offset-2"
                >
                  <img
                    src={bhargaviPortrait}
                    alt="Bhargavi A — Founder & Owner of SOUICE Technologies, directing AI, Full-Stack Development & Product Engineering"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
                  
                  {/* Subtle hover overlay hint */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-mono text-stone-900 font-medium shadow-md flex items-center gap-1.5 transform translate-y-1 group-hover/img:translate-y-0 transition-transform duration-300">
                      View Profile 
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] font-mono text-stone-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-black/10 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#65558f]" />
                    AI &amp; Product Architect
                  </div>
                </div>

                {/* Focus Specs & Technical Pillars */}
                <div className="sm:col-span-7 space-y-3.5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold block">
                      Core Focus
                    </span>
                    <div className="text-base sm:text-lg font-medium text-[#111216] leading-snug">
                      AI, Full-Stack Development &amp; Product Engineering
                    </div>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    Building the company's AI, product and full-stack technology direction.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-700 flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-[#65558f]" /> LLM Pipelines
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-700 flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-[#65558f]" /> Full-Stack Ops
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-700 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#65558f]" /> Product Architecture
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200/80 text-[11px] font-mono text-stone-700 flex items-center gap-1">
                      <Workflow className="w-3 h-3 text-[#65558f]" /> Systems Delivery
                    </span>
                  </div>
                </div>
              </div>

              {/* Editorial Quote */}
              <blockquote className="p-4.5 sm:p-5 rounded-2xl bg-[#f4f4f1]/80 border-l-2 border-[#65558f] italic text-sm text-stone-800 leading-relaxed font-serif">
                "We bridge the gap between complex engineering, resilient architecture, and tangible, scalable business impact."
              </blockquote>
            </div>

            {/* Bottom Proof Strip */}
            <div className="px-7 sm:px-9 py-3.5 bg-stone-50 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-stone-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Active Engineering Oversight
              </span>
              <div
                className="text-[#65558f] hover:text-[#4f378b] hover:underline font-mono inline-flex items-center gap-1 transition-colors group/view"
              >
                <span>Verified Profile</span>
                
              </div>
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
