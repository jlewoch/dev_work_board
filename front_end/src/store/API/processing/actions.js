import { createAction } from 'redux-act'

import * as types from './actionTypes'

export const setLoading = createAction(
  types.SET_PROCESSING,
  (stateKey, isLoading) => ({
    isLoading,
    stateKey
  })
)
