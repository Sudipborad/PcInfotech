import React from "react";
import { ShieldCheck, Cpu, Building2, Trophy, Clock, ShoppingBag, ExternalLink } from "lucide-react";

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
                Founded 1995 by Mr. Chetan Kumbhani. Unbroken 3-decade technical engineering pedigree.
              </p>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-200 block">4 States • 25 Branches</span>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Service hubs across Gujarat, Maharashtra, Rajasthan &amp; MP with Pune HQ and Pimpri Canon ASC.
              </p>
            </div>
          </div>

          {/* Fact 3 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-200 block">HP &amp; Canon Authorised</span>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Two trusted brands. One reliable support. 2x Canon Best Partner Winner (2015, 2018).
              </p>
            </div>
          </div>

          {/* Fact 4 */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <a
                href="https://vivekinfotech.catalog.to/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-slate-200 hover:text-emerald-300 flex items-center gap-1 transition-colors"
              >
                <span>Live Spares Store</span>
                <ExternalLink className="w-3 h-3 text-emerald-400" />
              </a>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                Official Vivek Infotech catalog for printer parts, genuine print heads &amp; printer sales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
