import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { NotebookModel } from "./NotebookModel";
import { OrbitControls } from "@react-three/drei";

const NotebookModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="">
          <NotebookModel />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};
export default NotebookModelContainer;
