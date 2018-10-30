import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TaskManagment } from './components/task_managment/'
const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={TaskManagment} />

    </Switch>
  )
}

export default Routes
