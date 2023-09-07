import React from "react";
import swaPic from "../../assets/large/Profile/swaPic.jpg";
function About({currentMode}) {
  return (
    <section id="about-me" className={`my-5 intro ${currentMode}`}>
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={swaPic} style={{ width: "100%" }} alt="profile" />
          </div>
          <p> I'm Swathi Vinod, a full-stack web developer with a background in mental health services. My educational journey encompasses a Masters in Psychology from Bangalore University and an MPhil in Clinical Psychology from SRM University in India. While my professional roots lie in psychology, my path took a transformative turn when I relocated to Canada in late 2022.
          The onset of the COVID-19 pandemic reshaped my career perspective, leading me to embrace technology and navigate the field of web development. The shift towards remote work inspired me to enhance my tech proficiency, opening doors to my transition into this dynamic industry.
          <br>
          </br>
          <p>
            <br></br>
          </p>
           I'm an ardent advocate of animal welfare. I have years of volunteering experience in animal shelters and rehabilitation centers such as Compassion Unlimited Plus Action, Charlie's Animal Rescue Center, WildLife Rescue and Rehabilitation Center, Bangalore, India. My furry companion, a rescued dog, accompanied me on my journey when I made the transition from India.
        </p>
        </div>
      </div>
    </section>
  );
}

export default About;
