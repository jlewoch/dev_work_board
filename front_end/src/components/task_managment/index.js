import { connect } from 'react-redux'
import TaskManagmentDisplay from './TaskManagment'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export const TaskManagement = connect(mapStateToProps, mapDispatchToProps)(
  TaskManagmentDisplay
)
