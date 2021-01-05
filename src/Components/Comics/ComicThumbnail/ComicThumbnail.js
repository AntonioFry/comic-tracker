import React from 'react';
import './ComicThumbnail.css';
import { Link } from 'react-router-dom';

export const ComicThumbnail = ({ id, cover, title }) => {

  return (
    <Link className='comic-link' style={{ textDecoration: 'none' }} to={`/${id}`} >
      {cover === undefined ? null : <div className="thumbnail-container">
        <img className="thumbnail-cover" src={`${cover.path}.${cover.extension}`} alt="comic preview cover" />
        <h3 data-testId="comic-title" className="thumbnail-title">{title}</h3>
      </div>}
    </Link>
    )
};