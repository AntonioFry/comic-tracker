import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <img className="marvel-logo" src={require('../../../public/marvel-logo.png')} alt="Marvel comics logo" />
    </header>
  )
}