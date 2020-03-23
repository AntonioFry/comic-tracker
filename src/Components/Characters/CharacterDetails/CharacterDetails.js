import React, { Component } from 'react';
import { getCharacterComics } from '../../../API/apicalls';
import './CharacterDetails.css'
import { ComicRail } from '../../Comics/ComicRail/ComicRail';
import { connect } from 'react-redux';
import { setCharacterComics } from '../../../Actions/index';

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
    await this.setState({ comics });
    this.props.setCharacterComics(this.state.comics);
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
              {description.length <= 0 ? 
              <p className="character-info-text">No description provided</p> : 
              <p className="character-info-text">{description}</p>}
            </article>
          </div>
        </div>
        {this.state.comics === [] ? null : <ComicRail whiteText={true} comics={this.state.comics} />}
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setCharacterComics: comics => dispatch(setCharacterComics(comics))
});

export default connect(null, mapDispatchToProps)(CharacterDetails);