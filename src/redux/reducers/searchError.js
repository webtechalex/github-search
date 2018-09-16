import { SEARCH_FAIL } from '../actions'

const searchError = (state = '', action) => {
  if (action && action.type === SEARCH_FAIL) {
    return action.payload
  }
  return state
};

export default searchError