import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { ComicRail } from './Components/ComicRail/ComicRail';
import { getWeeklyComics } from './API/apicalls';
import { connect } from 'react-redux';
import { setWeeklyComics } from './Actions/index';
import { HomePage } from './Components/HomePage/HomePage';
import { Route } from 'react-router-dom';

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
        <Route exact path="/" render={() => (
          <>
            <h2 className="rail-category">This Weeks Comics</h2>
            <ComicRail comics={this.props.weeklyComics} />
          </>
        )} />
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  weeklyComics: store.weeklyComics
})

const mapDispatchToProps = (dispatch) => ({
  setWeeklyComics: comics => dispatch(setWeeklyComics(comics))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);