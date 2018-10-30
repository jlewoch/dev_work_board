import React, { Component } from 'react'
import FormInput from '../../shared_components/form_input/FormInput'
import './task_form.css'
import DropDown from '../../shared_components/drop_down_menu/DropDown'
class TaskForm extends Component {
  render () {
    return (
      <div className='task-form'>

        <div className='form-section'>
          <FormInput label='Task Title' />
          <DropDown placeholder='Priority'>
            <p className='option'>High</p>
            <p className='option'>Normal</p>
            <p className='option'>Low</p>
          </DropDown>
        </div>
        <div className='form-section'>
          <FormInput label='Estimate' />
          <FormInput label='Story' />
        </div>
        <div className='form-section'>
          <DropDown placeholder='Type'>
            <p className='option'>Frontend</p>
            <p className='option'>Backend</p>
          </DropDown>
          <FormInput label='Task Title' />
        </div>

      </div>
    )
  }
}

export default TaskForm
