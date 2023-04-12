import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='home-btn'>

        <Link className='links' to='/'>
          PR<span>R</span>S
        </Link>

        {/* <Link className='links' to='/about'>
            ABOUT US
          </Link> */}
      </div>

      <nav className='navbar service-btn'>
        <ul>


          <Link className='links' to='/login'>
            ADMIN
          </Link>

          

          <Link className='links' to='/userlogin'>
            BOOKING
          </Link>
         

          <Link className='links' to='/search'>
            SEARCH
          </Link>
          <Link className='links' to='/checkin'>
            STATUS
          </Link>
          <Link className='links' to='/contactUs'>
            CONTACT US
          </Link>
         
          
        </ul>
      </nav>
    </header>
  )
}

export default Header
