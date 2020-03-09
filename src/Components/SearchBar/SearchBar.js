import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    console.log(this.state.inputValue)
    return (
      <form>
        <input
          className='search-input'
          placeholder='Character Name...'
          value={this.state.inputValue}
          name='inputValue'
          onChange={(e) => this.handleChange(e)}
        />
        <button>Search</button>
      </form>
    )
  }
}