import { useGLTF, useTexture } from "@react-three/drei";

export default function Grass() {
  const { nodes } = useGLTF("/exhibition.gltf");
  const [
    grassTexture,
  ] = useTexture([
    "/grass.jpg",
  ]);

  return (
    <>
      <mesh
        geometry={nodes.SM_Grass.geometry}
        position={nodes.SM_Grass.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Grass.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={grassTexture}/>
      </mesh>
    </>
  );
}
