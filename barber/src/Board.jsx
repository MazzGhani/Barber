import React, { useRef, useState } from "react";
import board from "./board.glb";
import trimmer from "./trimmer.glb";
import { useGLTF, Sparkles, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"


function Model(props) {
  const boardRef = useRef();
  const model = useGLTF(board);
  const startTimeRef = useRef(performance.now());

  useFrame(({ mouse, viewport }) => {
    boardRef.current.rotation.x = 1;
    boardRef.current.rotation.y = 0;
  });
  //   boardRef.current.rotation.x=1;
  //   boardRef.current.rotation.y=0;

  return (
    <>
      <primitive
        ref={boardRef}
        object={model.scene}
        scale={0.5}
        position={[0, -17, 0]}
      />

      {/* <Clone object={ model.scene } scale={ 3 } position={ [0,0,0]} />
  <Clone object={ model.scene } scale={ 3 } position={ [4,-8,0]} /> */}
    </>
  );
}

function Trimmer(props) {
  const [hovered, setHovered] = useState(false);
  const startTimeRef = useRef(performance.now());
  const trimmerRef = useRef();
  const model = useGLTF(trimmer);
  const time = performance.now() - startTimeRef.current;


  useFrame(({ mouse, viewport }) => {
    const { x, y } = mouse;
    const box = new THREE.Box3().setFromObject(trimmerRef.current);
    const isHovered = box.containsPoint(new THREE.Vector3(x, y, 0));

    if (isHovered !== hovered) {
      setHovered(isHovered);
      document.getElementsByClassName("infoBubble")[0].style.display=""
    }


  });

  return (
    <>
      <mesh
        ref={trimmerRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={0.02}
        position={[-1.01, -16, 0.4]}
        rotation={[1,0,0]}
      >
        <primitive object={model.scene} />

      </mesh>
    </>
  );
}

function Board() {
  return (
    <>
      <Model />
      <Trimmer />
    </>
  );
}

export default Board;
