import { createReducer } from 'redux-act'
import * as types from './actionTypes'
import { createLists, changeStatus } from './supporting_functions'
import { tasks as list } from '../../moc_data/task_cards'

const initialState = createLists(list)

const tasks = createReducer(
  {
    [types.UPDATE_STATUS]: (state, payload) => changeStatus(state, payload)
  },
  initialState
)

export default tasks
