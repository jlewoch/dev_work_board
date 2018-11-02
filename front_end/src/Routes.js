import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TaskManagment } from './components/task_managment/'
import { SideNavigation } from './components/navigation_bars/'
const Routes = () => {
  return (
    <div id='main'>
      <div className='main-top' />
      <div className='main-bottom'>
        <div className='main-bottom-left'>
          <SideNavigation />

        </div>
        <div className='main-bottom-right'>
          <Route path='/management/:boardId' component={TaskManagment} />
        </div>

      </div>

    </div>
  )
}

export default Routes
