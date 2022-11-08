import React from 'react'
import './footer.css'
import fb from './images/fb.png'
import insta from './images/insta.png'
const footer = () => {
  return (
    <footer>
    <div className="footernav mg-130">
      <div className="footernav-left">
      <h3><span>THE</span> GAZETTE</h3>
      </div>
      
      <div className="footernav-center">
          <ul>
          <li><a href="/">HOME</a></li>
                <li><a href="/culture">CULTURE</a></li>
                <li><a href="/politics">POLITICS</a></li>
                <li><a href="/lifestyle">LIFESTYLE</a></li>
                <li><a href="/travel">TRAVEL</a></li>
                <li><a href="/health">HEALTH</a></li>
                <li><a href="/entertainment">ENTERTAINMENT</a></li>
                <li><a href="/sport">SPORT</a></li>
          </ul>
      </div>
      
      <div className="footernav-right">
          <div className="fb">
            <img src={fb} alt="" srcset="" />
          </div>
          <div className="insta">
            <img src={insta} alt="" srcset="" />
          </div>
      </div>
  </div>
  <hr className='mg-13'/>
</footer>
)
  
}

export default footer