import React, { useRef } from "react";
import board from "./board.glb";
import { useGLTF, Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model(props) {
    const boardRef = useRef();
  const model = useGLTF(board);
    const startTimeRef = useRef(performance.now());

  useFrame(({ mouse, viewport }) => {

    boardRef.current.rotation.x=1
    boardRef.current.rotation.y=0


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

function Board() {
  return (
    <>
      <Model />
    </>
  );
}

export default Board;
