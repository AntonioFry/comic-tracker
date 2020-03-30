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

    let whiteHeading;
    if (this.props.whiteText === true) {
      whiteHeading = <h2 className="rail-category-white">{this.props.category}</h2>
    } else {
      whiteHeading = <h2 className="rail-category">{this.props.category}</h2>
    }
    
    return (
      <section>
        {whiteHeading}
        <div className="comic-rail">
          {displayedComics}
        </div>
      </section>
    )
  }
}