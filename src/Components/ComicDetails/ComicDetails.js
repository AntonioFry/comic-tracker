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
    const { cover } = this.state.data;
    console.log(cover)
    return (
      <section>
        <div className="comic-cover-container">
          {cover === undefined ? null : 
            <img className="comic-cover" src={`${cover.path}.${cover.extension}`} alt="Cover of comic issue"/>
          }
        </div>
        <article>

        </article>
      </section>
    )
  }
}