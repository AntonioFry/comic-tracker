import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { ComicRail } from './Components/ComicRail/ComicRail';
import ComicDetails from './Components/ComicDetails/ComicDetails';
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

  getListOfAllComics = () => {
     if (this.props.comics === {}) {
       return
     } else {
       const allValues = Object.values(this.props.comics);
       const joinedValues = allValues.reduce((joined, collection) => {
         joined.push(...collection);
         return joined;
       }, [])
       return joinedValues;
     }
  }
  
  render() {
    const everyIssue = Array.from(new Set(this.getListOfAllComics()));
    const routesToIssues = everyIssue.map(comic => {
      return (
        <Route exact path={`/${comic.id}`} render={() => <ComicDetails 
          id={comic.id}
        />}/>
      )
    })
    return (
      <main>
        <Header />
        <Route exact path="/" render={() => (
          <section className="comic-rails">
            <h2 className="rail-category">This Weeks Comics</h2>
            {this.props.comics.weeklyComics ? <ComicRail comics={this.props.comics.weeklyComics} /> : null}
          </section>
        )} />
        {routesToIssues}
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