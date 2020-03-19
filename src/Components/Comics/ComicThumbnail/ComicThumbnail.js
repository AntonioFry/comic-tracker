import React from 'react';
import './ComicThumbnail.css';
import { Link } from 'react-router-dom';

export const ComicThumbnail = ({ id, cover, title, whiteText }) => {
  let fontClass;
  whiteText === true ? fontClass=`thumbnail-title-${whiteText}` : fontClass='thumbnail-title';

  return (
    <Link className='comic-link' to={`/${id}`} >
      {cover === undefined ? null : <div className="thumbnail-container">
        <img className="thumbnail-cover" src={`${cover.path}.${cover.extension}`} alt="comic preview cover" />
        <h3 className={fontClass}>{title}</h3>
      </div>}
    </Link>
    )
};