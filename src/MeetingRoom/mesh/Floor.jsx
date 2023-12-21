import { useGLTF, useTexture } from "@react-three/drei";

export default function Floor() {
  const { nodes } = useGLTF("/exhibition.gltf");
  const [
    floorTexture,
  ] = useTexture([
    "/floor.jpg",
  ]);

  return (
    <>
      <mesh
        geometry={nodes.SM_Floor.geometry}
        position={nodes.SM_Floor.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Floor.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={floorTexture}/>
      </mesh>
    </>
  );
}
