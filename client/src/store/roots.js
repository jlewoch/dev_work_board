import { combineReducers } from 'redux'
// Reducers
import tasks from './tasks/reducers'
import boards from './boards/reducers'
import sections from './sections/reducers'
const reducers = combineReducers({ sections, tasks, boards })
export default reducers
