import { createStore, combineReducers } from 'redux';
import status from './statusReducer.js';
import cities from './citiesReducer.js';

const store = createStore(combineReducers({
  status,
  cities,
}));

export default store;
