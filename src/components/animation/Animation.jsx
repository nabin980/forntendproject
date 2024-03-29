import React, { useState, useEffect } from 'react';
import './Animation.css';
import background from '../../assets/banner.jpg';
import appstore from '../../assets/Apple.png';
import round from '../../assets/round.png';
import googleplay from '../../assets/Google.png';

const Animation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle the animation of top text
    const handleAnimation = () => {
      const topTexts = document.querySelectorAll('.top');
      let index = 0;

      const animateText = () => {
        setTimeout(() => {
          topTexts[index].classList.add('fade-in');
          setTimeout(() => {
            topTexts[index].classList.add('fade-out');
            setTimeout(() => {
              topTexts[index].classList.remove('fade-in', 'fade-out');
              setIsVisible(false); // Reset visibility for next text
              index = (index + 1) % topTexts.length;
              setTimeout(() => {
                setIsVisible(true); // Set visibility for the next text
                animateText();
              }, 100); // Adjust this value to start the next text animation after 100ms
            }, 3000); // 3-second interval between text changes
          }, 3000); // Adjust this value for fade-out time
        }, 100); // Adjust this value to start the fade-in animation immediately
      };

      animateText();
    };

    // Trigger animation when the component mounts
    handleAnimation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="rotation">
          <img className="rotating_animation" src={round} alt="" />
        </div>
        <div className="background">
          <div className="overlay">
            <img src={background} alt="image" />
          </div>
          <div className={`top t1 ${isVisible ? 'visible' : ''}`}>
            <span className="experience">Experience</span> the Future of Female Commerce <br />
            with <span className="cnex">Cnex</span>
          </div>
          <div className={`top t2 ${isVisible ? 'visible' : ''}`}>
            Where <span className="experience"> Fashion</span> meets Femininity
          </div>
          <div className={`top t3 ${isVisible ? 'visible' : ''}`}>
            Radiate <span className="experience">Confidence,</span> <br />Radiate Style
          </div>
          <div className={`top t4 ${isVisible ? 'visible' : ''}`}>
            <span className="experience">Fashion,</span> redefine.
          </div>

          <div className="down d1">Order, Preorder, and Book - Your Ultimate Destination for Female Products and Services</div>
          <div className="down d2">Celebrate the essence of womanhood in every styling detail.</div>
          <div className="down d3">Look and feel best in every moment with chic fashion pieces</div>
          <div className="download">
            <a href="#appstore">
              <img src={appstore} alt="" />
            </a>
            <a href="#goolgeplay">
              <img src={googleplay} alt="" />
            </a>
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
