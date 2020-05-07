import React from 'react';
import ReactDOM from 'react-dom'
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';


describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const characters = [];
    const comics = { 
      "Weekly Comics": [
      ], 
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
    
    ReactDOM.render(
    <BrowserRouter>
      <App characters={characters} comics={comics} />
    </BrowserRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });



})