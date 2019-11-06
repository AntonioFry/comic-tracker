import React, { Component } from 'react';
import { ComicThumbnail } from '../ComicThumbnail/ComicThumbnail';

export class ComicRail extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const displayedComics = this.props.comics.map(comic => {
      return (
        <ComicThumbnail id={comic.id} key={comic.id} cover={comic.cover} title={comic.title} />
      )
    });
    return (
      <section>
        {displayedComics}
      </section>
    )
  }
}