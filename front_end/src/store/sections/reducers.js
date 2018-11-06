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
    })
  },
  initialState
)

export default sections
