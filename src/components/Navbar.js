import React from 'react'
import '../Styles/navbar.css'

export default function Navbar() {


  return (
    <div className='navbar'>
        <div className='navbar-menu'>
            <h3>Navbar</h3>
            <a href="/#">Overview</a>
            <a href="/#">Genre</a>
            <a href="/#">About</a>
        </div>
        <div className='navbar-hamburger-menu'>
          <i className="gg-menu"></i>
        </div>
        <div className='navbar-search'>
          <input  placeholder='Search'/>

        </div>

    </div>
  )
}
/***************************HOVER, BORDER , CLICKING FOCUSING *********************************************** */
