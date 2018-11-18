import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TaskManagmentDisplay from './TaskManagment'
import './task_managment.css'
import {
  addExistingTask,
  getTasks,
  updateTask
} from '../../store/tasks/actions'
import { createSection, getSections } from '../../store/sections/actions'
const mapStateToProps = state => ({
  boards: state.boards,
  sections: state.sections
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createSection: e =>
    dispatch(createSection({ ...e, boardId: ownProps.match.params.boardId })),
  getSections: () => dispatch(getSections()),
  getTasks: () => dispatch(getTasks()),
  updateTask: e => dispatch(updateTask(e)),
  addExistingTask: e => dispatch(addExistingTask(e))
})

export const TaskManagment = connect(mapStateToProps, mapDispatchToProps)(
  withRouter(TaskManagmentDisplay)
)
