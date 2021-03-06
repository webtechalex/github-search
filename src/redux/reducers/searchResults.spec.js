import searchResults from './searchResults';
import { searchSuccess } from '../actions';

describe('searchResults', () => {
  describe('given no arguments', () => {
    it('returns the default state', () => {
      const state = null
      expect(searchResults()).toEqual(state)
    })
  })

  describe('given a SEARCH_SUCCESS action', () => {
    it('returns the search results', () => {
      const initialState = null;
      const newState = ['lots', 'of', 'search', 'results'];
      expect(searchResults(initialState, searchSuccess(newState))).toEqual(newState)
    })
  })

  describe('given a SEARCH_SUCCESS action with no arguments', () => {
    it('clears the search results', () => {
      const initialState = ['lots', 'of', 'search', 'results'];
      const newState = null;
      expect(searchResults(initialState, searchSuccess())).toEqual(newState)
    })
  })
})