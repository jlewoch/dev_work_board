import { createReducer } from 'redux-act'
import * as types from './actionTypes'
import { changeStatus, taskObject } from './supporting_functions'

const initialState = {}

const tasks = createReducer(
  {
    [types.GOT_TASKS]: (state, payload) => ({ ...state, ...payload }),

    [types.ADD_TASK]: (state, payload) => ({
      ...state,
      [payload.sectionId]: {
        ...state[payload.sectionId],
        [payload.taskId]: taskObject(payload)
      }
    }),
    [types.ADD_EXISTING_TASK]: (state, payload) => {
      let temp = state[payload.sectionId] || {}
      let oldTemp = state[payload.oldSectionId]
      temp[payload.taskId] = oldTemp[payload.taskId]
      delete oldTemp[payload.taskId]

      return {
        ...state,
        [payload.sectionId]: temp,
        [payload.oldSectionId]: oldTemp
      }
    },

    [types.EDIT_TASK]: (state, payload) => {
      let temp = state[payload.sectionId]
      temp[payload.taskId] = { ...temp[payload.taskId], ...payload.update }
      return {
        ...state,
        [payload.sectionId]: temp
      }
    },
    [types.REMOVED_TASK]: (state, payload) => {
      let temp = state[payload.sectionId]
      delete temp[payload.id]
      return {
        ...state,
        [payload.sectionId]: temp
      }
    }
  },
  initialState
)

export default tasks
