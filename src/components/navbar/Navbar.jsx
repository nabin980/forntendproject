import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
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
      <div className="download_now">
        <button >Download Now</button>
      </div>
    </div>
  )
}

export default Navbar