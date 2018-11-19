import { createReducer } from 'redux-act'
import * as types from './actionTypes'

const initialState = {}

const sections = createReducer(
  {
    [types.GOT_SECTIONS]: (state, payload) => ({ ...state, ...payload }),
    [types.ADD_SECTION]: (state, payload) => ({
      ...state,

      [payload.boardId]: {
        ...state[payload.boardId],
        [payload.sectionId]: { id: payload.sectionId, title: payload.title }
      }
    }),
    [types.EDIT_SECTION]: (state, payload) => ({
      [payload.boardId]: {
        ...state[payload.boardId],
        [payload.sectionId]: {
          ...state[payload.boardId][payload.sectionId],
          ...payload.update
        }
      }
    }),
    [types.REMOVE_SECTION]: (state, payload) => {
      let temp = state[payload.boardId]
      delete temp[payload.id]
      return {
        ...state,
        [payload.boardId]: temp
      }
    }
  },
  initialState
)

export default sections
