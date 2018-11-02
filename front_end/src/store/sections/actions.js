import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const addSection = createAction(types.ADD_SECTION)
export const editSectionTitle = createAction(types.EDIT_SECTION_TITLE)
