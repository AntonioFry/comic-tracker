import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom';
import { CharacterDetails } from './CharacterDetails.js';
import { BrowserRouter } from 'react-router-dom';

describe('CharacterDetails', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      addCharcterComics: jest.fn(),
      description: "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
      id: 1009610,
      name: "Spider-Man",
      removeCharacterComics: jest.fn(),
      removeCharacterId: jest.fn(),
      saveCharacterId: jest.fn(),
      savedCharacters: [],
      setCurrentCharacterComics: jest.fn(),
      thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b", extension: "jpg" }
    }
  })

  it('Should match the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <CharacterDetails
          thumbnail={{path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b", extension: "jpg"}}
          description={"Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people."}
          name={"Spider-Man"}
          savedCharacters={[]}
          id={1009610}
          addCharcterComics={jest.fn()}
          removeCharacterComics={jest.fn()}
          removeCharacterId={jest.fn()}
          saveCharacterId={jest.fn()}
          setCurrentCharacterComics={jest.fn()}
        />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});