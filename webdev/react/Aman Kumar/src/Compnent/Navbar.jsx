import React from 'react'
import {a} from 'react-router-dom';
import './Navbar.css';
const Navbar =() =>{
  return (
    <div>
      <nav>
         <div className="logo">
            API HUB
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" className="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">BUSINESS</a></li>
            <li><a href="#">SPORTS</a></li>
            <li><a href="#">HEALTH</a></li>
            <li><a href="#">TECHNOLOGY</a></li>
         </ul>
      </nav>
    </div>
  )
}
export default Navbar