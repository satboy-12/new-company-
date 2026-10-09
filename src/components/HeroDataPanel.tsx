import React from 'react';
import { ShieldCheck, Cpu, Activity, Sprout, Terminal } from 'lucide-react';

interface HeroDataPanelProps {
  className?: string;
}

export const HeroDataPanel: React.FC<HeroDataPanelProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full pointer-events-none select-none ${className}`}>
      {/* 1. SECURITY — Quiet technical attestation (Background Top-Right) */}
      <div className="absolute top-2 right-2 sm:right-6 lg:right-10 z-10 w-44 sm:w-48 p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] pointer-events-auto">
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-1">
          <span className="flex items-center gap-1.5 text-gray-700 font-medium">
            <ShieldCheck className="w-3 h-3 text-[#5b45d9]" />
            SECURITY
          </span>
          <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold">
            Zero-Trust
          </span>
        </div>
        <div className="text-[11px] font-mono text-gray-800">
          AES-256 · Isolated Perimeter
        </div>
      </div>

      {/* 2. AI CORE — Minimal inference label (Midground Top-Left) */}
      <div className="absolute top-12 left-0 sm:left-4 z-20 w-48 sm:w-52 p-3 rounded-xl bg-white/75 backdrop-blur-md border border-white/85 shadow-[0_6px_24px_rgba(0,0,0,0.04)] pointer-events-auto">
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-1">
          <span className="flex items-center gap-1.5 text-gray-700 font-medium">
            <Cpu className="w-3 h-3 text-[#5b45d9]" />
            AI CORE
          </span>
          <span className="text-gray-400">14.2ms</span>
        </div>
        <div className="text-xs font-medium text-gray-900">Transformer Inference</div>
        <div className="text-[10px] font-mono text-gray-500 mt-1">
          Deterministic FP8 Kernel
        </div>
      </div>

      {/* 3. DATA — Stream throughput (Midground Far-Right) */}
      <div className="absolute top-1/2 -right-1 sm:right-2 -translate-y-1/2 z-20 w-40 sm:w-44 p-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_6px_24px_rgba(0,0,0,0.03)] pointer-events-auto">
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-1">
          <span className="flex items-center gap-1.5 text-gray-700 font-medium">
            <Activity className="w-3 h-3 text-[#5b45d9]" />
            DATA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>
        <div className="text-xs font-semibold text-gray-900 font-mono">1.2M+ ops/s</div>
        <div className="text-[10px] text-gray-500">Live Ingestion</div>
      </div>

      {/* 4. AGRITECH — Field telemetry (Foreground Lower-Left) */}
      <div className="absolute bottom-4 left-0 sm:left-6 z-30 w-48 sm:w-52 p-3 rounded-xl bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_8px_28px_rgba(0,0,0,0.05)] pointer-events-auto">
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-1">
          <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
            <Sprout className="w-3 h-3 text-emerald-600" />
            AGRITECH
          </span>
          <span className="text-gray-400">LoRa Node</span>
        </div>
        <div className="text-xs font-medium text-gray-900">Soil Hydration 68%</div>
        <div className="text-[10px] font-mono text-emerald-700 mt-0.5">
          NDVI 0.84 · Optimal State
        </div>
      </div>

      {/* 5. SYSTEM — Operational status (Foreground Lower-Right) */}
      <div className="absolute -bottom-2 right-2 sm:right-8 z-30 w-52 sm:w-56 p-3 rounded-xl bg-white/85 backdrop-blur-md border border-white/95 shadow-[0_10px_32px_rgba(0,0,0,0.06)] pointer-events-auto">
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-1">
          <span className="flex items-center gap-1.5 text-gray-700 font-medium">
            <Terminal className="w-3 h-3 text-[#5b45d9]" />
            SYSTEM
          </span>
          <span className="text-emerald-700 font-semibold font-mono">99.999% SLA</span>
        </div>
        <div className="text-xs font-medium text-gray-900">Automation Status</div>
        <div className="text-[10px] font-mono text-gray-500 mt-0.5">
          24 Closed-Loop Routines Active
        </div>
      </div>
    </div>
  );
};
