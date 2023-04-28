import React, { useRef,useState,useMemo } from "react";
import * as THREE from "three";
import { OrbitControls, Clone, Cylinder } from "@react-three/drei";
import barberChair from "./barberChair.glb";
import { useGLTF, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BoxBufferGeometry, MeshBasicMaterial, Mesh, CylinderGeometry } from 'three';

function Lights() {
  return (
    <>
      <ambientLight intensity={2} />
      <spotLight color={"white"} intensity={3} position={[10, 15, 10]} />
    </>
  );
}

const color = {
  blue: new THREE.Color("blue"),
  white: new THREE.Color("white"),
  red:  new THREE.Color("red")


}
console.log(color)


function generateCubes(numCubes) {
  const cubes = [];
  for (let i = 0; i < numCubes; i++) {

    const boxRef = useRef();

    // useFrame(() => {
    //   boxRef.current.rotation.y += (Math.random() - 1.5) * 0.01
    // });
  
    const geometry = new CylinderGeometry(2, 2, 2);
    const material = new MeshBasicMaterial({ color: 0xff0000 });
    const cube = <mesh ref={boxRef} key={i} geometry={geometry} material={material} position={[(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20, -5]} />;
    cubes.push(cube);
  }
  

  return cubes;
}


function Model() {
  const model = useGLTF(barberChair);
  return <>
  
  <Clone object={ model.scene } scale={ 4 } position={ [-4,4,0] } />
  <Clone object={ model.scene } scale={ 4 } position={ [0,0,0]} />
  <Clone object={ model.scene } scale={ 4 } position={ [4,-8,0]} />
</>
}



function App() {
  const cubes = generateCubes(30);
  

  return (
    <>
      {/* <mesh position={[0, 0, 0]}>
        <meshBasicMaterial attach="material" color={"red"} />
        <boxGeometry attach="geometry" />
      </mesh> */}
      <Model />
      {cubes}

      <Lights />

      <OrbitControls />
    </>
  );
}

export default App;
