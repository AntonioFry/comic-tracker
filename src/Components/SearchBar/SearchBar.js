import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    }
  }

  render() {
    return (
      <form>
        <input
          className='search-input'
          placeholder='Character Name...'
          value={this.state.inputValue}
          name='search'
          onChange={}
        />
      </form>
    )
  }
}