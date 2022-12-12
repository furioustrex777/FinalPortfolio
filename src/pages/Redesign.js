import React from "react";
import "./Personas.css";
import { Slider } from "@mui/material";

const Redesign = () => {
  // process.env.PUBLIC_URL + "/" + 'images/Projectior_Sketch.jpg
  let ThaiOriginal = process.env.PUBLIC_URL + "/" + "images/ThaiOriginal.jpeg";
  let designguide1 = process.env.PUBLIC_URL + "/" + "images/designguide1.png";
  let lofiphone = process.env.PUBLIC_URL + "/" + "images/lofiphone.png";
  let hifiphone = process.env.PUBLIC_URL + "/" + "images/hifiphone.png";
  let lofitab = process.env.PUBLIC_URL + "/" + "images/lofitab.png";
  let hificomp = process.env.PUBLIC_URL + "/" + "images/hificomp.png";
  let loficomp = process.env.PUBLIC_URL + "/" + "images/loficomp.png";
  let hifitab = process.env.PUBLIC_URL + "/" + "images/hifitab.png";
  let redesigned = process.env.PUBLIC_URL + "/" + "images/redesigned.png";

  let up = process.env.PUBLIC_URL + "/" + "images/up.png";

  function handleTop() {
    window.scrollTo({ top: 0 });
  }
  window.scrollTo({ top: 0 });

  return (
    <div id="cs1300-gallery">
      <img
        class="top-button"
        src={up}
        alt="back to top"
        onClick={handleTop}
      ></img>
      <section>
        <div>
          <h1 style={{ fontSize: "60px", marginTop: "0" }}>
            Responsive Redesign
          </h1>
          <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
            Overview
          </h2>
          <p>
            In this project, I redesign a resturants food ordering page,
            improving its usability and memorability. I created low fidelity
            wireframes after analying the inital webpage and where it could be
            improved. I then finalized the design with high fidelity prototypes.
            Then I developed the webpages using HTML and CSS with responsive
            elements such that it was consistant accross all screen sizes.
          </p>
          <h2>Website: Thai Food Connection</h2>

          <p>
            Website are always created almost everyday with new ideas being
            developed by those who want to share their ideas or want to provide
            a service. However, there are websites that have been neglected or
            not updated after a while. This page will explore and redesign the
            website below. I choose this website, because when I first saw this
            page, I did not like it nor find it memorable, and thought it was
            not up to par with the other ordering pages that I had seen before.
          </p>
          <br></br>
          <div id="ogwebsite">
            <img class="ogwebsite" src={ThaiOriginal}></img>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="https://thaifoodconnectionnh.smiledining.com//?2022082301">
              {" "}
              Click here to visit page
            </a>
          </div>

          <p>
            This is Thai Food Connection's original website that displays their
            menu items and allows people to order food online.
          </p>
        </div>
      </section>

      <section>
        <h2>Website Problems</h2>

        <div class="columns">
          {/* <div>
            <p>
              Although this page is functional, and has been this way for a long
              time, there are ways that this page could be improved:
            </p>
          </div> */}
          <div class="column">
            <h3 style={{ textAlign: "center", color: "#49565b" }}>Usability</h3>
            <ul>
              <li style={{ padding: "0", color: "#49565b" }}>
                Interface glitches as you scroll
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                Some buttons are present and apparent but have no function (such
                as the grey arrows)
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                Requires movement throughout the page in order to use it
              </li>
            </ul>
          </div>
          <div class="column">
            <h3 style={{ textAlign: "center", color: "#49565b" }}>
              Learnability
            </h3>
            <ul>
              <li style={{ padding: "0", color: "#49565b" }}>
                Buttons icons can be misleading (Down arrow to close)
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                The needed panel interaction is not very apparent
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                Menu and shopping cart move sparratically
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                Lack of instruction and icons for guidance
              </li>
            </ul>
          </div>
          <div class="column">
            <h3 style={{ textAlign: "center", color: "#49565b" }}>
              Memorability
            </h3>
            <ul>
              <li style={{ padding: "0", color: "#49565b" }}>
                Color scheme is unappealing, and there is not a lot of variety,
                a lot of whitespace
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                Simple page, not much to remember. Does its task and nothing
                else
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                Important information is small and does not make it seem
                important
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Accessibility</h2>

        <p>
          Running this website through the Waive service resulted in 184 errors
          and 157 alerts.
          <br></br>
          Most of these issues were related to accessibility, such as
          alternative text, as well as some functional issues. I agreed with the
          results as I was not surprised there were a lot of missing alternative
          text and empty form labels. Additionally, the service pointed out
          useless buttons and redundacies that I had initally seen in the
          problems section above, leading the conclusionss I made about
          usability and memorability being lacking.
        </p>
      </section>

      <section>
        <h2>Style Guide:</h2>
        <div id="ogwebsite">
          <img class="ogwebsite" src={designguide1}></img>
        </div>
        <p>
          By creating a style guide we can establish the main colors,
          typography, and components in different states. This allows us to
          ensure that the interactions are consistent throughout our redesign in
          order to keep the user's experience coherent, in addition to allowing
          us exploration with colors and design choices.
          {/* <br></br>
          <br></br>I choose a similar color scheme to the existing one, and I
          choose a more rounded style for the components rather than the
          previously block style. Although I did diverge from this design guide
          slightly, overall this was the design style that I was pursuing. */}
        </p>
      </section>

      <section>
        <h2>Low and High Fidelity Prototyping:</h2>
        {/* <p>
          Because we want the page to be responsive, meaning the page would
          resize or relayout depending on the dimensions of the interface, I
          wanted to prototype how this page would look on the three main
          interfaces: Laptop, Tablet, and Phone. Before actual redesigning this
          page, I created low fidelity prototype, which I used to see and
          determine the overall layout of the interface. I then used a high
          fidelity prototype to add details and color to see how the page would
          actual look.
        </p> */}
        <div className="centering">
          <div id="description">
            <h3 style={{ textAlign: "center", color: "#49565b" }}>Phone:</h3>
            <div id="prototyping">
              <img class="lofiphone" src={lofiphone}></img>
              <img class="hifiphone" src={hifiphone}></img>
            </div>
            <div>
              <h3
                style={{
                  textAlign: "left",
                  color: "#49565b",
                  marginTop: "2rem",
                }}
              >
                Design Decisions
              </h3>
              <ul>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Emphasis on important information such as hours, address, and
                  phone number.
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Increase usability by placing options all in one location.
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Emphasis on food items on the smaller screen, moving checkout
                  panel to buttom of screen.
                </li>
              </ul>
              {/* <p style={{ textAlign: "left" }}>
                For the phone interface, I wanted the important information such
                as hours, address, and phone number to remain apparent and easy
                to see and find. I also wanted to provide a bit more guidance on
                how to use the webpage, by placing most of the required options
                in the same location. Additionally, I wanted an emphasis on the
                food and their categories with the smaller screen size,
                therefore allowing that to take the most space on the screen,
                and allowing to checkout panel be at the bottom of the screen
                when used on a phone.
              </p> */}
            </div>
          </div>

          <div id="description">
            <h3 style={{ textAlign: "center", color: "#49565b" }}>Tablet:</h3>
            <div id="prototyping">
              <img class="lofi" src={lofitab}></img>
              <img class="hifi" src={hificomp}></img>
            </div>
            <div>
              <h3
                style={{
                  textAlign: "left",
                  color: "#49565b",
                  marginTop: "2rem",
                }}
              >
                Design Decisions
              </h3>
              <ul>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Because we have more space, I placed the checkout container on
                  the right, to be a static element that is always visible.
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Moved the food panels leftward for the cart.
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Resized elements as space became avaliable
                </li>
              </ul>
              {/* <p style={{ textAlign: "left" }}>
                For the tablet interface, because we have more room, I shrunk
                and moved the food panel over, and decided to place the checkout
                menu container on the left. This would stay on the right of the
                screen while you scroll through the page. Other than the
                resizing the layout is similar to the iphone, with things moving
                around as more space become avaliable or unavailable.
              </p> */}
            </div>
          </div>

          <div id="description">
            <h3 style={{ textAlign: "center", color: "#49565b" }}>Laptop:</h3>
            <div id="prototyping">
              <img class="lofi" src={loficomp}></img>
              <img class="hifi" src={hifitab}></img>
            </div>
            <div>
              <h3
                style={{
                  textAlign: "left",
                  color: "#49565b",
                  marginTop: "2rem",
                }}
              >
                Design Decisions
              </h3>
              <ul>
                <li style={{ padding: "0", color: "#49565b" }}>
                  With a larger screen, I added a quick link menu that may be
                  hidden to all the food categories.
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  The quick link menu is sticky and will always be visible.
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Resized elements as space became avaliable
                </li>
              </ul>
              {/* <p style={{ textAlign: "left" }}>
                For the laptop interface, because we have even more room, I
                placed a sticking container of links to areas of the page that
                would be hidden by the dimensions of the interface on the left
                of the screen. This would stay of the left of the screen while
                you scroll through the page so you always have access to it.
                Other than the resizing the layout is similar to the tablet,
                with things moving around as more space become avaliable or
                unavailable.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* <section>{display()}</section> */}
      <section>
        <h2>Redesigned Website:</h2>
        <div className="centering">
          <div id="ogwebsite">
            <img class="ogwebsite" src={redesigned}></img>
          </div>
          <a href="https://furioustrex777.github.io/Redesign/">
            Click here to visit page
          </a>
          {/* <p>
            This is the redesigned page of the original website at the top of
            this page. It is responsive such that it fits and designed
            differently on a phone, tablet, and laptop. Some of the features
            were added throughout the process, it addition to different
            formating and sizing as this page was being designed. However, the
            overall concepts and schema of the prototype are reflected in this
            design.
          </p> */}
        </div>
      </section>
      <section>
        <div>
          <h1>Conclusion and Thoughts</h1>
          <p>
            Overall, this project developed my HTML and CSS skills. I discovered
            and played around with things such as flex-box and hover aspects of
            CSS. Throughout the development, I got to experience a lot of
            stuggle and success, but it was a fruitful experience in which made
            me more confident in my ability to make webpages. I received valid
            feedback and saw how there are always exisited differing options but
            if the goal was there, it was okay. I wanted to emphasize usuablity
            and memorability, and I believe I accomplished just that.
          </p>
        </div>
      </section>
      <section>
        <div className="bottumnav">
          <a href="/FinalPortfolio/#/Personas" style={{ right: "0px" }}>
            &lt;- Personas and Storyboarding
          </a>
          <a href="/FinalPortfolio/#/Iterative" style={{ left: "10px" }}>
            Iterative Design -&gt;
          </a>
        </div>
      </section>
    </div>
  );
};

export default Redesign;
