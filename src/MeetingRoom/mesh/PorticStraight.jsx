import { useGLTF, useTexture } from "@react-three/drei";

export default function PorticStraight() {
  const { nodes } = useGLTF("/exhibition.gltf");
  const [
    marbleTexture,
  ] = useTexture([
    "/Black_marble_texture.jpg",
  ]);

  return (
    <>
      <mesh
        geometry={nodes.SM_Portic01.geometry}
        position={nodes.SM_Portic01.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic01.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_Portic02.geometry}
        position={nodes.SM_Portic02.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic02.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_Portic03.geometry}
        position={nodes.SM_Portic03.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic03.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_Portic04.geometry}
        position={nodes.SM_Portic04.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic04.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_Portic05.geometry}
        position={nodes.SM_Portic05.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic05.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_Portic06.geometry}
        position={nodes.SM_Portic06.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic06.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
    </>
  );
}
