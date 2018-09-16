import searchError from './searchError'
import { searchFail } from '../actions';

describe('searchError', () => {
  describe('given no arguments', () => {
    it('returns the default state', () => {
      const state = ''
      expect(searchError()).toEqual(state)
    })
  })

  describe('given a SEARCH_FAIL action', () => {
    it('returns the error message', () => {
      const initialState = '';
      const error = 'you have failed the test';
      expect(searchError(initialState, searchFail(error))).toEqual(error)
    })
  })

  describe('given a SEARCH_FAIL action with no arguments', () => {
    it('clears the search results', () => {
      const initialState = 'you have failed the test';
      const newState = '';
      expect(searchError(initialState, searchFail())).toEqual(newState)
    })
  });
});