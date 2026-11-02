"use client";
import React, { useEffect, useState, useRef } from "react";

export const BrandLoadingScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [navTransition, setNavTransition] = useState(false);
  const [fading, setFading] = useState(false);
  const [targetPos, setTargetPos] = useState<{ x: number; y: number; scale: number }>({
    x: 0,
    y: 0,
    scale: 0.16,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Measure exact navbar logo target position
    const calculateNavPosition = () => {
      const navImg = document.querySelector('header img[alt="PC Infotech Solutions"]');
      if (navImg && logoRef.current) {
        const navRect = navImg.getBoundingClientRect();
        const logoRect = logoRef.current.getBoundingClientRect();

        const navCenterX = navRect.left + navRect.width / 2;
        const navCenterY = navRect.top + navRect.height / 2;
        const logoCenterX = window.innerWidth / 2;
        const logoCenterY = window.innerHeight / 2;

        const deltaX = navCenterX - logoCenterX;
        const deltaY = navCenterY - logoCenterY;
        const scaleRatio = navRect.height / (logoRect.height || 180);

        setTargetPos({
          x: deltaX,
          y: deltaY,
          scale: Math.max(0.12, Math.min(0.24, scaleRatio || 0.16)),
        });
      } else {
        const logoCenterX = window.innerWidth / 2;
        const logoCenterY = window.innerHeight / 2;
        const navTargetX = Math.max(36, window.innerWidth * 0.08 + 40);
        const navTargetY = 28;
        setTargetPos({
          x: navTargetX - logoCenterX,
          y: navTargetY - logoCenterY,
          scale: 0.15,
        });
      }
    };

    calculateNavPosition();
    window.addEventListener("resize", calculateNavPosition);

    // Timeline:
    // Frame 0: Streams and vibrant 3D brand logo are active immediately with crisp opacity
    // 1400ms: Smooth flight into navbar position
    // 2150ms: Soft white dissolve reveals live webpage
    // 2600ms: Complete unmount
    const navFlyTimer = setTimeout(() => {
      calculateNavPosition();
      setNavTransition(true);
    }, 1400);

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 2150);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2600);

    // Canvas energetic light streaks animation across the logo
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const startTime = performance.now();
    const animDuration = 1450;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const getBezierPoint = (
      p0: { x: number; y: number },
      p1: { x: number; y: number },
      p2: { x: number; y: number },
      p3: { x: number; y: number },
      t: number
    ) => {
      const u = 1 - t;
      return {
        x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
        y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y,
      };
    };

    // Tracks aligned to stream diagonally through the 3D logo
    const tracks = [
      { color: "#0B4EA2", glowColor: "#38bdf8", width: 5.5, offsetY: -12, speed: 1.0, opacity: 0.95, type: "blue" },
      { color: "#1d4ed8", glowColor: "#60a5fa", width: 3.5, offsetY: -22, speed: 0.95, opacity: 0.85, type: "blue" },
      { color: "#38bdf8", glowColor: "#bae6fd", width: 2.0, offsetY: 0, speed: 1.05, opacity: 0.8, type: "blue" },

      { color: "#dc2626", glowColor: "#f87171", width: 5.5, offsetY: 6, speed: 1.0, opacity: 0.95, type: "red" },
      { color: "#b91c1c", glowColor: "#fb923c", width: 3.5, offsetY: 18, speed: 0.95, opacity: 0.85, type: "red" },
      { color: "#ef4444", glowColor: "#fca5a5", width: 2.0, offsetY: -6, speed: 1.05, opacity: 0.8, type: "red" },
    ];

    const render = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / animDuration);

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Angled light streak paths cutting diagonally across the center logo
      const bluePath = [
        { x: -40, y: cy * 0.72 },
        { x: cx * 0.75, y: cy * 0.88 },
        { x: cx * 1.05, y: cy * 0.95 },
        { x: w + 40, y: cy * 1.14 },
      ];

      const redPath = [
        { x: -40, y: cy * 1.2 },
        { x: cx * 0.7, y: cy * 1.14 },
        { x: cx * 1.08, y: cy * 1.12 },
        { x: w + 40, y: cy * 1.34 },
      ];

      if (progress < 0.95) {
        tracks.forEach((track) => {
          const path = track.type === "blue" ? bluePath : redPath;
          const streamP = Math.min(1, 0.12 + progress * track.speed * 1.1);

          ctx.save();
          ctx.lineWidth = track.width;
          ctx.strokeStyle = track.color;
          ctx.shadowColor = track.glowColor;
          ctx.shadowBlur = 16;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.globalAlpha = Math.sin(Math.min(1, streamP) * Math.PI) * track.opacity;

          ctx.beginPath();
          const steps = 40;
          let started = false;
          const endStep = Math.floor(streamP * steps);

          for (let i = 0; i <= endStep; i++) {
            const t = i / steps;
            const pt = getBezierPoint(
              path[0],
              { x: path[1].x, y: path[1].y + track.offsetY },
              { x: path[2].x, y: path[2].y + track.offsetY },
              { x: path[3].x, y: path[3].y + track.offsetY * 0.5 },
              t
            );
            if (!started) {
              ctx.moveTo(pt.x, pt.y);
              started = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          }
          ctx.stroke();

          // Glowing energy head
          if (endStep > 0 && streamP < 0.96) {
            const head = getBezierPoint(
              path[0],
              { x: path[1].x, y: path[1].y + track.offsetY },
              { x: path[2].x, y: path[2].y + track.offsetY },
              { x: path[3].x, y: path[3].y + track.offsetY * 0.5 },
              streamP
            );
            ctx.fillStyle = "#ffffff";
            ctx.shadowColor = track.glowColor;
            ctx.shadowBlur = 16;
            ctx.beginPath();
            ctx.arc(head.x, head.y, track.width * 1.15, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        });
      }

      if (progress < 1) {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      clearTimeout(navFlyTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", calculateNavPosition);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-label="Loading PC Infotech Solutions"
      role="status"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none pointer-events-none transition-opacity duration-500 ease-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: navTransition
          ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(241,245,249,0.85) 60%, rgba(226,232,240,0.7) 100%)"
          : "radial-gradient(circle at 50% 50%, #ffffff 0%, #f1f5f9 55%, #e2e8f0 100%)",
        transition: "background 0.8s ease-out, opacity 0.5s ease-out",
      }}
    >
      {/* Dynamic Light Ribbon Canvases */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full pointer-events-none z-20 transition-opacity duration-300 ${
          navTransition ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Center 3D Logo Stage which glides gracefully into the Navbar */}
      <div
        ref={logoRef}
        className="relative z-30 w-full max-w-[500px] sm:max-w-[560px] px-8 flex flex-col items-center justify-center"
        style={{
          transform: navTransition
            ? `translate(${targetPos.x}px, ${targetPos.y}px) scale(${targetPos.scale})`
            : "translate(0px, 0px) scale(1)",
          transformOrigin: "center center",
          transition: navTransition
            ? "transform 0.85s cubic-bezier(0.25, 1, 0.35, 1)"
            : "transform 0.4s ease-out",
        }}
      >
        {/* Soft 3D Floor Shadow */}
        <div
          className={`w-72 sm:w-88 h-7 bg-slate-900/15 rounded-[100%] blur-md translate-y-7 transition-all duration-400 ease-out ${
            !navTransition ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />

        {/* 3D Geometric Vector Brand Logo - Always 100% Crisp & Saturated */}
        <div className="relative w-full aspect-[680/430] flex items-center justify-center">
          <svg
            viewBox="40 70 680 430"
            className="w-full h-full filter drop-shadow-[0_22px_32px_rgba(15,23,42,0.24)] drop-shadow-[0_4px_10px_rgba(15,23,42,0.12)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Rich 3D Blue Extrusion Gradient */}
              <linearGradient id="brandBlueExtrude" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="28%" stopColor="#0B4EA2" />
                <stop offset="75%" stopColor="#08336c" />
                <stop offset="100%" stopColor="#041a38" />
              </linearGradient>

              {/* Rich 3D Red Extrusion Gradient */}
              <linearGradient id="brandRedExtrude" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="25%" stopColor="#dc2626" />
                <stop offset="78%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#691111" />
              </linearGradient>
            </defs>

            {/* Blue 3D Geometric Blocks: Outer P frame, i stem, s blocks */}
            <g fill="url(#brandBlueExtrude)">
              {/* P Outer Column */}
              <rect x="78" y="105" width="47" height="355" rx="2" />
              {/* P Top Bar */}
              <rect x="78" y="105" width="300" height="45" rx="2" />
              {/* P Right Column */}
              <rect x="331" y="105" width="47" height="253" rx="2" />
              {/* P Inward Return Bar */}
              <rect x="230" y="312" width="148" height="46" rx="2" />

              {/* i Stem */}
              <rect x="432" y="210" width="47" height="200" rx="2" />

              {/* s Top Bar */}
              <rect x="535" y="210" width="147" height="45" rx="2" />
              {/* s Upper Left Drop */}
              <rect x="535" y="210" width="47" height="148" rx="2" />
              {/* s Middle Bar */}
              <rect x="535" y="312" width="147" height="46" rx="2" />
              {/* s Lower Right Drop */}
              <rect x="635" y="312" width="47" height="98" rx="2" />

              {/* Specular Edge Highlights */}
              <rect x="78" y="105" width="300" height="2.5" fill="#93c5fd" opacity="0.9" />
              <rect x="535" y="210" width="147" height="2.5" fill="#93c5fd" opacity="0.9" />
              <rect x="535" y="312" width="147" height="2.5" fill="#93c5fd" opacity="0.9" />
            </g>

            {/* Red 3D Geometric Blocks: C Spine, Top Return, Full Bottom Base & i-dot */}
            <g fill="url(#brandRedExtrude)">
              {/* P Inner Top Return */}
              <rect x="150" y="210" width="125" height="45" rx="2" />
              {/* P Inner Left Column */}
              <rect x="150" y="210" width="50" height="250" rx="2" />
              {/* Full Bottom Base Bar extending under P, i and S */}
              <rect x="150" y="412" width="532" height="48" rx="2" />
              {/* i-Dot Square */}
              <rect x="432" y="105" width="46" height="43" rx="2" />

              {/* Specular Edge Highlights */}
              <rect x="150" y="210" width="125" height="2.5" fill="#fca5a5" opacity="0.9" />
              <rect x="150" y="412" width="532" height="2.5" fill="#fca5a5" opacity="0.9" />
              <rect x="432" y="105" width="46" height="2.5" fill="#fca5a5" opacity="0.9" />
            </g>
          </svg>
        </div>

        {/* Clean Official Subtitle & Dual-Color Indicator */}
        <div
          className={`mt-4 flex flex-col items-center space-y-2 text-center transition-all duration-300 ${
            !navTransition ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <span className="text-[12px] sm:text-[14px] font-black tracking-[0.26em] uppercase text-slate-800">
            PC INFOTECH SOLUTIONS
          </span>
          <div className="flex items-center justify-center gap-1.5 mt-1.5">
            <div className="w-7 h-[2.5px] bg-[#0B4EA2] rounded-full" />
            <div className="w-7 h-[2.5px] bg-[#dc2626] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
