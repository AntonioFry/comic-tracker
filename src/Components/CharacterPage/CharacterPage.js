import React, { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

class CharacterPage extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: [],
    }
  }

  searchCharacter = (name) => {
  
  }

  render() {
    return (
      <section className="character-section">
        <SearchBar searchCharacter={this.searchCharacter} />
      </section>
    )
  }
}

export default CharacterPage;