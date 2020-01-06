import React from 'react';
import { ComicThumbnail } from '../ComicThumbnail/ComicThumbnail';
import { connect } from 'react-redux';
import './SavedComics.css';

export const SavedComics = ({ savedIds, comics }) => {
  const comicsData = Object.values(comics).reduce((acc, set) => {
    acc.push(...set)
    return acc;
  }, [])
  const savedComicsData = savedIds.map(id => {
    const foundComic = comicsData.find(comic => {
      return comic.id === id;
    })
    return (<ComicThumbnail
      id={id}
      cover={foundComic.cover}
      title={foundComic.title}
    />)
  })
  console.log(savedComicsData)
  return (
    <section className="saved-comics-section">
      {savedComicsData.length === 0 ? <h2 className="no-saved-comics-message">THERE ARE CURRENTLY NO COMICS SAVED</h2> : savedComicsData}
    </section>
  )
}

const mapStateToProps = (store) => ({
  savedIds: store.savedIds,
  comics: store.comics
})

export default connect(mapStateToProps)(SavedComics)