import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { type Mesh } from "three";

export default function RotatingGeodesicSphere() {
  const meshRef = useRef<Mesh>(null);
  const wireMeshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time;
    }
    if (wireMeshRef.current) {
      wireMeshRef.current.rotation.y = time;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} scale={2.0}>
        <icosahedronGeometry args={[1.0, 2]} />
        <meshStandardMaterial />
      </mesh>
      <mesh ref={wireMeshRef} scale={2.0}>
        <icosahedronGeometry args={[1.0, 2]} />
        <meshBasicMaterial color="#ffffff" wireframe={true} transparent={true} />
      </mesh>
    </group>
  );
}