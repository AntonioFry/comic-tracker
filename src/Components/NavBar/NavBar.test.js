import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom';
import { NavBar } from './NavBar.js';
import { BrowserRouter } from 'react-router-dom';

describe('NavBar', () => {

  it('Should match the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});