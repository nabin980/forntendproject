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
import image10 from "../../assets/fast.png";
import image11 from "../../assets/easy.png";
import image12 from "../../assets/affordable.png";
import image13 from "../../assets/legal.png";
import image14 from "../../assets/Booking.png";
import image15 from "../../assets/order.png";
import image16 from "../../assets/search.png";
import image17 from "../../assets/filter.png";
import image18 from "../../assets/delivery.png";
import image19 from "../../assets/payment.png";

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
      <div class="grid_container">
        <div class="item1"><img src={image2} alt=""/></div>
        <div class="item2"><img src={image3} alt=""/></div>
        <div class="item3"><img src={image4} alt=""/></div>
        <div class="item4"><img src={image5} alt=""/></div>
      <div class="horizontal">
        <div class="item5"><img src={image6} alt=""/></div>
        <div class="item6"><img src={image7} alt=""/></div>
        <div class="item8"><img src={image8} alt=""/></div>
      </div>
        <div class="item9"><img src={image1} alt=""/></div>
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
            </p>
            <br />
            <br />
            <p>
              Their hard work paid off, and soon their business began to grow.
              They hired additional staff members and expanded their service
              offerings to include property management and real estate
              investments
            </p>
            <br />
            <p>
              Over the years, their business has continued to grow, and they
              have helped countless clients buy, sell, and manage their real
              estate investments. Today, their business is a respected name in
              the real estate industry, known for its exceptional service and
              commitment to its clients.
            </p>
            <br />
            <p>
              As they look to the future, John and Jane remain dedicated to
              their clients and to providing the best possible service in the
              real estate industry. They are excited to continue to grow and
              evolve their business, and to help even more clients achieve their
              real estate goals.
            </p>
            <button className="getintouch">Get in touch</button>
          </div>
        </div>
      </div>
      <div className="why_background">
        <div className="why_cnex">
          <p className="whycnex">
            Why&nbsp;<span className="cnex_color">Cnex?</span>
          </p>
          <div className="why_cnex_grid_container">
            <div className="why_item">
              <div className="why_icon">
                <img src={image10} alt="" />
              </div>
              <p className="fast">Fast</p>
              <p className="why_des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
            <div className="why_item">
              <div className="why_icon">
                <img src={image11} alt="" />
              </div>
              <p className="fast">Easy</p>
              <p className="why_des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
            <div className="why_item">
              <div className="why_icon">
                <img src={image12} alt="" />
              </div>
              <p className="fast">Affortable</p>
              <p className="why_des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
            <div className="why_item">
              <div className="why_icon">
                <img src={image13} alt="" />
              </div>
              <p className="fast">Legal Support</p>
              <p className="why_des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="headingS">
            <hr />
            <p className="about_us">FEATURE HIGHLIGHTS</p>
          </div>
          <p className="feature_experience">
            <span className="cnex_color">Experience</span> the Difference
          </p>
          <p className="discover">
            Discover a World of Female-Centric Products and Services
          </p>
          <div className="grid_container_feature">
            <div className="feature_item">
              <div className="feature_icon">
                <img src={image14} alt="" />
              </div>
              <p className="legal">Legal Support</p>
              <p className="feature_des">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="feature_item">
              <div className="feature_icon">
                <img src={image15} alt="" />
              </div>
              <p className="legal">Legal Support</p>
              <p className="feature_des">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="feature_item">
              <div className="feature_icon">
                <img src={image16} alt="" />
              </div>
              <p className="legal">Legal Support</p>
              <p className="feature_des">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="feature_item">
              <div className="feature_icon">
                <img src={image17} alt="" />
              </div>
              <p className="legal">Legal Support</p>
              <p className="feature_des">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="feature_item">
              <div className="feature_icon">
                <img src={image18} alt="" />
              </div>
              <p className="legal">Legal Support</p>
              <p className="feature_des">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="feature_item">
              <div className="feature_icon">
                <img src={image19} alt="" />
              </div>
              <p className="legal">Legal Support</p>
              <p className="feature_des">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_us;
