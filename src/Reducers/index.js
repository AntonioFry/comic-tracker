import { combineReducers } from 'redux';
import { comicsReducer } from './comicsReducer';

export const rootReducer = combineReducers({
  comics: comicsReducer,
})