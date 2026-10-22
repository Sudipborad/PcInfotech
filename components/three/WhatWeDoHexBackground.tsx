"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const WhatWeDoHexBackground: React.FC = () => {
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
    camera.position.set(0, 0, 320);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Floating Hexagonal Ring Network
    const hexGroup = new THREE.Group();
    scene.add(hexGroup);

    const hexCount = 18;
    const hexMeshes: { mesh: THREE.LineLoop; speedRot: number; initY: number }[] = [];

    for (let i = 0; i < hexCount; i++) {
      const radius = Math.random() * 25 + 15;
      const hexShape = new THREE.Shape();
      for (let s = 0; s < 6; s++) {
        const angle = (s * Math.PI) / 3;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (s === 0) hexShape.moveTo(x, y);
        else hexShape.lineTo(x, y);
      }
      hexShape.closePath();

      const points = hexShape.getPoints();
      const geom = new THREE.BufferGeometry().setFromPoints(points);

      const isHighlight = i % 4 === 0;
      const mat = new THREE.LineBasicMaterial({
        color: isHighlight ? 0x0284c7 : 0x0B4EA2,
        transparent: true,
        opacity: isHighlight ? 0.35 : 0.18,
        linewidth: 1.5,
      });

      const loop = new THREE.LineLoop(geom, mat);
      const posX = (Math.random() - 0.5) * 600;
      const posY = (Math.random() - 0.5) * 350;
      const posZ = (Math.random() - 0.5) * 200;

      loop.position.set(posX, posY, posZ);
      loop.rotation.z = Math.random() * Math.PI;
      hexGroup.add(loop);

      hexMeshes.push({
        mesh: loop,
        speedRot: (Math.random() * 0.006 + 0.002) * (i % 2 === 0 ? 1 : -1),
        initY: posY,
      });
    }

    // Connective laser node web
    const nodeCount = 35;
    const nodePositions = new Float32Array(nodeCount * 3);
    for (let n = 0; n < nodeCount; n++) {
      nodePositions[n * 3] = (Math.random() - 0.5) * 600;
      nodePositions[n * 3 + 1] = (Math.random() - 0.5) * 300;
      nodePositions[n * 3 + 2] = (Math.random() - 0.5) * 150;
    }
    const nodeGeom = new THREE.BufferGeometry();
    nodeGeom.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: 0x0284c7,
      size: 4,
      transparent: true,
      opacity: 0.45,
    });
    const nodes = new THREE.Points(nodeGeom, nodeMat);
    scene.add(nodes);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.08;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.08;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

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
      const elapsed = clock.getElapsedTime();

      hexGroup.rotation.y = mouseX * 0.002;
      hexGroup.rotation.x = -mouseY * 0.002;

      hexMeshes.forEach((h, idx) => {
        h.mesh.rotation.z += h.speedRot;
        h.mesh.position.y = h.initY + Math.sin(elapsed * 1.5 + idx) * 8;
      });

      nodes.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      if (observer) observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      nodeGeom.dispose();
      nodeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40 mix-blend-multiply"
      aria-hidden="true"
    />
  );
};
