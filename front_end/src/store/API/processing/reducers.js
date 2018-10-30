import { createReducer } from 'redux-act'
import * as types from './actionTypes'
const initialState = {
  TASKS: false
}

const tasks = createReducer(
  {
    [types.SET_PROCESSING]: (state, payload) => ({
      ...state,
      [payload.stateKey]: payload.processing
    })
  },
  initialState
)

export default tasks
