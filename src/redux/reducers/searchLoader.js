import { SEARCH_LOADING } from '../actions'

const searchLoader = (state = false, action) => {
  if (action && action.type === SEARCH_LOADING) {
    return action.payload
  }
  return state
};

export default searchLoader;