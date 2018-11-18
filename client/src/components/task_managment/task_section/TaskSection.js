import React, { Component } from 'react'
import TaskCard from './task_card/TaskCard'
import './task_section.css'
import PlusBtn from '../../../shared_components/icons/plus_btn/PlusBtn'
import AddNew from '../../../shared_components/add_new/AddNew'
class TaskSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sectionName: ''
      // offset: 5,
      // offsetKeys: [],
      // pageInfo: {
      //   number: 1,
      //   startItem: 0,
      //   endItem: 0
    }
  }

  // loadMore = () => {
  //   let pageInfo = this.state.pageInfo
  //   const { totalItems, offset } = this.state
  //   let page = pageInfo.number
  //   page = totalItems - page * offset > 0 ? page + 1 : page
  //   pageInfo.number = page
  //   pageInfo.endItem = offset * page < totalItems ? offset * page : totalItems
  //   pageInfo.startItem = page !== 1 ? offset * (page - 1) : 0
  //   const offsetKeys = Object.keys(tasks).slice(
  //     pageInfo.startItem,
  //     pageInfo.endItem
  //   )
  //   this.setState({ pageInfo, offsetKeys })
  // }

  onDrag = e => {
    e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({
        taskId: e.target.id,
        oldSectionId: this.props.id
      })
    )
  }

  componentDidMount () {
    this.setState({
      sectionName: this.props.sectionName
      // totalItems: Object.keys(this.props.cardItems).length,
      // offsetKeys: Object.keys(this.props.cardItems).slice(0, this.state.offset)
    })
  }

  render () {
    // const { totalItems, pageInfo, offset } = this.state
    const { tasks, title, createTask, id } = this.props
    return (
      <div className='task-section'>
        <div className='task-section-top'>
          <h5 className='section-title'>{title}</h5>
        </div>
        <div className='task-section-middle'>
          <AddNew title='Task' addclick={createTask}/>

        </div>

        <div
          onDragOver={e => e.preventDefault()}
          onDrop={e => {
            this.props.onDrop(e, id)
          }}
          className='task-section-bottom'
        >
          {tasks[id]
            ? Object.keys(tasks[id]).map(key => {
              const card = tasks[id][key]
              return (
                <TaskCard
                  key={key}
                  id={key}
                  taskNum={key}
                  priority={card.priority}
                  assignedImg={card.assignedImg}
                  onDrag={this.onDrag}
                  dueDate={card.dueDate}
                  title={card.title}
                  category={card.category}
                  />
              )
            })
            : ''}
        </div>
      </div>
    )
  }
}

export default TaskSection
