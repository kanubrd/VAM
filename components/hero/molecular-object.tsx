'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

/* ── Floating particles ── */
function Particles({ count = 60 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 8,
      z: (Math.random() - 0.5) * 4,
      speed: 0.2 + Math.random() * 0.4,
      offset: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    positions.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(t * p.speed + p.offset) * 0.3,
        p.y + Math.cos(t * p.speed + p.offset) * 0.3,
        p.z,
      );
      dummy.scale.setScalar(0.04 + Math.sin(t + p.offset) * 0.01);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#17A2B8" transparent opacity={0.35} />
    </instancedMesh>
  );
}

/* ── Orbit rings ── */
function OrbitRing({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed;
    }
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color="#17A2B8" transparent opacity={0.2} />
    </mesh>
  );
}

/* ── Core molecular sphere ── */
function MolecularCore({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.18;
    mesh.current.rotation.x = t * 0.08;
    // subtle mouse parallax
    mesh.current.position.x = THREE.MathUtils.lerp(
      mesh.current.position.x, mouse.current[0] * 0.4, 0.05
    );
    mesh.current.position.y = THREE.MathUtils.lerp(
      mesh.current.position.y, mouse.current[1] * 0.4, 0.05
    );
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={mesh}>
        <Sphere args={[1.5, 128, 128]}>
          <MeshDistortMaterial
            color="#17A2B8"
            distort={0.38}
            speed={2.2}
            roughness={0.08}
            metalness={0.15}
            envMapIntensity={1.2}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

/* ── Scene ── */
function Scene({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} color="#ffffff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#D1F2F7" />
      <pointLight position={[-4, -4, -4]} intensity={0.8} color="#17A2B8" />
      <pointLight position={[4, 4, 2]} intensity={0.5} color="#D1F2F7" />
      <hemisphereLight args={['#E6F7FA', '#D1F2F7', 0.6]} />

      <MolecularCore mouse={mouse} />
      <OrbitRing radius={2.4} speed={0.25} tilt={Math.PI / 4} />
      <OrbitRing radius={3.0} speed={-0.18} tilt={Math.PI / 6} />
      <OrbitRing radius={3.6} speed={0.12} tilt={Math.PI / 3} />
      <Particles count={50} />
    </>
  );
}

/* ── Exported canvas wrapper ── */
export function MolecularObject() {
  const mouse = useRef<[number, number]>([0, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current = [
      ((e.clientX - rect.left) / rect.width  - 0.5) * 2,
      -((e.clientY - rect.top)  / rect.height - 0.5) * 2,
    ];
  };

  return (
    <div
      className="w-full h-full min-h-[400px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouse.current = [0, 0]; }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
