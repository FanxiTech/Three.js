import { Html, Plane, Box, useTexture, Sphere, useGLTF } from "@react-three/drei";
import { useUserStore, useCanvasStore } from "@/redux/zustand";
import React, { useEffect, useState, useRef, Suspense } from "react";
import { useThree, useLoader, useFrame, useUpdate } from "@react-three/fiber";
import * as THREE from "three";
import useOutsideClick from "@/hooks/useOutsideClick";

import { getPathWallet } from "@/utils";

import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

import CameraMover from "./Camera";
import Meshs from "./mesh";

function MeetingRoom() {
  const { edit, setEdit, meetingRoomTexture, setMeetingRoomTexture } =
    useCanvasStore();
  const UrlWalletAddress = getPathWallet();
  const [editMenu, setEditMenu] = useState();
  const materials = useLoader(MTLLoader, "/ExhibitionOBJ.mtl")
  const { nodes } = useGLTF("/exhibition.gltf");
  const canMoveRef = useRef(true);
  const raycaster = new THREE.Raycaster();
  const { camera, scene } = useThree();
  const [point, setPoint] = useState();
  const [planeScale, setPlaneScale] = useState();
  const [planeRotation, setPlaneRotation] = useState();
  const [look, setLook] = useState();
  const wallet = useUserStore((state) => state.user.wallet);
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    const pointer = new THREE.Vector2();
    function onPointerMove(event) {
      pointer.x = ((event.clientX - 310) / (window.innerWidth - 310)) * 2 - 1;
      pointer.y = -((event.clientY - 65) / (window.innerHeight - 65)) * 2 + 1;
    }

    window.addEventListener("pointermove", onPointerMove);
    window.oncontextmenu = (e) => {
      e.preventDefault();
       // raycaster
      raycaster.setFromCamera(pointer, camera);
      raycaster.params.Points.threshold = 0.000001;
      const intersections = raycaster.intersectObjects(scene.children[3].children[0].children, false);
      var intersection = intersections.length > 0 ? intersections[0] : null;
      
      var worldPoint = intersection.point.clone();
      intersection.object.localToWorld(new THREE.Vector3(0,0,0));

      const planeNormalDefault = new THREE.Vector3(0,0,1)
      // 找出法向量的方向
      var direction = new THREE.Vector3(intersection.normal.x, intersection.normal.y, intersection.normal.z);
      const intersectionToCamera = new THREE.Vector3().copy(camera.position).sub(intersection.point);
      const objectNormal = intersection.normal;

      const dotProduct = objectNormal.dot(intersectionToCamera);
      if (dotProduct > 0) { // 不用變
        console.log('法向量朝向camera');
      } else if (dotProduct < 0) { // 要變
        console.log('法向量反向camera');
        // direction = direction.clone().negate();
      } else {}

      // 找出plane的點跟lookAt
      var startPos = new THREE.Vector3(intersection.point.x, intersection.point.y, intersection.point.z);

      var distance = 3;
      var positionAtDistance = new THREE.Vector3();
      positionAtDistance.addVectors(startPos, direction.multiplyScalar(distance));
      console.log("positionAtDistance", positionAtDistance)

      var positionLookAt = new THREE.Vector3();
      positionLookAt.addVectors(startPos, direction.multiplyScalar(distance + 1));
      console.log("positionLookAt", positionLookAt)

      // 计算两个法向量之间的旋转轴和角度
      const axis = new THREE.Vector3().crossVectors(intersection.normal, planeNormalDefault).normalize();
      const angle = intersection.normal.angleTo(planeNormalDefault);

      var x;
      var y;
      var z;
      x = intersection.point.x * 0.9;
      y = intersection.point.y * 0.9;
      z = intersection.point.z * 0.9;

      if (intersection) {
        var normalMatrix = new THREE.Matrix3();
        var worldNormal = new THREE.Vector3();
        normalMatrix.getNormalMatrix(intersection.object.matrixWorld);
        worldNormal.copy(intersection.face.normal).applyMatrix3(normalMatrix).normalize();

        setPlaneRotation({"rotationAxis": axis, "rotationAngle": angle})
        setLook(camera.position)
        const distance = camera.position.distanceTo(intersection.point);
        setPlaneScale([distance, distance, 1])
      }
      setEditMenu(null);
      setPoint(positionAtDistance)
    };
  }, []);

  return (
    <>
      {UrlWalletAddress === wallet && edit && (
        <>
          {point ? (
            <AddTag
              point={point}
              setPoint={setPoint}
              // canMoveRef={canMoveRef}
              scale={planeScale}
              rotation={planeRotation}
              look={look}
            />
          ) : null}
        </>
      )}
      <group>
        <CameraMover />
        <Meshs />
      </group>
    </>
  );
}

const AddTag = ({ point, setPoint, scale, rotation, look }) => {
  const [color, setColor] = useState("#FFFFFF");
  const [tag, setTag] = useState("");
  const inputNameRef = useRef();
  const inputUrlRef = useRef();
  const addMenuRef = useOutsideClick(() => setPoint(null));

  const planeGeometryRef = useRef();
  console.log("planeGeometryRef", planeGeometryRef)

  return (
    <>
      <mesh 
        position={point} scale={[10, 10, 10]} ref={addMenuRef}
      >
        <Plane
          onUpdate={self => { 
            self.lookAt(look);
          }} 
          ref={planeGeometryRef}
        />
        <meshMatcapMaterial />
      </mesh>
    </>
  );
};

useGLTF.preload("/exhibition.gltf");

export default MeetingRoom;

