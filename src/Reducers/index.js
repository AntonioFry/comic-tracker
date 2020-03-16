import { combineReducers } from 'redux';
import { comicsReducer } from './comicsReducer';
import { savedReducer } from './savedReducer';
import { charactersReducer } from './chractersReducer';

export const rootReducer = combineReducers({
  comics: comicsReducer,
  savedIds: savedReducer,
  characters: charactersReducer
})