import React from 'react'
import './Footer.css'
import image1 from "../../assets/vrit.svg"
import image2 from "../../assets/fb icon.svg"
import image3 from "../../assets/instagram icon.svg"
import image4 from "../../assets/twiter icon.svg"
import image5 from "../../assets/Apple.svg"
import image6 from "../../assets/Google.svg"
import image7 from "../../assets/whitelogo.svg"


const Footer = () => {
  return (
    <div className='footer'>
      <img src={image7} alt="" className="footer-logo" />
      <div className="footer-grid">
        
        <div className="footer-mid1">
          <p className="footer-heading">
            Contact us
          </p>
          <ul className='contact-us'>
            <li>Head office:</li>
            <li>Sankhamul,Baneshwor</li>
            <li>+977 98********</li>
            <li>cnex@gmail.com</li>
          </ul>
          <div className="footer-medias">
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>
        </div>

        <div className="footer-mid2">
          <p className="footer-heading">
            Services
          </p>
          <ul className='contact-us'>
            <li>Order and Pre-order</li>
            <li>Beauty service Appointment Booking</li>
            <li>Order and Preorder</li>
            <li>Order and Preorder</li>
          </ul>
        </div>

        <div className="footer-last">
          <p className="footer-heading">
            Download our App
          </p>
          <div className="footer-download">
            <img src={image5} alt="" />
            <img src={image6} alt="" />
          </div>
        </div>

      </div>

      <div className="footer-down">
        <hr />
        <p>
        Copyright © 2024 Cnex. All rights reserved. Powered by: <img src={image1} alt="" />
        </p>
      </div>

    </div>
  )
}

export default Footer