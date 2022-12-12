import "./App.css";
import { useState } from "react";
import * as React from "react";
import bakeryData from "./assets/bakery-data.json";
import { TypeAnimation } from "react-type-animation";
import "./slider-animations.css";
import "react-animated-slider/build/horizontal.css";
import { HashRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Personas from "./pages/Personas";
import Redesign from "./pages/Redesign";
import Develop from "./pages/Develop";
import Iterative from "./pages/Iterative";
import { slide as Menu } from "react-burger-menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// esther_odonnell@brown.edu
// victoria_macridis@brown.edu

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [options, setOptions] = useState(bakeryData);
  let element;
  if (window.location.pathname === "/") {
    element = (
      <TypeAnimation
        className="Typeanimation"
        // Same String at the start will only be typed once, initially
        sequence={[
          "How to code in HTML?",
          1000,
          "How to use CSS?",
          1000,
          "How to code in React?",
          1000,
          "How to style React with CSS?",
          1000,
        ]}
        speed={50} // Custom Speed from 1-99 - Default Speed: 40
        style={{ fontSize: "2em" }}
        wrapper="span" // Animation will be rendered as a <span>
        repeat={Infinity} // Repeat this Animation Sequence infinitely
      />
    );
  }

  function showSettings(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
      <div className="Header">
        <div className="Name">
          <div>
            <a href="/">
              <h1 className="siteTitle">The Final Portfolio</h1>
            </a>
          </div>
          <div>
            <h2 className="longsubtitle">Undergrauate @BrownU</h2>
          </div>
        </div>
        {/* here https://www.npmjs.com/package/react-type-animation */}
        <div id="header">
          {element}
          <div>
            <Menu right={true} isOpen={false}>
              <a id="home" className="menu-item" href="/">
                Home
              </a>
              <a id="about" className="menu-item" href="/about">
                About
              </a>
              <a id="Personas" className="menu-item" href="/Personas">
                Personas
              </a>
              <a id="Redesign" className="menu-item" href="/Redesign">
                Redesign
              </a>
              <a id="Iterative" className="menu-item" href="/Iterative">
                Iterative
              </a>
              <a id="Develop" className="menu-item" href="/Develop">
                Develop
              </a>
            </Menu>
          </div>
        </div>
      </div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Personas" element={<Personas />} />
          <Route path="/Redesign" element={<Redesign />} />
          <Route path="/Iterative" element={<Iterative />} />
          <Route path="/Develop" element={<Develop />} />
        </Routes>
      </HashRouter>

      <div className="Body"></div>
    </div>
  );
}

export default App;
