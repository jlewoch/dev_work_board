import { connect } from 'react-redux'
import TaskSectionDisplay from './TaskSection'
import { createTask } from '../../../store/tasks/actions'

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTask: e => dispatch(createTask({ ...e, sectionId: ownProps.id }))
})

export const TaskSection = connect(mapStateToProps, mapDispatchToProps)(
  TaskSectionDisplay
)
