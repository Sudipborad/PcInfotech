"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const CtaVortexBackground: React.FC = () => {
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
    camera.position.set(0, 0, 150);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group of concentric pulsing cyber rings
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const ringCount = 9;
    const rings: {
      mesh: THREE.LineLoop;
      speedZ: number;
      baseRadius: number;
      initZ: number;
    }[] = [];

    const ringMatCyan = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
    });
    const ringMatBlue = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.25,
    });

    for (let i = 0; i < ringCount; i++) {
      const radius = 25 + i * 16;
      const points: THREE.Vector3[] = [];
      const segments = 48;
      for (let s = 0; s < segments; s++) {
        const theta = (s / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const mesh = new THREE.LineLoop(geom, i % 2 === 0 ? ringMatCyan : ringMatBlue);

      const z = -i * 25;
      mesh.position.z = z;
      ringGroup.add(mesh);

      rings.push({
        mesh,
        speedZ: 0.25 + i * 0.05,
        baseRadius: radius,
        initZ: z,
      });
    }

    // Floating tunnel particles
    const partCount = 70;
    const partGeom = new THREE.BufferGeometry();
    const partPos = new Float32Array(partCount * 3);
    for (let i = 0; i < partCount; i++) {
      const radius = Math.random() * 80 + 10;
      const theta = Math.random() * Math.PI * 2;
      partPos[i * 3] = Math.cos(theta) * radius;
      partPos[i * 3 + 1] = Math.sin(theta) * radius;
      partPos[i * 3 + 2] = (Math.random() - 0.5) * 200;
    }
    partGeom.setAttribute("position", new THREE.BufferAttribute(partPos, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 2,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(partGeom, partMat);
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
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;
      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }
      const elapsedTime = clock.getElapsedTime();

      rings.forEach((ring, idx) => {
        ring.mesh.position.z += 0.25;
        if (ring.mesh.position.z > 80) {
          ring.mesh.position.z = -180;
        }
        ring.mesh.rotation.z = Math.sin(elapsedTime * 0.5 + idx) * 0.2;
      });

      ringGroup.rotation.z = elapsedTime * 0.06;
      particles.rotation.z = -elapsedTime * 0.04;

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
      rings.forEach((r) => r.mesh.geometry.dispose());
      ringMatCyan.dispose();
      ringMatBlue.dispose();
      partGeom.dispose();
      partMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70"
      aria-hidden="true"
    />
  );
};
