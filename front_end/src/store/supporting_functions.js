import { taskObject } from './tasks/supporting_functions'

export const normalizeBoards = payload => {
  let temp = {}
  Object.values(payload).map(value => (temp[value.id] = { title: value.title }))
  return temp
}
export const normalizeSections = payload => {
  let temp = {}
  Object.values(payload).map(
    value =>
      (temp[value.boardId] = {
        ...temp[value.boardId],
        [value.id]: { title: value.title }
      })
  )
  return temp
}
export const normalizeTasks = payload => {
  let temp = {}
  Object.values(payload).map(
    value =>
      (temp[value.sectionId] = {
        ...temp[value.sectionId],
        [value.id]: taskObject(value)
      })
  )
  return temp
}
