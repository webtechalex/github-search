import { combineReducers } from 'redux';

import searchError from './searchError';
import searchResults from './searchResults';

export default combineReducers({
  searchError,
  searchResults
});
