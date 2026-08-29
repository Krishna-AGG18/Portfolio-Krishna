"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// --- TYPES & DATA ---
export type NodeId = 'fullstack' | 'backend' | 'aiml' | 'nlp' | 'systemdesign';

export interface NodeData {
  id: NodeId;
  label: string;
  position: [number, number, number];
  color: string;
}

export const NODES: NodeData[] = [
  { id: 'fullstack', label: 'FULL STACK', position: [2, 0.5, 1.5], color: '#ec4899' }, // Pink
  { id: 'backend', label: 'BACKEND', position: [-2, -0.5, 1.5], color: '#eab308' }, // Yellow
  { id: 'aiml', label: 'AI / ML', position: [0, 2.5, -1], color: '#10b981' }, // Emerald
  { id: 'nlp', label: 'NLP', position: [-1.5, 1.5, -2], color: '#8b5cf6' }, // Purple
  { id: 'systemdesign', label: 'SYSTEM DESIGN', position: [1.8, -1.5, -1], color: '#f97316' }, // Orange
];

interface CoreProps {
  activeNode: NodeId | null;
  setActiveNode: (id: NodeId | null) => void;
  hoveredNode: NodeId | null;
  setHoveredNode: (id: NodeId | null) => void;
}

// --- SUB-COMPONENTS ---

function CentralCore({ activeNode }: { activeNode: NodeId | null }) {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  const activeColor = useMemo(() => {
    if (!activeNode) return new THREE.Color("#06b6d4"); // Default cyan
    const node = NODES.find(n => n.id === activeNode);
    return new THREE.Color(node?.color || "#06b6d4");
  }, [activeNode]);

  useFrame((state, delta) => {
    if (outerRef.current && innerRef.current) {
      // Base rotation
      outerRef.current.rotation.y += delta * 0.1;
      outerRef.current.rotation.x += delta * 0.05;
      
      innerRef.current.rotation.y -= delta * 0.15;
      
      // Pulse scale if a node is active
      const targetScale = activeNode ? 1.2 : 1.0;
      outerRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
      
      // Idle breathing
      const breathe = Math.sin(state.clock.elapsedTime * 2) * 0.02;
      innerRef.current.scale.setScalar(0.8 + breathe);
      
      // Dynamic color shift
      const outerMat = outerRef.current.material as THREE.MeshStandardMaterial;
      const innerMat = innerRef.current.material as THREE.MeshStandardMaterial;
      outerMat.color.lerp(activeColor, 0.05);
      innerMat.emissive.lerp(activeColor, 0.05);
    }
  });

  return (
    <group>
      {/* Outer translucent shell */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </mesh>
      
      {/* Inner solid core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial 
          color="#000000" 
          emissive="#06b6d4"
          emissiveIntensity={0.3}
          wireframe={false}
        />
      </mesh>
    </group>
  );
}

function InteractiveNode({ 
  data, 
  isActive, 
  isHovered, 
  onClick, 
  onPointerOver, 
  onPointerOut 
}: { 
  data: NodeData; 
  isActive: boolean; 
  isHovered: boolean;
  onClick: () => void;
  onPointerOver: () => void;
  onPointerOut: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      const targetScale = isActive ? 1.5 : (isHovered ? 1.2 : 1.0);
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Pulse emission based on active state
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      const targetEmissive = isActive ? 2.0 : (isHovered ? 1.2 : 0.4);
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, targetEmissive, 0.1);
      
      // Color shift to white when active for extra pop
      const baseColor = new THREE.Color(data.color);
      const targetColor = isActive ? new THREE.Color("#ffffff") : baseColor;
      mat.color.lerp(targetColor, 0.1);
      mat.emissive.lerp(isActive ? baseColor : baseColor, 0.1); // Keep emissive colorful even if base is white
    }
  });

  return (
    <group>
      {/* Connection Line to Core */}
      <Line
        points={[[0, 0, 0], data.position]}
        color={data.color}
        opacity={isActive ? 0.8 : (isHovered ? 0.4 : 0.15)}
        transparent
        lineWidth={isActive ? 2 : 1}
      />
      
      {/* The Node itself */}
      <mesh 
        ref={meshRef}
        position={data.position}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
          onPointerOver();
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'auto';
          onPointerOut();
        }}
      >
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial 
          color={data.color} 
          emissive={data.color}
          emissiveIntensity={0.4}
          toneMapped={false} 
        />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  // Generate random particles
  const [positions] = useMemo(() => {
    const count = 100;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return [pos];
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.02;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a1a1aa"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

function SceneRig() {
  const { camera, pointer } = useThree();
  
  useFrame(() => {
    // Subtle parallax effect based on mouse movement
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 1.5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 1.5, 0.05);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

// --- MAIN EXPORT ---

export function ThreeDeveloperCore({ activeNode, setActiveNode, hoveredNode, setHoveredNode }: CoreProps) {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]} // limit pixel ratio for performance
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        
        <SceneRig />

        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <group>
            <CentralCore activeNode={activeNode} />
            
            {NODES.map((node) => (
              <InteractiveNode 
                key={node.id}
                data={node}
                isActive={activeNode === node.id}
                isHovered={hoveredNode === node.id}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                onPointerOver={() => setHoveredNode(node.id)}
                onPointerOut={() => setHoveredNode(null)}
              />
            ))}
          </group>
        </Float>

        <FloatingParticles />
      </Canvas>
    </div>
  );
}
