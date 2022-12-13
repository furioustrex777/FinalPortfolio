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
            Personas and Storyboarding is a classic research method we
            experimented with and is an essential part of user-centered design
            to ensure interfaces are created with the user's best interests in
            mind.
            <br></br>
            <br></br>
            This website's goal is to analyze different user's interactions with
            the projection console and their overall experience using this
            interface. Furthermore, after making initially observations, I
            conducted interviews to better understand these users and the
            context surrounding their actions. After some analysis, I created
            and utilized an empathy map, or users personas, to inform a
            storyboard of a typical users experience.
          </p>
          <h2 style={{ fontSize: "30px", color: "#49565B", marginTop: "0" }}>
            Key Skills Obtained:
          </h2>
          <ul>
            <li style={{ padding: "0", color: "#49565b" }}>
              Design thinking skills and analysis of
              usability/learnability/memorability
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              Obtaining qualitative questions without leading
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              Observations and consolidating key information
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              Empathy map and storyboard creation
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div id="2">
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
            Almost all classrooms at Brown have projecting capabilities that are
            controlled through this projection console. It helps to consolidate
            all the buttons required in the classroom, such as lighting and
            shades, into one interface.
            <br></br>
            <br></br>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Why this interface?
            </h3>
            I chose this interface because I had always seen Professors,
            Teaching Assistants, and even friends struggle with this interface
            despite its goal of making the process easier and I wanted to learn
            why.
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
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Interface Design Intentions
            </h3>
            This is a touch screen interface that controls the projector,
            lights, shades, audio, and screen all in one location. It is used by
            many to project their screens, to show presentations, videos, and
            many more things. This interface aims to simplify the complex steps
            it would take to set up a room for a screen projection, in order to
            provide a faster and easier experience.
            <br></br>
            <br></br>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Layout Design
            </h3>
            The initial page is for fast and easy operations, with common
            functions in the utility bar to the right of the screen.
            <br></br>
            Then there is an advanced page that allows for more customization
            and control over the room.
          </p>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
          Key User Observations:
        </h2>
        <div>
          <p style={{ fontSize: "27px", color: "#49565B", marginTop: "0" }}>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Preface
            </h3>
            I choose to observe different users who used the projection console
            throughout Brown University classrooms. I was able to observe
            professors, teaching assistants, and students to provide a quality
            sample that represented different ages, jobs, nationalities and
            socioeconomic demographics since Brown's population is diverse.
            <ul>
              <li style={{ padding: "0" }}>
                As people worked with the interface, they initally looked at the
                screen for a bit of time before continuing with their task.
              </li>
              <li style={{ padding: "0" }}>
                Most users connected the projector with the HDMI cord and this
                worked about 75% of the time but when users ran into issues with
                the cord, users would default to AirMedia.
              </li>
              <li style={{ padding: "0" }}>
                Some people utilized the advanced screen to control the screen,
                lights, and shades in the room.
              </li>
              <li style={{ padding: "0" }}>
                Most people often seemed to make a confused face at times while
                interacting with the interface.
              </li>
              <li style={{ padding: "0" }}>
                Many users tapped the screen multiple times if it didn't respond
                quickly.
              </li>
            </ul>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              At a glance
            </h3>
            Although my first impressions of the interface was that it was
            pretty intuitive, however, it seems that to the general user, this
            was not the case. Their observable frustration may have been due to
            the crowd in front of them, but to truly understand their experience
            we will interview the users directly.
          </p>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
          Interview Questions and Summarized Responses:
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
                  labels, however, labeling and instructions should have been
                  clearer."
                </li>
              </ul>
              <li style={{ padding: "0" }}>
                Can you describe your overall experience with this interface?
              </li>
              <ul>
                <li style={{ padding: "0" }}>
                  "Overall, it was a frustrating experience as there were many
                  unexpected problems that I ran into, and things did not often
                  work on the first attempt, which led to a feeling that the
                  process should and could be easier and a feeling that it took
                  too long to do the task."
                </li>
              </ul>
            </ol>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Analysis
            </h3>
            As we can see from the responses above, despite the goal of the
            projection console to consolidate the steps of creating a streamline
            user experience, due to the lack of instruction it was a frustrating
            experience overall for first time users. This leads to an initially
            negative memorable experience and was inline with my initial
            observations.
          </p>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
          Empathy Maps:
        </h2>
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
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Creation Process
            </h3>
            Based on my observations and interviews, I created two empathy Maps,
            or fictional personas, that represented the different types of users
            who will interact with a projection console, those who need to
            present something, such as a Professor, and students, who may use
            this interface for entertainment purposes. By creating personas, I
            can better understand the needs, goals, and motivations of users to
            improve their overall user experience.
            {/* I wanted to convey the
            feeling of frustration when something did not go as expected, and
            how impactful the lack of instructions can be on new users. */}
          </p>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
          Storyboard:
        </h2>

        <p style={{ fontSize: "27px", color: "#49565B", marginTop: "0" }}>
          <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
            Goal
          </h3>
          Using the "Susan Sugandee" persona, I developed a storyboard that
          demonstrates our persona's goals, expectations, and experience using
          the projection console interface in order to convey the effectiveness
          of the interface's user based design, and to demonstrate design
          concepts such as learnability.
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
            Overall, this process of analyzing user experience was a worthwhile
            experience. It was interesting to think of physical object such as
            this projection console and things like microwaves as interfaces,
            similar to that of a webpage. I learned the foundations of
            learnability, usability, and memorability and understood the
            frustration that can come along with a bad user interface and user
            experience. Overall, this classic user experience task was helpful
            in kick-starting my abilities as a web page developer.
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
