"use client";
import React, { useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  BarChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { growthData } from "@/data/growth";

type MetricMode = "combined" | "calls" | "manpower" | "centers" | "facilityArea";

export const GrowthChart: React.FC = () => {
  const [metricMode, setMetricMode] = useState<MetricMode>("combined");

  const chartData = growthData.map((d) => ({
    year: `${d.year}`,
    milestone: d.centerMilestone,
    calls: d.calls,
    manpower: d.manpower,
    centersCount: d.centersCount,
    sqFt: d.cumulativeSqFt,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = growthData.find((d) => `${d.year}` === label);
      return (
        <div className="bg-slate-900 border border-slate-700/80 p-3.5 rounded-xl shadow-2xl text-xs space-y-1.5 backdrop-blur-md">
          <p className="font-bold text-white text-sm">
            Year {label} • {dataPoint?.centerMilestone}
          </p>
          <div className="space-y-1 text-slate-300">
            {payload.map((entry: any, index: number) => (
              <div key={`item-${index}`} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5" style={{ color: entry.color }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                  {entry.name}:
                </span>
                <span className="font-semibold text-white">
                  {entry.value.toLocaleString()} {entry.name === "Facility Footprint" ? "sq.ft" : ""}
                </span>
              </div>
            ))}
          </div>
          {dataPoint && (
            <p className="text-[11px] text-slate-400 pt-1.5 border-t border-slate-800 max-w-xs leading-normal">
              {dataPoint.highlights}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 sm:p-6 backdrop-blur-xl">
      {/* Metric Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
        <div>
          <h4 className="text-sm sm:text-base font-bold text-white">
            Growth Metric Visualization
          </h4>
          <p className="text-xs text-slate-400">
            Factual trajectory from 1995 founding through multi-state expansion
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setMetricMode("combined")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              metricMode === "combined"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                : "bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Calls & Manpower
          </button>
          <button
            onClick={() => setMetricMode("calls")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              metricMode === "calls"
                ? "bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20"
                : "bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Service Calls
          </button>
          <button
            onClick={() => setMetricMode("manpower")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              metricMode === "manpower"
                ? "bg-sky-400 text-slate-950 font-semibold shadow-md shadow-sky-400/20"
                : "bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Manpower
          </button>
          <button
            onClick={() => setMetricMode("centers")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              metricMode === "centers"
                ? "bg-indigo-500 text-white font-semibold shadow-md shadow-indigo-500/20"
                : "bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Service Centers
          </button>
          <button
            onClick={() => setMetricMode("facilityArea")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              metricMode === "facilityArea"
                ? "bg-emerald-400 text-slate-950 font-semibold shadow-md shadow-emerald-400/20"
                : "bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Facility Area (Sq.Ft)
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="h-72 sm:h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {metricMode === "combined" ? (
            <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="year" stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis
                yAxisId="left"
                stroke="#38bdf8"
                tick={{ fill: "#38bdf8", fontSize: 12 }}
                label={{ value: "Manpower (Engineers)", angle: -90, position: "insideLeft", fill: "#38bdf8", fontSize: 10 }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#f59e0b"
                tick={{ fill: "#f59e0b", fontSize: 12 }}
                label={{ value: "Annual Calls", angle: 90, position: "insideRight", fill: "#f59e0b", fontSize: 10 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
              <Bar
                yAxisId="left"
                dataKey="manpower"
                name="Technical Manpower"
                fill="#0284c7"
                radius={[6, 6, 0, 0]}
                barSize={36}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="calls"
                name="Annual Service Calls"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ r: 5, fill: "#f59e0b" }}
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          ) : metricMode === "calls" ? (
            <AreaChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <defs>
                <linearGradient id="callsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="year" stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis stroke="#f59e0b" tick={{ fill: "#f59e0b", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="calls"
                name="Annual Service Calls"
                stroke="#f59e0b"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#callsGradient)"
              />
            </AreaChart>
          ) : metricMode === "manpower" ? (
            <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="year" stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis stroke="#38bdf8" tick={{ fill: "#38bdf8", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="manpower"
                name="Technical Manpower"
                fill="#38bdf8"
                radius={[6, 6, 0, 0]}
                barSize={40}
              />
            </BarChart>
          ) : metricMode === "centers" ? (
            <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="year" stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis stroke="#818cf8" tick={{ fill: "#818cf8", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="centersCount"
                name="Direct Service Centers"
                fill="#6366f1"
                radius={[6, 6, 0, 0]}
                barSize={40}
              />
            </BarChart>
          ) : (
            <AreaChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <defs>
                <linearGradient id="sqFtGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="year" stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis stroke="#34d399" tick={{ fill: "#34d399", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="sqFt"
                name="Facility Footprint (sq.ft)"
                stroke="#10b981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#sqFtGradient)"
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Year-by-Year Milestone Cards beneath chart */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-6 pt-4 border-t border-slate-800">
        {growthData.map((d) => (
          <div key={d.year} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/90 text-center">
            <span className="text-xs font-bold text-cyan-400 block">{d.year}</span>
            <span className="text-[11px] font-semibold text-slate-200 block truncate">{d.centerMilestone}</span>
            <div className="text-[10px] text-slate-400 mt-1 flex justify-center gap-1.5">
              <span>{d.calls} calls</span>
              <span>•</span>
              <span>{d.manpower} staff</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
