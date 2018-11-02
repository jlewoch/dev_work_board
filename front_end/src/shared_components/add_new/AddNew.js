import React, { Component } from 'react'
import PlusBtn from '../icons/plus_btn/PlusBtn'
import FormInput from '../form_input/FormInput'
import './add_new.css'
export default class AddNew extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      enabled: false
    }
  }

  toggle = () => {
    this.setState({ enabled: !this.state.enabled })
  }
  onChange = e => {
    this.setState({ input: e.target.value })
  }
  add = () => {
    this.props.addclick({ title: this.state.input })
    this.setState({ enabled: !this.state.enabled, input: '' })
  }

  render () {
    const { enabled, input } = this.state
    const { title } = this.props
    return (
      <div className='adding-container'>
        {!enabled
          ? <div className='adding' onClick={this.toggle}>
            <h4 className='title'>Add a new {title}</h4><PlusBtn />
          </div>
          : <div className='adding'>
            <FormInput
              value={input}
              onChange={this.onChange}
              type='text'
              title={`Enter ${title} Title`}
              />
            <button className='adding-btn' onClick={this.add}>
                ADD
              </button>
          </div>}
      </div>
    )
  }
}
