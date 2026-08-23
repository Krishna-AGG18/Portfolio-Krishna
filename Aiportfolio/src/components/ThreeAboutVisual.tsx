"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const vertexShader = `
  attribute vec3 aRandom;
  varying vec3 vColor;
  uniform float uProgress;
  uniform float uTime;
  uniform vec3 uMouse;

  void main() {
    vColor = color;
    
    // Start scattered, assemble based on uProgress
    vec3 scattered = position + aRandom * 3.0;
    
    // Use an ease-out calculation for progress to make it snap nicely
    float p = smoothstep(0.0, 1.0, uProgress);
    vec3 currentPos = mix(scattered, position, p);
    
    // Professional depth interaction (no more blowing a hole in the face)
    float dist = distance(currentPos.xy, uMouse.xy);
    float force = smoothstep(2.5, 0.0, dist);
    
    // Create a gentle fluid ripple moving outward from the mouse in Z-space only
    currentPos.z += sin(dist * 4.0 - uTime * 3.0) * force * 0.15 * p;

    // Slight floating noise when assembled
    currentPos.z += sin(uTime * 1.5 + position.x * 5.0) * 0.04 * p;
    currentPos.x += cos(uTime * 1.0 + position.y * 5.0) * 0.02 * p;

    vec4 mvPosition = modelViewMatrix * vec4(currentPos, 1.0);
    
    // Fixed Size attenuation so particles are actually visible
    gl_PointSize = (20.0 / -mvPosition.z); 
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  void main() {
    // Make particles circular instead of square
    float d = distance(gl_PointCoord, vec2(0.5));
    if (d > 0.5) discard;
    
    // Add slight inner glow and boost brightness slightly so it pops on dark background
    float alpha = smoothstep(0.5, 0.1, d);
    vec3 boostedColor = mix(vColor, vec3(1.0), 0.1);
    gl_FragColor = vec4(boostedColor, alpha * 0.95);
  }
`;

function ParticlePortrait({ url }: { url: string }) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [geometryData, setGeometryData] = useState<{ positions: Float32Array, colors: Float32Array, randoms: Float32Array } | null>(null);

  const { viewport } = useThree();

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      // Scale down image for performance (we don't need a point for every single 4K pixel)
      // Increased scale for higher density
      const scale = 0.5; 
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      const positions = [];
      const colors = [];
      const randoms = [];

      // Step determines how many pixels we skip. Lower step = higher density
      const step = 2; 

      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const i = (y * canvas.width + x) * 4;
          const r = imgData[i];
          const g = imgData[i + 1];
          const b = imgData[i + 2];
          const a = imgData[i + 3];

          // Only create a particle if the pixel is visible (not transparent)
          if (a > 50) {
            // Map x and y to 3D space, centering it
            const widthScale = 4.8;
            const pX = (x / canvas.width - 0.5) * widthScale; 
            const pY = -(y / canvas.height - 0.5) * (widthScale * (canvas.height / canvas.width));
            
            positions.push(pX, pY, 0);
            colors.push(r / 255, g / 255, b / 255);
            
            // Deterministic scatter keeps React renders pure and avoids regenerating points.
            const seed = positions.length / 3;
            const rX = Math.sin(seed * 12.9898) * 0.9;
            const rY = Math.sin(seed * 78.233) * 0.9;
            const rZ = Math.sin(seed * 39.425) * 0.9;
            randoms.push(rX, rY, rZ);
          }
        }
      }

      setGeometryData({
        positions: new Float32Array(positions),
        colors: new Float32Array(colors),
        randoms: new Float32Array(randoms)
      });
    };

    return () => {
      img.onload = null;
    };
  }, [url]);

  useEffect(() => {
    if (materialRef.current && geometryData) {
      // Create ScrollTrigger to animate uProgress as user scrolls down
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-visual",
          start: "top 90%", // Start forming slightly before it hits the viewport
          end: "top 40%",   // Fully formed when it reaches the middle
          scrub: 1.5,       // Smooth scrubbing delay
        }
      });

      tl.fromTo(
        materialRef.current.uniforms.uProgress,
        { value: 0.0 },
        { value: 1.0, ease: "power2.inOut" }
      );

      return () => {
        tl.kill();
      };
    }
  }, [geometryData]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      
      // Calculate mouse position in world space
      const x = (state.pointer.x * viewport.width) / 2;
      const y = (state.pointer.y * viewport.height) / 2;
      
      // Prevent the ugly black hole in the center on initial load
      if (state.pointer.x !== 0 || state.pointer.y !== 0) {
        // Smoothly interpolate mouse position for the ripple effect
        materialRef.current.uniforms.uMouse.value.x += (x - materialRef.current.uniforms.uMouse.value.x) * 0.1;
        materialRef.current.uniforms.uMouse.value.y += (y - materialRef.current.uniforms.uMouse.value.y) * 0.1;

        // Apply a subtle 3D parallax tilt to the entire portrait based on mouse position
        if (pointsRef.current) {
          const targetRotX = (state.pointer.y) * 0.15;
          const targetRotY = (state.pointer.x) * 0.15;
          pointsRef.current.rotation.x += (targetRotX - pointsRef.current.rotation.x) * 0.05;
          pointsRef.current.rotation.y += (targetRotY - pointsRef.current.rotation.y) * 0.05;
        }
      }
    }
  });

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uProgress: { value: 0 },
    uMouse: { value: new THREE.Vector3(999, 999, 0) } // Start mouse far away
  }), []);

  if (!geometryData) return null;

  return (
    // Lower it slightly with position y: -0.4 to sit nicely on the bottom of the frame
    // Changed z position slightly forward to ensure it sits nicely
    <points ref={pointsRef} position={[0, -0.2, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[geometryData.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[geometryData.colors, 3]} />
        <bufferAttribute attach="attributes-aRandom" args={[geometryData.randoms, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        vertexColors={true}
        depthWrite={false}
      />
    </points>
  );
}

export function ThreeAboutVisual() {
  return (
    <div className="absolute inset-0 z-10" aria-label="Interactive 3D developer portrait">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.25]}>
        <ambientLight intensity={1} />
        <ParticlePortrait url="/krishna-editorial-portrait.png" />
      </Canvas>
    </div>
  );
}
