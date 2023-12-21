import { Html, Plane, Box, useTexture, Sphere, useGLTF } from "@react-three/drei";
import { useUserStore, useCanvasStore } from "@/redux/zustand";
import React, { useEffect, useState, useRef, Suspense } from "react";
import { useThree, useLoader, useFrame, useUpdate } from "@react-three/fiber";
import * as THREE from "three";
import { Button } from "@/ui/atoms";
import useOutsideClick from "@/hooks/useOutsideClick";
import { twMerge } from "tailwind-merge";

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

const ColorChoose = ({ color, setColor }) => {
  return (
    <div className="flex items-center justify-around">
      <div
        onClick={() => {
          setColor("#FFFFFF");
        }}
        className={twMerge(
          "bg-white rounded-full cursor-pointer p-3 my-4 w-[15px] h-[15px]",
          color === "#FFFFFF" ? "border-2 border-white border-solid" : ""
        )}
      />
      <div
        onClick={() => {
          setColor("#000000");
        }}
        className={twMerge(
          "bg-black rounded-full cursor-pointer p-3 my-4 w-[15px] h-[15px]",
          color === "#000000" ? "border-2 border-white border-solid" : ""
        )}
      />
      <div
        onClick={() => {
          setColor("#f87171");
        }}
        className={twMerge(
          "bg-red-400 rounded-full cursor-pointer p-3 my-4 w-[15px] h-[15px]",
          color === "#f87171" ? "border-2 border-white border-solid" : ""
        )}
      />
      <div
        onClick={() => {
          setColor("#FACC15");
        }}
        className={twMerge(
          "bg-yellow-400 rounded-full cursor-pointer p-3 my-4 w-[15px] h-[15px]",
          color === "#FACC15" ? "border-2 border-white border-solid" : ""
        )}
      />
      <div
        onClick={() => {
          setColor("#4ADE80");
        }}
        className={twMerge(
          "bg-green-400 rounded-full cursor-pointer p-3 my-4 w-[15px] h-[15px]",
          color === "#4ADE80" ? "border-2 border-white border-solid" : ""
        )}
      />
    </div>
  );
};

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

const EditTag = ({
  editMenu,
  canMoveRef,
  setEditMenu,
  edit3Dtags,
  delete3Dtags,
}) => {
  const editMenuRef = useOutsideClick(() => setEditMenu(null));
  const inputNameRef = useRef();
  const inputUrlRef = useRef();
  const [color, setColor] = useState(editMenu.color);
  console.log("editMenu", editMenu);
  return (
    <Html
      ref={editMenuRef}
      rotation={[0, Math.PI, 0]}
      position={editMenu.position}
    >
      <div className="bg-gray-700 text-white -translate-x-1/2 mt-12 p-4 rounded-lg">
        <input
          className=" bg-transparent w-full mb-4 text-[14px]"
          placeholder="輸入名稱"
          defaultValue={editMenu.name}
          ref={inputNameRef}
        />
        <input
          className=" bg-transparent w-full mb-4 text-[14px]"
          placeholder="輸入Url"
          defaultValue={editMenu.url}
          ref={inputUrlRef}
        />
        <ColorChoose color={color} setColor={setColor} />
        <div className="flex items-center justify-center">
          <Button
            className="mx-2 whitespace-nowrap"
            onClick={() => {
              canMoveRef.current = true;
              delete3Dtags(editMenu);
              setEditMenu(null);
            }}
          >
            刪除
          </Button>
          <Button
            className="mx-2 whitespace-nowrap"
            onClick={() => {
              edit3Dtags({
                ...editMenu,
                color,
                name: inputNameRef.current.value,
                url: inputUrlRef.current.value,
              });
              setEditMenu(null);
              canMoveRef.current = true;
            }}
          >
            更新
          </Button>
        </div>
      </div>
    </Html>
  );
};

useGLTF.preload("/exhibition.gltf");

export default MeetingRoom;

