import React from 'react';
import ReactDOM from 'react-dom'
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const characters = [];
  const comics = {firstSet: [], secondSet: []};
  
  ReactDOM.render(
  <BrowserRouter>
    <App characters={characters} comics={comics} />
  </BrowserRouter>, div);
  
  ReactDOM.unmountComponentAtNode(div);
});