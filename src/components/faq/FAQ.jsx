import React from "react";
import "./FAQ.css";
import left from "../../assets/left_arrow.svg";
import right from "../../assets/right_arrow.svg";

const FAQ = () => {
  return (
    <>
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
            <button>
              <img src={left} alt="" />
            </button>
            <button>
              <img src={right} alt="" />
            </button>
          </div>
          
        </div>
        <div className="hr_underline">
        <hr />
        </div>
      </div>
    </>
  );
};

export default FAQ;
