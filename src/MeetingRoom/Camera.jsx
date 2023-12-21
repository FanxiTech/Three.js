import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useCanvasStore } from "@/redux/zustand";
import useCameraLook from "./useCameraLook";
import gsap from "gsap";

function CameraMover() {
  const { camera, gl } = useThree();
  const controls = useRef();
  const { setMeetingRoomAngle } = useCanvasStore();
  const { cameraLook } = useCameraLook();

  const onCameraRotate = (e) => {
    const cameraRotationYDegrees = THREE.MathUtils.radToDeg(
      controls.current.getAzimuthalAngle()
    );
    setMeetingRoomAngle(cameraRotationYDegrees);
  };

  useEffect(() => {
    const moveCamera = () => {
      gsap.to(camera.position, {
        x: -6,
        y: 3,
        z: 0,
        duration: 1,
      }); // camera看的位置
    };
    moveCamera();
  }, [cameraLook]);

  useFrame(() => {
    controls.current.update();
    controls.current.enablePan = false;
  });

  return (
    <OrbitControls
      ref={controls}
      onChange={(e) => onCameraRotate(e)}
      args={[camera, gl.domElement]}
      minZoom={1}
      target={[-5, 3, 0]} // camera位置
      rotateSpeed={-1}
    />
  );
}

export default CameraMover;
