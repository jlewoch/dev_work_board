import React, { Component } from 'react'
import TaskSection from './task_section/TaskSection'
import FormInput from '../../shared_components/form_input/FormInput'
class TaskManagment extends Component {
  componentDidMount () {}
  onDrop = (e, newStatus) => {
    const data = JSON.parse(e.dataTransfer.getData('text'))
    this.props.changeStatus({
      newStatus,
      id: data.id,
      oldStatus: data.oldStatus
    })
  }
  render () {
    const { tasks } = this.props
    console.log(this.props)

    return (
      <div className='task-management'>
        <div className='task-management-bottom'>
          {Object.keys(tasks).map(key => (
            <TaskSection
              key={key}
              onDrop={this.onDrop}
              tasks={tasks[key]}
              sectionName={key}
            />
          ))}
        </div>

      </div>
    )
  }
}

export default TaskManagment
