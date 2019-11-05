import { combineReducers } from 'redux';
import { weeklyComicsReducer } from './weeklyComicsReducer';

export const rootReducer = combineReducers({
  weeklyComics: weeklyComicsReducer,
})