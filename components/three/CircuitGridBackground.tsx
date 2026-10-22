"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const CircuitGridBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 45, 130);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Perspective Floor Grid with custom lines
    const gridSize = 240;
    const gridDivisions = 24;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x0B4EA2, 0x38bdf8);
    // @ts-ignore
    gridHelper.material.opacity = 0.22;
    // @ts-ignore
    gridHelper.material.transparent = true;
    gridHelper.position.y = -18;
    group.add(gridHelper);

    // 2. Vertical Logic Data Traces / Light Beacons
    const traceCount = 14;
    const traceGeom = new THREE.CylinderGeometry(0.5, 0.5, 35, 6);
    const traceMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.35,
    });
    const traceMatCyan = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });

    const traces: THREE.Mesh[] = [];
    for (let i = 0; i < traceCount; i++) {
      const mesh = new THREE.Mesh(traceGeom, i % 2 === 0 ? traceMat : traceMatCyan);
      const step = gridSize / gridDivisions;
      const gx = (Math.floor((Math.random() - 0.5) * 16)) * step;
      const gz = (Math.floor((Math.random() - 0.5) * 16)) * step;
      mesh.position.set(gx, -18 + 17.5, gz);
      group.add(mesh);
      traces.push(mesh);
    }

    // 3. Floating Circuit Packets (Points)
    const packetCount = 45;
    const packetGeom = new THREE.BufferGeometry();
    const packetPos = new Float32Array(packetCount * 3);
    for (let i = 0; i < packetCount; i++) {
      packetPos[i * 3] = (Math.random() - 0.5) * 200;
      packetPos[i * 3 + 1] = Math.random() * 40 - 15;
      packetPos[i * 3 + 2] = (Math.random() - 0.5) * 200;
    }
    packetGeom.setAttribute("position", new THREE.BufferAttribute(packetPos, 3));
    const packetMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 2.2,
      transparent: true,
      opacity: 0.45,
    });
    const packets = new THREE.Points(packetGeom, packetMat);
    group.add(packets);

    // Motion & visibility guards
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let isVisible = true;
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0.05 }
      );
      observer.observe(container);
    }

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;
      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }
      const elapsedTime = clock.getElapsedTime();

      // Pulsing trace heights
      traces.forEach((t, idx) => {
        const s = Math.sin(elapsedTime * 2 + idx) * 0.4 + 1;
        t.scale.y = Math.max(0.2, s);
      });

      // Slowly glide grid backwards to simulate forward progress
      gridHelper.position.z = (elapsedTime * 8) % (gridSize / gridDivisions);

      // Rotate whole perspective slightly
      group.rotation.y = Math.sin(elapsedTime * 0.15) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      if (observer) observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      gridHelper.dispose();
      traceGeom.dispose();
      traceMat.dispose();
      traceMatCyan.dispose();
      packetGeom.dispose();
      packetMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-75"
      aria-hidden="true"
    />
  );
};
