import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Windows() {
  const { nodes } = useGLTF("/exhibition.gltf");
  const [
    marbleTexture,
  ] = useTexture([
    "/Black_marble_texture.jpg",
  ]);

  return (
    <>
      <mesh
        geometry={nodes.SM_Windows.geometry}
        position={nodes.SM_Windows.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Windows.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial color={"#000000"} transparent opacity={0.5} />
      </mesh>
    </>
  );
}
