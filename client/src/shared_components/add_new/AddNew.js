import React, { Component } from 'react'
import PlusBtn from '../icons/plus_btn/PlusBtn'
import FormInput from '../form_input/FormInput'
import './add_new.css'
export default class AddNew extends Component {
  constructor (props) {
    super(props)
    this.state = {
      titleinp: '',
      priority: '',
      due: '',
      category: '',
      enabled: false
    }
  }

  toggle = () => {
    this.setState({ enabled: !this.state.enabled })
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
  timeChange = e => {
    this.setState({ due: new Date(e.target.value).toLocaleString('en-us') })
  }
  add = () => {
    const { titleinp, priority, due, category, assigned } = this.state

    if (this.props.title === 'Task') {
      this.props.addclick({
        title: titleinp,
        priority,
        due,
        category,
        assigned
      })
    } else {
      this.props.addclick({ title: titleinp })
    }
    this.setState({
      enabled: !this.state.enabled,
      titleinp: '',
      priority: '',
      due: '',
      category: '',
      assigned: ''
    })
  }

  render () {
    const { enabled, priority, due, titleinp, category } = this.state
    const { title } = this.props

    if (title === 'Task') {
      return (
        <div className='adding-container'>
          {!enabled
            ? <div className='adding' onClick={this.toggle}>
              <h4 className='title'>Add a new {title}</h4><PlusBtn />
            </div>
            : <div className='adding adding-task-container'>
              <FormInput
                id='titleinp'
                value={titleinp}
                onChange={this.onChange}
                type='text'
                label={`Enter ${title} Title`}
                />
              <FormInput
                id='priority'
                value={priority}
                onChange={this.onChange}
                type='text'
                label={`Enter Priority`}
                />

              <FormInput
                id='category'
                value={category}
                onChange={this.onChange}
                type='text'
                label={`Enter ${title} Category`}
                />
              <FormInput
                id='due'
                onChange={this.onChange}
                type='datetime-local'
                />
              <button
                disabled={
                    due.length === 0 ||
                      category.length === 0 ||
                      priority.length === 0 ||
                      titleinp.length === 0
                  }
                className='adding-btn'
                onClick={this.add}
                >
                  ADD
                </button>
            </div>}
        </div>
      )
    } else {
      return (
        <div className='adding-container'>
          {!enabled
            ? <div className='adding' onClick={this.toggle}>
              <h4 className='title'>Add a new {title}</h4><PlusBtn />
            </div>
            : <div className='adding'>
              <FormInput
                id='titleinp'
                value={titleinp}
                onChange={this.onChange}
                type='text'
                label={`Enter ${title} Title`}
                />
              <button
                disabled={titleinp.length === 0}
                className='adding-btn'
                onClick={this.add}
                >
                  ADD
                </button>
            </div>}
        </div>
      )
    }
  }
}
