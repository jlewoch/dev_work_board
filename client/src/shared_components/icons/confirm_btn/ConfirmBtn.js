import React from 'react'
import './confirm_btn.css'
const ConfirmBtn = ({ onClick }) => {
  return (
    <div onClick={onClick} className='confirm-container'>
      <svg
        height='100'
        viewBox='0 0 20 20'
        stroke='white'
        strokeWidth='2'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M 6.25,9.75 l 2.5,2.5 l 5,-5
' />
      </svg>
    </div>
  )
}

export default ConfirmBtn
