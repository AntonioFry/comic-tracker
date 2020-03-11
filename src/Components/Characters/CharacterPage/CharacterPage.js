import React, { Component } from 'react';
import { SearchBar } from '../../SearchBar/SearchBar';
import { getCharacters } from '../../../API/apicalls';

class CharacterPage extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
    }
  }

  searchCharacter = async (name) => {
    const characters = await getCharacters(name);
    this.setState({ characters });
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