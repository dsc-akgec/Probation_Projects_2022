import React from 'react';
import './navbar.css';
import { Link
} from "react-router-dom";



const  Navbar = () => {
  return (<div className="nav">
         <h1 id='logo'>news hub</h1>
         <div>
         <ul id='links'>
        <li><Link to="/" class="nav-item">Home </Link></li>
        <li><Link to="/general" class="nav-item">General</Link></li>
        <li><Link to="/business" class="nav-item">Business</Link></li>
        <li><Link to="/entertainment" class="nav-item">Entertainment</Link></li>
        <li><Link to="/health" class="nav-item">Health</Link></li>
        <li><Link to="/science" class="nav-item">Science</Link></li>
        <li><Link to="/sports" class="nav-item">Sports</Link></li>
        <li><Link to="/technology" class="nav-item">Technology</Link></li>


      </ul>

    </div></div>
    
  )
}

export default Navbar