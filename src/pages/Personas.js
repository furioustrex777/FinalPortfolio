import React from "react";
import "./Personas.css";
import { useNavigate, Link } from "react-router-dom";

const Personas = () => {
  let image = process.env.PUBLIC_URL + "/" + "images/Projectior_Sketch.jpg";
  let image2 = process.env.PUBLIC_URL + "/" + "images/story1.png";
  let image3 = process.env.PUBLIC_URL + "/" + "images/StoryBoard.jpeg";
  let image4 = process.env.PUBLIC_URL + "/" + "images/story2.png";

  let up = process.env.PUBLIC_URL + "/" + "images/up.png";

  let video = process.env.PUBLIC_URL + "/" + "videos/video1.mp4";

  function handleTop() {
    window.scroll({ top: 0, left: 0, behavior: "auto" });
  }
  window.scroll({ top: 0, left: 0, behavior: "smooth" });

  // function refreshPage() {
  //   setTimeout(() => {
  //     window.location.reload(false);
  //   }, 500);
  //   console.log("page to reload");
  // }
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
            Personas and Storyboarding
          </h1>
          <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
            Overview
          </h2>
          <p>
            This website's goal is to analyze different user's usage of the
            projection console and their overall experience using this
            interface. Additionally, I conducted interviews to better understand
            these users and the context surronding their actions. Then, using an
            empathy map, I created users personas to inform a storyboard of the
            users experience
          </p>
          <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
            Interface: Projection Console
          </h2>

          {/* <video width="750" height="500" controls>
            <source src={video} type="video/mp4" muted={true} />
          </video> */}
          <p
            style={{
              fontSize: "27px",
              color: "#49565B",
              marginTop: "0",
              marginBottom: "0",
            }}
          >
            After attending classes at Brown and likely most other colleges, you
            may have likely been projected a presentation or video for class.
            Almost all classrooms at Brown have projecting capabilities that is
            controlled through this projection console. It helps to consolidate
            all the buttons required in the classroom, such as lighting and
            shades, into one interface.
            <br></br>
            <br></br>
          </p>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
          Annotated Sketch:
        </h2>
        <div className="centering">
          <img
            class="gallery-item"
            src={image}
            alt="annotated sketch of projector"
          ></img>
          <p
            style={{
              fontSize: "27px",
              color: "#49565B",
              marginTop: "0",
              textAlign: "left",
            }}
          >
            This is an touch screen interface that controls the projector,
            lights, shades, audio, and screen all in one location. It is used by
            many to project their screens, to show presentations, videos, and
            many more things. This interface aims to simplify the complex steps
            it would take to set up a room for a screen projection, in order to
            provide a faster and easier experience.
            <br></br>
            <br></br>
            The inital page is for fast and easy operations, with common fuction
            in the utility bar to the right of the screen.
            <br></br>
            Then there is an advanced page that allows for more custimzation and
            control over the room.
          </p>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
          Key User Observations:
        </h2>
        <div>
          <p style={{ fontSize: "27px", color: "#49565B", marginTop: "0" }}>
            Preface: I observed different users who used the projection console
            throughout Brown University buildings. We were able to observe
            professors, teaching assistants, and students to provide a sample
            that represented different ages, jobs, nationalities and
            socioeconomic demographics since Brown's population is diverse.
            <ul>
              <li style={{ padding: "0" }}>
                As people worked with the interface, they initally looked at the
                screen for a bit of time, before continuing with their task.
              </li>
              <li style={{ padding: "0" }}>
                Most users connected the projector with the HDMI cord and this
                worked about 75% of the time but when users ran into issues this
                with cord, users would default to AirMedia.
              </li>
              <li style={{ padding: "0" }}>
                Some people utilized the advanced screen to control the screen,
                lights, and shades in the room.
              </li>
              <li style={{ padding: "0" }}>
                Most people often seemed to make a confused face at time while
                interacting with the interface.
              </li>
              <li style={{ padding: "0" }}>
                Many users tapped the screen multiple times if it didn't respond
                quickly.
              </li>
            </ul>
          </p>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
          Interview Questions and Responses:
        </h2>
        <div>
          <p style={{ fontSize: "27px", color: "#49565B", marginTop: "0" }}>
            <ol style={{ padding: "0" }}>
              <li style={{ padding: "0" }}>
                How would you describe the process of projecting your screen?
              </li>
              <ul>
                <li style={{ padding: "0" }}>
                  "I expected a more automatic process, as the interface itself
                  was not self explanatory making it hard to learn and find
                  things that are needed, which made using the interface
                  complicated to use as there was not one clear way to do the
                  task."
                </li>
              </ul>
              <li style={{ padding: "0" }}>
                Could you craft an idea of what you should do next at each step?
              </li>
              <ul>
                <li style={{ padding: "0" }}>
                  "It was not clear what should be done next at each step, and I
                  made assumptions as labeling was weird and unclear, and both
                  the simple and busy screens lead to exploration which
                  distracted me from the task."
                </li>
              </ul>
              <li style={{ padding: "0" }}>
                Did you expect things to go the way at each step?
              </li>
              <ul>
                <li style={{ padding: "0" }}>
                  "Yes and no, there was no help when things go awry and there
                  were too many options, making controls like video routing to
                  be more confusing, but I would say that I needed the advanced
                  options as basic was too basic."
                </li>
              </ul>
              <li style={{ padding: "0" }}>
                How did you learn to use the interface? Was there any
                difficulties in doing so?
              </li>
              <ul>
                <li style={{ padding: "0" }}>
                  "The interface was similar to a touch screen interface such as
                  an IPad, and I made assumptions on the functionality with the
                  labels, however, labeling and intructions should have been
                  clearer."
                </li>
              </ul>
              <li style={{ padding: "0" }}>
                Can you describe your overall experience with this interface?
              </li>
              <ul>
                <li style={{ padding: "0" }}>
                  " Overall, it was a frustrating experience as there were many
                  unexpected problems that I ran into, and things did not often
                  work on the first attempt, which lead to a feeling that the
                  process should and could be easier and a feeling that it too
                  longer than wanted to do the task."
                </li>
              </ul>
            </ol>
            As we can see from the responses above, despite the goal of the
            projection console to consolidate the steps of creating a streamline
            user experience, due to the lack of instruction, it was a
            frustrating experience overall for first time users. This leads to
            an initally negative memorable experience.
          </p>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
          Empathy Maps:
        </h2>
        <p style={{ fontSize: "27px", color: "#49565B", marginTop: "0" }}>
          Based on our observations and interviews, I created two personas that
          would use this projection console.
        </p>
        <div className="centering">
          <img
            class="empathymaps"
            src={image2}
            alt="empathy map for Susan"
          ></img>
          <img
            class="empathymaps"
            src={image4}
            alt="annotated sketch of projector"
          ></img>
          <br></br>
          <p
            style={{
              fontSize: "27px",
              color: "#49565B",
              marginTop: "0",
              textAlign: "left",
            }}
          >
            My personas were based on the main audience of the projection
            console, those who need to present something, such as a teaching
            assistant, student leaders, or professors, and students who are
            using this inferface for entertainment purposes. I wanted to convey
            the feeling of frustration from the responses above when something
            did not go as expected, and how impactful it can be if a schedule
            was meant to be followed.
          </p>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
          Storyboard:
        </h2>
        <p style={{ fontSize: "27px", color: "#49565B", marginTop: "0" }}>
          Using the "Susan Sugandee" persona, I developed a storyboard that
          demonstrates our persona's goals, expectations, and experience using
          the projection console interface.
          {/* Continuing the theme of frustrated,
          I constructed a scenario where on of the personas above, Susan,
          encountered a frustrating experience with the interface. */}
        </p>
        <div className="centering">
          <p>
            <img
              class="StoryBoard"
              src={image3}
              alt="annotated sketch of projector"
            ></img>
            <p style={{ textAlign: "left" }}>
              {/* This storyboard is for Susan Sugandee, who's goal is to be the
              best HTA that she can be. However, due to many commitments, she
              tends to rush through her tasks. She has had little time to
              prepare, but goes into class with a presentation. She see she has
              many options to present, and tries the easiest and most familiar
              option. However, this does not work which makes her frustrated as
              this had worked before, but she tries another method rahter than
              waste time. Luckily there was a bit of guidance that allowed her
              to successfully project her computer screen. This persona did not
              want to waste her student's time and wanted to perform her duties
              correctly.  */}
              {/* This storyboard reflects how the interface can be confusing,
              frustrating, and not work as expected at times. */}
            </p>
          </p>
        </div>
      </section>
      <section>
        <div>
          <h1>Conclusion and Thoughts</h1>
          <p>
            Overall, this was a worthwhile experience. I learned the foundations
            of learnability, usability, and memorability. It was interesting to
            think of physical object such as this projection console and things
            like microwaves as interfaces, similar to that of a webpage. I
            deepened my knowledge of the frustration that can come across with a
            bad user interface that results in a bad user experience. This
            project had helped me to understand potential downfalls that an
            interface can have, knowledge I can utilize for later projects.
            Overall, this classic user experience task was helpfull in
            kick-starting my abilities as a webpage developer.
          </p>
        </div>
      </section>
      <section>
        <div className="bottumnav">
          <Link to="/Develop" style={{ right: "0px" }}>
            &lt;- Development
          </Link>
          <a href="/FinalPortfolio/#/Redesign" style={{ left: "10px" }}>
            Responsive Redesign -&gt;
          </a>
        </div>
      </section>
    </div>
  );
};

export default Personas;
