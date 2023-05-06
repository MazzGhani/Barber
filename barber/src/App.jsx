import React, { useRef } from "react";
import barberChair from "./barberChair.glb";
import { useGLTF, Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model(props) {
  const startTimeRef = useRef(performance.now());
  const model = useGLTF(barberChair);
  const chairOne = useRef();
  useFrame(({ mouse, viewport }) => {
    const time = performance.now() - startTimeRef.current;
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

  return (
    <>
      <Model />
      <Sparkles size={10} scale={[20, 10, 20]} color={"#FFFFE0"} />
    </>
  );
}

export default App;
