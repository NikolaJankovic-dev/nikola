import React from "react";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import LightSaber from "./LightSaber/LightSaber";
import style from "./Phase1.module.css";

function DeathStar({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/star.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.DeathStar.geometry}
        material={materials.DeathStar}
        position={[0, 0, 0]}
        scale={1.8}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        zoomSpeed={0.6}
        autoRotate={true}
      />
    </group>
  );
}

const Phase1 = ({ phase, setPhase, page, setPage }) => {
  return (
    <div>
      <div className={style.phase2}>
        <div className={style.phase2cont}>
          <h1>Portfolio</h1>
          <LightSaber />

          <p>Frontend Developer</p>
        </div>
        <div className={style.imageDiv}>
          <Canvas>
            {/* <ambientLight intensity={0.5} /> */}
            <pointLight
              color="#9cc8ee;"
              position={[55, 50, 1]}
              intensity={0.8}
            />

            <Suspense fallback={null}>
              <DeathStar />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Phase1;
