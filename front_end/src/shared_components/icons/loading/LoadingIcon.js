import React from 'react'
import './loading_icon.css'
const LoadingIcon = () => {
  return (
    <div id='loading-bar'>
      <svg class='loader' viewBox='0 0 100 100'>
        <defs>
          <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0' style='stop-color:rgba(52,52,52,.25)' />
            <stop offset='100%' style='stop-color:rgba(52,52,52,.5)' />
          </linearGradient>
          <linearGradient id='grad1' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0' style='stop-color:rgba(52,52,52,.5)' />
            <stop offset='100%' style='stop-color:rgba(52,52,52,.75)' />
          </linearGradient>
          <linearGradient id='grad2' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0' style='stop-color:rgba(52,52,52,1)' />
            <stop offset='100%' style='stop-color:rgba(52,52,52,.75)' />
          </linearGradient>
          <linearGradient id='grad3' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0' style='stop-color:rgba(52,52,52,0)' />
            <stop offset='100%' style='stop-color:rgba(52,52,52,.25)' />
          </linearGradient>
        </defs>

        <path
          d='M 50,10 A 40 40 45 0 1 90 50'
          fill='none'
          stroke='url(#grad)'
          stroke-width='2'
        />
        <path
          d='M 90,50 A 40 40 45 0 1 50 90'
          fill='none'
          stroke='url(#grad1)'
          stroke-width='2'
        />
        <path
          d='M 50,90 A 40 40 45 0 1 10 50'
          fill='none'
          stroke='url(#grad2)'
          stroke-width='2'
        />
        <path
          d='M 10,50 A 40 40 45 0 1 50 10'
          fill='none'
          stroke='url(#grad3)'
          stroke-width='2'
        />

      </svg>

    </div>
  )
}

export default LoadingIcon
