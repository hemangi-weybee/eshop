import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />

      <div>
        {/* <NavLink to='/' className='nav-item'>Home</NavLink> */}
        <NavLink to='/wishlist' className='nav-item' title='Wishlist'><i className="fa fa-heart"></i> Wishlist</NavLink>
        <NavLink to='/cart' className='nav-item' title='Cart'><i className="fa fa-shopping-cart"></i> Cart</NavLink>
      </div>
    </nav>
  )
}

export default NavBar