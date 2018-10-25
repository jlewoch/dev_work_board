import React, { Component } from 'react'
import TaskCard from './task_card/TaskCard'
import './task_card_section.css'
class CardSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      totalItems: 0,
      offset: 5,
      offsetKeys: [],
      pageInfo: {
        number: 1,
        startItem: 0,
        endItem: 0
      }
    }
  }
  onDrag = e => {
    e.dataTrasfer.setData('text/plain', e.target.id)
  }
  loadMore = () => {
    let pageInfo = this.state.pageInfo
    const { totalItems, offset } = this.state
    let page = pageInfo.number
    page = totalItems - page * offset > 0 ? page + 1 : page
    pageInfo.number = page
    pageInfo.endItem = offset * page < totalItems ? offset * page : totalItems
    pageInfo.startItem = page !== 1 ? offset * (page - 1) : 0
    const offsetKeys = Object.keys(tasks).slice(
      pageInfo.startItem,
      pageInfo.endItem
    )
    this.setState({ pageInfo, offsetKeys })
  }
  componentDidMount () {
    this.setState({
      totalItems: this.props.tasks.length,
      offsetKeys: Object.keys(tasks).slice(0, this.state.offset)
    })
  }

  render () {
    const { totalItems, pageInfo, offset } = this.state
    const { cardItems, onDrop } = this.props

    return (
      <div
        onDragOver={e => e.preventDefault()}
        onDrop={e => {
          this.drop(e)
        }}
        className='card-section'
      >
        {offsetKeys.map((key, index) => {
          let card = tasks[key]
          return (
            <TaskCard
              key={index}
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
    )
  }
}

export default CardSection
