import { combineReducers } from 'redux';
import { comicsReducer } from './comicsReducer';
import { savedReducer } from './savedReducer';

export const rootReducer = combineReducers({
  comics: comicsReducer,
  savedIds: savedReducer, 
})