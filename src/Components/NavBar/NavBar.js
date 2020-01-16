import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = ({ toggled, toggleNavBar }) => {
  return (
    <nav>
      <img className='hamburger-icon' src={require('../../../public/hamburger-icon.png')} onClick={() => toggleNavBar()}/>
      <Link className="nav-bar-links" to="/">HOME</Link>
      <Link className="nav-bar-links" to="/saved-comics">SAVED</Link>
    </nav>
  )
}