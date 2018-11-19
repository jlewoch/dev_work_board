import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const addBoard = createAction(types.ADD_BOARD)
export const editBoard = createAction(types.EDIT_BOARD)
export const createBoard = createAction(types.CREATE_BOARD)
export const getBoards = createAction(types.GET_BOARDS)
export const gotBoards = createAction(types.GOT_BOARDS)
export const updateBoard = createAction(types.UPDATE_BOARD)
export const removeBoard = createAction(types.REMOVE_BOARD)
export const removedBoard = createAction(types.REMOVED_BOARD)
