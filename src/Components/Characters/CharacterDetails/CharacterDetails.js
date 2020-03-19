import React, { Component } from 'react';
import { getCharacterComics } from '../../../API/apicalls';
import './CharacterDetails.css'
import { Route } from 'react-router-dom';
import { ComicDetails } from '../../Comics/ComicDetails/ComicDetails';
import { ComicRail } from '../../Comics/ComicRail/ComicRail';

export class CharacterDetails extends Component {
  constructor() {
    super();
    this.state = {
      saved: false,
      comics: []
    }
  }

  async componentDidMount() {
    const comics = await getCharacterComics(this.props.id);
    this.setState({ comics });
  }

  render() {
    const { name, description, thumbnail } = this.props;

    let backgroundImage;
    thumbnail === undefined ? null : backgroundImage = {
      background: `linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.5)) 0% 0% / cover no-repeat,
        url(${thumbnail.path}.${thumbnail.extension})`,
      minHeight: '700px',
      backgroundSize: 'cover',
    };

    let routesToComics;
    
    this.state.comics === [] ? null : routesToComics = this.state.comics.map(comic => {
      return <Route exact path={`${comic.id}`} render={() => <ComicDetails id={comic.id} />} />
    });

    return (
      <section className="character-details-section" style={backgroundImage}>
        <div className="character-details-container">
          <img className="character-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt={`Showing of ${name}`} />
          <div className="info-and-options">
            <article className="character-info-container">
              <h3 className="character-info-header">{name}</h3>
              <h3 className="character-info-header">Description</h3>
              {description.length <= 0 ? 
              <p className="character-info-text">No description provided</p> : 
              <p className="character-info-text">{description}</p>}
            </article>
          </div>
        </div>
        {routesToComics}
        {this.state.comics === [] ? null : <ComicRail comics={this.state.comics} />}
      </section>
    )
  }
}