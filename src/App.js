import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, checked, Checkbox } from "react";
import * as React from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";
import { TypeAnimation } from "react-type-animation";
import Slider from "react-animated-slider";
import "./slider-animations.css";
import "react-animated-slider/build/horizontal.css";
import ClickAwayListener from "react-click-away-listener";
import Popup from "reactjs-popup";
import About from "./pages/About";
import Home from "./pages/Home";
import Personas from "./pages/Personas";
import Redesign from "./pages/Redesign";
import Develop from "./pages/Develop";
import Iterative from "./pages/Iterative";
import { slide as Menu } from "react-burger-menu";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "normalize.css/normalize.css";

// esther_odonnell@brown.edu
// victoria_macridis@brown.edu

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
// bakeryData = bakeryData.sort((a, b) => (a.name > b.name ? 1 : -1));

function App() {
  const [options, setOptions] = useState(bakeryData);
  const [filters, setFilters] = useState([]);
  const [sorted, setSorted] = useState("");
  const [filtersDiet, setFiltersDiet] = useState([]);
  const [favs, setFaves] = useState([]);
  const [favorite, setFavorite] = useState(false);

  let initialState = [];
  let initialStateDiet = [];

  const [popup, setPopup] = useState("");
  const [page, SetPage] = useState("Home");

  console.log(window.location.pathname);
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
  // console.log(element);
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

        {/* <h1>The Final Portfolio</h1>{" "} */}
        {/* <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup> */}
        {/* here https://www.npmjs.com/package/react-type-animation */}
        <div id="header">
          {element}
          {/* <TypeAnimation
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
          /> */}
          {/* <br></br> */}
          {/* <button onClick={() => setPopup("About")}>About</button> */}

          {/* https://dev.to/kunal/how-to-create-a-popup-menu-in-react-34hh */}
          {/* {popup == "About" && (
            <ClickAwayListener onClickAway={() => setPopup("")}>
                    <div className={'popup'}>
                        <p className='popuptext'> This is my final Portfolio, the culmination of all of my projects in Brown CSCI1300: User Interface and User Experience.
                          This page shows the developlemnt of my front-end skills. From utilizing hierarchy, to emphasising learnability and usuablity.
                          This page features projects that utilize HTML, CSS, design skills, and even CSS. Hope you enjoy and learn something along the way!
                        </p>
                    </div>
            </ClickAwayListener>
        )} */}
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
            {/* <ul id="nav">
              <li id="nav">
                <a href="/" rel="index" class="transition-link">
                  Home
                </a>
              </li>
              <li id="nav">
                <a href="/about" rel="page" class="transition-link">
                  About
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/FinalPortfolio/" element={<Home />} />
          <Route path="/FinalPortfolio/About" element={<About />} />
          <Route path="/FinalPortfolio/Personas" element={<Personas />} />
          <Route path="/FinalPortfolio/Redesign" element={<Redesign />} />
          <Route path="/FinalPortfolio/Iterative" element={<Iterative />} />
          <Route path="/FinalPortfolio/Develop" element={<Develop />} />
        </Routes>
      </Router>

      <div className="Body"></div>
    </div>
  );
}

export default App;
