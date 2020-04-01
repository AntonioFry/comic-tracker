import React from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';

export const CharacterCard = ({ thumbnail, name, id }) => {
  return (
    <Link className='character-link' style={{ textDecoration: 'none' }} to={`/characters/${id}`} >
      {thumbnail === undefined ? null : <div className="thumbnail-container">
        <img className="thumbnail-image" src={`${thumbnail.path}.${thumbnail.extension}`} alt="character preview thumbnail" />
        <h3 className="thumbnail-title">{name}</h3>
      </div>}
    </Link>
  )
}