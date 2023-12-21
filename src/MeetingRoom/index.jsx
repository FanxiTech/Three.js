import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Light from "./Light";
import MeetingRoom from "./MeetingRoom";
import MeetingRoomLayout from "@/MeetingRoom/layout";

export default function MarketRoom() {
  return (
    <div className="relative w-full desktop:h-screen h-full">
      <MeetingRoomLayout />
        <Canvas
          flat
          dpr={[1, 2]}
          camera={{ fov: 60, position: [0, 0, 0] }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Light />
          <group position-y={-1} dispose={null}>
            <Camera />
            <MeetingRoom />
          </group>
        </Canvas>
    </div>
  );
}
