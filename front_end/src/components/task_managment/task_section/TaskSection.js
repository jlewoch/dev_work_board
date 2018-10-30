import React, { Component } from 'react'
import TaskCard from './task_card/TaskCard'
import './task_section.css'
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
    console.log(e)

    e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({ id: e.target.id, oldStatus: this.state.sectionName })
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
    const { tasks, sectionName } = this.props
    return (
      <div className='task-section-container'>
        <div className='task-section-top'>
          <h5 className='section-title'>{sectionName}</h5>
        </div>
        <button className='task-section-button'>hello</button>
        <div
          onDragOver={e => e.preventDefault()}
          onDrop={e => {
            this.props.onDrop(e, sectionName)
          }}
          className='card-section'
        >
          {Object.keys(tasks).map(key => {
            const card = tasks[key]
            return (
              <TaskCard
                key={card.taskNum}
                id={card.taskNum}
                taskNum={card.taskNum}
                priority={card.priority}
                assignedImg={card.assignedImg}
                onDrag={this.onDrag}
                dueDate={card.dueDate}
                title={card.title}
                category={card.category}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default TaskSection
