import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom';
import { SearchBar } from './SearchBar.js';
import { BrowserRouter } from 'react-router-dom';

describe('SearchBar', () => {

  it('Should match the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
});