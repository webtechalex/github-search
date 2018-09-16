import { SEARCH_SUCCESS, SEARCH_CLEAR } from '../actions'

const searchStatus = (state = [], action) => {
  switch (action && action.type) {
    case SEARCH_SUCCESS:
      return action.payload;
    case  SEARCH_CLEAR:
      return [];
    default:
      return state
  }
};

export default searchStatus;