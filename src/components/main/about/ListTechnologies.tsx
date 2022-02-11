import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, TrackballControls } from "@react-three/drei";
import { TDirectionalLight } from "./TDirectionalLight";
import { skills } from "../../../constants/constants";
import TechnologyItem from "./TechnologyItem";

const Skills = () => {
  return (
    <div className="skills-chart">
      <Canvas dpr={[1, 2]}>
        <fog attach="fog" args={["#202025", 0, 80]} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <TDirectionalLight position={[5, 5, 5]} />
        {skills.map((obj, index) => (
          <TechnologyItem
            skill={obj.skill}
            position={obj.position}
            color={obj.color}
            key={index}
          />
        ))}
        <TrackballControls />
      </Canvas>
    </div>
  );
};

export default Skills;
