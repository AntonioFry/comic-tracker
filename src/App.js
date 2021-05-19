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
import CharacterDetails from './Components/Characters/CharacterDetails/CharacterDetails';

export class App extends Component {
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
      }, []);
      const noDuplicates = joinedValues.filter((issue, index) => {
        const firstIssueResult = joinedValues.findIndex((comic) => comic.id === issue.id);
        return index === firstIssueResult;
      });
      return noDuplicates;
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

    const routesToCharacters = this.props.characters.map(character => {
      return (
        <Route exact path={`/characters/${character.id}`} render={() => <CharacterDetails
          {...character}
        />} />
      )
    })

    const everyIssue = Array.from(new Set(this.getListOfAllComics()));
    const routesToIssues = everyIssue.map(comic => {
      return (
        <Route exact path={`/${comic.id}`} render={() => <ComicDetails 
          id={comic.id}
        />}/>
      )
    });

    let comicsKeys = Object.keys(this.props.comics);

    let comicRails;
    this.props.comics === {} ? comicRails = null : 
    comicRails = Object.values(this.props.comics).map((set, index) => {
      if (index === 1) {
        return null
      } else {
        return <ComicRail noComicsMsg={true} category={comicsKeys[index]} whiteText={false} comics={set} />
      }
    });


    return (
      <main>
        <NavBar toggled={this.state.navToggled} toggleNavBar={this.toggleNavBar} />
        <Header />
        <Route exact path="/" render={() => (
          <section className="comic-rails">
            {comicRails}
          </section>
        )} />
        <Route exact path="/saved-comics" render={() => <SavedComics />} />
        <Route exact path="/characters" render={() => <CharacterPage />} />
        {routesToIssues}
        {routesToCharacters}
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  comics: store.comics,
  characters: store.characters
})

const mapDispatchToProps = (dispatch) => ({
  setWeeklyComics: comics => dispatch(setWeeklyComics(comics))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);