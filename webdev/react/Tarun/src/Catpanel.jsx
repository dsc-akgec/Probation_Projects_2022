import React from 'react'
import { Link } from 'react-router-dom'

function Catpanel() {
  return (
    <div className='catpanel'>
        <ul>
          
          <li><Link to="/politics" className='nav-link'>Politics</Link></li>
          <li><Link to="/business" className='nav-link'>Business</Link></li>
          <li><Link to="/sports" className='nav-link'>Sports</Link></li>
          <li><Link to="/entertainment" className='nav-link'>Entertainment</Link></li>
          <li><Link to="/trending" className='nav-link'>Trending</Link></li>
          <li><Link to="/technology" className='nav-link'>Technology</Link></li>
          <li><Link to="/" className='nav-link'>Home</Link></li>
        </ul>
    </div>
  )
}

export default Catpanel