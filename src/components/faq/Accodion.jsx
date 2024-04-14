import React, { useState } from "react";
import "./Accodion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../assets/INFO.svg";

const accodionData = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ? ",
    content:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ? ",
    content: "Content for item 2",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ? ",
    content: "Content for item 3",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ? ",
    content: "Content for item 4",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ? ",
    content: "Content for item 5",
  },
];
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className="faq_top">
        <hr />
        <p className="acco__txt">FAQ’s</p>
      </div>
      <div className="faq_mid">
        <p className="faq_heading">
          <span className="experience"> Frequently</span> Asked Questions
        </p>
        <p className="faq_paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div className="faq_grid">
        <div className="left_faq">
          <div className="AccordionItem">
            {accodionData.map((item, index) => (
              <div className="item" key={index}>
                <div className="title" onClick={() => toggle(index)}>
                  {item.title}
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={activeIndex === index ? "rotated-icon" : ""}
                  />
                </div>
                <div className={activeIndex === index ? "content show" : "content"}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq_image">
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
