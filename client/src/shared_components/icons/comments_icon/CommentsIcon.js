import React from 'react'
import './comments.css'
const CommentsIcon = ({ width = 30 }) => {
  return (
    <svg className='comments' stroke='black' viewBox='0 0 30 30' width={width}>
      <path
        fill='white'
        strokeLinecap='round'
        d='M 5,5
             v 15
             h 6
             l -5,5
             l 10,-5
             h 9
             v -15
             h -20
             m 5,4
             h 10
            m 0,3
             h -10
             m 0,3
             h 10
             '
      />

    </svg>
  )
}

export default CommentsIcon
