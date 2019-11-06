import React from 'react';
import './ComicThumbnail.css'

export const ComicThumbnail = ({ cover, title }) => {
  return (
    <div className="thumbnail-container">
      <img className="thumbnail-cover" src={`${cover.path}.${cover.extension}`} alt="comic preview cover" />
      <p className="thumbnail-title">{title}</p>
    </div>
  )
};