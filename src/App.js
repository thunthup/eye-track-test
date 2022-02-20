import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
function App() {
  return (
    <div className="App flex h-screen">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
