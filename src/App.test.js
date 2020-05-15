import React from 'react';
import ReactDOM from 'react-dom'
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";

import renderer from 'react-test-renderer';
import { cleanup, waitFor } from '@testing-library/react';


describe('App', () => {
  let comics;
  let characters;
  
  beforeEach(() => {
    characters = [
      {
        name: "Spider-Man",
        id: 1009610,
        desciption: "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people."
      }
    ];
    comics = {
      "Weekly Comics": [],
      "Spider-Man Comics": [
        {
          title: "Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)",
          id: 1308,
          cover: { path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc665483c3aa", extension: "jpg" }
        },
        {
          title: "Amazing Spider-Man (1999) #558 (Turner Variant)",
          id: 21171,
          cover: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" }
        }
      ]
    };
  });

  afterEach(cleanup)

  it('Renders without crashing', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(
    <BrowserRouter>
      <App characters={characters} comics={comics} />
    </BrowserRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });


  it('Matches snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <App characters={characters} comics={comics} />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should call getWeeklyComics when component mounts', async () => {
    const div = document.createElement('div');

    const component = ReactDOM.render(
      <BrowserRouter>
        <App characters={characters} comics={comics} />
      </BrowserRouter>, div
    );

    
    await waitFor(() => (component.App.componentDidMount()));


    
  });

  it('Should return all comics in in one array when getListOfAllComics is called', () => {

  });

  it('Should change state when toggleNavBar is called', () => {

  });

})