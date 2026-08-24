import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Metallic Kinetic Geometry Component
const KineticPlateRing: React.FC<{ mouse: React.MutableRefObject<[number, number]> }> = ({ mouse }) => {
  const outerRingRef = useRef<THREE.Mesh>(null!);
  const innerPlateRef = useRef<THREE.Mesh>(null!);
  const accentCoreRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    // Slow ambient rotation
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += delta * 0.2;
      outerRingRef.current.rotation.y += delta * 0.25;

      // Parallax mouse tilt
      outerRingRef.current.rotation.x += (mouse.current[1] * 0.4 - outerRingRef.current.rotation.x) * 0.05;
      outerRingRef.current.rotation.y += (mouse.current[0] * 0.4 - outerRingRef.current.rotation.y) * 0.05;
    }

    if (innerPlateRef.current) {
      innerPlateRef.current.rotation.z -= delta * 0.15;
      innerPlateRef.current.rotation.y += delta * 0.3;
    }

    if (accentCoreRef.current) {
      accentCoreRef.current.rotation.x += delta * 0.4;
    }
  });

  return (
    <group scale={1.1}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Outer Architectural Metallic Ring (Olympic Geometry) */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[2.2, 0.18, 32, 100]} />
          <meshStandardMaterial
            color="#27272a"
            metalness={0.95}
            roughness={0.15}
            envMapIntensity={2.5}
          />
        </mesh>

        {/* Inner Precision Metallic Plate */}
        <mesh ref={innerPlateRef}>
          <torusGeometry args={[1.5, 0.12, 32, 80]} />
          <meshStandardMaterial
            color="#18181b"
            metalness={0.9}
            roughness={0.25}
          />
        </mesh>

        {/* Core Accent Ring (Iconic Kinetic Monogram element) */}
        <mesh ref={accentCoreRef}>
          <cylinderGeometry args={[0.7, 0.7, 0.15, 64]} />
          <meshStandardMaterial
            color="#CCFF00"
            emissive="#CCFF00"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
};

export const Hero3DCanvas: React.FC = () => {
  const mouse = useRef<[number, number]>([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ];
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Reduce 3D load on mobile devices for peak performance
  if (isMobile) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-64 h-64 rounded-full border border-accent/30 animate-pulse-glow flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border border-zinc-700" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-85">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#CCFF00" />
        <pointLight position={[0, 0, 4]} intensity={1.2} color="#CCFF00" />

        <React.Suspense fallback={null}>
          <KineticPlateRing mouse={mouse} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
