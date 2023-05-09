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
import Modal from 'react-bootstrap/Modal';
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
      <ImageItem
        url={img1}
        scale={[w / 5, w / 5, 1]}
        position={[-w / 6, -8, -2]}
      />
      <ImageItem
        url={img1}
        scale={[w / 5, w / 5, 1]}
        position={[-w / -5, -8, 0]}
      />
            <ImageItem
        url={img1}
        scale={[w / 5, w / 5, 1]}
        position={[-w / -5, -5, -1]}
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
        {/* <Camera/> */}


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
                fontFamily:"'Abril Fatface', cursive"
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
                fontSize: "16px",
                backgroundColor: "black",
                border: "1px solid white",
                fontFamily:"'Abril Fatface', cursive"

              }}
              className="mx-auto"

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
                fontFamily:"'Abril Fatface', cursive"

              }}
            >
              What We Can Do
            </h1>
            <h1
              style={{
                position: "absolute",
                top: `230vh`,
                right: "10vw",
                fontSize: "2rem",
                color: "white",
                fontFamily:"'Abril Fatface', cursive"

              }}
            >
              Hover Over or Click the Objects !
            </h1>
            <div
            className="infoBubble"
             style={{
              position: "absolute",
              top: `230vh`,
              right: "40vw", 
              color: "black",
              display:"none",
              backgroundColor:"transparent",
              fontFamily:"'Abril Fatface', cursive"

            }}>

              <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Barber</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{document.getElementsByClassName("infoBubble")[0].style.display="none"}}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>

            </div>
          </Scroll>

          {/* <List /> */}
        </ScrollControls>
      </Canvas>
    </div>
  </React.StrictMode>
);
