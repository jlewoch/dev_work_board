import { connect } from 'react-redux'
import TaskSectionDisplay from './TaskSection'
import { addTask } from '../../../store/tasks/actions'

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTask: e => dispatch(addTask({ ...e, sectionId: ownProps.id }))
})

export const TaskSection = connect(mapStateToProps, mapDispatchToProps)(
  TaskSectionDisplay
)
