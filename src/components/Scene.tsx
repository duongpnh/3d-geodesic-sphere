import { Canvas } from "@react-three/fiber";
import RotatingGeodesicSphere from "./RotatingGeodesicSphere";

export default function Scene() {
  return (
    <Canvas>
      <RotatingGeodesicSphere />
      <hemisphereLight 
        color="#b1e1ff"        // Sky: Light blue
        groundColor="#b97a20"  // Ground: Earthy brown
        intensity={0.6}        // Not too bright
      />
      <directionalLight color="#00ff00" position={[0, 0, 5]} />
    </Canvas>
  )
}