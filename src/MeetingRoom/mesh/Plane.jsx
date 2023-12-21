import { useGLTF, useTexture } from "@react-three/drei";

export default function Plane() {
  const { nodes } = useGLTF("/exhibition.gltf");
  const [
    planeTexture,
  ] = useTexture([
    "/grass.jpg",
  ]);

  return (
    <>
      <mesh
        geometry={nodes.SM_Plane.geometry}
        position={nodes.SM_Plane.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Plane.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial color={"#c4cedf"} />
      </mesh>
    </>
  );
}
