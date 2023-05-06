import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const raycaster = new THREE.Raycaster();

function Bubbles(numberOfBubbles) {
  const geometries = [];

  for (let i = 0; i < numberOfBubbles; i++) {
    const sphereRef = useRef();
    const position = [(Math.random() - 0.5) * 20, -10, 0];

    const geometry = new THREE.SphereGeometry(2, 32, 16);
    const material = new THREE.MeshBasicMaterial({
      color: "red",
      wireframe: true,
    });
    const sphere = (
      <mesh
        ref={sphereRef}
        key={i}
        geometry={geometry}
        material={material}
        position={position}
      />
    );

    geometries.push(sphere);

    useFrame((state) => {
      const time = state.clock.getElapsedTime();
      sphereRef.current.position.x += Math.cos(time + i * 10) * 0.02;
      sphereRef.current.position.y += Math.cos(time + i * 10) * 0.02;
      // state.camera.position.set(-10)
    });
  }

  return geometries;
}

document.addEventListener("mousemove", onMouseMove);

function onMouseMove(event) {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function App() {
  const geo = Bubbles(7);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered
      ? console.log("hovered")
      : console.log("not");
  }, [hovered]);

  return <>{geo}</>;
}

export default App;
