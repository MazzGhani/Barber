import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls} from "@react-three/drei";
import barberChair from "./barberChair.glb";
import { useGLTF, useHelper, Html, Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  MeshBasicMaterial,
  SphereGeometry,
} from "three";


function Lights() {
  return (
    <>
      <ambientLight intensity={2} />
      <spotLight color={"white"} intensity={3} position={[10, 15, 10]} />
    </>
  );
}


const timing = new THREE.Clock();

const color = {
  blue: new THREE.Color("#89CFF0"),
  white: new THREE.Color("white"),
  red: new THREE.Color("red"),
};

function middleLayer() {
  const boxRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    boxRef.current.rotation.x += Math.cos(time) * 0.02;
  });

  const geometry = new SphereGeometry(30, 32, 16);
  const material = new MeshBasicMaterial({
    color: color.blue,
    wireframe: true,
  });
  const cube = (
    <mesh
      ref={boxRef}
      geometry={geometry}
      material={material}
      position={[0, 0, 0]}
    />
  );

  return cube;
}

function Model(props) {
  const startTimeRef = useRef(performance.now());
  const model = useGLTF(barberChair);
  const chairOne = useRef();
  useFrame(({ mouse, viewport}) => {
    const time = performance.now()- startTimeRef.current;
    const x = (chairOne.current.rotation.x = (mouse.x * viewport.width) / 5);
    const y = (chairOne.current.rotation.y = (mouse.x * viewport.height) / 5);
    chairOne.current.lookAt(x, y, 1);

  });

  return (
    <>
      <primitive
        ref={chairOne}
        object={model.scene}
        scale={3}
        position={[0, 0, 0]}
      />

      {/* <Clone object={ model.scene } scale={ 3 } position={ [0,0,0]} />
  <Clone object={ model.scene } scale={ 3 } position={ [4,-8,0]} /> */}
    </>
  );
}



function App() {
  const cubes = middleLayer(10);

  return (
    <>
      {/* <mesh position={[0, 0, 0]}>
        <meshBasicMaterial attach="material" color={"red"} />
        <boxGeometry attach="geometry" />
      </mesh> */}

      <Model />
      <Sparkles size={10}     scale={ [ 20, 10, 20 ] }   color={"#FFFFE0"}/>
      {cubes}

      <Lights />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
    </>
  );
}

export default App;
