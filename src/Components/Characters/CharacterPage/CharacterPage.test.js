import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom';
import { CharacterPage } from './CharacterPage.js';
import { BrowserRouter } from 'react-router-dom';

describe('CharacterPage', () => {

  it('Should match the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <CharacterPage />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

})