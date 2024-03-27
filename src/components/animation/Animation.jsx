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
        <div className='top'>Experience the Future of Female Commerce <br />
        with Cnex </div>
        <div className='down'>Order, Preorder, and Book - Your Ultimate Destination for Female Products and Services</div>
        {/* <div className="download">
          <a href="#appstore">
            <img src={appstore} alt="" />
          </a>
          <a href="#goolgeplay">
            <img src={googleplay} alt="" />
          </a>
        </div> */}
        {/* <div className="rotation">
          <img src={round} alt="" />
        </div> */}
      </div>
      <div className="numbers">
        <div>
          <div className="num1">
            200+
          </div>
          <div className="client">
            Clients Worldwide
          </div>
        </div>
        <div>
          <div className="num2">
            100+
          </div>
          <div className="satisfaction">
            Client Satisfaction
          </div>
        </div>
        <div>
          <div className="num3">
            99K+
          </div>
          <div className="sales">
            Number of Sales
          </div>

        </div>
        <div>
          <div className="num4">
            24H
          </div>
          <div className="team">
            Team Support
          </div>
        </div>
      </div>
    </div>
  )
}

export default Animation