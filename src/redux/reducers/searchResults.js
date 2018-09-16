import { SEARCH_SUCCESS } from '../actions'

const searchStatus = (state = [], action) => {
  switch (action && action.type) {
    case SEARCH_SUCCESS:
      return action.payload;
    default:
      return state
  }
};

export default searchStatus;