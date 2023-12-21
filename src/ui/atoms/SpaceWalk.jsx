import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function SpaceWalk() {
  const refDiv = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene(); // 代表放東西的容器
    const camera = new THREE.PerspectiveCamera( // PerspectiveCamera透視相機，它使用透視投影的方式呈現場景，使得物體在遠處看起來比近處小，達到逼真的效果。透視相機通常用於3D場景渲染
      75, //相機的視野角度（Field of View），表示從相機的視點看向場景的視野範圍，角度單位是度
      window.innerWidth / window.innerHeight,
      0.1, //相機的近截面（Near Clipping Plane），表示相機視野中的物體離相機的最近距離，小於這個距離的物體將不會被渲染。
      1000 //相機的遠截面（Far Clipping Plane），表示相機視野中的物體離相機的最遠距離，超過這個距離的物體也不會被渲染
    );
    const renderer = new THREE.WebGLRenderer({
      //THREE.WebGLRenderer: 這是使用WebGL技術的渲染器，WebGL是一個基於OpenGL的圖形庫，可以在瀏覽器中實現硬體加速的3D渲染。
      alpha: true, //渲染時使用透明度（alpha）通道，這允許將Three.js渲染的畫面與其他內容混合，例如將Three.js場景放在網頁的背景中
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    refDiv.current.appendChild(renderer.domElement);

    const particles = 600;
    const speed = 400;
    const dim = 200; // Dimensions of particle volume
    var vertices = [];

    for (let i = 0; i < particles; i++) {
      const x = dim * 8 * (Math.random() - 0.5);
      const y = dim * 2 * (Math.random() - 0.5);
      const z = -dim * Math.random();

      vertices.push(x, y, z);
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    let starMat = new THREE.PointsMaterial({
      //PointsMaterial來定義粒子的材質。
      color: 0x4ae4a6,
      size: 1,
      transparent: true, // For trails
      depthTest: false, // For trails
    });
    const starPoints = new THREE.Points(starGeo, starMat);

    // The whole fade plate is for trails
    const fadeGeo = new THREE.PlaneGeometry(1, 1);
    const fadeMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.4,
    });
    const fadePlate = new THREE.Mesh(fadeGeo, fadeMat);
    fadePlate.material.renderOrder = -1; // Important!
    fadePlate.position.z = -0.1;

    scene.add(fadePlate);
    scene.add(starPoints);

    function draw() {
      if (
        renderer.domElement.height !== window.innerHeight ||
        renderer.domElement.width !== window.innerWidth
      ) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight, false);
      }
      starGeo.attributes.position.needsUpdate = true;
      let p = starGeo.attributes.position.array;
      for (let i = 0; i < p.length; i += 3) {
        const x = Math.abs(p[i]);
        const y = Math.abs(p[i + 1]);
        const z = p[i + 2];
        if (z >= 0) {
          //座標大於等於0，表示星星粒子已經達到了畫面的最前方，需要重新設置其位置
          p[i] = dim * 8 * (Math.random() - 0.5);
          p[i + 1] = dim * 2 * (Math.random() - 0.5);
          p[i + 2] = -dim;
        } else {
          p[i + 2] += -speed / p[i + 2]; // 使用requestAnimationFrame函式來不斷地執行draw函式，實現連續的動畫效果。每當一幀動畫渲染完成後，瀏覽器將自動呼叫draw函式來進行下一幀渲染，從而實現動畫的播放。
        }
      }

      renderer.render(scene, camera);
      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      // Be sure to cleanup and stop animation when component unmounts
      renderer.dispose();
    };
  }, []);

  return <div ref={refDiv} />;
}

export default SpaceWalk;
