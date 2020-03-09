import React, { Component } from 'react';

class CharacterPage extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: '',
    }
  }

  changeSearchValue = (search) => {
    this.setState({ searchValue: search });
  }

  render() {
    return (
      <section className="character-section">
        
      </section>
    )
  }
}

export default CharacterPage;