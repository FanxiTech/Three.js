import { useGLTF, useTexture } from "@react-three/drei";

export default function Roof() {
  const { nodes } = useGLTF("/exhibition.gltf");
  return (
    <>
      <mesh
        geometry={nodes.SM_Roof.geometry}
        position={nodes.SM_Roof.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Roof.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial color={"#FFFFFF"} />
      </mesh>
    </>
  );
}
