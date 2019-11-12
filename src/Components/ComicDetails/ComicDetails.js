import React, { Component } from 'react';
import { getComicIssue } from '../../API/apicalls';

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
      <section>
        <div className="comic-cover-container">
          {cover === undefined ? null : 
            <img className="comic-cover" src={`${cover.path}.${cover.extension}`} alt="Cover of comic issue"/>
          }
        </div>
        <article>
          {title === undefined ? null : <h3>{title}</h3>}
          <h3>Price</h3>
          {prices === undefined ? null : <p>{prices[0].price}</p>}
          <h3>Page Count</h3>
          {pageCount === undefined ? null : <p>{pageCount}</p>}
        </article>
      </section>
    )
  }
}