export const SEARCH_REQUESTED = 'SEARCH_REQUESTED'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILED = 'SEARCH_FAILED'
export const SEARCH_CLEAR = 'SEARCH_CLEAR'

export const searchRequested = (query) => ({
  type: SEARCH_REQUESTED,
  payload: query
});

export const searchSuccess = (results) => ({
  type: SEARCH_SUCCESS,
  payload: results
});

export const searchFail = (errorMessage) => ({
  type: SEARCH_FAILED,
  payload: errorMessage
});

export const searchClear = () => ({
  type: SEARCH_CLEAR
});
