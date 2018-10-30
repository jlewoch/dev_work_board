export const taskObject = e => ({
  taskNum: e.taskNum,
  priority: e.priority,
  dueDate: e.dueDate,
  title: e.title,
  assignedImg: e.assigned,
  category: e.category
})

export const createLists = e => {
  let temp = {}
  for (const key in e) {
    temp = {
      ...temp,
      [e[key].status]: temp[e[key].status]
        ? { ...temp[e[key].status], [e[key].taskNum]: e[key] }
        : { [e[key].taskNum]: e[key] }
    }
    delete temp[e[key].status][e[key].taskNum].status
  }

  return temp
}
export const changeStatus = (state, payload) => {
  if (payload.oldStatus === payload.newStatus) {
    return { ...state }
  }
  let old = state[payload.oldStatus]
  console.log(old[payload.id])

  let update = state[payload.newStatus]
  update[payload.id] = old[payload.id]
  delete old[payload.id]

  return { ...state, [payload.oldStatus]: old, [payload.newStatus]: update }
}
