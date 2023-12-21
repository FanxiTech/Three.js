import { useGLTF, useTexture } from "@react-three/drei";

export default function PorticHorizontal() {
  const { nodes } = useGLTF("/exhibition.gltf");
  const [
    marbleTexture,
  ] = useTexture([
    "/marble.jpg",
  ]);

  return (
    <>
      <mesh
        geometry={nodes.SM_Portic07.geometry}
        position={nodes.SM_Portic07.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic07.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_Portic08.geometry}
        position={nodes.SM_Portic08.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic08.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_Portic09.geometry}
        position={nodes.SM_Portic09.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic09.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_Portic10.geometry}
        position={nodes.SM_Portic10.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic10.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_Portic11.geometry}
        position={nodes.SM_Portic11.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic11.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
      <mesh
        geometry={nodes.SM_Portic12.geometry}
        position={nodes.SM_Portic12.position || [0, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={nodes.SM_Portic12.rotation || [0, 0, 0]}
      >
        <meshMatcapMaterial map={marbleTexture}/>
      </mesh>
    </>
  );
}
