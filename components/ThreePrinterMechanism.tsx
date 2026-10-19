"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Printer, Play, Pause, Rotate3D, Layers, Sparkles } from "lucide-react";

export const ThreePrinterMechanism: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [activeSubsystem, setActiveSubsystem] = useState<string>("Micro-Piezo Carriage");

  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;
  const speedRef = useRef(speedMultiplier);
  speedRef.current = speedMultiplier;

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 6, 13);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    keyLight.position.set(8, 12, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf97316, 1.2);
    fillLight.position.set(-8, -4, -6);
    scene.add(fillLight);

    const carriageSpot = new THREE.PointLight(0x06b6d4, 2.5, 12);
    scene.add(carriageSpot);

    // --- Root Assembly Group ---
    const rootAssembly = new THREE.Group();
    scene.add(rootAssembly);

    // 1. Steel Dual Carriage Guide Rails
    const railLength = 11;
    const railGeom = new THREE.CylinderGeometry(0.12, 0.12, railLength, 32);
    const railMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.95,
      roughness: 0.1,
    });

    const topRail = new THREE.Mesh(railGeom, railMat);
    topRail.rotation.z = Math.PI / 2;
    topRail.position.set(0, 1.2, 0);
    rootAssembly.add(topRail);

    const bottomRail = new THREE.Mesh(railGeom, railMat);
    bottomRail.rotation.z = Math.PI / 2;
    bottomRail.position.set(0, -0.6, 0);
    rootAssembly.add(bottomRail);

    // Rail End Mount Chassis Plates
    const endChassisGeom = new THREE.BoxGeometry(0.6, 3.2, 2.4);
    const endChassisMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.8,
      roughness: 0.3,
    });

    const leftChassis = new THREE.Mesh(endChassisGeom, endChassisMat);
    leftChassis.position.set(-railLength / 2 - 0.3, 0.3, 0);
    rootAssembly.add(leftChassis);

    const rightChassis = new THREE.Mesh(endChassisGeom, endChassisMat);
    rightChassis.position.set(railLength / 2 + 0.3, 0.3, 0);
    rootAssembly.add(rightChassis);

    // 2. Stepper Drive Motor (Left side)
    const motorGeom = new THREE.CylinderGeometry(0.7, 0.7, 1.6, 24);
    const motorMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.25,
    });
    const motor = new THREE.Mesh(motorGeom, motorMat);
    motor.rotation.z = Math.PI / 2;
    motor.position.set(-railLength / 2 - 1.2, 1.2, 0);
    rootAssembly.add(motor);

    // Drive Pulley & Timing Belt
    const pulleyGeom = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 20);
    const pulleyMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.9,
      roughness: 0.2,
    });
    const leftPulley = new THREE.Mesh(pulleyGeom, pulleyMat);
    leftPulley.rotation.z = Math.PI / 2;
    leftPulley.position.set(-railLength / 2, 1.2, 0.3);
    rootAssembly.add(leftPulley);

    const rightPulley = leftPulley.clone();
    rightPulley.position.x = railLength / 2;
    rootAssembly.add(rightPulley);

    // 3. Moving Print Head Carriage Assembly
    const carriageGroup = new THREE.Group();
    carriageGroup.position.set(0, 0.3, 0);
    rootAssembly.add(carriageGroup);

    // Carriage Body Housing
    const carriageBodyGeom = new THREE.BoxGeometry(2.4, 2.6, 2.0);
    const carriageBodyMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Vibrant technical cyan
      metalness: 0.7,
      roughness: 0.3,
    });
    const carriageBody = new THREE.Mesh(carriageBodyGeom, carriageBodyMat);
    carriageGroup.add(carriageBody);

    // Ink Tank / Cartridge Bays (4 slots for CMYK)
    const tankColors = [0x00ffff, 0xff00ff, 0xffff00, 0x1e293b];
    const tankGeom = new THREE.BoxGeometry(0.45, 1.6, 0.8);
    tankColors.forEach((col, idx) => {
      const mat = new THREE.MeshStandardMaterial({
        color: col,
        metalness: 0.5,
        roughness: 0.3,
      });
      const tank = new THREE.Mesh(tankGeom, mat);
      tank.position.set(-0.75 + idx * 0.5, 0.4, 0.6);
      carriageGroup.add(tank);
    });

    // Precision Nozzle Array Plate (Base of Carriage)
    const nozzleGeom = new THREE.BoxGeometry(1.8, 0.1, 1.2);
    const nozzleMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37, // Gold plated piezo nozzles
      metalness: 0.95,
      roughness: 0.1,
    });
    const nozzlePlate = new THREE.Mesh(nozzleGeom, nozzleMat);
    nozzlePlate.position.set(0, -1.35, 0);
    carriageGroup.add(nozzlePlate);

    // Micro-Spraying Droplet Particle Cone (Animated Ink Jets downward)
    const jetCount = 60;
    const jetPositions = new Float32Array(jetCount * 3);
    const jetColors = new Float32Array(jetCount * 3);

    for (let j = 0; j < jetCount; j++) {
      jetPositions[j * 3] = (Math.random() - 0.5) * 1.4;
      jetPositions[j * 3 + 1] = -1.4 - Math.random() * 1.5;
      jetPositions[j * 3 + 2] = (Math.random() - 0.5) * 0.8;

      jetColors[j * 3] = 0.2;
      jetColors[j * 3 + 1] = 0.8;
      jetColors[j * 3 + 2] = 1.0;
    }

    const jetGeom = new THREE.BufferGeometry();
    jetGeom.setAttribute("position", new THREE.BufferAttribute(jetPositions, 3));
    jetGeom.setAttribute("color", new THREE.BufferAttribute(jetColors, 3));

    const jetMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const inkSpray = new THREE.Points(jetGeom, jetMaterial);
    carriageGroup.add(inkSpray);

    // 4. Rotating Paper Feed Drive Rollers (Below Carriage)
    const rollerGroup = new THREE.Group();
    rollerGroup.position.set(0, -2.4, 0);
    rootAssembly.add(rollerGroup);

    const rollerGeom = new THREE.CylinderGeometry(0.5, 0.5, railLength + 1, 24);
    const rollerMat = new THREE.MeshStandardMaterial({
      color: 0x334155, // Rubber coated black
      roughness: 0.8,
      metalness: 0.2,
    });
    const platenRoller = new THREE.Mesh(rollerGeom, rollerMat);
    platenRoller.rotation.z = Math.PI / 2;
    rollerGroup.add(platenRoller);

    // Paper Substrate Surface (Feeding across platen)
    const paperGeom = new THREE.PlaneGeometry(8, 4);
    const paperMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.4,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });
    const paperMesh = new THREE.Mesh(paperGeom, paperMat);
    paperMesh.rotation.x = -Math.PI / 2;
    paperMesh.position.set(0, -1.8, 0.5);
    rootAssembly.add(paperMesh);

    // 5. Interactive Mouse Orbit / Drag
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

      rootAssembly.rotation.y += deltaX * 0.008;
      rootAssembly.rotation.x += deltaY * 0.008;
      rootAssembly.rotation.x = Math.max(-0.5, Math.min(0.5, rootAssembly.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Initial Tilt
    rootAssembly.rotation.x = 0.2;
    rootAssembly.rotation.y = -0.3;

    // --- Animation Loop ---
    let animId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const elapsed = clock.getElapsedTime();

      if (isPlayingRef.current) {
        const speed = speedRef.current;
        // Carriage reciprocating motion back and forth
        const travelRange = (railLength / 2) - 1.8;
        const carriageX = Math.sin(elapsed * 2.5 * speed) * travelRange;
        carriageGroup.position.x = carriageX;
        carriageSpot.position.x = carriageX;
        carriageSpot.position.y = 1.0;
        carriageSpot.position.z = 1.5;

        // Rotate pulleys and rollers
        leftPulley.rotation.x += 0.08 * speed;
        rightPulley.rotation.x += 0.08 * speed;
        platenRoller.rotation.x += 0.04 * speed;

        // Animate ink spray droplets downward
        const pos = jetGeom.attributes.position.array as Float32Array;
        for (let j = 0; j < jetCount; j++) {
          pos[j * 3 + 1] -= 0.08 * speed;
          if (pos[j * 3 + 1] < -2.2) {
            pos[j * 3 + 1] = -1.4;
            pos[j * 3] = (Math.random() - 0.5) * 1.4;
          }
        }
        jetGeom.attributes.position.needsUpdate = true;
      }

      // Gentle floating oscillation
      if (!isDragging) {
        rootAssembly.position.y = Math.sin(elapsed * 1.2) * 0.1;
      }

      renderer.render(scene, camera);
    };

    render();

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      railGeom.dispose();
      railMat.dispose();
      carriageBodyGeom.dispose();
      carriageBodyMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 text-white">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive 3D Engineering Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            High-Precision Print Engine &amp; Carriage Dynamics
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Real-time Three.js simulation of dual-rail carriage motion, micro-piezo nozzle array firing, and synchronised roller feeder mechanisms.
          </p>
        </div>

        {/* Play / Speed Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isPlaying
                ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? "Pause Cycle" : "Run Cycle"}</span>
          </button>

          <button
            onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : 1)}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-blue-300 transition-colors"
          >
            {speedMultiplier === 1 ? "1.0x Speed" : "2.0x Boost"}
          </button>
        </div>
      </div>

      {/* 3D Canvas Stage */}
      <div className="relative h-[360px] sm:h-[420px] w-full rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden cursor-grab active:cursor-grabbing">
        <div ref={mountRef} className="w-full h-full" />

        {/* Orbit Guidance Badge */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-300 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/80">
            <Rotate3D className="w-3.5 h-3.5 text-blue-400" />
            <span>Click &amp; Drag 360&deg; Orbit View</span>
          </span>
        </div>

        {/* Real-Time Telemetry Gauges */}
        <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Linear Carriage Velocity
              </span>
              <span className="font-mono font-bold text-cyan-400">
                {isPlaying ? (speedMultiplier === 1 ? "1.25 m/s Nominal" : "2.50 m/s Turbo") : "0.00 m/s (Holding)"}
              </span>
            </div>
            <div className="hidden sm:block border-l border-slate-700 pl-4">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Nozzle Fire Rate
              </span>
              <span className="font-mono font-bold text-emerald-400">
                {isPlaying ? "48.2 kHz Active" : "Standby"}
              </span>
            </div>
            <div className="hidden md:block border-l border-slate-700 pl-4">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Position Sensor
              </span>
              <span className="font-mono font-bold text-amber-400">
                Optical Encoder &plusmn;0.005mm
              </span>
            </div>
          </div>

          <span className="text-[11px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
            Micro-Piezo &amp; Laser Specs
          </span>
        </div>
      </div>
    </div>
  );
};
