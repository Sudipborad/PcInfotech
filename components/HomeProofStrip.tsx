"use client";
import React from "react";
import { ShieldCheck, Cpu, Building2, Trophy, Clock, CheckCircle2 } from "lucide-react";

export const HomeProofStrip: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white border-y border-slate-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          {/* Fact 1 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-200 block">30-Year Heritage</span>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Founded 1995 by technocrat Chetan Kumbhani. Unbroken 3-decade engineering track record.
              </p>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-200 block">13 Physical Hubs</span>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Direct walk-in centers across Gujarat, Maharashtra &amp; MP with 10,000+ sq.ft lab space.
              </p>
            </div>
          </div>

          {/* Fact 3 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-200 block">Direct OEM Credentials</span>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                HP Authorized, 2x Canon Best Partner Winner, TVS-E &amp; EPSON authorized stockist.
              </p>
            </div>
          </div>

          {/* Fact 4 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-200 block">Chip-Level Logic Labs</span>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Proprietary SMD micro-soldering labs restoring boards instead of costly whole-unit swaps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
