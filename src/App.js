import React, { Component } from 'react';
import './App.css';
import { getWeeklyComics } from './API/apicalls';

class App extends Component {
  constructor() {
    super();
  }
  
  async componentDidMount() {
    try {
      const weeklyComics = await getWeeklyComics();
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
