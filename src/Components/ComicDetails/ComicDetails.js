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
      this.setState({ data: issueData });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <section>
        
      </section>
    )
  }
}