import React from 'react'
import './Navbar.css';
import Party from '../assets/partying-face.png'
import Star from '../assets/star.png'
import Fire from '../assets/fire.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>MOVIES WEB</h1>
        <div className="navbar_links">
            <a href="">Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' /></a>
            <a href="">Top Rated <img src={Star} alt="star emoji" className='navbar_emoji' /></a>
            <a href="">Up Coming <img src={Party} alt="Party face emoji" className='navbar_emoji' /></a>
        </div>
    </nav>

  )
}

export default Navbar
