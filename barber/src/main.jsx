import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Canvas } from '@react-three/fiber'
import Navbar from './Navbar'
import List from "./List"
import RandomHair from './RandomHair'
import { Html,ScrollControls } from '@react-three/drei'
import Backround from "./Backround"


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <Header/> */}
    <Navbar/>
    <div style={{width:"100%",height:"50vh" }}>
    <Canvas flat linear style={{backgroundColor:"#CBC3E3"}}>


    <App />
 
    </Canvas>

    </div>
    <List/>

    <div style={{width:"100%",height:"50vh" }}>
    <Canvas flat linear style={{backgroundColor:"#CBC3E3"}}>
      {/* <ScrollControls pages={1}>

    <Html  fullscreen>

    <RandomHair/>
    </Html>

      </ScrollControls> */}

    <Backround/>

 
    </Canvas>

    </div>
  </React.StrictMode>
)
