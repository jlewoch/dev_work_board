import { createReducer } from 'redux-act'
import * as types from './actionTypes'

const initialState = {}

const boards = createReducer(
  {
    [types.ADD_BOARD]: (state, payload) => ({
      ...state,

      [Date.now().toString()]: { title: payload.title }
    }),
    [types.EDIT_BOARD_TITLE]: (state, payload) => ({
      ...state,
      [payload.id]: { ...state[payload.id], title: payload.title }
    })
  },
  initialState
)

export default boards
