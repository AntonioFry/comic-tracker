import React from 'react';

export const ComicThumbnail = ({ cover, title }) => {
  return (
    <div className="thumbnail-container">
      <img className="thumbnail-cover" src={cover.path + cover.extension} alt="comic preview cover" />
      <h3 className= "thumbnail-title">{title}</h3>
    </div>
  )
};