// import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from "react";
import "./FAQ.css";
import left from "../../assets/left_arrow.svg";
import right from "../../assets/right_arrow.svg";
import image2 from "../../assets/rectangle 2.svg";
import image1 from "../../assets/rectangle 1.svg";
import image3 from "../../assets/Image.svg";
// import 'swiper/css';

const FAQ = () => {
  const feedbackData = [
    {
      background: image2,
      profile:image3,
      messageTop: "“They did an amazing work for our home”",
      messageMiddle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JOHN CARTER, NEW YORK",
    },
    {
      background: image1,
      profile:image3,
      messageTop: "“Another feedback message”",
      messageMiddle:
        "Another Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JANE DOE, LOS ANGELES",
    },
    {
      background: image2,
      profile:image3,
      messageTop: "“They did an amazing work for our home”",
      messageMiddle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JOHN CARTER, NEW YORK",
    },
    {
      background: image1,
      profile:image3,
      messageTop: "“Another feedback message”",
      messageMiddle:
        "Another Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JANE DOE, LOS ANGELES",
    },

    // Add more feedback data as needed
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleLeftButtonClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightButtonClick = () => {
    if (startIndex < feedbackData.length - 2) {
      setStartIndex(startIndex + 1);
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
      <div className="feedback_slider">
        {feedbackData
          .slice(startIndex, startIndex + 2)
          .map((feedback, index) => (
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
      </div>

     
    </div>
  );
};

export default FAQ;
