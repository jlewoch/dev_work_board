import React, { Component } from 'react'
import Select from 'react-select'
import FormInput from '../../form_input/FormInput'
import ConfirmBtn from '../../icons/confirm_btn/ConfirmBtn'
import DeleteX from '../../icons/delete/DeleteX'
const priorities = [
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' }
]

const categories = [
  { value: 'Home', label: 'Home' },
  { value: 'N/A', label: 'N/A' }
]
export default class NewTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      priority: null,
      category: null,
      title: ''
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleChange = e => {
    this.setState({ [e.id]: e.value })
  }
  submit = e => {
    e.preventDefault()
    this.props.addClick({
      title: this.state.title,
      category: this.state.category,
      priority: this.state.priority
    })
  }
  render () {
    console.log(this.state)

    return (
      <div className='form'>
        <FormInput
          id='title'
          value={this.state.title}
          onChange={this.handleInputChange}
          type='text'
          label={`Title`}
        />
        <Select
          id='priority'
          placeholder='Priority'
          selectedOption={this.state.priority}
          onChange={e => this.handleChange({ id: 'priority', value: e.value })}
          options={priorities}
        />
        <Select
          id='category'
          placeholder='Category'
          selectedOption={this.state.category}
          onChange={e => this.handleChange({ id: 'category', value: e.value })}
          options={categories}
        />
        <div className='form-controls'>
          <DeleteX onClick={this.props.cancel} />

          <ConfirmBtn onClick={this.submit} />
        </div>

      </div>
    )
  }
}
