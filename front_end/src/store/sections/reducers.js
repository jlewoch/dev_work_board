import { createReducer } from 'redux-act'
import * as types from './actionTypes'

const initialState = {}

const sections = createReducer(
  {
    [types.ADD_SECTION]: (state, payload) => ({
      ...state,

      [payload.boardId]: {
        ...state[payload.boardId],
        [Date.now().toString()]: { title: payload.title }
      }
    }),
    [types.EDIT_SECTION_TITLE]: (state, payload) => ({
      [payload.boardId]: {
        ...state[payload.boardId],
        [payload.sectionId]: { title: payload.title }
      }
    })
  },
  initialState
)

export default sections
