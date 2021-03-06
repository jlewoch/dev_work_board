export const taskObject = e => ({
  taskNum: e.taskNum || 0,
  priority: e.priority || 'Normal',
  dueDate: e.due ? new Date(e.due).toLocaleString() : '',
  title: e.title,
  assignedImg: e.assigned || '',
  category: e.category || 'N/A'
})

export const createLists = e => {
  let temp = {
    Backlog: {},
    Unassigned: {},
    'In Development': {},
    'Ready for Testing': {},
    'In Testing': {},
    'Ready for Deployment': {},
    'In Deployment': {},
    Completed: {}
  }
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

  let update = state[payload.newStatus]
  update[payload.id] = old[payload.id]
  delete old[payload.id]

  return { ...state, [payload.oldStatus]: old, [payload.newStatus]: update }
}
