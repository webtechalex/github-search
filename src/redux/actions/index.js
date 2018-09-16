export const SEARCH_REQUESTED = 'SEARCH_REQUESTED';
export const SEARCH_LOADING = 'SEARCH_LOADING';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const searchRequested = (query) => ({
  type: SEARCH_REQUESTED,
  payload: query
});

export const searchLoading = (payload = false) => ({
  type: SEARCH_LOADING,
  payload
});

export const searchSuccess = (results = null) => ({
  type: SEARCH_SUCCESS,
  payload: results
});

export const searchFail = (errorMessage = '') => ({
  type: SEARCH_FAIL,
  payload: errorMessage
});
