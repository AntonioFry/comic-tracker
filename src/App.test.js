import React from 'react';
import { render, screen, cleanup, waitFor } from './test-utils';
import ReactDOM from 'react-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { App } from './App';
import renderer from 'react-test-renderer';
import { getWeeklyComics } from "./API/apicalls.js";
import { setWeeklyComics } from './Actions';

jest.mock("./API/apicalls.js", () => {
  return {
    getWeeklyComics: jest.fn() }
});

jest.mock('./API/apicalls');

describe('App', () => {
  let comics;
  let characters;
  let mockResponse;
  let mockSetWeeklyComics = jest.fn();
  
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
    mockResponse = [
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
  });

  afterEach(cleanup)
  
  
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(
    <BrowserRouter>
      <App characters={characters} comics={comics} setWeeklyComics={mockSetWeeklyComics} />
    </BrowserRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });


  it('Matches snapshot', () => {
  const tree = renderer.create(
      <BrowserRouter>
        <App characters={characters} comics={comics} setWeeklyComics={mockSetWeeklyComics}/>
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders App with initial state', () => {
    render(<App />, { initialState: { comics: comics, characters: characters, setWeeklyComics: setWeeklyComics } });

    expect(screen.getByText("Spider-Man")).toBeInTheDocument()
  })
  
  it('Should call getWeeklyComics when component mounts', () => {
    render(<App />, { initialState: { comics: comics, characters: characters, setWeeklyComics: setWeeklyComics } });
  
    expect(getWeeklyComics).toHaveBeenCalledTimes(2);
    expect(getWeeklyComics).toHaveBeenCalledWith();
  });

  it('Should render the comics correctly', () => {
    const { getByText } = render(<App />, { initialState: { comics: comics, characters: characters, setWeeklyComics: setWeeklyComics } });

    waitFor(screen.getByText('Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)'))
  });

  it('Should change state when toggleNavBar is called', () => {

  });

});