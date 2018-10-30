import React, { Component } from 'react'
import MenuArrow from '../icons/menu_arrow/MenuArrow'
import './drop_down.css'

// when importing as a dropdown menu create ref to get selected value state
// example ref={el => (this.drop = el)} this.drop.state.selectedValue
// use className option for all children added

class DropDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false,
      selectedValue: ''
    }
  }
  changeHandler = e => {
    this.setState({
      selectedValue: e.target.innerHTML,
      expanded: !this.state.expanded
    })
  }
  toggle = () => {
    this.setState({ expanded: !this.state.expanded })
  }
  componentDidMount () {
    this.setState({ selectedValue: this.props.placeHolder })
  }

  render () {
    const { expanded, selectedValue } = this.state
    const { children } = this.props
    return (
      <div className='drop-down-menu'>
        <div className='drop-down' onClick={this.toggle}>
          <span>{selectedValue}</span>
          <MenuArrow state={expanded} />
        </div>
        <div
          ref={el => (this.options = el)}
          onClick={this.changeHandler}
          className={`options ${expanded ? 'open' : 'close'}`}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default DropDown
