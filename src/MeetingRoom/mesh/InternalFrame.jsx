import { useGLTF, useTexture } from "@react-three/drei";

export default function InternalFrame() {
  const { nodes } = useGLTF("/exhibition.gltf");
  return (
    <>
      <mesh
        geometry={nodes.SM_InternalFrame.geometry}
        position={nodes.SM_InternalFrame.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_InternalFrame.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial color={"#000000"} />
      </mesh>
    </>
  );
}
