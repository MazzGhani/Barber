import React, { useState, useRef } from "react";
import img1 from "./assets/instagram.jpeg";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Navbar from "./Navbar";
import * as THREE from "three";
import {
  Html,
  Scroll,
  useIntersect,
  Image,
  ScrollControls,
} from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import Button from "react-bootstrap/esm/Button";
import Backround from "./Backround";
import Card  from "react-bootstrap/Card"
import Board from "./Board";

function Lights() {
  return (
    <>
      <ambientLight intensity={2} />
      <spotLight color={"white"} intensity={3} position={[10, 15, 10]} />
    </>
  );
}

function ImageItem({ url, scale, ...props }) {
  return (
    <group {...props}>
      <Image scale={scale} url={url} />
    </group>
  );
}

function ImagesItems() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <ImageItem
        url={img1}
        scale={[w / 5, w / 5, 1]}
        position={[-w / 6, -5, 0]}
      />
      <ImageItem
        url={img1}
        scale={[w / 5, w / 5, 1]}
        position={[-w / -6, -7, -4]}
      />
      <ImageItem
        url={img1}
        scale={[w / 5, w / 5, 1]}
        position={[-w / 6, -5, 0]}
      />
    </Scroll>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header/> */}
    <Navbar />
    <div style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Canvas flat linear style={{ backgroundColor: "#CBC3E3" }}>
        <Lights />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <ScrollControls pages={3}>
          <ImagesItems />

          <Scroll>
            <App />
            <Backround />
            <Board/>
          </Scroll>
          <Scroll html style={{ width: "100%" }}>
            <h1
              style={{
                position: "absolute",
                top: `20vh`,
                right: "40vw",
                fontSize: "5rem",
                color: "white",
              }}
            >
              Come Take A Seat
            </h1>
            <Button
              variant="primary"
              style={{
                position: "absolute",
                top: `90vh`,
                right: "35vw",
                fontSize: "30px",
                backgroundColor: "transparent",
                border: "1px solid white",
              }}
            >
              Book an Appointment
            </Button>

            <h1
              style={{
                position: "absolute",
                top: `190vh`,
                right: "40vw",
                fontSize: "5rem",
                color: "white",
              }}
            >
              What We Can Do
            </h1>
            <div
             style={{
              position: "absolute",
              top: `230vh`,
              right: "40vw", 
              color: "black",
            }}>

            </div>
          </Scroll>

          {/* <List /> */}
        </ScrollControls>
      </Canvas>
    </div>
  </React.StrictMode>
);
