import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <Link className="nav-bar-links" to="/">Home</Link>
    </nav>
  )
}