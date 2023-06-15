import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import Navbar from "./Navbar";
import Teacher from "./Teacher";
import Artist from "./Artist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/artist" element={<Artist />}></Route>
        <Route exact path="/teacher" element={<Teacher />} />
        {/* <Route path="/contact" element={<App />}></Route> */}
      </Routes>
    </BrowserRouter>
);
