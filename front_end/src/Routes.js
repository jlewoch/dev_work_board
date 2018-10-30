import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TaskForm from './components/task_form/TaskForm'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={TaskForm} />

    </Switch>
  )
}

export default Routes
