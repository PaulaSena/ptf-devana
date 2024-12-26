import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model({ path }) {
  const model = useLoader(GLTFLoader, path); // Carrega o modelo 3D

  return <primitive object={model.scene} scale={0.5} position={[0, 0, 0]} />;
}

export default Model;
