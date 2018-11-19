import React from 'react'
import './delete_x.css'
const DeleteX = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      viewBox='0 0 20 20'
      height='10'
      stroke='black'
      strokeWidth='3'
      strokeLinecap='round'
      className='delete-x'
    >
      <line x1='0' y1='0' x2='20' y2='20' />
      <line x1='20' y1='0' x2='0' y2='20' />
    </svg>
  )
}

export default DeleteX
