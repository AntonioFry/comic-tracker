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
    console.log(this.state.data)
    const { cover, title, prices, dates, description, pageCount, issueNumber } = this.state.data;
    return (
      <section className="comic-details-container">
        <div className="comic-cover-container">
          {cover === undefined ? null : 
            <img className="comic-cover" src={`${cover.path}.${cover.extension}`} alt="Cover of comic issue"/>
          }
        </div>
        {title === undefined ? null : 
        <article className="comic-info-container">
          <h3 className="comic-info-header">{title}</h3>
          <h3 className="comic-info-header">Price</h3>
          <p className="comic-info-text">{prices[0].price}</p>
          <h3 className="comic-info-header">Page Count</h3>
          <p className="comic-info-text">{pageCount}</p>
        </article>}
      </section>
    )
  }
}