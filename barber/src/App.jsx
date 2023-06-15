import React, { useRef, useState } from "react";
import barberChair from "./barberChair.glb";
import { useGLTF, Sparkles, Html } from "@react-three/drei";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import { Scroll, Image, ScrollControls } from "@react-three/drei";
import Button from "react-bootstrap/esm/Button";
import Backround from "./Backround";
import Modal from "react-bootstrap/Modal";
import Board from "./Board";
import img1 from "./assets/instagram.jpeg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Stack from "react-bootstrap/Stack";

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
        scale={[w / 5, w / 5, 1]} // replaced with width and height in css 
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

function App() {
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
              <Board />
            </Scroll>
            <Scroll html style={{ width: "100%" }}>
              <h1
                style={{
                  position: "absolute",
                  top: `20vh`,
                  right: "40vw",
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
                  right: "35vw",
                  fontSize: "16px",
                  backgroundColor: "black",
                  border: "1px solid white",
                  fontFamily: "'Abril Fatface', cursive",
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
                  fontFamily: "'Abril Fatface', cursive",
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
                  fontFamily: "'Abril Fatface', cursive",
                }}
              >
                {/* Hover Over or Click the Objects ! */}
              </h1>
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
              >
                <Modal.Dialog>
                  <Modal.Header>
                    <Modal.Title>What We Can Do</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Tabs
                      defaultActiveKey="profile"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="beard" title="Beard">
                        <Stack>
                          <div>First item</div>
                        </Stack>
                      </Tab>
                      <Tab eventKey="cut" title="Cut">
                        <Stack>
                          <div>First item</div>
                        </Stack>{" "}
                      </Tab>
                      <Tab eventKey="other" title="Other">
                        <Stack>
                          <div>First item</div>
                        </Stack>{" "}
                      </Tab>
                    </Tabs>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        document.getElementsByClassName(
                          "infoBubble"
                        )[0].style.display = "none";
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            </Scroll>

            {/* <List /> */}
          </ScrollControls>
        </Canvas>
      </div>
      {/* {listOfModels[currentModel]}

      <Html>
        <button id="mainButton" onClick={changeModel}>change model</button>
      </Html> */}
      {/* <Model />

      <Sparkles size={10} scale={[20, 10, 20]} color={"#FFFFE0"} /> */}
    </>
  );
}

export default App;
