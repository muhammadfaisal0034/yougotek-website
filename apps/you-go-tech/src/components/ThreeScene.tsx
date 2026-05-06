"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, Float } from "@react-three/drei";
import * as THREE from "three";

function SpinningCube() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.4;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh}>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <meshStandardMaterial 
          color="#0284c7" 
          emissive="#0284c7" 
          emissiveIntensity={0.4} 
          wireframe 
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  // Memoize counts to avoid unnecessary recalculations
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const starCount = isMobile ? 800 : 1000;
  const sparkleCount = isMobile ? 30 : 60;

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Performance scaling
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          alpha: true
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#0284c7" intensity={0.8} />
        <SpinningCube />
        <Stars 
          radius={100} 
          depth={50} 
          count={starCount} 
          factor={4} 
          saturation={0} 
          fade 
          speed={0.5} 
        />
        <Sparkles 
          count={sparkleCount} 
          scale={10} 
          size={1.2} 
          speed={0.3} 
          color="#0284c7" 
        />
      </Canvas>
    </div>
  );
}
