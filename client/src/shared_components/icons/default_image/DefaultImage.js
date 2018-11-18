import React from 'react'

const DefaultImage = ({ height = 30 }) => {
  return (
    <svg className='user-img' viewBox='0 0 100 100' height={height}>

      <circle cx='50' cy='30' r='20' fill='white' stroke='white' />
      <path
        fill='white'
        stroke='white'
        d='M 25,50
                 Q 50,70 75,50
                 Q 83,48 100,100
                 Q 50,100 0,100
                 Q 15,40 25,50
                 '
      />
    </svg>
  )
}

export default DefaultImage
