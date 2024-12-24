import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
const Shape = () => {
    const gradientTexture = useLoader(
      TextureLoader,
      "/public/fundo-gdrosaazul.jpg"
    );

  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          /*color="rgb(247, 131, 73);"*/
          /* 
          background: rgb(88,17,17);
          color="linear-gradient(90deg, rgba(88,17,17,1) 0%, rgba(253,29,163,1) 54%, rgba(93,69,252,1) 89%);"

          */
          map={gradientTexture} // Use a textura carregada
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
};

export default Shape;
