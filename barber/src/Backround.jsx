import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import RandomHair from './RandomHair'

import { Html,ScrollControls } from '@react-three/drei'

const raycaster= new THREE.Raycaster();

function Lights() {
  return (
    <>
      <ambientLight intensity={2} />
      <spotLight color={"white"} intensity={3} position={[10, 15, 10]} />
    </>
  );
}

const color = {
  blue: new THREE.Color("#89CFF0"),
  white: new THREE.Color("white"),
  red: new THREE.Color("red"),
};

function Bubbles(numberOfBubbles){
    
    const geometries = [];
    
    
    for (let i = 0; i < numberOfBubbles; i++) {
        const sphereRef= useRef()
        const position = [
        (Math.random() - 0.5)*20,  
        0,  
        0  
      ];

   
      const geometry= new THREE.SphereGeometry(2, 32, 16);
      const material= new THREE.MeshBasicMaterial({
        color:"red",
        wireframe:true
      })
      const sphere = <mesh 
      ref={sphereRef}
      key={i}
       geometry={geometry} 
       material={material}
       position={position}
       />

       geometries.push(sphere)

       useFrame((state) => {
        const time = state.clock.getElapsedTime();
        sphereRef.current.position.x += Math.cos(time+i *10) * 0.02;
        sphereRef.current.position.y += Math.cos(time+i *10) * 0.02;

      });

  

    }
  
    return geometries;

}

document.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  
}



function App() {
    const geo = Bubbles(7);
    const [hovered,setHovered]= useState(false);

    useEffect(() => {
  document.body.style.cursor = hovered ? (
    console.log("hovered")
  ) : (console.log("not"))
}, [hovered])



  return (
    <>

          <ScrollControls pages={1}>

    <Html  fullscreen 
    onPointerOver={()=>{setHovered(true)}}
    onPointerOut={()=>{setHovered(false)}}
    >

    <RandomHair/>
    </Html>

      </ScrollControls>
    
      {geo}

      <Lights />

      <OrbitControls
      enableZoom={false}
      enablePan={false}
      />
    </>
  );
}

export default App;
