import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const addBoard = createAction(types.ADD_BOARD)
export const editBoardTitle = createAction(types.EDIT_BOARD_TITLE)
