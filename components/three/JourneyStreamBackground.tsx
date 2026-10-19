"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const JourneyStreamBackground: React.FC = () => {
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
    camera.position.set(0, 40, 280);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Double Helix / Flowing Chrono-Ribbon Stream
    const curvePointsCount = 80;
    const pointsA: THREE.Vector3[] = [];
    const pointsB: THREE.Vector3[] = [];

    const widthSpan = 600;
    for (let i = 0; i < curvePointsCount; i++) {
      const t = (i / curvePointsCount) * Math.PI * 6;
      const x = (i / curvePointsCount - 0.5) * widthSpan;
      const yA = Math.sin(t) * 35;
      const zA = Math.cos(t) * 35;

      const yB = Math.sin(t + Math.PI) * 35;
      const zB = Math.cos(t + Math.PI) * 35;

      pointsA.push(new THREE.Vector3(x, yA, zA));
      pointsB.push(new THREE.Vector3(x, yB, zB));
    }

    const curveA = new THREE.CatmullRomCurve3(pointsA);
    const curveB = new THREE.CatmullRomCurve3(pointsB);

    const tubeGeomA = new THREE.TubeGeometry(curveA, 70, 1.2, 8, false);
    const tubeGeomB = new THREE.TubeGeometry(curveB, 70, 1.2, 8, false);

    const tubeMatA = new THREE.MeshBasicMaterial({
      color: 0x0284c7, // Sky cyan
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const tubeMatB = new THREE.MeshBasicMaterial({
      color: 0x0B4EA2, // Darker blue
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    const meshA = new THREE.Mesh(tubeGeomA, tubeMatA);
    const meshB = new THREE.Mesh(tubeGeomB, tubeMatB);
    scene.add(meshA);
    scene.add(meshB);

    // Floating Timeline Milestone Sparks
    const sparkCount = 40;
    const sparkPositions = new Float32Array(sparkCount * 3);
    for (let s = 0; s < sparkCount; s++) {
      sparkPositions[s * 3] = (Math.random() - 0.5) * widthSpan;
      sparkPositions[s * 3 + 1] = (Math.random() - 0.5) * 80;
      sparkPositions[s * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    const sparkGeom = new THREE.BufferGeometry();
    sparkGeom.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xea580c, // Milestone orange
      size: 4.5,
      transparent: true,
      opacity: 0.6,
    });
    const sparks = new THREE.Points(sparkGeom, sparkMat);
    scene.add(sparks);

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      meshA.rotation.x = elapsed * 0.2;
      meshB.rotation.x = elapsed * 0.2;

      meshA.position.y = Math.sin(elapsed) * 10;
      meshB.position.y = Math.sin(elapsed) * 10;

      sparks.rotation.y = elapsed * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      tubeGeomA.dispose();
      tubeGeomB.dispose();
      tubeMatA.dispose();
      tubeMatB.dispose();
      sparkGeom.dispose();
      sparkMat.dispose();
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
