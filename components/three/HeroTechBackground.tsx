"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroTechBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      1,
      2000
    );
    camera.position.set(0, 90, 480);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Dynamic Undulating 3D Particle Wave
    const countX = 50;
    const countY = 32;
    const sep = 32;
    const total = countX * countY;
    const positions = new Float32Array(total * 3);
    const colors = new Float32Array(total * 3);

    const colorBlue = new THREE.Color("#0B4EA2");
    const colorCyan = new THREE.Color("#0284c7");
    const colorOrange = new THREE.Color("#ea580c");

    let idx = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iy = 0; iy < countY; iy++) {
        const x = (ix - countX / 2) * sep;
        const z = (iy - countY / 2) * sep;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = 0;
        positions[idx * 3 + 2] = z;

        const ratio = (ix + iy) / (countX + countY);
        let c = colorBlue.clone().lerp(colorCyan, ratio);
        if (Math.random() > 0.95) c = colorOrange;

        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;
        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.NormalBlending,
    });

    const points = new THREE.Points(geometry, material);
    points.position.y = -60;
    points.rotation.x = 0.35;
    scene.add(points);

    // Floating Holographic Circuit Cubes
    const cubeGroup = new THREE.Group();
    const cubeGeom = new THREE.BoxGeometry(16, 16, 16);
    const cubeMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const cubes: { mesh: THREE.Mesh; rotX: number; rotY: number; speedY: number }[] = [];
    for (let i = 0; i < 8; i++) {
      const mesh = new THREE.Mesh(cubeGeom, cubeMat);
      mesh.position.set(
        (Math.random() - 0.5) * 800,
        Math.random() * 200 - 40,
        (Math.random() - 0.5) * 400
      );
      cubeGroup.add(mesh);
      cubes.push({
        mesh,
        rotX: Math.random() * 0.01 + 0.005,
        rotY: Math.random() * 0.01 + 0.005,
        speedY: (Math.random() - 0.5) * 0.3,
      });
    }
    scene.add(cubeGroup);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    const halfX = window.innerWidth / 2;
    const halfY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - halfX) * 0.15;
      mouseY = (e.clientY - halfY) * 0.15;
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

    // Animation Loop
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

      // Camera parallax
      camera.position.x += (mouseX - camera.position.x) * 0.04;
      camera.position.y += (90 - mouseY * 0.5 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Undulate wave
      const pos = geometry.attributes.position.array as Float32Array;
      let pIdx = 0;
      for (let ix = 0; ix < countX; ix++) {
        for (let iy = 0; iy < countY; iy++) {
          const u = (ix / countX) * Math.PI * 4 + elapsed * 1.6;
          const v = (iy / countY) * Math.PI * 4 + elapsed * 1.3;
          pos[pIdx * 3 + 1] = Math.sin(u) * 22 + Math.cos(v) * 22;
          pIdx++;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      cubes.forEach((c) => {
        c.mesh.rotation.x += c.rotX;
        c.mesh.rotation.y += c.rotY;
        c.mesh.position.y += Math.sin(elapsed + c.mesh.position.x) * 0.2;
      });

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
      geometry.dispose();
      material.dispose();
      cubeGeom.dispose();
      cubeMat.dispose();
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
