import { takeEvery, call, put } from 'redux-saga/effects'
import { setError } from '../API/error/actions'
import { setLoading } from '../API/processing/actions'
import * as api from '../API/api'
import * as actions from './actions'
import * as types from './actionTypes'
import { normalizeSections } from '../supporting_functions'

function * getSections () {
  setLoading(types.GET_SECTIONS, true)
  try {
    let sections = yield call(api.get, 'sections')

    yield put(actions.gotSections(normalizeSections(sections.data)))
  } catch (error) {
    console.log(error)
  }
}
function * addSection (e) {
  setLoading(types.CREATE_SECTION, true)
  try {
    let sections = yield call(api.create, 'sections', e)

    yield put(
      actions.addSection({
        sectionId: sections.data[0],
        title: e.title,
        boardId: e.boardId
      })
    )
  } catch (error) {
    console.log(error)
  }
}
function * updateSection (e) {
  setLoading(types.UPDATE_SECTION, true)
  try {
    yield call(api.update, `section/${e.id}`, e.update)
    yield put(actions.editSection(e))
  } catch (error) {
    console.log(error)
  }
}
function * removeSection (e) {
  setLoading(types.REMOVE_SECTION, true)
  try {
    yield call(api.destroy, `section/${e.id}`)
    yield put(actions.removedSection(e))
  } catch (error) {
    console.log(error)
  }
  setLoading(types.REMOVE_SECTION, false)
}
export const sectionsSagas = function * () {
  yield takeEvery(types.CREATE_SECTION, e => addSection(e.payload))
  yield takeEvery(types.GET_SECTIONS, () => getSections())
  yield takeEvery(types.UPDATE_SECTION, e => updateSection(e.payload))
  yield takeEvery(types.REMOVE_SECTION, e => removeSection(e.payload))
}
