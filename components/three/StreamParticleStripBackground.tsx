"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const StreamParticleStripBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const particleCount = 85;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds: number[] = [];

    const halfW = 120;
    const halfH = 25;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * halfW * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * halfH * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      speeds.push(Math.random() * 0.4 + 0.2);
    }

    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 2,
      transparent: true,
      opacity: 0.55,
    });

    const particles = new THREE.Points(geom, mat);
    scene.add(particles);

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

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;
      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      const pos = geom.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let x = pos.getX(i);
        x += speeds[i];
        if (x > halfW) {
          x = -halfW;
        }
        pos.setX(i, x);
      }
      pos.needsUpdate = true;

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
      geom.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-60"
      aria-hidden="true"
    />
  );
};
