import React from 'react'

const MenuArrow = ({ state = false }) => {
  return (
    <svg
      id='arrow'
      width='20'
      viewBox='0 0 15 15'
      className={state ? 'open' : 'close'}
    >
      <path
        stroke='black'
        fill='none'
        d='M 6,3
            l 3,4
            l -3,4
            '
      />
    </svg>
  )
}

export default MenuArrow
