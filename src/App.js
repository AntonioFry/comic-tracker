import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { ComicRail } from './Components/ComicRail/ComicRail';
import { ComicDetails } from './Components/ComicDetails/ComicDetails';
import { getWeeklyComics } from './API/apicalls';
import { connect } from 'react-redux';
import { setWeeklyComics } from './Actions/index';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
  }
  
  async componentDidMount() {
    try {
      const weeklyComics = await getWeeklyComics();
      await this.props.setWeeklyComics(weeklyComics);
    } catch (error) {
      console.log(error)
    }
  }
  
  render() {
    return (
      <main>
        <Header />
        <Route exact path="/" render={() => (
          <section>
            <h2 className="rail-category">This Weeks Comics</h2>
            {this.props.comics.weeklyComics ? <ComicRail comics={this.props.comics.weeklyComics} /> : null}
          </section>
        )} />
        <Route exact path="comic-details" render={() => <ComicDetails />} /> 
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  comics: store.comics
})

const mapDispatchToProps = (dispatch) => ({
  setWeeklyComics: comics => dispatch(setWeeklyComics(comics))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);