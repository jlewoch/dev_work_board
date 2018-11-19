import { takeEvery, call, put } from 'redux-saga/effects'
import { setError } from '../API/error/actions'
import { setLoading } from '../API/processing/actions'
import * as api from '../API/api'
import * as actions from './actions'
import * as types from './actionTypes'
import { normalizeTasks } from '../supporting_functions'

function * getTasks () {
  setLoading(types.GET_TASKS, true)
  try {
    let tasks = yield call(api.get, 'tasks')
    console.log(tasks)

    yield put(actions.gotTasks(normalizeTasks(tasks.data)))
  } catch (error) {
    console.log(error)
  }
}
function * addTask (e) {
  setLoading(types.CREATE_TASK, true)
  try {
    console.log(e)

    let tasks = yield call(api.create, 'tasks', e)
    console.log(tasks)

    yield put(
      actions.addTask({
        taskId: tasks.data[0],
        ...e
      })
    )
  } catch (error) {
    console.log(error)
  }
}
function * updateTask (e) {
  console.log(e)

  setLoading(types.UPDATE_TASK, true)
  try {
    yield call(api.update, `task/${e.id}`, e.update)
    yield put(actions.editTask(e))
  } catch (error) {
    console.log(error)
  }
}
function * removeTask (e) {
  setLoading(types.REMOVE_TASK, true)
  try {
    yield call(api.destroy, `task/${e.id}`)
    yield put(actions.removedTask(e))
  } catch (error) {
    console.log(error)
  }
  setLoading(types.REMOVE_TASK, false)
}
export const tasksSagas = function * () {
  yield takeEvery(types.CREATE_TASK, e => addTask(e.payload))
  yield takeEvery(types.GET_TASKS, () => getTasks())
  yield takeEvery(types.UPDATE_TASK, e => updateTask(e.payload))
  yield takeEvery(types.REMOVE_TASK, e => removeTask(e.payload))
}
