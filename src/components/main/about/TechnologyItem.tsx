import React, { VFC } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { useRotate } from "./useRotate";

const TechnologyItem: VFC<{
  skill: string;
  position: THREE.Vector3 | any;
  color: string;
}> = ({ skill, position, color }) => {
  const ref = useRotate();
  const groupRef = useRotate([0, 0.5, 0]);

  return (
    <group ref={groupRef}>
      <mesh ref={ref} position={position} castShadow>
        <Html
          className="whitespace-nowrap text-2xl mt-[6.25rem] select-none "
          center
          distanceFactor={10}
          style={{ color: `${color}` }}
        >
          {skill}
        </Html>
      </mesh>
    </group>
  );
};

export default TechnologyItem;
