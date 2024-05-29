import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
    const navLinksContainer = document.querySelector(".nav_links_container");
    navLinksContainer.classList.toggle("active");
  };

  return (
    <div className="nav_links">
      <div className="nav_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav_links_container">
        <a href="">Home</a>
        <a href="">About us</a>
        <a href="">FAQ</a>
        <a href="">Contact us</a>
      </div>
      <div className="small_download">
        <div className="download_now">
          <button>Download Now</button>
        </div>
        <div className="menu_icons" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuClicked ? faTimesCircle : faBars} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
