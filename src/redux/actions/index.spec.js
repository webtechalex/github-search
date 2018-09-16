import { SEARCH_REQUESTED, SEARCH_SUCCESS, SEARCH_FAILED, SEARCH_CLEAR } from './'
import { searchRequested, searchSuccess, searchFail, searchClear } from './'

describe('searchRequested', () => {
  it('returns an object with the argument in the payload', () => {
    const expected = {
      type: SEARCH_REQUESTED,
      payload: 'react'
    }
    expect(searchRequested('react')).toEqual(expected)
  })
})

describe('searchSuccess', () => {
  it('returns an object with the argument in the payload', () => {
    const results = ['lots', 'of', 'results']
    const expected = {
      type: SEARCH_SUCCESS,
      payload: results
    }
    expect(searchSuccess(results)).toEqual(expected)
  })
})

describe('searchFail', () => {
  it('returns an object with the argument in the payload', () => {
    const error = 'you have failed the test...'
    const expected = {
      type: SEARCH_FAILED,
      payload: error
    }
    expect(searchFail(error)).toEqual(expected)
  })
})

describe('searchClear', () => {
  const expected = {
    type: SEARCH_CLEAR
  }
  expect(searchClear()).toEqual(expected)
})