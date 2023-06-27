import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { app, storage } from "./firebase/config.js";
import { ref, listAll, getDownloadURL, deleteObject,getMetadata } from "firebase/storage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MeshDistortMaterial, GradientTexture, useCursor } from '@react-three/drei'


function Artist() {
  var color= new THREE.Color("yellow");
  color.setHex(Math.random() *0xffffff  )

  function randomCOlor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor
  }
  const canvasRef = useRef();
  const sphereRef = useRef();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  const Sphere = () => {
    useFrame((state) => {
      const time = state.clock.getElapsedTime();
      sphereRef.current.position.x += Math.cos(time + 10) * 0.02;

      sphereRef.current.rotation.x += Math.cos(time + 10) * 0.02;

    });
    return (
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[2, 0]} />
        <MeshDistortMaterial ref={ref} speed={7}>
        <GradientTexture stops={[0, 0.8, 1]} colors={['#e63946', '#f1faee', '#a8dadc']} size={100} />
      </MeshDistortMaterial>
      </mesh>
    );
  };

  const changeBackround = () => {
    if (document.getElementById("banana")) {
      setTimeout(() => {
        
        canvasRef.current.style.backgroundColor = randomCOlor();
        sphereRef.current.material.color = color
      }, 100);
    }
  };

  const changeBack = () => {
    canvasRef.current.style.backgroundColor = "#CBC3E3";
    sphereRef.current.material.color = new THREE.Color(['#e63946', '#f1faee', '#a8dadc']);
  };

  const deleteImage = (url) => {
    const imageNameList = ref(storage, url);

    deleteObject(imageNameList).then(() => {
      console.log("deleted");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((itemRef)=>{
        let name= itemRef.fullPath        
        const imageFullNameRef= ref(storage,name)

        getMetadata(imageFullNameRef).then((metadata)=>{
          console.log(metadata.customMetadata)
        }).catch((error)=>{console.log(error)})

      })
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]); 
          
        });
      });

      
    });


  }, []);

  return (
    <>
      <div style={{ width: window.innerWidth, height: window.innerHeight }}>
        <Canvas
          ref={canvasRef}
          flat
          linear
          style={{ backgroundColor: "#CBC3E3" }}
        >
          <pointLight position={[15, 15, 15]} />
          <pointLight position={[-15, -15, -15]} />
          <Sphere />
          {/* <OrbitControls/> */}
          <Html fullscreen>

            {imageList.map((url, idx) => {
              return (
                <div key={idx}>
                  <Container
                    fluid
                    style={{
                      display: "flex",
                      margin: "0 auto",
                      justifyContent: "center",
                    }}
                  >
                    <Row>
                      <Col>
                        <img
                          onMouseEnter={() => {
                            changeBackround();
                          }}
                          onMouseLeave={() => {
                            changeBack();
                          }}
                          style={{ margin: "10px", width: "300px" }}
                          id="banana"
                          src={url}
                        />
                        <button
                          onClick={() => {
                            deleteImage(url);
                          }}
                        >
                          {" "}
                          Delete
                        </button>
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
            })}
          </Html>
        </Canvas>
      </div>
    </>
  );
}

export default Artist;
