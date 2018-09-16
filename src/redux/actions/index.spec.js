import { SEARCH_REQUESTED, SEARCH_LOADING, SEARCH_SUCCESS, SEARCH_FAIL } from './'
import { searchRequested, searchLoading, searchSuccess, searchFail } from './'

describe('searchRequested', () => {
  it('returns an object with the argument in the payload', () => {
    const expected = {
      type: SEARCH_REQUESTED,
      payload: 'react'
    }
    expect(searchRequested('react')).toEqual(expected)
  })
})

describe('searchLoading', () => {
  it('returns an object with the argument in the payload', () => {
    const expected = {
      type: SEARCH_LOADING,
      payload: true
    }
    expect(searchLoading(true)).toEqual(expected)
  })
});

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
      type: SEARCH_FAIL,
      payload: error
    }
    expect(searchFail(error)).toEqual(expected)
  })
})