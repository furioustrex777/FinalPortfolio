import React from "react";
import "./Personas.css";

const Develop = () => {
  let develop = process.env.PUBLIC_URL + "/" + "images/bakery.png";

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
          <h1>Development</h1>

          <p>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Overview
            </h3>
            In contrast to HTML that we have been using previously for
            developing static web pages, with React, we are able to build more
            dynamic and interactive websites to improve upon user experience and
            user interface. In this project, we are given the chance to develop
            an interactive interface, using the building blocks of React,
            components, proponents, and states.
          </p>
          <p>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              Task
            </h3>
            To increase our familiarity with React, we created a list-based
            interface, which supports an aggregator and sorting and filtering
            functionality. Thousands of websites are developed everyday, wanting
            to share their ideas and provide a service, similar to that of a
            start-up, and React is a great resource for doing so.
          </p>

          <p>
            <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
              The Finalized Webpage
            </h3>
          </p>
          <div id="ogwebsite">
            <img class="ogwebsite" src={develop}></img>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              id="toBakery"
              href="https://furioustrex777.github.io/development/"
            >
              Click here to visit the deployed page
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2>Architecture and Features</h2>

        <div class="columns">
          <div class="column">
            <h3 style={{ textAlign: "center", color: "#49565b" }}>Filtering</h3>
            <ul>
              <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
                You're able to filter the list of goods on two different fields
                with six options in total. The two fields are the type of bakery
                goods and the dietary restrictions of the goods.
              </li>
              <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
                For the type of bakery goods, the options are: Pastry, Bread,
                and Cake.
              </li>
              <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
                For the dietary restrictions of the bakery goods, the options
                are: Gluten-Free, Dairy-Free, and Nut-Free.
              </li>
            </ul>
          </div>
          <div class="column">
            <h3 style={{ textAlign: "center", color: "#49565b" }}>Sorting</h3>
            <ul>
              <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
                By default, the list of goods is sorted in order of most popular
                to least popular.
              </li>
              <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
                You are able to sort the bakery goods, from lowest to highest,
                based on popularity, price, and calories.
              </li>
            </ul>
          </div>
          <div class="column">
            <h3 style={{ textAlign: "center", color: "#49565b" }}>
              Aggregator
            </h3>
            <ul>
              <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
                The aggregator I chose to implement was a favoriting system,
                allowing you to add and remove bakery goods from your list of
                favorite goods.
              </li>
              <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
                Additionally, I provided an aggregate value, the total price of
                the aggregate goods to allow users to easily find how much it
                costs to get all their favorite bakery goods.
              </li>
              <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
                Finally, although not required, this aggregator includes the
                functionality of sorting and filtering of the aggregated list.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Development Process</h2>
        <p>
          <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
            Key Skills Obtained
          </h3>
        </p>
        <ul>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            Familiarity with React, components, and states
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            Increased familiarity with JavaScript, JSON files, HTML, and CSS
            skills
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            Github webpage deployment
          </li>
        </ul>

        <p>
          <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
            The Application
          </h3>
          This application allows you look at different types of baked items
          such as pastries, cake, and bread. Important nutritional information
          is also provided such as calories and dietary restrictions. Having
          easy access to this information, as well as being able to favorite
          those items, greatly adds value to the application, saving users time
          and effort looking for this information on their own.
        </p>
        <p>
          <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
            How I Developed the Application
          </h3>
        </p>
        <ul>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            I used one component, a BakeryItem component, that holds the
            information of each bakery item. This includes the image, name,
            description, price, calories, dietary-restrictions, and the type of
            the bakery item.
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            By using components, I was able to create a template for items that
            are identical in design, but different in information, such as baked
            goods.
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            Bakeryitems were also used as proponents. This allowed me to use the
            information stored in them in order to have functions based on
            content. String variables were also used to determine the
            functionality of buttons.
          </li>

          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            My options state, is the list of displayed items that is dependent
            on the sorting, filtering, and if applicable, favoriting.
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            My filters and filtersDiet states stored what filters were currently
            active.
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            My sorted state holds what sort method is currently being used and
            is what to default to if the situation calls for it.
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            My favs list state holds all the favorite items, and utilizes a
            favorite boolean, allowing me to determine if a different
            functionality is needed if you are looking at your favorites or not.
          </li>
        </ul>
        {/* <p>
          For this implementation, I only had one component, a BakeryItem
          component, that holds of the information of the bakery item. This
          includes the image, name, description, price, calories,
          dietary-restrictions, and the type of the bakery item.
          <br></br>
          <br></br>
          The main props that were used consisted of the items themselves, in
          order to information stored in them. Additionally, the string
          variables, I called name, were used in order to determine the
          functionality of buttons, as different buttons did different things to
          the display lists through sorting and filtering of different
          catagories.
          <br></br>
          <br></br>
          In this implementation, I had six states. I had an options states,
          that acted as the list that displayed the items depending on the
          sorting, filtering, and if applicable, favoriting. I then had filters
          and filtersDiet lists that held what filters were active. I then had a
          sorted state that held what sort method would be maintained throughout
          the manipulation of the options(display) list, and what to default to
          if there are no items in the combinations of filters. Finally, I have
          a favs list that holds all the favorited items, and a favorite
          boolean, allowing me two determine if a different functionality is
          needed if you are looking at your favorites or not.
        </p> */}
        <p>
          <h3 style={{ fontSize: "30px", color: "#49565B", margin: "0" }}>
            Designing the Application
          </h3>
        </p>
        <ul>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            I placed the filtering and sorting options on the left, creating a
            better hierarchy for the overall web-application.
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            I ordered the filtering options in order of most likely to be used,
            while allowing those options to remain visible throughout the whole
            process.
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            For the BakeryItem component, I then centralized the important
            information, such as price and calories, and these values would stay
            in the same location helping with learnability and usability.
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            This is accompanied by an easy access to the favorite aggregator
            feature as remove and add options remain in the same location.
          </li>
          <li style={{ padding: "0", color: "#49565b", lineHeight: "1.5" }}>
            Finally, the BakeryItem was stacked into a scrollable list allowing
            multiple items to be shown along with the filtering and sorting
            container within the single page.
          </li>
        </ul>
        {/* Because people after look at the screen from left to right, we placed
          the filtering and sorting options on the left, creating a better
          hierarchy for the overall web-app. I then ordered those options in
          order of most likely to be used, while allowing those options to all
          to remain visible throughout the whole process. For the BakeryItem
          component, I also layed this out from left to right. I then
          centralized the more important information such as price and calories,
          and these values would stay in the same location no matter what
          helping with learnability in addition to better usability. This is
          accompanyed by an easy access to the favorite aggregate feature and
          with clear knowledge of if it is in the aggregator or not. Finally the
          BakeryItem were stacked into a scrollable list allowing multiple items
          to be seen along with the filtering and sorting options helping to
          improve usability */}
        {/* </p> */}
      </section>
      <section>
        <div>
          <h1>Conclusion and Thoughts</h1>
          <p>
            Working with React, we capitalized our previous coding knowledge to
            provide functionality to the buttons on the page. Although not
            required, I wanted to make this page the best it could be, in design
            and functionality. All the functionality works no matter the
            combination of sorting, filtering, or aggregating. Additionally, I
            explored CSS aspects to make the buttons visibly buttons, adding
            hovering and before and after affects. I had a lot of fun with this
            assignment as there was a lot of freedom in how we could approach
            this project, and I felt that because of that, it was a much greater
            learning experience.
          </p>
        </div>
      </section>
      <section>
        <div className="bottumnav">
          <a href="/FinalPortfolio/#/Iterative" style={{ left: "10px" }}>
            &lt;- Iterative Design
          </a>
          <a href="/FinalPortfolio/#/Personas" style={{ right: "0px" }}>
            Personas and Storyboarding -&gt;
          </a>
        </div>
      </section>
    </div>
  );
};

export default Develop;
