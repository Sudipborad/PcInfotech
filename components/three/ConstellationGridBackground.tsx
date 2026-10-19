"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ConstellationGridBackground: React.FC = () => {
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
    camera.position.set(0, 0, 220);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Node network with proximity connection lines
    const nodeCount = 38;
    const nodes: {
      pos: THREE.Vector3;
      vel: THREE.Vector3;
      mesh: THREE.Mesh;
    }[] = [];

    const nodeGeom = new THREE.SphereGeometry(1.2, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });
    const nodeMatAmber = new THREE.MeshBasicMaterial({ color: 0xea580c });

    const maxBounds = { x: 140, y: 80, z: 60 };

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * maxBounds.x * 2,
        (Math.random() - 0.5) * maxBounds.y * 2,
        (Math.random() - 0.5) * maxBounds.z * 2
      );
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 0.12,
        (Math.random() - 0.5) * 0.12,
        (Math.random() - 0.5) * 0.08
      );
      const mesh = new THREE.Mesh(nodeGeom, i % 5 === 0 ? nodeMatAmber : nodeMat);
      mesh.position.copy(pos);
      group.add(mesh);

      nodes.push({ pos, vel, mesh });
    }

    // Dynamic line geometry for connections
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
    });
    const lineGeom = new THREE.BufferGeometry();
    const lineMesh = new THREE.LineSegments(lineGeom, lineMat);
    group.add(lineMesh);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Update node positions with gentle bounding box bounce
      nodes.forEach((node) => {
        node.pos.add(node.vel);

        if (Math.abs(node.pos.x) > maxBounds.x) node.vel.x *= -1;
        if (Math.abs(node.pos.y) > maxBounds.y) node.vel.y *= -1;
        if (Math.abs(node.pos.z) > maxBounds.z) node.vel.z *= -1;

        node.mesh.position.copy(node.pos);
      });

      // Recalculate proximity connections
      const linePositions: number[] = [];
      const connectDist = 48;
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const d = nodes[i].pos.distanceTo(nodes[j].pos);
          if (d < connectDist) {
            linePositions.push(
              nodes[i].pos.x,
              nodes[i].pos.y,
              nodes[i].pos.z,
              nodes[j].pos.x,
              nodes[j].pos.y,
              nodes[j].pos.z
            );
          }
        }
      }

      lineGeom.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      group.rotation.y = elapsedTime * 0.03;
      group.rotation.x = Math.sin(elapsedTime * 0.1) * 0.04;

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
      nodeGeom.dispose();
      nodeMat.dispose();
      nodeMatAmber.dispose();
      lineGeom.dispose();
      lineMat.dispose();
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
