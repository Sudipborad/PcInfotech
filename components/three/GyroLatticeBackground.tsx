"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const GyroLatticeBackground: React.FC = () => {
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
    camera.position.set(0, 0, 180);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    // Offset toward right for nice background balance
    group.position.set(50, 0, 0);
    scene.add(group);

    // 3 Concentric Gimbal Rings
    const ringMatGold = new THREE.LineBasicMaterial({
      color: 0xd97706,
      transparent: true,
      opacity: 0.28,
    });
    const ringMatBlue = new THREE.LineBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.28,
    });
    const ringMatCyan = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
    });

    const createRing = (radius: number, mat: THREE.LineBasicMaterial) => {
      const points: THREE.Vector3[] = [];
      const segs = 64;
      for (let i = 0; i <= segs; i++) {
        const theta = (i / segs) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      return new THREE.Line(geom, mat);
    };

    const ring1 = createRing(55, ringMatGold);
    const ring2 = createRing(42, ringMatBlue);
    const ring3 = createRing(28, ringMatCyan);

    group.add(ring1);
    group.add(ring2);
    group.add(ring3);

    // Inner rotating octahedron
    const octGeom = new THREE.OctahedronGeometry(12, 0);
    const octWire = new THREE.WireframeGeometry(octGeom);
    const octMat = new THREE.LineBasicMaterial({
      color: 0xb45309,
      transparent: true,
      opacity: 0.35,
    });
    const centerCore = new THREE.LineSegments(octWire, octMat);
    group.add(centerCore);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      ring1.rotation.x = t * 0.25;
      ring1.rotation.y = t * 0.15;

      ring2.rotation.y = t * 0.35;
      ring2.rotation.z = t * 0.2;

      ring3.rotation.z = t * 0.45;
      ring3.rotation.x = t * 0.25;

      centerCore.rotation.x = t * 0.4;
      centerCore.rotation.y = t * 0.5;

      group.rotation.y = Math.sin(t * 0.2) * 0.15;

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
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      ring1.geometry.dispose();
      ring2.geometry.dispose();
      ring3.geometry.dispose();
      octGeom.dispose();
      octWire.dispose();
      ringMatGold.dispose();
      ringMatBlue.dispose();
      ringMatCyan.dispose();
      octMat.dispose();
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
