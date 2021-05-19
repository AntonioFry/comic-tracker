import React from 'react'
// import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './Reducers/index';
import { BrowserRouter } from 'react-router-dom';
const rtl = require('@testing-library/react');

function customRender(
  component,  
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return <BrowserRouter><Provider store={store}>component</Provider></BrowserRouter>
};

module.exports = {
  ...rtl,
  render: customRender,
}