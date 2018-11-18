import { createAction } from 'redux-act'

import * as types from './actionTypes'

export const setError = createAction(types.SET_ERROR, (stateKey, error) => ({
  stateKey,
  error
}))
