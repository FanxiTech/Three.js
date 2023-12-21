import { useGLTF, useTexture } from "@react-three/drei";

export default function Column() {
  const { nodes } = useGLTF("/exhibition.gltf");

  return (
    <>
      <mesh
        geometry={nodes.SM_Column035.geometry}
        position={nodes.SM_Column035.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Column035.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial />
      </mesh>
    </>
  );
}
