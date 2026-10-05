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
        <div className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-lg text-xs space-y-1.5">
          <p className="font-bold text-slate-900 text-sm">
            Year {label} • {dataPoint?.centerMilestone}
          </p>
          <div className="space-y-1 text-slate-700">
            {payload.map((entry: any, index: number) => (
              <div key={`item-${index}`} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5" style={{ color: entry.color }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                  {entry.name}:
                </span>
                <span className="font-bold text-slate-900">
                  {entry.value.toLocaleString()} {entry.name === "Facility Footprint" ? "sq.ft" : ""}
                </span>
              </div>
            ))}
          </div>
          {dataPoint && (
            <p className="text-[11px] text-slate-500 pt-1.5 border-t border-slate-100 max-w-xs leading-normal">
              {dataPoint.highlights}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl p-5 sm:p-7 shadow-xs">
      {/* Metric Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
        <div>
          <h4 className="text-base font-bold text-slate-900">
            Growth Metrics Visualization
          </h4>
          <p className="text-xs text-slate-500">
            Official operational data from 1995 founding through multi-state expansion
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setMetricMode("combined")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              metricMode === "combined"
                ? "bg-blue-700 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Calls & Manpower
          </button>
          <button
            onClick={() => setMetricMode("calls")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              metricMode === "calls"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Service Calls
          </button>
          <button
            onClick={() => setMetricMode("manpower")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              metricMode === "manpower"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Manpower
          </button>
          <button
            onClick={() => setMetricMode("centers")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              metricMode === "centers"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Service Centers
          </button>
          <button
            onClick={() => setMetricMode("facilityArea")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              metricMode === "facilityArea"
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="year" stroke="#64748b" tick={{ fill: "#475569", fontSize: 12 }} />
              <YAxis
                yAxisId="left"
                stroke="#0B4EA2"
                tick={{ fill: "#0B4EA2", fontSize: 12 }}
                label={{ value: "Manpower (Engineers)", angle: -90, position: "insideLeft", fill: "#0B4EA2", fontSize: 11 }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#d97706"
                tick={{ fill: "#d97706", fontSize: 12 }}
                label={{ value: "Annual Calls", angle: 90, position: "insideRight", fill: "#d97706", fontSize: 11 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }} />
              <Bar
                yAxisId="left"
                dataKey="manpower"
                name="Technical Manpower"
                fill="#0B4EA2"
                radius={[4, 4, 0, 0]}
                barSize={36}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="calls"
                name="Annual Service Calls"
                stroke="#d97706"
                strokeWidth={3}
                dot={{ r: 5, fill: "#d97706" }}
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          ) : metricMode === "calls" ? (
            <AreaChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <defs>
                <linearGradient id="callsGradientLight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d97706" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#d97706" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="year" stroke="#64748b" tick={{ fill: "#475569", fontSize: 12 }} />
              <YAxis stroke="#d97706" tick={{ fill: "#d97706", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="calls"
                name="Annual Service Calls"
                stroke="#d97706"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#callsGradientLight)"
              />
            </AreaChart>
          ) : metricMode === "manpower" ? (
            <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="year" stroke="#64748b" tick={{ fill: "#475569", fontSize: 12 }} />
              <YAxis stroke="#0B4EA2" tick={{ fill: "#0B4EA2", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="manpower"
                name="Technical Manpower"
                fill="#0B4EA2"
                radius={[4, 4, 0, 0]}
                barSize={40}
              />
            </BarChart>
          ) : metricMode === "centers" ? (
            <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="year" stroke="#64748b" tick={{ fill: "#475569", fontSize: 12 }} />
              <YAxis stroke="#4f46e5" tick={{ fill: "#4f46e5", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="centersCount"
                name="Direct Service Centers"
                fill="#4f46e5"
                radius={[4, 4, 0, 0]}
                barSize={40}
              />
            </BarChart>
          ) : (
            <AreaChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <defs>
                <linearGradient id="sqFtGradientLight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#059669" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="year" stroke="#64748b" tick={{ fill: "#475569", fontSize: 12 }} />
              <YAxis stroke="#059669" tick={{ fill: "#059669", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="sqFt"
                name="Facility Footprint (sq.ft)"
                stroke="#059669"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#sqFtGradientLight)"
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Year-by-Year Milestone Cards beneath chart */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-6 pt-4 border-t border-slate-200">
        {growthData.map((d) => (
          <div key={d.year} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
            <span className="text-xs font-bold text-blue-700 block">{d.year}</span>
            <span className="text-[11px] font-semibold text-slate-800 block truncate">{d.centerMilestone}</span>
            <div className="text-[10px] text-slate-500 mt-1 flex justify-center gap-1.5">
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
