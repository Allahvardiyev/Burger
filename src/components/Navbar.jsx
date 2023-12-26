import React from 'react'
import { Link } from 'react-router-dom'
import BurgerLogo from '../Pictures/burgerlogo.png'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='main'>
        <img src={BurgerLogo}/>
      </div>
    <div className='mainLink'>
        <Link to='/'>
        AnaSayfa
        </Link>
        <Link to='/menu'>
        Menu
        </Link>
        <Link to='/about'>
        Haqqımızda
        </Link>
        <Link to='/contact'>
        Əlaqə
        </Link>
    </div>
    </div>
  )
}

export default Navbar