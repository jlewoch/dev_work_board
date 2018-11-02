import React, { Component } from 'react'
import { TaskSection } from './task_section'
import AddNew from '../../shared_components/add_new/AddNew'

class TaskManagment extends Component {
  onDrop = (e, newSectionId) => {
    const data = JSON.parse(e.dataTransfer.getData('text'))
    if (data.oldSectionId !== newSectionId) {
      this.props.addExistingTask({
        taskId: data.taskId,
        taskItem: data.taskItem,
        sectionId: newSectionId
      })
      this.props.removeTask({
        taskId: data.taskId,
        sectionId: data.oldSectionId
      })
    }
  }

  render () {
    const { sections, addSection, boards } = this.props
    const { boardId } = this.props.match.params
    if (!boards[boardId]) {
      return (
        <div className='error-container'>
          <h1 className='error-text'>
            {boards.length > 0
              ? 'The board ID selected does not exist'
              : 'There are no boards available'}
          </h1>
        </div>
      )
    }
    return (
      <div className='task-management'>
        <div className='task-management-top'>
          <AddNew title='section' addclick={addSection} />
        </div>
        <div className='task-management-bottom'>

          {sections[boardId]
            ? Object.keys(sections[boardId]).map(key => (
              <TaskSection
                id={key}
                key={key}
                onDrop={this.onDrop}
                title={sections[boardId][key].title}
                />
              ))
            : ''}
        </div>

      </div>
    )
  }
}

export default TaskManagment
