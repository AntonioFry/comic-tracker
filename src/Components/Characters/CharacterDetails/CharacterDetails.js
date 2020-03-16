import React, { Component } from 'react';
import './CharacterDetails.css'

export class CharacterDetails extends Component {
  constructor() {
    super();
    this.state = {
      saved: false
    }
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

    return (
      <section className="character-details-section" style={backgroundImage}>
        <div className="character-details-container">
          <img className="character-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt={`Showing of ${name}`} />
          <div className="info-and-options">
            <article className="character-info-container">
              <h3 className="character-info-header">{name}</h3>
              <h3 className="character-info-header">Description</h3>
              <p className="character-info-text">{description}</p>
            </article>
          </div>
        </div>
      </section>
    )
  }
}