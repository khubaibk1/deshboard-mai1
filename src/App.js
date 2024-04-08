import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home.jsx";
import Following from "./pages/Following.jsx";
import Premium from "./pages/Premium.jsx";
import Featured from "./pages/Featured.jsx";
import Music from "./pages/Music.jsx";
import Education from "./pages/Education.jsx";
import Health from "./pages/Health.jsx";
import Header from "./components/Header.jsx";
import Creator from "./pages/Creator.jsx";
import Upload from "./pages/Upload.jsx";
import Uploads from "./pages/Uploads.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/following" element={<Following />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/music" element={<Music />} />
          <Route path="/education" element={<Education />} />
          <Route path="/health" element={<Health />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/uploads" element={<Uploads />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
