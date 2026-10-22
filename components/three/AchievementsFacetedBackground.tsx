"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const AchievementsFacetedBackground: React.FC = () => {
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
    camera.position.set(0, 0, 200);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group for floating award polyhedra
    const crystalGroup = new THREE.Group();
    scene.add(crystalGroup);

    const crystals: {
      mesh: THREE.Mesh;
      wireMesh: THREE.LineSegments;
      rotSpeedX: number;
      rotSpeedY: number;
      initY: number;
      floatSpeed: number;
    }[] = [];

    const geomIco = new THREE.IcosahedronGeometry(8, 0);
    const geomOct = new THREE.OctahedronGeometry(10, 0);
    const geomDodec = new THREE.DodecahedronGeometry(7, 0);

    const goldMat = new THREE.MeshBasicMaterial({
      color: 0xd97706,
      wireframe: false,
      transparent: true,
      opacity: 0.12,
    });
    const blueMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: false,
      transparent: true,
      opacity: 0.12,
    });

    const wireMatGold = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.28,
    });
    const wireMatBlue = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.28,
    });

    const geoms = [geomIco, geomOct, geomDodec];

    for (let i = 0; i < 14; i++) {
      const g = geoms[i % geoms.length];
      const isGold = i % 2 === 0;
      const mat = isGold ? goldMat : blueMat;
      const wireMat = isGold ? wireMatGold : wireMatBlue;

      const mesh = new THREE.Mesh(g, mat);
      const wireGeom = new THREE.WireframeGeometry(g);
      const wireMesh = new THREE.LineSegments(wireGeom, wireMat);

      const posX = (Math.random() - 0.5) * 260;
      const posY = (Math.random() - 0.5) * 140;
      const posZ = (Math.random() - 0.5) * 80;

      mesh.position.set(posX, posY, posZ);
      wireMesh.position.set(posX, posY, posZ);

      const scale = Math.random() * 0.7 + 0.6;
      mesh.scale.set(scale, scale, scale);
      wireMesh.scale.set(scale, scale, scale);

      crystalGroup.add(mesh);
      crystalGroup.add(wireMesh);

      crystals.push({
        mesh,
        wireMesh,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        initY: posY,
        floatSpeed: Math.random() * 0.8 + 0.5,
      });
    }

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

      crystals.forEach((item, idx) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
        item.wireMesh.rotation.x = item.mesh.rotation.x;
        item.wireMesh.rotation.y = item.mesh.rotation.y;

        const floatOffset = Math.sin(elapsedTime * item.floatSpeed + idx) * 4;
        item.mesh.position.y = item.initY + floatOffset;
        item.wireMesh.position.y = item.initY + floatOffset;
      });

      crystalGroup.rotation.y = elapsedTime * 0.02;

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
      geoms.forEach((g) => g.dispose());
      goldMat.dispose();
      blueMat.dispose();
      wireMatGold.dispose();
      wireMatBlue.dispose();
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
