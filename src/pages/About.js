import React from "react";

const About = () => {
  return (
    <div className="popup">
      <section
        style={{
          backgroundColor: "white",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        <h1 style={{ fontSize: "60px", color: "#49565B", marginTop: "0" }}>
          Hi there, I'm _____!
        </h1>
        <p style={{ fontSize: "27px", color: "#667479", margin: "0" }}>
          This is my final Portfolio, the culmination of all of my projects in
          Brown CSCI1300: User Interface and User Experience. This page shows
          the development of my front-end skills. From utilizing hierarchy, to
          emphasizing learnability and usability. This page features projects
          that utilizes HTML, CSS, design skills, and even React. Hope you enjoy
          and learn something along the way!
        </p>
        <br></br>
        <p style={{ fontSize: "27px", color: "#667479", margin: "0" }}>
          I am a current Senior at Brown University graduating in the spring of
          2023. I am concentrating in Economics and Computer Science. I had
          previously interned at a company where they had user interface and
          user experience issues that could have been improved from my point of
          view. Yet after taking this course I feel competent enough to provide
          even better peer review to design. Although this was my first formal
          education of UIUX, I did have some prior knowledge to developing a
          website but I believe this class was a great opportunity to experiment
          web page development that people may otherwise not have enough time to
          commit to these tasks.
        </p>
        <br></br>
        <h1 style={{ fontSize: "60px", color: "#49565B", marginTop: "0" }}>
          Fun Facts:
        </h1>
        <h2>
          <ul className="popuptext" style={{ padding: "0", margin: "0" }}>
            <li
              className="popuptext"
              style={{ fontSize: "27px", color: "#667479", margin: "0" }}
            >
              I am a fan of playing pool, basketball, tennis.
            </li>
            <li
              className="popuptext"
              style={{ fontSize: "27px", color: "#667479", margin: "0" }}
            >
              I code in Python and Javascript
            </li>
            <li
              className="popuptext"
              style={{ fontSize: "27px", color: "#667479", margin: "0" }}
            >
              I love travelling and plan to Belize and Japan next
            </li>
          </ul>
        </h2>
      </section>
    </div>
  );
};

export default About;
