import React, { useRef } from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import { Html, ScrollControls , OrbitControls} from '@react-three/drei';
import TeacherExperience from "./TeacherExperience";
const Sphere = () => {
  const sphereRef= useRef();
  useFrame((state) => {

    const time = state.clock.getElapsedTime();
    sphereRef.current.position.x += Math.cos(time  * 2) * 0.02;  
    sphereRef.current.position.y += Math.cos(time  * -1) * 0.02;  
    sphereRef.current.position.z =-1


  
  })
    return (
    <mesh ref={sphereRef}>
      <sphereBufferGeometry args={[2, 24, 24]} />
      <meshStandardMaterial color={"blue"} wireframe={true} />
    </mesh>
  );
};

function Teacher() {
  return (
    <>
    <div style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Canvas flat linear style={{ backgroundColor: "#CBC3E3" }}>
      <pointLight position={[15, 15, 15]} />
      <pointLight position={[-15, -15, -15]} />

      {/* <OrbitControls/> */}

      <ScrollControls  pages={1}>
          <Html fullscreen>
            <TeacherExperience/>
          </Html>
        </ScrollControls>
      <Sphere/>

      </Canvas>

    </div>
    </>
  );
}

export default Teacher;
