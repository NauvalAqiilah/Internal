import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Prodi from "./components/Prodi";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Content />
        <Footer />

        <div className="container">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="prodi/:id" element={<Prodi />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
