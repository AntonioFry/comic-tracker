import React, { Component } from 'react';
import { getComicIssue } from '../../API/apicalls';
import './ComicDetails.css';

export class ComicDetails extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    }
  }

  async componentDidMount() {
    const { id } = this.props;
    try {
      const issueData = await getComicIssue(id);
      this.setState({ data: issueData[0] });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { cover, title, prices, dates, description, pageCount, issueNumber, creators } = this.state.data;
    let backgroundImage;
    cover === undefined ? null : backgroundImage = { 
      background: `linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.5)) 0% 0% / cover no-repeat,
        url(${cover.path}.${cover.extension})`,
      'min-height': '700px',
      backgroundSize: 'cover',
    };
    let formattedCreators;
    creators === undefined ? null :formattedCreators = creators.map(creator => {
      return (
        <p className="comic-info-text">{creator.role}: {creator.name}</p>
      )
    });
    return (
      <section className="comic-details-section" style={backgroundImage} >
        {cover === undefined ? null : 
        <div className="comic-details-container">
          <img className="comic-cover" src={`${cover.path}.${cover.extension}`} alt="Cover of comic issue"/>
          <div className="info-and-options">
            <article className="comic-info-container">
              <h3 className="comic-info-header">{title}</h3>
              <h3 className="comic-info-header">Price</h3>
              <p className="comic-info-text">${prices[0].price}</p>
              <h3 className="comic-info-header">Page Count</h3>
              <p className="comic-info-text">{pageCount}</p>
              <h3 className="comic-info-header">Creators</h3>
              {formattedCreators}
            </article>}
            <button className="save-button">SAVE</button>
            <button className="save-button">UNSAVE</button>
          </div>
        </div>
        }
      </section>
    )
  }
}