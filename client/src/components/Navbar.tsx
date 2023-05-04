import { useState } from 'react'
import { Link } from 'react-router-dom'
// import * as Scroll from 'react-scroll'

import pbgLogoSmall from '../images/PBG-logo_150x100.png'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  // const ScrollLink = Scroll.Link
  
  return (
    <div className='nav'>
      <img src={ pbgLogoSmall } className='nav-logo' alt='pbg-logo' />

      {/* Menu Icon */}
      <div
        className={ toggleMenu ? 'nav-extended': 'nav-burger' }
        onClick={ () => setToggleMenu(prev => !prev) }
      >
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>

      {/* Popout Menu */}
      {
        toggleMenu &&
          <div
            className='nav-menu'
            onClick={ () => setToggleMenu(prev => !prev) }
          >
            <ul className='nav-links'>
              <li className='nav-link'>Home</li>
              <Link to='/your-benefits'>
                <li className='nav-link'>Your Benefits</li>
              </Link>
              <Link to='/events'>Events</Link>
              {/* <li className='nav-link'>Services</li> */}
              {/* <li className='nav-link'>Events</li> */}
              {/* <li className='nav-link'>News</li>
              <li className='nav-link'>Wellness</li>
              <li className='nav-link'>Resources</li>
              <li className='nav-link'>Training</li>
              <li className='nav-link'>About Us</li>
              <li className='nav-link'>Contact Us</li>
              <li className='nav-link'>Login</li> */}
            </ul>
          </div>
      }
    </div>
  )
}