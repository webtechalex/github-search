import searchLoader from './searchLoader';
import { searchLoading } from '../actions';

describe('searchLoading', () => {
  describe('given no arguments', () => {
    it('returns the default state', () => {
      const state = false;
      expect(searchLoader()).toBe(false);
    })
  })

  describe('given a searchLoading action', () => {
    it('returns the new state from the payload')
    const state = false;
    const newState = true;
    expect(searchLoader(state, searchLoading(true))).toBe(newState)
  })
})