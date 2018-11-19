import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TaskSectionDisplay from './TaskSection'
import { createTask, removeTask } from '../../../store/tasks/actions'
import { removeSection } from '../../../store/sections/actions'

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTask: e => dispatch(createTask({ ...e, sectionId: ownProps.id })),
  removeTask: e => dispatch(removeTask(e)),
  removeSection: e => dispatch(removeSection(e))
})

export const TaskSection = connect(mapStateToProps, mapDispatchToProps)(
  withRouter(TaskSectionDisplay)
)
