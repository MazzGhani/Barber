import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import { app, storage } from "./firebase/config.js";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
  getStorage,
} from "firebase/storage";
import { v4 } from "uuid";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Artist() {
  const canvasRef = useRef();
  const sphereRef = useRef();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  const Sphere = () => {

    useFrame((state)=>{
      const time= state.clock.getElapsedTime();
      sphereRef.current.position.x+=Math.cos(time +10)*0.02
    })
    return (
      <mesh ref={sphereRef}>
        <sphereBufferGeometry args={[2, 24, 24]} />
        <meshStandardMaterial color={"blue"} wireframe={true} />
      </mesh>
    );
  };

  const changeBackround = () => {

    
    if (document.getElementById("banana")) {
      setTimeout(()=>{

        canvasRef.current.style.backgroundColor = "navy";
        sphereRef.current.material.color = new THREE.Color("yellow");

      },100)
    }
  };

  const changeBack = () => {
    canvasRef.current.style.backgroundColor = "#CBC3E3";
    sphereRef.current.material.color = new THREE.Color("blue");
  };

  const uploadImage = () => {
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  const deleteImage = (url) => {
    const imageNameList = ref(storage, url);

    deleteObject(imageNameList).then(() => {
      console.log("deleted");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]); // set image list from URL
        });
      });

      console.log("i fire once");
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
                  <Container fluid style={{display:"flex",margin:"0 auto",justifyContent:"center"}} >
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
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button onClick={() => uploadImage()}> Upload</button>
          </Html>
        </Canvas>
      </div>
    </>
  );
}

export default Artist;
