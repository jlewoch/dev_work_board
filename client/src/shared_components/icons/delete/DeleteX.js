import React from 'react'
import './delete_x.css'
const DeleteX = ({ onClick }) => {
  return (
    <div className='delete-container'>
      <svg
        onClick={onClick}
        viewBox='0 0 20 20'
        height='10'
        stroke='white'
        strokeWidth='4'
        strokeLinecap='round'
      >
        <line x1='0' y1='0' x2='20' y2='20' />
        <line x1='20' y1='0' x2='0' y2='20' />
      </svg>
    </div>
  )
}

export default DeleteX
