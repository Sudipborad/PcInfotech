"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ReachGlobeBackground: React.FC = () => {
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
    camera.position.set(0, 20, 160);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    // Offset globe towards right or center
    globeGroup.position.set(45, -5, 0);
    scene.add(globeGroup);

    // 1. Digital Wireframe Sphere (Latitude & Longitude)
    const sphereRadius = 45;
    const sphereGeom = new THREE.SphereGeometry(sphereRadius, 24, 24);
    const wireGeom = new THREE.WireframeGeometry(sphereGeom);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x0284c7, // Sky Blue
      transparent: true,
      opacity: 0.18,
    });
    const sphereWire = new THREE.LineSegments(wireGeom, wireMat);
    globeGroup.add(sphereWire);

    // 2. Outer Orbiting Ring
    const ringRadius = sphereRadius * 1.35;
    const ringGeom = new THREE.BufferGeometry();
    const ringPoints: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      ringPoints.push(new THREE.Vector3(Math.cos(theta) * ringRadius, 0, Math.sin(theta) * ringRadius));
    }
    ringGeom.setFromPoints(ringPoints);
    const ringMat = new THREE.LineBasicMaterial({
      color: 0x0B4EA2,
      transparent: true,
      opacity: 0.28,
    });
    const orbitRing = new THREE.Line(ringGeom, ringMat);
    orbitRing.rotation.x = Math.PI / 4;
    globeGroup.add(orbitRing);

    // 3. Service Hub Pins / Nodes on Globe Surface
    const hubCount = 13;
    const hubGroup = new THREE.Group();
    globeGroup.add(hubGroup);

    const hubPositions: THREE.Vector3[] = [];
    const nodeGeom = new THREE.SphereGeometry(1.4, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
    });
    const nodeMatHighlight = new THREE.MeshBasicMaterial({
      color: 0xea580c, // Brand orange highlight
    });

    for (let i = 0; i < hubCount; i++) {
      // Focus nodes roughly in a cluster representing Western India region
      const phi = (Math.PI / 2.8) + (Math.random() - 0.5) * 0.7;
      const theta = (Math.PI / 3) + (Math.random() - 0.5) * 0.9;

      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.cos(phi);
      const z = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const pos = new THREE.Vector3(x, y, z);
      hubPositions.push(pos);

      const nodeMesh = new THREE.Mesh(nodeGeom, i % 3 === 0 ? nodeMatHighlight : nodeMat);
      nodeMesh.position.copy(pos);
      hubGroup.add(nodeMesh);
    }

    // 4. Arcs connecting hubs
    const arcMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
    });

    for (let i = 0; i < hubPositions.length; i++) {
      for (let j = i + 1; j < hubPositions.length; j++) {
        if (hubPositions[i].distanceTo(hubPositions[j]) < 45) {
          const mid = hubPositions[i].clone().add(hubPositions[j]).multiplyScalar(0.5);
          mid.normalize().multiplyScalar(sphereRadius * 1.15); // elevated arc
          const curve = new THREE.QuadraticBezierCurve3(hubPositions[i], mid, hubPositions[j]);
          const arcGeom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(20));
          const arcLine = new THREE.Line(arcGeom, arcMat);
          hubGroup.add(arcLine);
        }
      }
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

      globeGroup.rotation.y = elapsedTime * 0.08;
      orbitRing.rotation.z = elapsedTime * 0.05;

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
      sphereGeom.dispose();
      wireMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      nodeGeom.dispose();
      nodeMat.dispose();
      nodeMatHighlight.dispose();
      arcMat.dispose();
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
