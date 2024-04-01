import React from 'react'
import './Animation.css'
import background from '../../assets/banner.jpg'
import appstore from '../../assets/Apple.png'
import round from '../../assets/round.png'
import googleplay from '../../assets/Google.png'


const Animation = () => {
  return (
    <>
    <div className="container">
      <div className="rotation">
            <img className='rotating_animation' src={round} alt="" />
      </div>
      <div className="background">
        <div className="overlay">
          <img src={background} alt="image" />
        </div>
        <div className='top t1'><span className='experience'>Experience</span> the Future of Female Commerce <br />
        with <span className='cnex'>Cnex</span> </div>
        <div className='top t2'>Where <span className='experience'> Fashion</span> meets Femininity </div>
        <div className='top t3'>Radiate <span className="experience">Confidence,</span> <br />Radiate Style</div>
        <div className='top t4'><span className="experience">Fashion,</span> redefine.</div>

        <div className='down d1'>Order, Preorder, and Book - Your Ultimate Destination for Female Products and Services</div>
        <div className='down d2'>Celebrate the essence of womanhood in every styling detail.</div>
        <div className='down d3'>Look and feel best in every moment with chic fashion pieces</div>
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
  )
}

export default Animation