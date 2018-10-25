import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getTasks = createAction(types.GET_TASKS)
export const getTasksStarted = createAction(types.GET_TASKS_STARTED)
export const getTasksSuccessful = createAction(types.GET_TASKS_SUCCESSFUL)
export const getTasksFailed = createAction(types.GET_TASKS_FAILED)

export const updateTask = createAction(types.UPDATE_TASK)
export const updateTasksStarted = createAction(types.UPDATE_TASKS_STARTED)
export const updateTasksSuccessful = createAction(types.UPDATE_TASKS_SUCCESSFUL)
export const updateTasksFailed = createAction(types.UPDATE_TASKS_FAILED)

export const createTask = createAction(types.CREATE_TASK)
export const createTasksStarted = createAction(types.CREATE_TASKS_STARTED)
export const createTasksFailed = createAction(types.CREATE_TASKS_FAILED)
export const createTasksSuccessful = createAction(types.CREATE_TASKS_SUCCESSFUL)
