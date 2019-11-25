import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="marvel-logo" src={require('../../../public/marvel-logo.png')} alt="Marvel comics logo" />
      </Link>
    </header>
  )
}