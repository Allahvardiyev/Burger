import React from "react";
import BannerImage from "../Pictures/banneryeni.jpg";
import '../styles/About.css'
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Haqqımızda</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          eligendi voluptatum maxime repudiandae sunt dolore sequi, sint saepe,
          iusto ex corporis ipsa exercitationem? Laborum ullam exercitationem
          unde saepe doloribus alias. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iste impedit ipsam assumenda deleniti dolorum et
          molestiae reiciendis eligendi aperiam pariatur! Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Eos odit, velit repellat, delectus
          animi aliquam voluptatibus reprehenderit repudiandae ad cum
          praesentium provident adipisci iure est iste nemo veniam, accusamus
          quo.
        </p>
      </div>
    </div>
  );
};

export default About;
