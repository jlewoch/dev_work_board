import { connect } from 'react-redux'
import TaskSectionDisplay from './TaskSection'
import { addTask } from '../../../store/tasks/actions'

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  addTask: e => dispatch(addTask(e))
})

export const TaskSection = connect(mapStateToProps, mapDispatchToProps)(
  TaskSectionDisplay
)
