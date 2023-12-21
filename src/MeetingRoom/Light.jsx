import { Sky } from "@react-three/drei";

export default function Light() {
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight
        angle={0.14}
        color="#ffd0d0"
        penumbra={1}
        position={[25, 50, -20]}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
        castShadow
      />
      <Sky scale={1000} sunPosition={[2, 0.4, 10]} />
    </>
  );
}
