import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Mesh } from "three";
import { Suspense, useEffect } from "react";

function SceneControls() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    return () => controls.dispose();
  }, [camera, gl]);

  return null;
}

function DeathStarModel() {
  const { scene } = useLoader(GLTFLoader, "/star.glb");
  const deathStar = scene.getObjectByName("DeathStar");
  if (!(deathStar instanceof Mesh)) {
    throw new Error('The "/star.glb" asset does not contain the expected DeathStar mesh.');
  }

  return (
    <>
      <mesh
        geometry={deathStar.geometry}
        material={deathStar.material}
        position={[0, 0, 0]}
        scale={1.8}
        dispose={null}
      />
      <SceneControls />
    </>
  );
}

export default function DeathStarCanvas() {
  return (
    <Canvas aria-label="Rotating 3D model">
      <pointLight color="#9cc8ee" position={[55, 50, 1]} intensity={0.8} decay={0} />
      <ambientLight intensity={0.15} />
      <Suspense fallback={null}>
        <DeathStarModel />
      </Suspense>
    </Canvas>
  );
}
