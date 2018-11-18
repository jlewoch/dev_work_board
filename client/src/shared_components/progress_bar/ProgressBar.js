import React from 'react'

const ProgressBar = () => {
  const container = {
    display: 'flex',
    height: '5px',
    background: '#525252'
  }
  const progress = {
    height: '100%',
    background: 'blue'
  }
  return (
    <div style={container}>
      <div style={progress} />
    </div>
  )
}

export default ProgressBar
