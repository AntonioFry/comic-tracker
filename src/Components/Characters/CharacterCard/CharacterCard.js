import React from 'react';
import { Link } from 'react-router-dom';

export const CharacterCard = ({ thumbnail, name, id }) => {
  return (
    <Link className='character-link' to={`/character/${id}`} >
      {thumbnail === undefined ? null : <div className="thumbnail-container">
        <img className="thumbnail-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt="character preview thumbnail" />
        <h3 className="thumbnail-title">{name}</h3>
      </div>}
    </Link>
  )
}