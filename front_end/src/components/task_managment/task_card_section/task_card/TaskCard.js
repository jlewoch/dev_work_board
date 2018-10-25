import React from 'react'
import DefaultImage from '../../default_image/DefaultImage'
import CommentsIcon from '../../comments_icon/CommentsIcon'
import './task_card.css'

const TaskCard = ({
  taskNum,
  priority,
  dueDate,
  title,
  id,
  dragStart,
  assignedImg,
  category
}) => {
  return (
    <div draggable className='card' id={id} onDragStart={dragStart}>
      <div className='card-top'>
        <p className='identity'>{taskNum}</p>
        <p className={`priority ${priority}`}>{priority}</p>

      </div>
      <div className='card-middle'>
        <h4 className='title'>{title}</h4>
        <p className='category'>{category}</p>
      </div>

      <div className='card-bottom'>
        <div className='card-icons'>
          <div className='icon '>
            {assignedImg
              ? <img
                className='user-img'
                src={assignedImg}
                alt='Profile Photo'
                />
              : <DefaultImage />}
          </div>
          <div className='icon'>
            <CommentsIcon />

          </div>

        </div>

        <p className='date'>{dueDate}</p>

      </div>

    </div>
  )
}

export default TaskCard
