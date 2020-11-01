import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom';
import { CharacterCard } from './CharacterCard';
import { BrowserRouter } from 'react-router-dom'

describe('CharacterCard', () => {
  let props = {
    thumbnail: 'Spider-Man.JPG',
    id: '1100616',
    name: 'Spider-Man'
  };

  it('Should match the snapshot', () => {
    const tree = renderer.create( 
      <BrowserRouter>
        <CharacterCard {...props} />
      </BrowserRouter>  
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
});