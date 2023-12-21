import { useGLTF, useTexture } from "@react-three/drei";

export default function Door() {
  const { nodes } = useGLTF("/exhibition.gltf");
  const [
    handleTexture,
  ] = useTexture([
    "/grunge-wall-texture.jpg",
  ]);
  return (
    <>
      <mesh
        geometry={nodes.SM_HandleL.geometry}
        position={nodes.SM_HandleL.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_HandleL.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={handleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_HandleR.geometry}
        position={nodes.SM_HandleR.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_HandleR.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={handleTexture} />
      </mesh>
      <mesh
        geometry={nodes.DoorR.geometry}
        position={nodes.DoorR.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.DoorR.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={handleTexture} />
      </mesh>
      <mesh
        geometry={nodes.DoorL.geometry}
        position={nodes.DoorL.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.DoorL.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={handleTexture} />
      </mesh>
      <mesh
        geometry={nodes.SM_DoorR.geometry}
        position={nodes.SM_DoorR.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_DoorR.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial color={"#FFFFFF"} />
      </mesh>
      <mesh
        geometry={nodes.SM_DoorL.geometry}
        position={nodes.SM_DoorL.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_DoorL.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial color={"#FFFFFF"} />
      </mesh>
    </>
  );
}
