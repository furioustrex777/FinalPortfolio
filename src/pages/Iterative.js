import React from "react";
import "./Iterative.css";

const Iterative = () => {
  let hifi1 = process.env.PUBLIC_URL + "/" + "images/hifi1.png";
  let hifi2 = process.env.PUBLIC_URL + "/" + "images/hifi2.png";
  let lofi1jp = process.env.PUBLIC_URL + "/" + "images/lofi1.jpeg";
  let lofi2 = process.env.PUBLIC_URL + "/" + "images/lofi2.png";
  let lofi3 = process.env.PUBLIC_URL + "/" + "images/lofi3.jpeg";
  let lofi4 = process.env.PUBLIC_URL + "/" + "images/lofi4.png";
  let lofiwire = process.env.PUBLIC_URL + "/" + "images/lofiwire.jpeg";

  var i = 0;
  function prev() {
    let images = document.querySelectorAll(".slider-1 img");
    i--;
    if (i < 0) {
      i = images.length - 1;
    }

    images[i].classList.add("shown");
  }

  function next() {
    let images = document.querySelectorAll(".slider-1 img");
    images[i].classList.remove("shown");
    i++;

    if (i >= images.length) {
      i = 0;
    }

    images[i].classList.add("shown");
  }

  let up = process.env.PUBLIC_URL + "/" + "images/up.png";

  function handleTop() {
    window.scrollTo({ top: 0 });
  }
  window.scrollTo({ top: 0 });

  return (
    <div id="cs1300-gallery2">
      <img
        class="top-button"
        src={up}
        alt="back to top"
        onClick={handleTop}
      ></img>
      <script src="app.prev"></script>
      <section>
        <h1>Iterative Design</h1>

        <h2>Overview</h2>
        <div>
          <p>
            Approximately 305 million start-ups are created annually. In this
            project we aimed to mock up a solution to a start-ups concept. In
            hopes of achieving this goal, we have created a mobile interactive
            interface for Rever, an app for making returns. Our group designed
            an interactive prototype for this start-up with only the concept of
            fast returns as our foundations. This process involved sketching
            ideas of the interface to creating an interactive high-fidelity
            prototype, to conducting user testing on a critiqued prototype. We
            then contacted the startup to share our prototype with them.
          </p>
          <h2 style={{ fontSize: "30px", color: "#49565B", marginTop: "0" }}>
            Key Skills Obtained:
          </h2>
          <ul>
            <li style={{ padding: "0", color: "#49565b" }}>
              Iterative Process
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              Using Figma and Prototyping
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              User testing and critiquing
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              EXplore different concepts, accepting change throughout the
              iterative process
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: "40px", color: "#49565B", marginTop: "0" }}>
          Pre-Design Thinking For Mobile Application
        </h2>

        <div>
          <p>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Context about the startup:
            </h3>
            Rever is an up and coming startup with the goal of making returns
            easier. Rever makes returns easier by consolidating returns into one
            location and allowing consumers to return their products in 2
            clicks. By offering different refund methods, you can get an instant
            refund if you need it rather than waiting for the long process of
            the return.
          </p>
        </div>

        <div>
          <p>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Interface Audience Goal
            </h3>
            Our interface mainly impacts small to medium sized businesses that
            work in sales, as well as consumers of all ages and socioeconomic
            statuses, as this service provides an ease of life experience.
            <br></br>
            <br></br>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Customers
            </h3>
            Customers would want an easy and fast refund process with their
            mobile phones. Customers can select items they would like to return,
            and in one click have three options for returns: instant refund,
            full refund, and refund through store credit, making this process
            only three clicks.
            <br></br>
            <br></br>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Businesses
            </h3>
            Businesses can manage all refunds from all customers in one page and
            can visualize refunds completed, in-progress, and canceled. The
            simple interface makes it more accessible, enhancing memorability,
            while still having all the required information present.
          </p>
        </div>
      </section>
      <section>
        <h2>Sketches</h2>
        <p>
          <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
            Step 1
          </h3>
          In a group of four, we brainstormed different solutions through
          sketches and lofi wireframes, to explore different design concepts on
          how to highlight key concepts of the application. This was vital in
          developing our ideas, taking into consideration alternative designs
          and not commiting to a singular idea early on.
        </p>

        <div class="slider slider-1">
          <div class="photos">
            <img src={lofi1jp} class="shown" alt="lofi1"></img>
            <img src={lofi2} alt="lofi2"></img>
            <img src={lofi3} alt="lofi3"></img>
            <img src={lofi4} alt="lofi4"></img>
            <div class="buttons">
              <div class="prev2" onClick={prev}></div>
              <div class="next2" onClick={next}></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Low Fidelity Wireframe</h2>
        <p>
          <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
            Step 2
          </h3>
          After discussing and consolidating our ideas, we came up with the
          following prototype that most effectively matched the goals of the
          start-up:
          {/* After sketching, we regrouped and discussed
          whether our sketches were effective at solving the problem and diverse
          or creative. We then combined our ideas into a single wireframe that
          we created in Figma. */}
          {/* and to consolidate what we thought would be a
          good design to match the goals of the start-up, a quick and easy
          process */}
        </p>
        <div class="gallery-item-container">
          <img class="gallery-item2" src={lofiwire} alt="LoFi Wireframe"></img>
        </div>
        <div>
          <h3
            style={{
              textAlign: "left",
              color: "#49565b",
              marginTop: "2rem",
            }}
          >
            Key Design Decisions
          </h3>
          <ul>
            <li style={{ padding: "0", color: "#49565b" }}>
              For the home page, we wanted to prioritize user's needs, so we
              wanted the layout to allow for the quickest actions and returns.
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              We ordered items in terms of a most recent to least recently
              purchase, as you are more likely to return a recent item.
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              Return options were placed in order of quickest to slowest
              allowing for faster and more profitable returns
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              We wanted to archive all orders and refunds that occured through
              the app, similar to NYtimes' Evergreen initiative.
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              Wanted all information about the product to be avaliable to avoid
              return issues and complaints
            </li>
          </ul>
          {/* <h3>Home page:</h3>
          <p>
            For the purpose of the app, we prioritized the user's needs, so we
            wanted the layout and design to allow for the quickest actions and
            returns. You are more likely to return a recent purchase than older
            ones.
          </p>
          <h3>Pop-up return options:</h3>
          <p>
            For the purpose of a business and app, we put the quickest (and most
            profitable) actions first and slowest at the bottom.
          </p>
          <h3>Profile page:</h3>
          <p>
            Similar to NYTimes’ Evergreen initiative, we wanted to have an
            archive of all orders and refunds that went through this app.
          </p>{" "} */}
        </div>
      </section>
      <section>
        <h2>High Fidelity Mockup (Pre-Critique)</h2>
        <div class="gallery-item-container">
          <p>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Step 3
            </h3>
            We then developed our wireframes into a high fidelity mockup in
            order to receive feedback from our peers.
          </p>
          <img
            class="gallery-item2"
            src={hifi1}
            alt="HiFi before critique"
          ></img>
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="https://www.figma.com/proto/uxRJghEpTWKpYVvIOT0OfA/Rough-Draft-Iterative-Design-CS1300?node-id=5%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A2&show-proto-sidebar=1">
            Click here to see our prototype before the critique
          </a>
        </div>
        <br></br>
      </section>
      <section>
        <h2>Summary of the Critique:</h2>
        <table>
          <tr>
            <th>Flow 1 (Customer profile)</th>
            <th>Flow 2 (Business profile)</th>
            <th>Niko's critiques</th>
          </tr>
          <tr>
            <td>
              {/* - Homepage has a lack of hierarchy. Confusion of functionality and
              where to look.
              <br></br>- Confusing Menu bar interface (many thought the home
              button was selected in the profile page and vice versa).
              <br></br>- Not enough item information
              <br></br>&emsp;&emsp;&emsp;- Is it a group order?
              <br></br>&emsp;&emsp;&emsp;- How much time will it take for a full
              refund? */}
              <ul>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Homepage has a lack of hierarchy. Confusion of functionality
                  and where to look.
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Confusing Menu bar interface (many thought the home button was
                  selected in the profile page and vice versa).
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Not enough item information
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Is it a group order?
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  How much time will it take for a full refund?
                </li>
              </ul>
            </td>
            <td>
              {/* - Color scheme was difficult to identify. Some text was not
              noticeable or left ambiguous with color selections.
              <br></br>&emsp;&emsp;&emsp;- Many could not idenitfy that red
              order means cancelled, yellow means in review, and green means
              completed
              <br></br>- Lack of logout button to switch between customer and
              business profiles.
              <br></br>- Filtering of the order was not intuitive.
              <br></br>&emsp;&emsp;&emsp;- Seems more intuitive that most recent
              orders are at the top of the list */}
              <ul>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Color scheme was difficult to identify. Some text was not
                  noticeable or left ambiguous with color selections.
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Many could not idenitfy that red order means cancelled, yellow
                  means in review, and green means completed
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Lack of logout button to switch between customer and business
                  profiles.
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Filtering of the order was not intuitive.
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Seems more intuitive that most recent orders are at the top of
                  the list
                </li>
              </ul>
            </td>
            <td>
              {/* - Unclear which button is selected (profile or home).
              <br></br>- Unclear what the refund page is (2nd screen of the HiFi
              mockup).
              <br></br>- Lack of contrast in colors that can lead to
              accessibility issues. */}
              <ul>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Unclear which button is selected (profile or home).
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Unclear what the refund page is (2nd screen of the HiFi
                  mockup).
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  Lack of contrast in colors that can lead to accessibility
                  issues.
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </section>
      <section>
        <h2>HiFi Mockup Post Critique</h2>
        <p>
          <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
            Step 4
          </h3>
          After analyzing and implementing the feedback from our peer's
          critique, we developed the following prototype:
        </p>
        <div class="gallery-item-container">
          <img
            class="gallery-item2"
            src={hifi2}
            alt="HiFi after critique"
          ></img>
        </div>
        <div style={{ textAlign: "center" }}>
          {/* <a href="https://www.figma.com/proto/95ISqL0tHIR3hFwgfGVhHh/Iterative-Design-CS1300?node-id=391%3A412&scaling=scale-down&page-id=0%3A1&starting-point-node-id=391%3A376&show-proto-sidebar=1">
            Click here to see our prototype after the critique
          </a> */}

          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              width: "80%",
              height: "80vh",
              marginTop: "5rem",
            }}
            // style="border: 1px solid rgba(0, 0, 0, 0.1);"
            // width="800"
            // height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F95ISqL0tHIR3hFwgfGVhHh%2FIterative-Design-CS1300%3Fpage-id%3D0%253A1%26node-id%3D388%253A11%26viewport%3D664%252C2414%252C0.7%26scaling%3Dscale-down%26starting-point-node-id%3D391%253A376"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section>
        <h2>User Testing</h2>
        <p>
          <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
            Final Step
          </h3>
          Finally, through UserTesting.com, a remote user testing service, we
          conducted usability testing on our revised prototype. We had users
          interact with our interface to receive more feedback and show us how
          effectively our ideas were implemented.
        </p>

        <div>
          <p>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Overall Task
            </h3>
            Return the Air Jordan 1s from Nike. Choose any refund option that
            you'd like.
          </p>
        </div>

        <div>
          <p>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Subtasks
            </h3>
            {/* 1. You are a busy and stressed customer with a shopping history and
            want to make quick returns. On the login screen, sign in as a
            customer. *in this mockup, you do not need to actually fill in the
            email and password input spaces.
            <br></br>2. You've recently initiated a refund on a MacBook and you
            want to check on how the refund is going. From the home page, find
            the purchase/refund information for the MacBook to see if it has
            been received by the business!
            <br></br>3. Return the pair of jeans for an Instant Refund, they
            don’t fit and you need a new pair ASAP.
            <br></br>4. It turns out you’re also a business owner who's hoping
            to easily keep track of refunds. Sign out of your customer profile
            and log in again, but this time from the Business option. *again,
            you do not need to actually fill in the email and password input
            spaces.
            <br></br>5. You want to review only the refunds in progress right
            now. Luckily, you notice that you can filter your options from the
            top menu bar. Filter the dashboard so that you only see the refunds
            that are IN PROGRESS, and click on one of them to see more
            information on how the refund is going. */}
          </p>
          <ol style={{ marginTop: "0" }}>
            <li style={{ padding: "0", color: "#49565b" }}>
              You are a busy and stressed customer with a shopping history and
              want to make quick returns. On the login screen, sign in as a
              customer. *in this mockup, you do not need to actually fill in the
              email and password input spaces.
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              You've recently initiated a refund on a MacBook and you want to
              check on how the refund is going. From the home page, find the
              purchase/refund information for the MacBook to see if it has been
              received by the business!
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              Return the pair of jeans for an Instant Refund, they don’t fit and
              you need a new pair ASAP.
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              It turns out you’re also a business owner who's hoping to easily
              keep track of refunds. Sign out of your customer profile and log
              in again, but this time from the Business option. *again, you do
              not need to actually fill in the email and password input spaces.
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              You want to review only the refunds in progress right now.
              Luckily, you notice that you can filter your options from the top
              menu bar. Filter the dashboard so that you only see the refunds
              that are IN PROGRESS, and click on one of them to see more
              information on how the refund is going.
            </li>
          </ol>
        </div>

        <p>
          <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
            User Testing Videos
          </h3>
          Here are the results of randomized users testing the prototype based
          on the tasks above:
        </p>
        <div class="vid-item-container">
          <iframe
            class="vid-item"
            src="https://www.youtube.com/embed/ENVjIPleRrs"
            title="User1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            class="vid-item"
            src="https://www.youtube.com/embed/-1D-LpYE0eY"
            title="User2"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            class="vid-item"
            src="https://www.youtube.com/embed/8h4gky6VS0g"
            title="User3"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <p>
            <h3
              style={{
                marginTop: "2rem",
                fontSize: "30px",
                color: "#49565B",
                margin: "0",
              }}
            >
              Post-test Questionaire
            </h3>
            {/* 1. As a customer, was returning the product with the different
            return options understandable?
            <br></br>2. As a customer, would you rather have speed in returning
            or more precision (such as extra confirmation screens)?
            <br></br>3. As a customer, did you locate your item easily? Would
            you like your items grouped in an order or individual items?
            <br></br>4. As a business owner, were all refunds easily manageable
            (easy to identify the status of the refund)? */}
          </p>
          <ol>
            <li style={{ padding: "0", color: "#49565b" }}>
              As a customer, was returning the product with the different return
              options understandable?
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              As a customer, would you rather have speed in returning or more
              precision (such as extra confirmation screens)?
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              As a customer, did you locate your item easily? Would you like
              your items grouped in an order or individual items?
            </li>
            <li style={{ padding: "0", color: "#49565b" }}>
              As a business owner, were all refunds easily manageable (easy to
              identify the status of the refund)?
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h2>Result Analysis</h2>
        {/* <p2>
          A summary of subtasks, types of errors users made, and generally how
          users did on the tasks
        </p2> */}
        {/* <br></br> */}
        {/* <br></br> */}

        <table>
          <tr>
            <th>User 1</th>
            <th>User 2</th>
            <th>User 3</th>
          </tr>
          <tr>
            <td>
              {/* - confused with sign in/sign out, but mainly due to figma
              navigational glitches
              <br></br>- was not familiar with the profile icon
              <br></br>- thought a sign out button would be somewhere on the
              "home" page */}
              <ul>
                <li style={{ padding: "0", color: "#49565b" }}>
                  confused with sign in/sign out, but mainly due to figma
                  navigational glitches
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  was not familiar with the profile icon
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  thought a sign out button would be somewhere on the "home"
                  page
                </li>
              </ul>
            </td>
            <td>
              {/* - initially tried the business profile
              <br></br>- did have a bit of confusion on the wording of the
              MacBook refunding processing */}
              <ul>
                <li style={{ padding: "0", color: "#49565b" }}>
                  initially tried the business profile
                </li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  did have a bit of confusion on the wording of the MacBook
                  refunding processing
                </li>
              </ul>
            </td>
            <td>
              {/* - no issues, easily completed all tasks and understood the wording
              compared to the previous users */}
              <ul>
                <li style={{ padding: "0", color: "#49565b" }}>no issues</li>
                <li style={{ padding: "0", color: "#49565b" }}>
                  easily completed all tasks and understood the wording compared
                  to the previous users
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <br></br>
        <div>
          <p>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Result summary
            </h3>
            All users were given the same tasks and subtasks while returning the
            Air Jordan as mentioned above.
            {/* <br></br> */}
            {/* <br></br> */}
            <ul>
              <li style={{ padding: "0", color: "#49565b" }}>
                Users reported that refund options were easily understandable
                and that locating items were easy too.
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                All users agreed that grouping and sorting the items and orders
                made the interface more usable and accessible.
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                All users prioritized speed over precision, which is in line
                with the startup's mission and our prototype's goal (to make
                refunds quicker and easier).
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                Even the business profile seemed intuitive to the users, too, as
                they all completed the subtasks successfully and stated that
                "the color coding for status and ability to filter made it
                easier."
              </li>
              <li style={{ padding: "0", color: "#49565b" }}>
                Although there seemed to be soem confusion about the sign-in
                page and the meaning of icons, overall the UserTesting went as
                expected as all users completed the task without much
                difficulty.
              </li>
            </ul>
          </p>
        </div>

        <div>
          <p>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Potential interface changes based on these results/feedback
            </h3>
            1. More clearly label what purchases have started the 'refund
            process' (from the MacBook refunding task)
            <br></br>2. Explain or emphasize the two different customer and
            business login options on sign-in page
          </p>
        </div>
      </section>
      <section>
        <div>
          <h1>Conclusion and Thoughts</h1>
          <p>
            In conclusion, through the iterative design process, we learned alot
            about the importance of feedback. In order to accomplish our goal of
            making this interface match the goals of Rever, we found our final
            prototype to be quite different from our original sketchings. We
            needed a balance of hierarchy, simplicity, and natural flow as we
            learned from a current Figma employee. Based on the results of the
            user testing, we believe we did accomplish our goal as the start-up
            liked our prototype, and we realized how we could constantly improve
            upon our design.
          </p>
        </div>
      </section>
      <section>
        <div className="bottumnav">
          <a href="/FinalPortfolio/#/Redesign" style={{ left: "10px" }}>
            &lt;- Responsive Redesign
          </a>
          <a href="/FinalPortfolio/#/Develop" style={{ right: "0px" }}>
            Development -&gt;
          </a>
        </div>
      </section>
    </div>
  );
};

export default Iterative;
