import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TaskManagement } from './components/task_managment'
const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={TaskManagement} />

    </Switch>
  )
}

export default Routes
