import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const Test3d = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* <Canvas>
        <mesh>
        <boxGeometry args={12,2,2]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#DB8B9B"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          <mesh5tandardMaterial color="red">
          <ambientLight intensity={2} />
          <directionalLight position={[1, 2, 3]} />
          <OrbitControls enableZoom={false}
        </mesh>
      </Canvas>
      */}


      <canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial color="red" />
          <ambientLight intensity={0.2} />
          <directionalLight color="blue" position={[1, 2, 0]} />
          <OrbitControls />
        </mesh>
      </canvas>
    </section>
  );
};

export default Test3d;
