import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = ({ toggled, toggleNavBar }) => {
  let iconToggled;
  let navBarToggled;
  let backgroundContainer;
  if (toggled === null) {
    navBarToggled = 'nav-bar-start';
    iconToggled = 'icon-start';
  } else {
    iconToggled = toggled === true ? 'icon-toggled' : 'icon';
    navBarToggled = toggled === true ? 'nav-bar-toggled' : 'nav-bar';
    backgroundContainer = toggled === true ? 'background-toggled' : 'background-div';
  }
  return (
    <div class={backgroundContainer}>
      <nav className={navBarToggled}>
        <img className={iconToggled} src={require('../../../public/hamburger-icon.png')} onClick={() => toggleNavBar()}/>
        <Link className="nav-bar-links" to="/">HOME</Link>
        <Link className="nav-bar-links" to="/character">CHARACTERS</Link>
        <Link className="nav-bar-links" to="/saved-comics">SAVED</Link>
      </nav>
    </div>
  )
}