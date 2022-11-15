import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Live from "./Live";
import Video from "./Video";
import Photos from "./Photos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lyrics from "./Lyrics";
import Shop from "./Shop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/live" element={<Live />} />
        <Route path="/video" element={<Video />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/lyrics" element={<Lyrics />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
