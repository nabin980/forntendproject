import React from 'react'
import './Animation.css'
import background from '../../assets/banner.jpg'
import appstore from '../../assets/Apple.png'
import round from '../../assets/round.svg'
import googleplay from '../../assets/Google.png'

const Animation = () => {
  return (
    <div className="container">
      <div className="background">
        <div className="overlay">
        <img src={background} alt="image" />
        </div>
        <div className='top'><span className='experience'>Experience</span> the Future of Female Commerce <br />
        with <span className='cnex'>Cnex</span> </div>
        <div className='down'>Order, Preorder, and Book - Your Ultimate Destination for Female Products and Services</div>
        <div className="download">
          <a href="#appstore">
            <img src={appstore} alt="" />
          </a>
          <a href="#goolgeplay">
            <img src={googleplay} alt="" />
          </a>
          <div className="rotation">
            <img src={round} alt="" />
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
    </div>
  )
}

export default Animation