"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Cpu, Zap, RotateCw, Sparkles, Layers, ShieldCheck, Eye } from "lucide-react";
import Link from "next/link";

export const HeroThree3DCard: React.FC = () => {
  const [activeView, setActiveView] = useState<"3d" | "photo">("3d");
  const [laserActive, setLaserActive] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [selectedHotspot, setSelectedHotspot] = useState<string>("SMD Formatter Processor");

  const mountRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef(autoRotate);
  autoRotateRef.current = autoRotate;
  const laserActiveRef = useRef(laserActive);
  laserActiveRef.current = laserActive;

  useEffect(() => {
    if (activeView !== "3d" || !mountRef.current) return;
    const container = mountRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 14);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    mainLight.position.set(10, 15, 10);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const backLight = new THREE.DirectionalLight(0xf97316, 1.2);
    backLight.position.set(-10, -5, -8);
    scene.add(backLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 2, 20);
    pointLight.position.set(0, 3, 0);
    scene.add(pointLight);

    // --- Root Board Group ---
    const boardGroup = new THREE.Group();
    scene.add(boardGroup);

    // 1. PCB Mainboard (Layered Circuit Substrate)
    const pcbWidth = 9;
    const pcbHeight = 0.3;
    const pcbDepth = 7;
    const pcbGeometry = new THREE.BoxGeometry(pcbWidth, pcbHeight, pcbDepth);
    const pcbMaterial = new THREE.MeshStandardMaterial({
      color: 0x071e3d, // Dark technical navy
      roughness: 0.35,
      metalness: 0.7,
    });
    const pcb = new THREE.Mesh(pcbGeometry, pcbMaterial);
    pcb.receiveShadow = true;
    boardGroup.add(pcb);

    // PCB Border Rim (Gold Plated Ground Plane)
    const rimGeom = new THREE.BoxGeometry(pcbWidth + 0.1, 0.15, pcbDepth + 0.1);
    const rimMaterial = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Gold/copper
      roughness: 0.2,
      metalness: 0.9,
    });
    const rim = new THREE.Mesh(rimGeom, rimMaterial);
    rim.position.y = -0.1;
    boardGroup.add(rim);

    // 2. Main High-Density Processor IC (Main BGA Chip)
    const chipGeom = new THREE.BoxGeometry(2.4, 0.45, 2.4);
    const chipMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.85,
    });
    const mainChip = new THREE.Mesh(chipGeom, chipMaterial);
    mainChip.position.set(-0.8, 0.35, -0.4);
    mainChip.castShadow = true;
    boardGroup.add(mainChip);

    // Chip Heat Spreader Inlay (Brushed Aluminium with glowing logo)
    const spreaderGeom = new THREE.BoxGeometry(2.0, 0.05, 2.0);
    const spreaderMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.95,
      roughness: 0.1,
    });
    const spreader = new THREE.Mesh(spreaderGeom, spreaderMat);
    spreader.position.set(-0.8, 0.6, -0.4);
    boardGroup.add(spreader);

    // Glowing Core Micro-Die Indicator on chip
    const dieGeom = new THREE.BoxGeometry(0.7, 0.04, 0.7);
    const dieMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
    });
    const die = new THREE.Mesh(dieGeom, dieMat);
    die.position.set(-0.8, 0.64, -0.4);
    boardGroup.add(die);

    // 3. Subsidiary Logic IC Chips (EEPROM, RAM, ASIC)
    const subChipsData = [
      { x: 2.2, z: -1.8, w: 1.4, d: 1.1, name: "Flash EEPROM" },
      { x: 2.2, z: 0.2, w: 1.4, d: 1.6, name: "RAM Buffer" },
      { x: -3.0, z: -1.5, w: 1.2, d: 1.2, name: "ASIC Stepper Controller" },
      { x: -3.0, z: 1.2, w: 1.5, d: 1.0, name: "Power Management SMPS" },
    ];
    subChipsData.forEach((sc) => {
      const g = new THREE.BoxGeometry(sc.w, 0.25, sc.d);
      const m = new THREE.MeshStandardMaterial({
        color: 0x090d16,
        roughness: 0.3,
        metalness: 0.8,
      });
      const chip = new THREE.Mesh(g, m);
      chip.position.set(sc.x, 0.25, sc.z);
      chip.castShadow = true;
      boardGroup.add(chip);

      // Solder Lead Array along edges
      const leadGeom = new THREE.BoxGeometry(sc.w + 0.2, 0.08, sc.d + 0.2);
      const leadMat = new THREE.MeshStandardMaterial({
        color: 0xc0c0c0,
        metalness: 0.95,
        roughness: 0.15,
      });
      const leads = new THREE.Mesh(leadGeom, leadMat);
      leads.position.set(sc.x, 0.12, sc.z);
      boardGroup.add(leads);
    });

    // 4. Array of Solid Electrolytic Cylindrical Capacitors
    const capPositions = [
      [1.0, 2.2],
      [1.8, 2.2],
      [2.6, 2.2],
      [-1.0, 2.0],
      [-1.8, 2.0],
    ];
    const capGeom = new THREE.CylinderGeometry(0.32, 0.32, 0.9, 16);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Vibrant cyan/blue
      metalness: 0.9,
      roughness: 0.2,
    });
    const capTopGeom = new THREE.CylinderGeometry(0.28, 0.28, 0.05, 16);
    const capTopMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.95,
      roughness: 0.1,
    });

    capPositions.forEach(([cx, cz]) => {
      const cap = new THREE.Mesh(capGeom, capMat);
      cap.position.set(cx, 0.6, cz);
      cap.castShadow = true;
      boardGroup.add(cap);

      const top = new THREE.Mesh(capTopGeom, capTopMat);
      top.position.set(cx, 1.05, cz);
      boardGroup.add(top);
    });

    // 5. High-Precision Turbine Fan / Cooler Assembly (Rotates in animation)
    const fanGroup = new THREE.Group();
    fanGroup.position.set(-0.8, 0.75, -0.4);

    const fanShroudGeom = new THREE.TorusGeometry(1.3, 0.12, 16, 32);
    const fanShroudMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      metalness: 0.8,
      roughness: 0.2,
    });
    const fanShroud = new THREE.Mesh(fanShroudGeom, fanShroudMat);
    fanShroud.rotation.x = Math.PI / 2;
    fanGroup.add(fanShroud);

    // Blades
    const fanBlades = new THREE.Group();
    const bladeGeom = new THREE.BoxGeometry(0.2, 0.05, 0.9);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.1,
    });
    for (let b = 0; b < 6; b++) {
      const blade = new THREE.Mesh(bladeGeom, bladeMat);
      blade.rotation.y = (b * Math.PI) / 3;
      blade.position.set(
        Math.cos((b * Math.PI) / 3) * 0.45,
        0,
        Math.sin((b * Math.PI) / 3) * 0.45
      );
      fanBlades.add(blade);
    }
    fanGroup.add(fanBlades);
    boardGroup.add(fanGroup);

    // 6. Glowing Gold/Cyan Trace Grid Lines (Printed Circuit Tracks)
    const traceMaterial = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.7,
      linewidth: 2,
    });

    const createTrace = (points: [number, number, number][]) => {
      const pArr = points.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
      const geom = new THREE.BufferGeometry().setFromPoints(pArr);
      const line = new THREE.Line(geom, traceMaterial);
      boardGroup.add(line);
    };

    // Circuit track paths
    createTrace([[-0.8, 0.2, 0.8], [-0.8, 0.2, 1.8], [1.0, 0.2, 1.8]]);
    createTrace([[0.4, 0.2, -0.4], [1.5, 0.2, -0.4], [1.5, 0.2, -1.8]]);
    createTrace([[-2.0, 0.2, -0.4], [-2.4, 0.2, -0.4], [-2.4, 0.2, -1.5]]);
    createTrace([[-0.8, 0.2, -1.6], [-0.8, 0.2, -2.5], [1.2, 0.2, -2.5]]);
    createTrace([[2.2, 0.2, 1.0], [2.2, 0.2, 2.0], [0.0, 0.2, 2.0]]);

    // 7. Sweeping Diagnostic Laser Bar (Animates back & forth across board)
    const laserGeom = new THREE.CylinderGeometry(0.04, 0.04, pcbWidth + 0.4, 8);
    const laserMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.9,
    });
    const laserBar = new THREE.Mesh(laserGeom, laserMat);
    laserBar.rotation.z = Math.PI / 2;
    laserBar.position.set(0, 0.5, 0);
    boardGroup.add(laserBar);

    // Laser Light Beam Plane (glow fan downward)
    const planeGeom = new THREE.PlaneGeometry(pcbWidth + 0.4, 0.4);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const laserPlane = new THREE.Mesh(planeGeom, planeMat);
    laserPlane.rotation.x = Math.PI / 2;
    laserPlane.position.y = 0.3;
    boardGroup.add(laserPlane);

    // 8. Interactive Mouse Orbit / Drag
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      boardGroup.rotation.y += deltaX * 0.008;
      boardGroup.rotation.x += deltaY * 0.008;

      // Constrain tilt angle
      boardGroup.rotation.x = Math.max(-0.6, Math.min(0.6, boardGroup.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;
      boardGroup.rotation.y += deltaX * 0.01;
      boardGroup.rotation.x += deltaY * 0.01;
      boardGroup.rotation.x = Math.max(-0.6, Math.min(0.6, boardGroup.rotation.x));
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onMouseUp);

    // Initial board pitch angle
    boardGroup.rotation.x = 0.32;
    boardGroup.rotation.y = -0.45;

    // --- Animation Loop ---
    let reqId: number;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      reqId = requestAnimationFrame(renderLoop);
      const elapsed = clock.getElapsedTime();

      // Auto rotation when enabled and not dragging
      if (autoRotateRef.current && !isDragging) {
        boardGroup.rotation.y += 0.004;
        boardGroup.position.y = Math.sin(elapsed * 1.5) * 0.15;
      }

      // Rotate cooling blades
      fanBlades.rotation.y = -elapsed * 9;

      // Pulse chip core LED
      const pulse = (Math.sin(elapsed * 4) + 1) / 2;
      (die.material as THREE.MeshBasicMaterial).color.setRGB(
        0.2 + pulse * 0.3,
        0.7 + pulse * 0.3,
        1.0
      );

      // Sweeping Diagnostic Laser
      if (laserActiveRef.current) {
        const sweepZ = Math.sin(elapsed * 2.2) * (pcbDepth / 2 - 0.4);
        laserBar.position.z = sweepZ;
        laserPlane.position.z = sweepZ;
        laserBar.visible = true;
        laserPlane.visible = true;
      } else {
        laserBar.visible = false;
        laserPlane.visible = false;
      }

      renderer.render(scene, camera);
    };

    renderLoop();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      pcbGeometry.dispose();
      pcbMaterial.dispose();
      renderer.dispose();
    };
  }, [activeView]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* Top Header Toolbar */}
      <div className="p-3.5 sm:p-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between z-20 relative">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80" />
          <span className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive 3D Hardware Lab</span>
          </span>
        </div>

        {/* View Switcher: 3D Hologram vs Real Photo */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px] font-semibold">
          <button
            onClick={() => setActiveView("3d")}
            className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
              activeView === "3d"
                ? "bg-blue-600 text-white font-bold shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>3D Logic Model</span>
          </button>
          <button
            onClick={() => setActiveView("photo")}
            className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
              activeView === "photo"
                ? "bg-blue-600 text-white font-bold shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>ESD Lab Photo</span>
          </button>
        </div>
      </div>

      {/* Main Visual Display (3D Canvas or Photo) */}
      <div className="relative h-[340px] sm:h-[390px] w-full bg-slate-950 overflow-hidden cursor-grab active:cursor-grabbing">
        {activeView === "3d" ? (
          <>
            {/* Three.js Canvas Container */}
            <div ref={mountRef} className="w-full h-full" />

            {/* Drag to Orbit Overlay Prompt */}
            <div className="absolute top-3 left-3 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-300 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-blue-500/30 shadow-xs">
                <RotateCw className="w-3 h-3 text-blue-400 animate-spin" style={{ animationDuration: "6s" }} />
                <span>360° Drag to Orbit &bull; Real-Time Shader</span>
              </span>
            </div>

            {/* Bottom Floating Telemetry & Inspection Bar */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex flex-wrap items-center justify-between gap-2 text-white z-10">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <Zap className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block leading-none">
                    Telemetry Diagnostic
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    BGA Trace Integrity: 99.8% Nominal
                  </span>
                </div>
              </div>

              {/* 3D Action Toggles */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setLaserActive(!laserActive)}
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-colors flex items-center gap-1 ${
                    laserActive
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50"
                      : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
                  }`}
                  title="Toggle Real-Time Laser Scan Line"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{laserActive ? "Laser Scan ON" : "Laser Scan OFF"}</span>
                </button>
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                    autoRotate
                      ? "bg-blue-600/30 text-blue-300 border-blue-400/50"
                      : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
                  }`}
                  title="Toggle Auto Spin"
                >
                  <span>{autoRotate ? "Auto Orbit" : "Paused"}</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="relative w-full h-full bg-slate-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hardware-lab-workbench.jpg"
              alt="PC Infotech Component Diagnostic Workstation"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block">
                Proprietary Technical Infrastructure
              </span>
              <p className="text-xs text-slate-200">
                Component micro-soldering labs, oscilloscope analysis, and printer formatter board restoration.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info Strip */}
      <div className="p-3 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 px-4">
        <span className="flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>SMD Rework &bull; Logic Restoration</span>
        </span>
        <Link
          href="/services"
          className="text-blue-400 hover:text-blue-300 font-bold transition-colors"
        >
          Explore Lab Scopes &rarr;
        </Link>
      </div>
    </div>
  );
};
