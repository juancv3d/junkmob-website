"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ParticleWavesProps {
  particleColor?: string;
  bgColor?: string;
  density?: number;
  speed?: number;
  amplitude?: number;
  separation?: number;
  className?: string;
}

export default function ParticleWaves({
  particleColor = "#C8A415",
  bgColor = "#0a1f0d",
  density = 40,
  speed = 0.08,
  amplitude = 50,
  separation = 100,
  className = "",
}: ParticleWavesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
    camera.position.z = 1000;
    camera.position.y = 800;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(new THREE.Color(bgColor), 1);
    container.appendChild(renderer.domElement);

    // Create particle material
    const canvas2d = document.createElement("canvas");
    canvas2d.width = 32;
    canvas2d.height = 32;
    const ctx = canvas2d.getContext("2d")!;
    ctx.clearRect(0, 0, 32, 32);
    ctx.fillStyle = particleColor;
    ctx.beginPath();
    ctx.arc(16, 16, 12, 0, Math.PI * 2, true);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas2d);
    texture.needsUpdate = true;

    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
    });

    // Create particles
    const particles: THREE.Sprite[] = [];
    for (let ix = 0; ix < density; ix++) {
      for (let iy = 0; iy < density; iy++) {
        const particle = new THREE.Sprite(material);
        particle.position.x = ix * separation - (density * separation) / 2;
        particle.position.z = iy * separation - (density * separation) / 2;
        particle.position.y = -400;
        particle.scale.setScalar(10);
        particles.push(particle);
        scene.add(particle);
      }
    }

    // Mouse tracking
    const mouse = { x: 0, y: 0 };
    const windowHalf = { x: width / 2, y: height / 2 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX - windowHalf.x;
      mouse.y = e.clientY - windowHalf.y;
    };

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      windowHalf.x = w / 2;
      windowHalf.y = h / 2;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    // Animation
    let count = 0;
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      camera.position.x += (mouse.x - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      let i = 0;
      for (let ix = 0; ix < density; ix++) {
        for (let iy = 0; iy < density; iy++) {
          if (i < particles.length) {
            const particle = particles[i++];
            particle.position.y =
              -400 +
              Math.sin((ix + count) * 0.3) * amplitude +
              Math.sin((iy + count) * 0.5) * amplitude;

            const scale =
              (Math.sin((ix + count) * 0.3) + 1) * 2 +
              (Math.sin((iy + count) * 0.5) + 1) * 2;
            particle.scale.setScalar(scale * 2);
          }
        }
      }

      renderer.render(scene, camera);
      count += speed;
    };

    animate();

    cleanupRef.current = () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      material.dispose();
      texture.dispose();
    };

    return () => {
      cleanupRef.current?.();
    };
  }, [particleColor, bgColor, density, speed, amplitude, separation]);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
}
