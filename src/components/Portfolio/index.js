import React from "react";
import realtyReach from "../../assets/small/realtyReach.png";
import jsQuiz from "../../assets/small/jsQuiz.png";
import wassupWeather from "../../assets/small/wassupWeather.png";
import dailyCalendar from "../../assets/small/dailyCalendar.png";
import techBlog from "../../assets/small/techBlog.png";
import schoolMaster from "../../assets/small/schoolMaster.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/dinozio-design/SchoolMaster">
                {" "}
                <img
                  src={schoolMaster}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Classroom"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>School Master</h4>
              <p>
                A full stack application that can be used to manage school data. It is designed to cater to three category of users : student, faculty and admin.
                The user can create an account,log in and will have access to the dashboard. Depending on the type of user, you can view edit and upload data.
                This application is built using modern web technologies such as Handlebars, Javascript, CSS, Node and Express js , MySQL and follows best practices for manage studemt,admin and faculty data .
                It is an effective tool for educational institution to manage School data .
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://cryptic-chamber-59981-b580acbe3ac9.herokuapp.com/">
                {" "}
                <img
                  src={techBlog}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="blog-posts"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>MVC-Tech-Blog</h4>
              <p>
              A site where developers can publish their blog posts and comment on other developers posts. 
              It is made using Handlebars, Sequelize, express-session npm package.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://swathivinod19.github.io/daily-calendar/">
                {" "}
                <img
                  src={dailyCalendar}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="calendar"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Daily Calendar/Workday Scheduler</h4>
              <p>
              This simple daily planner is meant for regular 9am - 5pm work schedule. 
              It allows the user to type and save their everyday work appointments and activities. 
              The user can type his/her appointments/activities in the respective time block and press the save icon on the right side. 
              When the save icon is pressed, the text activity gets saved in that time block..{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://swathivinod19.github.io/wassup-weather/">
                {" "}
                <img
                  src={wassupWeather}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="weather-dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Wassup Weather</h4>
              <p>
              It is a simple web-based dashboard made to show the current weather conditions and a five day forecast in the city of your choice. 
              The app retrieves data from "openweathermap" API and is made as a part of the requirements of my Bootcamp. 
              Enter the city of your choice and you will be able to retrieve information about the current temperature, humdity and wind speed. 
              When the page loads, a default screen is shown which displays the weather conditions of the city Toronto,Canada.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://swathivinod19.github.io/Java-Quiz/">
                {" "}
                <img
                  src={jsQuiz}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="quiz-startpage"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Java Quiz</h4>
              <p>
              This is a timed quiz on javascript using html, css and js. This is my take on a simple one minute quiz on basic concepts of javascript.
              There are a total of 5 multiple choice questions on basic concepts of javascript. Initially, the user has to enter his/her name. 
              The first question is exposed and the timer starts simultaneously on the side. The user has only 1 minute to answer the questions.
               For every wrong answer, 15 seconds are reduced from the timer. 
              If the user is not able to complete answering the questions within the time allotted, it is Game Over.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://divyakrishnan15.github.io/RealEstateApp/">
                {" "}
                <img
                  src={realtyReach}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="SummerPunch"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Realty Reach</h4>
              <p>
                A real estate app where users can search for listings, open houses, real estate agents and office locations.This app uses free api of zillow to use real data.
                {" "}
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;
