import searchResults from './searchResults';
import { searchSuccess, searchClear } from '../actions';

describe('searchResults', () => {
  describe('given no arguments', () => {
    it('returns the default state', () => {
      const state = []
      expect(searchResults()).toEqual(state)
    })
  })

  describe('given a SEARCH_SUCCESS action', () => {
    it('returns the search results', () => {
      const initialState = [];
      const newState = ['lots', 'of', 'search', 'results'];
      expect(searchResults(initialState, searchSuccess(newState))).toEqual(newState)
    })
  })

  describe('given a SEARCH_CLEAR action', () => {
    it('returns the search results', () => {
      const initialState = ['lots', 'of', 'search', 'results'];
      const newState = [];
      expect(searchResults(initialState, searchClear())).toEqual(newState)
    })
  })
})