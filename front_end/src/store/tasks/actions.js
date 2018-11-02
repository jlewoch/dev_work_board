import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const addTask = createAction(types.ADD_TASK)
export const addExistingTask = createAction(types.ADD_EXISTING_TASK)
export const removeTask = createAction(types.REMOVE_TASK)
export const updateTaskInfo = createAction(types.UPDATE_TASK_INFO)
