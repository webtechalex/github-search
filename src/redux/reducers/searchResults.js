import { SEARCH_SUCCESS } from '../actions'

const searchResults = (state = [], action) => {
  switch (action && action.type) {
    case SEARCH_SUCCESS:
      return action.payload;
    default:
      return state
  }
};

export default searchResults;