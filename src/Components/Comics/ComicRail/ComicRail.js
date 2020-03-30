import React, { Component } from 'react';
import { ComicThumbnail } from '../ComicThumbnail/ComicThumbnail';
import './ComicRail.css';

export class ComicRail extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const displayedComics = this.props.comics.map(comic => {
      return (
        <ComicThumbnail whiteText={this.props.whiteText} id={comic.id} key={comic.id} cover={comic.cover} title={comic.title} />
      )
    });
    return (
      <section>
        <h2 className="rail-category">{this.props.category}</h2>
        <div className="comic-rail">
          {displayedComics}
        </div>
      </section>
    )
  }
}