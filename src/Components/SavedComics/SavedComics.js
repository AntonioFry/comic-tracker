import React from 'react';
import { getComicIssue } from '../../API/apicalls';
import { ComicThumbnail } from '../ComicThumbnail/ComicThumbnail';
import { connect } from 'react-redux';

export const SavedComics = ({ savedIds }) => {
  const savedComicsData = savedIds.map(id => {
    const comicData = getComicIssue(id)
    return (<ComicThumbnail
      id={id}
      cover={comicData.cover}
      title={comicData.title}
    />) 
  })
  return (
    <section>
      {savedComicsData}
    </section>
  )
}

const mapStateToProps = (store) => ({
  savedIds: store.savedIds
})

export default connect(mapStateToProps)(SavedComics)