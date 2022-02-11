import React from "react";
import { Canvas } from "@react-three/fiber";
import { VFC } from "react";
import { OrbitControls, Text } from "@react-three/drei";
import { TDirectionalLight } from "../main/about/TDirectionalLight";
import { useRotate } from "../main/about/useRotate";

const TextObject: VFC<{ text: string }> = ({ text }) => {
  const textRef = useRotate([0, 0.1, 0]);

  return (
    <Text
      ref={textRef}
      color="#24ACF2"
      fontSize={1.2}
      maxWidth={10}
      textAlign={"center"}
      font="Montserrat"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

export const LogoText3D: VFC = () => {
  return (
    <Canvas>
      <OrbitControls />
      <TDirectionalLight position={[-1, 3, 5]} />

      <TextObject text="Taro Nguyen" />
    </Canvas>
  );
};
