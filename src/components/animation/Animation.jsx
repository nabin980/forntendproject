import React from "react";
import "./Animation.css";
import background from "../../assets/banner.jpg";
import image1 from "../../assets/b1.png";
import image2 from "../../assets/b2.png";
import image3 from "../../assets/b3.png";
import image4 from "../../assets/b4.png";
import appstore from "../../assets/Apple.png";
import round from "../../assets/round.png";
import googleplay from "../../assets/Google.png";

const Animation = () => {
  return (
    <>
      <div className="container">
        <div className="rotation">
          <img className="rotating_animation" src={round} alt="" />
        </div>
        <div className="background">
          <div className="overlay">
            {/* <img src={background} alt="image" /> */}
            <div className="bot b1">
              <img src={image1} alt="" className="bimg" />
            </div>
            <div className="bot b2">
              <img src={image2} alt="" className="bimg" />
            </div>
            <div className="bot b3">
              <img src={image3} alt="" className="bimg" />
            </div>
            <div className="bot b4">
              <img src={image4} alt="" className="bimg" />
            </div>
          </div>
          <div class="text-wrapper">
            <div class="top t1">
              <span className="experience">
                Experience
              </span>{" "}
              the Future of
              <br />
              Female Commerce
              <br />
              with
              <span className="experience">
                Cnex
              </span>
              <p>
                Order, Preorder, and Book - Your Ultimate Destination for Female
                Products and Services
              </p>
            </div>

            <div class="top t2">
              Where <span className="experience">Fashion </span> meets
              <br />
              Feminity
              <p>Celebrate the essence of womanhood in every styling detail</p>
            </div>

            <div class="top t3">
              Radiate{" "}
              <span className="experience">
                Confidience,
              </span>
              <br />
              Radiate Style
              <p>Look and feel best in every moment with chic fashion pieces</p>
            </div>

            <div class="top t4">
              <span className="experience">
                Fashion,
              </span>
              <span className="experience"> redefined.</span>
              <p>
                Order, Preorder, and Book - Your Ultimate Destination for Female
                Products and Services
              </p>
            </div>
          </div>
          <div class="image">
        <img src={appstore} alt="" className="images"/>
        <img src={googleplay} alt="" className="images"/>
      </div>
        </div>
      </div>
      <div className="numbers">
        <div className="clientsnumber">
          <a href="">200+</a>
          <a href="">100+</a>
          <a href="">99K+</a>
          <a href="">24H</a>
        </div>
        <div className="clients">
          <p>Clients Worldwide</p>
          <p>Clients Worldwide</p>
          <p>Clients Worldwide</p>
          <p>Clients Worldwide</p>
        </div>
      </div>
    </>
  );
};

export default Animation;
