import React, { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

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
        <SearchBar changeSearchValue={this.changeSearchValue} />
      </section>
    )
  }
}

export default CharacterPage;