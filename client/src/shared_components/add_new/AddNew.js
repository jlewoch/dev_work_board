import React, { Component } from 'react'
import PlusBtn from '../icons/plus_btn/PlusBtn'
import './add_new.css'
import NewTask from './new_task/NewTask'
import FormInput from '../form_input/FormInput'
import ConfirmBtn from '../icons/confirm_btn/ConfirmBtn'
export default class AddNew extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',

      enabled: false
    }
  }

  toggle = () => {
    this.setState({ enabled: !this.state.enabled })
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  add = () => {
    this.props.addclick({
      title: this.state.title
    })
    this.setState({
      enabled: !this.state.enabled,
      title: ''
    })
  }

  render () {
    const { enabled } = this.state
    const { title } = this.props
    const submitForm = () => {
      switch (title) {
        case 'Task':
          return <NewTask addclick={this.props.addclick} />

        default:
          return (
            <div className='adding'>
              <div className='seperator'>
                <FormInput
                  id='title'
                  label={title}
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>

              <div className='seperator'>
                <ConfirmBtn onClick={this.add} />

              </div>
            </div>
          )
      }
    }

    return (
      <div className='adding-container'>
        {!enabled
          ? <div className='adding' onClick={this.toggle}>
            <h4 className='title'>Add a new {title}</h4><PlusBtn />
          </div>
          : submitForm()}
      </div>
    )
  }
}
