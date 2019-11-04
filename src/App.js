import React, { Component } from 'react';
import './App.css';
import { getWeeklyComics } from './API/apicalls';

class App extends Component {
  constructor() {
    super();
  }
  
  async componentDidMount() {
    try {
      await getWeeklyComics()
    } catch (error) {
      console.log(error)
    }
  }
  
  render() {
    return (
      <main>

      </main>
    );
  }
}

export default App;
