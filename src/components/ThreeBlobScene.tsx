import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBlobScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create blob geometry
    const blobGeometry = new THREE.IcosahedronGeometry(2, 64);
    
    // Store original positions
    const originalPositions = blobGeometry.attributes.position.array.slice();

    // Create gradient material
    const blobMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: false,
    });

    // Create shader material for gradient effect
    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 color1 = vec3(0.482, 0.361, 0.965); // #7c3aed
        vec3 color2 = vec3(0.545, 0.361, 0.965); // #8b5cf6
        vec3 color3 = vec3(0.388, 0.400, 0.945); // #6366f1
        
        float mixValue = vPosition.y * 0.3 + 0.5;
        vec3 finalColor = mix(color1, mix(color2, color3, mixValue), mixValue);
        
        // Add fresnel effect
        float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
        finalColor += fresnel * 0.3;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
    });

    const blob = new THREE.Mesh(blobGeometry, shaderMaterial);
    scene.add(blob);

    // Simple noise function
    const noise = (x: number, y: number, z: number) => {
      return Math.sin(x * 1.5) * Math.cos(y * 1.5) * Math.sin(z * 1.5);
    };

    // Animation
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Deform the blob
      const positions = blobGeometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];

        // Calculate noise-based deformation
        const noiseValue1 = noise(
          x * 0.5 + elapsedTime * 0.3,
          y * 0.5 + elapsedTime * 0.2,
          z * 0.5
        );
        
        const noiseValue2 = noise(
          x * 0.3 + elapsedTime * 0.1,
          y * 0.3,
          z * 0.3 + elapsedTime * 0.15
        );

        const distortion = (noiseValue1 + noiseValue2) * 0.3;

        // Apply deformation
        const length = Math.sqrt(x * x + y * y + z * z);
        const factor = 1 + distortion;
        
        positions[i] = (x / length) * factor * 2;
        positions[i + 1] = (y / length) * factor * 2;
        positions[i + 2] = (z / length) * factor * 2;
      }

      blobGeometry.attributes.position.needsUpdate = true;
      blobGeometry.computeVertexNormals();

      // Slow rotation
      blob.rotation.x = elapsedTime * 0.1;
      blob.rotation.y = elapsedTime * 0.15;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      blobGeometry.dispose();
      shaderMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
