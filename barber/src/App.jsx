import React, { Fragment, useEffect, useRef, useState } from "react";
import barberChair from "./barberChair.glb";
import { useGLTF, Sparkles, Html } from "@react-three/drei";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import { Scroll, Image, ScrollControls } from "@react-three/drei";
import Button from "react-bootstrap/esm/Button";
import Backround from "./Backround";
import Board from "./Board";
import img1 from "./assets/instagram.jpeg";

import ModelView from "./ModelView";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";

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
        <primitive object={model.scene} scale={3} position={[0, 0, 0]} />
      </group>
    </>
  );
}

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
    </Scroll>
  );
}

function App() {
  const [toggle, setToggle] = useState(false);
  



  return (
    <>
      <div style={{ width: window.innerWidth, height: window.innerHeight }}>
        <Canvas flat linear style={{ backgroundColor: "#CBC3E3" }}>
          <Lights />

          <ScrollControls pages={3}>
            <ImagesItems />
      

            <Scroll>
              <Sparkles size={10} scale={[20, 10, 20]} color={"#FFFFE0"} />
              <Model />
              <Backround />
              {/* <Board /> */}
            </Scroll>

            <Scroll html style={{ width: "100%" }}>
              <h1
                style={{
                  position: "absolute",
                  top: `20vh`,
                  right: "0",
                  left: "0",
                  fontSize: "5rem",
                  color: "white",
                  fontFamily: "'Abril Fatface', cursive",
                }}
              >
                Come Take A Seat
              </h1>
              <Button
                variant="primary"
                style={{
                  position: "absolute",
                  top: `90vh`,
                  right: "0",
                  left: "0",
                  fontSize: "32px",
                  backgroundColor: "#2C0A28",
                  border: "1px solid #2C0A28",
                  borderRadius: "24px",
                  fontFamily: "'Abril Fatface', cursive",
                }}
                className="mx-auto"
              >
                Book An Appointment
              </Button>

              <h1
                style={{
                  position: "absolute",
                  top: `190vh`,
                  right: "0",
                  left: "0",
                  fontSize: "4rem",
                  color: "white",
                  fontFamily: "'Abril Fatface', cursive",
                }}
              >
                What We Can Do
                <Button
                  id="button"
                  onClick={() => {
                    setToggle(!toggle);
                    // changeText();
                  }}
                  style={{
                    fontSize: "3rem",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "black",
                  }}
                >
                  {" "}
                  {toggle ? (
                    <Fragment>
                      {" "}
                      <BsFillCaretDownFill />
                    </Fragment>
                  ) : (
                    <Fragment>
                      {" "}
                      <BsFillCaretRightFill />
                    </Fragment>
                  )}{" "}
                </Button>
                {toggle ? <ModelView /> : ``}
              </h1>

              <h1
                style={{
                  position: "absolute",
                  top: `230vh`,
                  right: "10vw",
                  fontSize: "2rem",
                  color: "white",
                  fontFamily: "'Abril Fatface', cursive",
                }}
              ></h1>
              <div
                className="infoBubble"
                style={{
                  position: "absolute",
                  top: `230vh`,
                  right: "40vw",
                  color: "black",
                  display: "none",
                  backgroundColor: "transparent",
                  fontFamily: "'Abril Fatface', cursive",
                }}
              ></div>
            </Scroll>

            {/* <List /> */}
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}

export default App;
