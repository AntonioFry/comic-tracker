import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { ComicRail } from './Components/Comics/ComicRail/ComicRail';
import ComicDetails from './Components/Comics/ComicDetails/ComicDetails';
import { getWeeklyComics } from './API/apicalls';
import { connect } from 'react-redux';
import { setWeeklyComics } from './Actions/index';
import { Route } from 'react-router-dom';
import SavedComics from './Components/Comics/SavedComics/SavedComics';
import { NavBar } from './Components/NavBar/NavBar';
import CharacterPage from './Components/Characters/CharacterPage/CharacterPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navToggled: null
    }
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

  toggleNavBar = () => {
    if (this.state.navToggled === null) {
      this.setState({ navToggled: true })
    } else {
      this.setState({ navToggled: !this.state.navToggled })
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
        <NavBar toggled={this.state.navToggled} toggleNavBar={this.toggleNavBar} />
        <Header />
        <Route exact path="/" render={() => (
          <section className="comic-rails">
            <h2 className="rail-category">This Weeks Comics</h2>
            {this.props.comics.weeklyComics ? <ComicRail comics={this.props.comics.weeklyComics} /> : null}
          </section>
        )} />
        <Route exact path="/saved-comics" render={() => <SavedComics />} />
        <Route exact path="/characters" render={() => <CharacterPage />} />
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