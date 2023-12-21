import { useGLTF, useTexture } from "@react-three/drei";

export default function Interlock() {
  const { nodes } = useGLTF("/exhibition.gltf");
  const [
    interlockTexture,
  ] = useTexture([
    "/grunge-wall-texture.jpg",
  ]);
  return (
    <>
      <mesh
        geometry={nodes.SM_Interlock.geometry}
        position={nodes.SM_Interlock.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Interlock.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial />
      </mesh>
    </>
  );
}
