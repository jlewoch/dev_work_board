import { takeEvery, call, put } from 'redux-saga/effects'
import { setError } from '../API/error/actions'
import { setLoading } from '../API/processing/actions'
import * as api from '../API/api'
import * as actions from './actions'
import * as types from './actionTypes'
import { normalizeBoards } from '../supporting_functions'

function * getBoards () {
  setLoading(types.GET_BOARDS, true)
  try {
    let boards = yield call(api.get, 'boards')

    yield put(actions.gotBoards(normalizeBoards(boards.data)))
  } catch (error) {
    console.log(error)
  }
  setLoading(types.GET_BOARDS, false)
}
function * addBoard (e) {
  setLoading(types.CREATE_BOARD, true)
  try {
    let boards = yield call(api.create, 'boards', e)
    yield put(actions.addBoard({ id: boards.data[0], title: e.title }))
  } catch (error) {
    console.log(error)
  }
  setLoading(types.CREATE_BOARD, false)
}
function * updateBoard (e) {
  setLoading(types.UPDATE_BOARD, true)
  try {
    yield call(api.update, `board/${e.id}`, e.update)
    yield put(actions.editBoard(e))
  } catch (error) {
    console.log(error)
    setError(types.UPDATE_BOARD)
  }
  setLoading(types.UPDATE_BOARD, false)
}
function * removeBoard (e) {
  setLoading(types.REMOVE_BOARD, true)
  try {
    yield call(api.destroy, `board/${e.id}`)
    yield put(actions.removedBoard(e))
  } catch (error) {
    console.log(error)
  }
  setLoading(types.REMOVE_BOARD, false)
}

export const boardsSagas = function * () {
  yield takeEvery(types.CREATE_BOARD, e => addBoard(e.payload))
  yield takeEvery(types.GET_BOARDS, () => getBoards())
  yield takeEvery(types.UPDATE_BOARD, e => updateBoard(e.payload))
  yield takeEvery(types.REMOVE_BOARD, e => removeBoard(e.payload))
}
