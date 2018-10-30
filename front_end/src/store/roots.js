import { combineReducers } from 'redux'
// Reducers
import tasks from './tasks/reducers'
const reducers = combineReducers({ tasks })
export default reducers
