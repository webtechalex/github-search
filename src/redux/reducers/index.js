import { combineReducers } from 'redux';

import searchLoader from './searchLoader';
import searchError from './searchError';
import searchResults from './searchResults';

export default combineReducers({
  searchLoader,
  searchError,
  searchResults
});
