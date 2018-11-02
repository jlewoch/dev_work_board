import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TaskManagmentDisplay from './TaskManagment'
import './task_managment.css'
import { removeTask, addExistingTask } from '../../store/tasks/actions'
import { addSection } from '../../store/sections/actions'
const mapStateToProps = state => ({
  boards: state.boards,
  sections: state.sections
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addSection: e =>
    dispatch(addSection({ ...e, boardId: ownProps.match.params.boardId })),
  removeTask: e => dispatch(removeTask(e)),
  addExistingTask: e => dispatch(addExistingTask(e))
})

export const TaskManagment = connect(mapStateToProps, mapDispatchToProps)(
  withRouter(TaskManagmentDisplay)
)
