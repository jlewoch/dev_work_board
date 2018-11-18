import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const addSection = createAction(types.ADD_SECTION)
export const editSection = createAction(types.EDIT_SECTION)
export const createSection = createAction(types.CREATE_SECTION)
export const getSections = createAction(types.GET_SECTIONS)
export const gotSections = createAction(types.GOT_SECTIONS)
export const updateSection = createAction(types.UPDATE_SECTION)
