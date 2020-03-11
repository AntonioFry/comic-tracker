import React, { Component } from 'react';
import { SearchBar } from '../../SearchBar/SearchBar';
import { getCharacters } from '../../../API/apicalls';
import './CharacterPage.css'
import { CharacterCard } from '../CharacterCard/CharacterCard';

class CharacterPage extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
    }
  }

  searchCharacter = async (name) => {
    const characters = await getCharacters(name);
    await this.setState({ characters });
    console.log(this.state.characters)
  }

  render() {
    const characterCards = this.state.characters.map(character => {
      return (
        <CharacterCard
          name={character.name}
          thumbnail={character.thumbnail}
          id={character.id}
        />
      )
    });
    return (
      <section className="character-section">
        <SearchBar searchCharacter={this.searchCharacter} />
        <section className='character-card-section'>
          { this.state.characters !== [] ? characterCards : null } 
        </section>
      </section>
    )
  }
}

export default CharacterPage;