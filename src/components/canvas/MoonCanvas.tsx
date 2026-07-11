"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere } from "@react-three/drei";
import React, { useRef, useMemo } from "react";
import * as THREE from "three";

// Interactive gravitational particles
function GravitationalParticles({ count = 200 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate initial particle positions and random velocity offsets
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vels = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Position particles in a spherical shell around the moon
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.2 + Math.random() * 1.5; // Radius of orbital shell

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Random slow drift speeds
      vels[i * 3] = (Math.random() - 0.5) * 0.2;
      vels[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
      vels[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }
    return [pos, vels];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const time = state.clock.getElapsedTime();

    // Mouse coordinates in normalized 3D space
    const targetX = state.pointer.x * 3.5;
    const targetY = state.pointer.y * 3.5;

    for (let i = 0; i < count; i++) {
      const xIdx = i * 3;
      const yIdx = i * 3 + 1;
      const zIdx = i * 3 + 2;

      let x = positions[xIdx];
      let y = positions[yIdx];
      let z = positions[zIdx];

      // Add a subtle wave drift based on time
      x += Math.sin(time + i) * 0.002;
      y += Math.cos(time + i * 1.3) * 0.002;

      // Antigravity cursor influence: particles repel slightly if cursor is close
      const dx = x - targetX;
      const dy = y - targetY;
      const distSq = dx * dx + dy * dy;
      if (distSq < 2.5) {
        const force = (2.5 - distSq) * 0.05;
        x += dx * force;
        y += dy * force;
      }

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#818cf8"
        size={0.035}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 3D Lunar Core
function MoonCore() {
  const moonRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (moonRef.current) {
      // Rotation on its axis
      moonRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      // Subtle float oscillation
      moonRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
    }
  });

  return (
    <group>
      {/* Outer Glow / Atmosphere Sphere */}
      <Sphere args={[1.52, 32, 32]}>
        <meshBasicMaterial
          color="#312e81"
          wireframe={true}
          transparent={true}
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Main Lunar Wireframe Body */}
      <Sphere ref={moonRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.8}
          metalness={0.9}
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </Sphere>

      {/* Solid Inner Core with Dark Glassy Finish */}
      <Sphere args={[1.48, 32, 32]}>
        <meshPhysicalMaterial
          color="#0a0a14"
          roughness={0.2}
          metalness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.6}
          thickness={0.5}
        />
      </Sphere>
    </group>
  );
}

export default function MoonCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} color="#818cf8" />
        <pointLight position={[-5, -3, -5]} intensity={0.5} color="#4338ca" />
        
        <Float speed={1.5} floatIntensity={0.5} rotationIntensity={0.2}>
          <MoonCore />
        </Float>

        <GravitationalParticles count={250} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
