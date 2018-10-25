import { createReducer } from 'redux-act'
import * as types from './actionTypes'

const initialState = {
  error: false,
  processing: false,
  tasks: {}
}

const rooms = createReducer(
  {
    [types.GET_TASKS_STARTED]: (state, payload) => ({
      ...state,
      processing: true
    }),
    [types.GET_TASKS_SUCCESSFUL]: (state, payload) => ({
      ...state,
      tasks: payload
    }),
    [types.GET_TASKS_FAILED]: (state, payload) => ({ ...state, error: true }),
    [types.UPDATE_TASK_STARTED]: (state, payload) => ({
      ...state,
      processing: true
    }),
    [types.UPDATE_TASK_SUCCESSFUL]: (state, payload) => ({
      ...state,
      tasks: {
        ...state.tasks,
        [payload.id]: { ...state.tasks[payload.id], ...payload.update }
      }
    }),
    [types.UPDATE_TASK_FAILED]: (state, payload) => ({ ...state, error: true }),
    [types.CREATE_TASK_STARTED]: (state, payload) => ({
      ...state,
      processing: true
    }),
    [types.CREATE_TASK_SUCCESSFUL]: (state, payload) => ({
      ...state,
      tasks: { ...state.tasks, payload }
    }),
    [types.CREATE_TASK_FAILED]: (state, payload) => ({ ...state, error: true })
  },
  initialState
)

export default rooms
