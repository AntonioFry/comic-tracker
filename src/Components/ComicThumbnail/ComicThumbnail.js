import React from 'react';
import './ComicThumbnail.css';
import { Link } from 'react-router-dom';

export const ComicThumbnail = ({ cover, title }) => {
  return (
    <Link className='comic-link' to={`/comic-details`}>
      <div className="thumbnail-container">
        <img className="thumbnail-cover" src={`${cover.path}.${cover.extension}`} alt="comic preview cover" />
        <h3 className="thumbnail-title">{title}</h3>
      </div>
    </Link>
  )
};