import React from "react";
import "./About_us.css";
import image1 from "../../assets/Image.png";
import image2 from "../../assets/Image1.png";
import image3 from "../../assets/Image2.png";
import image4 from "../../assets/Image3.png";
import image5 from "../../assets/Image4.png";
import image6 from "../../assets/Image5.png";
import image7 from "../../assets/Image6.png";
import image8 from "../../assets/Image7.png";
import image9 from "../../assets/Leftside.png";

const About_us = () => {
  return (
    <>
      <div className="heading">
        <hr />
        <p className="about_us">ABOUT US</p>
      </div>
      <div className="female">
        <p>
          <span className="pioneer">Pioneering Female</span>-Centric Solutions{" "}
          <br /> for the Modern Woman
        </p>
      </div>
      <div className="image_section">
        <div className="image-item1">
          <img src={image1} alt="" />
        </div>
        <div className="image-item3">
          <img src={image3} alt="" />
        </div>
        <div className="image-item4">
          <img src={image4} alt="" />
        </div>
        <div className="image-item2">
          <img src={image2} alt="" />
        </div>
        <div className="image-item5">
          <img src={image5} alt="" />
        </div>
        <div className="horizontal">
          <div className="image-item6">
            <img src={image6} alt="" />
          </div>
          <div className="image-item7">
            <img src={image7} alt="" />
          </div>
          <div className="image-item8">
            <img src={image8} alt="" />
          </div>
        </div>
      </div>

      <div className="ourstory">
        <p className="our_story">
          Our&nbsp;<span className="story">Story</span>
        </p>
        <div className="storydiscription">
          <img src={image9} alt="" />
          <div className="paragraph">
            <p>
              At the beginning, it was just the two of them, working out of a
              small office space. They were determined to provide personalized
              service to their clients and build lasting relationships. They
              worked tirelessly, often working long hours and weekends to ensure
              that their clients' needs were met. .
            </p><br /><br />
            <p>
              Their hard work paid off, and soon their business began to grow.
              They hired additional staff members and expanded their service
              offerings to include property management and real estate
              investments
            </p><br />
            <p>
              Over the years, their business has continued to grow, and they
              have helped countless clients buy, sell, and manage their real
              estate investments. Today, their business is a respected name in
              the real estate industry, known for its exceptional service and
              commitment to its clients.
            </p><br />
            <p>
              As they look to the future, John and Jane remain dedicated to
              their clients and to providing the best possible service in the
              real estate industry. They are excited to continue to grow and
              evolve their business, and to help even more clients achieve their
              real estate goals.
            </p>
            <button className="getintouch">
        Get in touch
      </button>
          </div>
         
        </div>
      
      </div>
    <div className="why_cnex">
      
    </div>
    </>
  );
};

export default About_us;
