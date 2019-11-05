import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { getWeeklyComics } from './API/apicalls';
import { connect } from 'react-redux';
import { setWeeklyComics } from './Actions/index';

class App extends Component {
  constructor() {
    super();
  }
  
  async componentDidMount() {
    try {
      const weeklyComics = await getWeeklyComics();
      this.props.setWeeklyComics(weeklyComics);
    } catch (error) {
      console.log(error)
    }
  }
  
  render() {
    return (
      <main>
        <Header />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setWeeklyComics: comics => dispatch(setWeeklyComics(comics))
})

export default connect(null, mapDispatchToProps)(App);
