"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      1,
      2000
    );
    camera.position.z = 450;
    camera.position.y = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent
    container.appendChild(renderer.domElement);

    // 1. Interactive 3D Circuit Wave / Particle Lattice
    const countX = 55;
    const countY = 35;
    const sep = 32;
    const totalParticles = countX * countY;
    const positions = new Float32Array(totalParticles * 3);
    const colors = new Float32Array(totalParticles * 3);
    const scales = new Float32Array(totalParticles);

    const color1 = new THREE.Color("#0B4EA2"); // PCIS Blue
    const color2 = new THREE.Color("#38bdf8"); // Sky cyan
    const color3 = new THREE.Color("#f97316"); // Orange accent

    let i = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iy = 0; iy < countY; iy++) {
        const x = (ix - countX / 2) * sep;
        const z = (iy - countY / 2) * sep;
        const y = Math.sin((ix / countX) * Math.PI * 4) * 20;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const ratio = (ix + iy) / (countX + countY);
        let c = color1.clone().lerp(color2, ratio);
        if (Math.random() > 0.94) {
          c = color3; // occasional glowing chip accent
        }

        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;

        scales[i] = Math.random() * 2 + 1.5;
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Shader/Point Material for glowing particles
    const particleMaterial = new THREE.PointsMaterial({
      size: 4.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(geometry, particleMaterial);
    particlesMesh.position.y = -60;
    particlesMesh.rotation.x = 0.35;
    scene.add(particlesMesh);

    // 2. Floating Geometric Holographic Circuit Polyhedrons
    const polyGroup = new THREE.Group();
    const icosaGeom = new THREE.IcosahedronGeometry(18, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const octaGeom = new THREE.OctahedronGeometry(14, 0);
    const orangeWireMaterial = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const polyNodes: { mesh: THREE.Mesh; speedX: number; speedY: number; rotSpeed: number }[] = [];
    for (let p = 0; p < 7; p++) {
      const isOrange = p % 3 === 0;
      const mesh = new THREE.Mesh(
        isOrange ? octaGeom : icosaGeom,
        isOrange ? orangeWireMaterial : wireMaterial
      );
      mesh.position.set(
        (Math.random() - 0.5) * 800,
        Math.random() * 250 - 50,
        (Math.random() - 0.5) * 400
      );
      polyGroup.add(mesh);
      polyNodes.push({
        mesh,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        rotSpeed: (Math.random() * 0.01 + 0.005) * (p % 2 === 0 ? 1 : -1),
      });
    }
    scene.add(polyGroup);

    // 3. Mouse Parallax & Movement tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - windowHalfX) * 0.2;
      mouseY = (e.clientY - windowHalfY) * 0.2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX * 0.8;
      camera.position.y = 80 - targetY * 0.5;
      camera.lookAt(0, 0, 0);

      // Animate particle wave
      const posArray = geometry.attributes.position.array as Float32Array;
      let idx = 0;
      for (let ix = 0; ix < countX; ix++) {
        for (let iy = 0; iy < countY; iy++) {
          const u = (ix / countX) * Math.PI * 5 + elapsedTime * 1.5;
          const v = (iy / countY) * Math.PI * 5 + elapsedTime * 1.2;
          posArray[idx * 3 + 1] =
            Math.sin(u) * 22 + Math.cos(v) * 22;
          idx++;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Rotate particles slightly
      particlesMesh.rotation.y = elapsedTime * 0.03;

      // Animate floating holographic polyhedrons
      polyNodes.forEach((node) => {
        node.mesh.rotation.x += node.rotSpeed;
        node.mesh.rotation.y += node.rotSpeed * 1.2;
        node.mesh.position.y += Math.sin(elapsedTime * 2 + node.mesh.position.x) * 0.25;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      icosaGeom.dispose();
      octaGeom.dispose();
      wireMaterial.dispose();
      orangeWireMaterial.dispose();
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
