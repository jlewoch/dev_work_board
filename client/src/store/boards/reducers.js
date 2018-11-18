import { createReducer } from 'redux-act'
import * as types from './actionTypes'

const initialState = {}

const boards = createReducer(
  {
    [types.GOT_BOARDS]: (state, payload) => ({ ...state, ...payload }),
    [types.ADD_BOARD]: (state, payload) => ({
      ...state,

      [payload.id]: { title: payload.title }
    }),
    [types.EDIT_BOARD]: (state, payload) => ({
      ...state,
      [payload.id]: { ...state[payload.id], ...payload.update }
    })
  },
  initialState
)

export default boards
