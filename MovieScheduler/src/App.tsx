import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} index={true} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
