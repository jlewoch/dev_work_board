import { connect } from 'react-redux'
import TaskManagmentDisplay from './TaskManagment'
import './task_managment.css'
import { changeStatus } from '../../store/tasks/actions'
const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  changeStatus: e => dispatch(changeStatus(e))
})

export const TaskManagement = connect(mapStateToProps, mapDispatchToProps)(
  TaskManagmentDisplay
)
