import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Canvas } from '@react-three/fiber'
import Navbar from './Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header/> */}
    <Navbar/>
    <div style={{width:"100%",height:"50vh" }}>
    <Canvas flat linear style={{backgroundColor:"white"}}>

    <App />

    </Canvas>

    </div>
  </React.StrictMode>
)
