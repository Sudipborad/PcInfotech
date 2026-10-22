"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const GrowthMeshBackground: React.FC = () => {
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
    camera.position.set(0, 55, 160);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 3D Topographic Data Grid Wireframe
    const width = 300;
    const height = 180;
    const segW = 48;
    const segH = 28;
    const geometry = new THREE.PlaneGeometry(width, height, segW, segH);
    geometry.rotateX(-Math.PI / 2.3);

    // Vertex colors based on height
    const pos = geometry.attributes.position;
    const count = pos.count;
    const colors = new Float32Array(count * 3);
    const colorLow = new THREE.Color("#0284c7");
    const colorHigh = new THREE.Color("#4f46e5");

    for (let i = 0; i < count; i++) {
      const c = colorLow.clone().lerp(colorHigh, (i % segW) / segW);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.MeshBasicMaterial({
      vertexColors: true,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -20;
    scene.add(mesh);

    // Dynamic upward trending data spark points
    const sparkCount = 35;
    const sparkGeom = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount; i++) {
      sparkPos[i * 3] = (Math.random() - 0.5) * 220;
      sparkPos[i * 3 + 1] = Math.random() * 60 - 10;
      sparkPos[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }
    sparkGeom.setAttribute("position", new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 2.5,
      transparent: true,
      opacity: 0.45,
    });
    const sparks = new THREE.Points(sparkGeom, sparkMat);
    scene.add(sparks);

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

      // Undulate mesh vertices to simulate growth waves
      const positionAttr = geometry.attributes.position;
      for (let i = 0; i < positionAttr.count; i++) {
        const u = i % (segW + 1);
        const v = Math.floor(i / (segW + 1));
        const zWave =
          Math.sin(u * 0.35 + elapsedTime * 1.5) * 4.5 +
          Math.cos(v * 0.45 + elapsedTime * 1.2) * 4.5;
        positionAttr.setZ(i, zWave);
      }
      positionAttr.needsUpdate = true;

      // Slowly rotate mesh and sparks
      mesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.05;
      sparks.rotation.y = elapsedTime * 0.04;

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
      geometry.dispose();
      material.dispose();
      sparkGeom.dispose();
      sparkMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
