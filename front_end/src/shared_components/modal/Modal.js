import React, { Component } from 'react'
import DropDown from '../drop_down_menu/DropDown'

class Modal extends Component {
  submit = e => {
    e.preventDefault()
    console.log(this.drop.state.selectedValue)
  }
  render () {
    return (
      <form onSubmit={this.submit}>

        <input type='submit' value='submit' />
      </form>
    )
  }
}

export default Modal
