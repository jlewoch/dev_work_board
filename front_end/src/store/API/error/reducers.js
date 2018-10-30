import { createReducer } from 'redux-act'
import * as types from './actionTypes'
const initialState = {
  GET_TASKS: false,
  UPDATE_TASK: false,
  CREATE_TASK: false
}

const tasks = createReducer(
  {
    [types.SET_ERROR]: (state, payload) => ({
      ...state,
      [payload.stateKey]: payload.processing
    })
  },
  initialState
)

export default tasks
