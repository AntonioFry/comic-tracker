import React, { Component } from 'react';
import './SearchBar.css';

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

  handleClick = (e) => {
    e.preventDefault();
    this.props.searchCharacter(this.state.inputValue)
  }

  render() {
    return (
      <form className="search-form">
        <input
          className='search-input'
          placeholder='Character Name...'
          value={this.state.inputValue}
          name='inputValue'
          onChange={(e) => this.handleChange(e)}
        />
        <button className='search-button' onClick={(e) => this.handleClick(e)}>Search</button>
      </form>
    )
  }
}