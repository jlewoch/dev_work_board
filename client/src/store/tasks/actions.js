import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const addExistingTask = createAction(types.ADD_EXISTING_TASK)
export const addTask = createAction(types.ADD_TASK)
export const editTask = createAction(types.EDIT_TASK)
export const createTask = createAction(types.CREATE_TASK)
export const getTasks = createAction(types.GET_TASKS)
export const gotTasks = createAction(types.GOT_TASKS)
export const updateTask = createAction(types.UPDATE_TASK)
export const removeTask = createAction(types.REMOVE_TASK)
export const removedTask = createAction(types.REMOVED_TASK)
