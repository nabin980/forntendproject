import React, { useRef, useState, useEffect } from "react";
// import Draggable from "react-draggable";
import "./FAQ.css";
// import "./crousele.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import left from "../../assets/left_arrow.svg";
import right from "../../assets/right_arrow.svg";
import image2 from "../../assets/rectangle 2.svg";
import image1 from "../../assets/rectangle 1.svg";
import image3 from "../../assets/Image.svg";
import Accordion from "../../components/faq/Accodion";
import appstore from "../../assets/Apple.png";
import image4 from "../../assets/section.svg";

import googleplay from "../../assets/Google.png";

const FAQ = () => {
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const feedbackData = [
    {
      background: image2,
      profile: image3,
      messageTop: "“They did an amazing work for our home”",
      messageMiddle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JOHN CARTER, NEW YORK",
    },
    {
      background: image1,
      profile: image3,
      messageTop: "“Another feedback message”",
      messageMiddle:
        "Another Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JANE DOE, LOS ANGELES",
    },
    {
      background: image2,
      profile: image3,
      messageTop: "“They did an amazing work for our home”",
      messageMiddle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JOHN CARTER, NEW YORK",
    },
    {
      background: image1,
      profile: image3,
      messageTop: "“Another feedback message”",
      messageMiddle:
        "Another Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JANE DOE, LOS ANGELES",
    },
  ];

  const handleLeftButtonClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleRightButtonClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="faq">
      <div className="testimonial">
        <hr />
        <p className="about_us">TESTIMONIAL</p>
      </div>
      <div className="what_our">
        <p className="customer_say">
          What our&nbsp;<span className="cnex_color">Customers say</span>
        </p>
        <div className="left_right">
          <button className="left_button" onClick={handleLeftButtonClick}>
            <img src={left} alt="left arrow" />
          </button>
          <button className="right_button" onClick={handleRightButtonClick}>
            <img src={right} alt="right arrow" />
          </button>
        </div>
      </div>
      <div className="hr_underline">
        <hr />
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        infinite={true}
        ref={carouselRef}
        responsive={responsive}
        className="feedback_slider"
      >
        {feedbackData.map((feedback, index) => (
          <div key={index} className="feedback_card">
            <img
              className="feedback_background"
              src={feedback.background}
              alt=""
            />
            <div className="feedback_message">
              <img src={feedback.profile} alt="" />
              <div className="message_paragraph">
                <p className="message_top">{feedback.messageTop}</p>
                <p className="message_middle">{feedback.messageMiddle}</p>
                <div className="message_bottom">
                  <hr />
                  <p className="messager_name">{feedback.messageBottom}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <Accordion />
      <div className="join_community">
        <img src={image4} alt="" className="back_ground"/>
        <div className="community_component">
          <p className="customer_says">
            Join the&nbsp;<span className="cnex_color">CNEX Commpunity</span>{" "} <br />
            Today!
          </p>
          <p className="community_paragraph">
            Download CNEX now to explore a world of female-centric products and <br />
            services, and empower yourself with every purchase and booking
          </p>
          <div className="community_download">
            <img src={appstore} alt="" />
            <img src={googleplay} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
