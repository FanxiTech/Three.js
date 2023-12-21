import { useGLTF, useTexture } from "@react-three/drei";

export default function Mainframe() {
  const { nodes } = useGLTF("/exhibition.gltf");
  return (
    <>
      <mesh
        geometry={nodes.SM_Mainframe.geometry}
        position={nodes.SM_Mainframe.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Mainframe.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial color={"#000000"} />
      </mesh>
    </>
  );
}
