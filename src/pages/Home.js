import React from "react";
import Slider from "react-animated-slider";
import bakeryData from "./../assets/bakery-data.json";
import Personas from "./Personas";
import { useNavigate } from "react-router-dom";
import { margin } from "@mui/system";

const Home = () => {
  let navigate = useNavigate();
  function routeChange(event, pageName) {
    let path = pageName.pageName;
    navigate(path);
    window.scrollTo({ top: 0 });
  }
  //   $("#divWithPadding > div").click(function (e) {
  //     e.stopPropagation();
  //   });
  //   $("#divWithPadding").click(function () {
  //     document.getElementsByClassName("nextButton").click();
  //     // nextButton.click()
  //   });

  return (
    <div>
      <Slider className="slider-wrapper" autoplay={30000}>
        {bakeryData.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <p style={{ fontSize: "20px" }}>{item.summary}</p>
              <button item={item} onClick={(event) => routeChange(event, item)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <section style={{ backgroundColor: "white" }}>
        <div className="popup" style={{ marginTop: "0", marginBottom: "0" }}>
          <br></br>
          <h1 style={{ fontSize: "60px", color: "#49565B", marginTop: "0" }}>
            Hello there!
          </h1>
          <p style={{ fontSize: "27px", color: "#667479", margin: "0" }}>
            Welcome to my Portfolio! I'm a Senior at Brown University and this
            is my final portfolio for 'User Interface and User Experience'. The
            reason I took this class was to explore a new field of Computer
            Science. I took this as an opportunity to experiment, try new
            things, have fun and broaden by abilities as a future software
            developer.
            <br></br>
            <br></br>
            <a href="/about" style={{ fontSize: "27px", margin: "0" }}>
              {" "}
              More about me
            </a>
            . Here are the four projects in this portfolio:
          </p>
          <div className="bottombuttons">
            {/* <Slider
              className="slider-wrapper1"
              slideIndex={0}
              disabled={true}
              touchDisabled={true}
              previousButton={false}
              nextButton={false}
            >
              {bakeryData.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{
                    background: `url('${item.image}') no-repeat center center`,
                    cursor: "pointer",
                    width: "25%",
                    height: "8vh",
                  }}
                  onClick={(event) => routeChange(event, item)}
                >
                  <div className="inner">
                    <h1 style={{ fontSize: "27px" }}>{item.name}</h1>
                  </div>
                </div>
              ))}
            </Slider> */}
            {/* <div> */}
            {bakeryData.map((item, index) => (
              <div
                key={index}
                // className="slider-content"
                id="bottumb"
                style={{
                  background: `linear-gradient(transparent, rgba(0, 0, 0, .6)), url('${item.image}') no-repeat center center`,
                  //   background: "",
                  cursor: "pointer",
                  // width: "50%",
                  height: "12vh",
                  //   flexDirection: "column",
                  maxWidth: "25%",
                  minWidth: "23%",
                  //   margin: "0",
                  // position: "relative",
                  // margin: "0 auto",
                  margin: "0",
                  textAlign: "center",
                  alignSelf: "center",
                  justifySelf: "center",
                  display: "block",
                  margin: ".8rem",
                }}
                onClick={(event) => routeChange(event, item)}
              >
                <div
                  className="inner"
                  style={{
                    fontSize: "27px",
                    color: "Black",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "inherit",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "26px",
                      color: "white",
                      textAlign: "center",
                      paddingTop: "25px",
                      //   alignSelf: "center",
                      //   justifySelf: "center",
                    }}
                  >
                    {item.name}
                  </h1>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>

          {/* <h2>Personas and Storyboarding</h2>

          <h1 style={{ color: "black" }} className="popuptext">
            The first project was Personas and Storyboarding. This project was
            meant to make us think of interfaces in a new way and was a
            springboard for the remaining assignments. This allowed us to
            practice the fundamental concepts of design, in which we can use to
            determine and improve upon user experiences. With the knowledge of
            personas that would use our interface, be it a real object or a
            webpage, we can cater our design and functionality to that of our
            users. Additionally, having a storyboard helps to determine how
            usuable, learnable, and memorable our interfaces can be. This was a
            stepping stone to becoming a good webpage developer.
            We can think of interfaces in many different ways, and we can use this classic user experience task to
            determine and cater our design and functionality to that of our
            users. 
          </h1> */}
          {/* 
          <h2>Responsive Redesign</h2>

          <h1 style={{ color: "black" }} className="popuptext">
            Continuing along our journey to be web developers, we took a look at
            existing websites and we analyzed the page to see how it could be
            improve. Whether that was a small change in the hierarchy of the
            page, or a whole redesign. This is where we start putting our skills
            to practice. I choose a webpage I didn't like initally and tried to
            redesign the whole page to be a more memorable experience. 
            
            


            the page to see how it could be improve. Whether that was a small
            change in the hierarchy of the page, or a whole redesign. This is
            where we start putting our skills to practice.
          </h1> */}

          {/* <h2>Iterative Design</h2>

          <h1 style={{ color: "black" }} className="popuptext">
            But what if we didn't have a template? We'd have to design the
            interface ourselves. Using a start-up to give us a purpose, we
            designed an app where we use our design techniques from the previous
            two projects and help a start-up achieve the goals of their idea,
            putting our design skills to the test!
            <br></br>
            Having to design the interface from scratch, we designed an mobile
            app where we used our design techniques to help a start-up achieve
            the goals of their idea.
          </h1> */}

          {/* <h2>Development</h2>

          <h1 style={{ color: "black" }} className="popuptext">
            Finally, we get to React, where we get to work with dynamic pages,
            with animations and buttons with actual functionality. I used all of
            our abilities I've developed thus far together to create a webpage.
            This gave me experience with React, as well as some freedom to
            design and implement functionality on my own terms.
            <br></br>
            Working with dynamic pages, and JavaScript to provide functionality.
            With freedom to design and implement functionality such as sorting
            and aggregating, I developed this webpage.
          </h1> */}

          {/* <h1 style={{ fontSize: "40px", color: "black" }}>
            Thanks for reading, hope you enjoyed and learned something new. Feel
            free to explore the projects using the slider above!
          </h1> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
