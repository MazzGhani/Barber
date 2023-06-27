import React, { useRef, useState } from "react";
import board from "./board.glb";
import trimmer from "./trimmer.glb";
import scissor from "./scissors.glb";
import { useGLTF, Sparkles, Html,OrbitControls } from "@react-three/drei";
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
  const trimmerRef = useRef();
  const model = useGLTF(trimmer);

  return (
    <>
      <mesh
        ref={trimmerRef}
        scale={0.02}
        position={[-1.01, -16, -0.6]}
        rotation={[1,0,0]}
      >
        <primitive object={model.scene} />

      </mesh>
    </>
  );
}
function Scissors(props) {
  const scissorRef = useRef();
  const model = useGLTF(scissor);

  return (

    <>
      <mesh
        ref={scissorRef}
        scale={0.5}
        position={[-3.8, -17, -3.7]}
        rotation={[0.7,-0.42,-0.3]}

      >
        <primitive object={model.scene} />

      </mesh>
    </>
  );
}

function Board() {
  const fullBoard= useRef();

  const [hovered, setHovered] = useState(false);

  useFrame(({ mouse, viewport }) => {
    const { x, y } = mouse;
    const box = new THREE.Box3().setFromObject(fullBoard.current);
    const isHovered = box.containsPoint(new THREE.Vector3(x, y, 0));

    if (isHovered !== hovered) {
      setHovered(isHovered);
    }


  });
  return (
    <>
    {/* <OrbitControls/> */}
    <group ref={fullBoard}>
      <Model />
      <Trimmer />
      <Scissors />

    </group>
    

    </>
  );
}

export default Board;
