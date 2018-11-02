import { createReducer } from 'redux-act'
import * as types from './actionTypes'
import { changeStatus, taskObject } from './supporting_functions'

const initialState = {}

const tasks = createReducer(
  {
    [types.REMOVE_TASK]: (state, payload) => {
      let temp = state[payload.sectionId]
      delete temp[payload.taskId]
      return { ...state, [payload.sectionId]: temp }
    },
    [types.ADD_TASK]: (state, payload) => ({
      ...state,
      [payload.sectionId]: {
        ...state[payload.sectionId],
        [Date.now().toString()]: taskObject(payload)
      }
    }),
    [types.ADD_EXISTING_TASK]: (state, payload) => ({
      ...state,
      [payload.sectionId]: {
        ...state[payload.sectionId],
        [payload.taskId]: payload.taskItem
      }
    }),

    [types.UPDATE_TASK_INFO]: (state, payload) => {
      let temp = state[payload.sectionId]
      temp[payload.taskId] = { ...temp[payload.taskId], ...payload.updatedInfo }
      return {
        ...state,
        [payload.sectionId]: temp
      }
    }
  },
  initialState
)

export default tasks
