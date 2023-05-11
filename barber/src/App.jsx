import React, { useRef, useState } from "react";
import barberChair from "./barberChair.glb";
import { useGLTF, Sparkles, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import board from "./board.glb";

function Model() {
  const startTimeRef = useRef(performance.now());
  const model = useGLTF(barberChair);
  const chair = useRef();
  model.name = "Model1";
  useFrame(({ mouse, viewport }) => {
    const time = performance.now() - startTimeRef.current;
    const x = (chair.current.rotation.x = (mouse.x * viewport.width) / 5);
    const y = (chair.current.rotation.y = (mouse.x * viewport.height) / 5);
    chair.current.lookAt(x, y, 1);
  });
  return (
    <>
      <group ref={chair}>
        <primitive  object={model.scene} scale={3} position={[0, 0, 0]} />
      </group>
    </>
  );
}
function Model2() {
  const model2 = useGLTF(board);
  const apple = useRef();
  model2.name = "Model2";

  return (
    <>
      <group ref={apple}>
        <primitive object={model2.scene} scale={3} position={[0, 0, 0]} />
      </group>
    </>
  );
}

function App() {
  const [currentModel, setCurrentModel] = useState("Model1");
  function changeModel() {
    if (currentModel === "Model2") {
      setCurrentModel("Model1");
    }
    if (currentModel === "Model1") {
      setCurrentModel("Model2");
    }
  }

  var listOfModels = {
    Model1: <Model />,
    Model2: <Model2 />,
  };

  return (
    <>
      {/* {listOfModels[currentModel]}

      <Html>
        <button id="mainButton" onClick={changeModel}>change model</button>
      </Html> */}
      <Model />

      <Sparkles size={10} scale={[20, 10, 20]} color={"#FFFFE0"} />
    </>
  );
}

export default App;
