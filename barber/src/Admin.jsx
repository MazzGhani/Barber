import React, { useEffect, useRef, useState } from "react";
import { app, storage } from "./firebase/config.js";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
  getStorage,
  getMetadata
} from "firebase/storage";
import { v4 } from "uuid";

export default function Admin() {
  const [imageUpload, setImageUpload] = useState(null);
  const [link, setLink] = useState(null);

  const [imageList, setImageList] = useState([]);
  const metadata={
    customMetadata:{
      link:link
    }
    
  }

  const uploadImage = () => {
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload,metadata).then(()=>{console.log("uploaded!")})
  };

  return (
    <div>
        <div>Admin</div>
      
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <br />
      <h1>Link of image</h1>
      <input type="text" onChange={(event)=>{setLink(event.target.value)}}/>
      <button onClick={() => uploadImage()}> Upload</button>
    </div>
  );
}
