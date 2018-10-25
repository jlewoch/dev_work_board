import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MenuArrow from '../../../../shared_components/menu_arrow/MenuArrow'
import DefaultImage
  from '../../../../shared_components/default_image/DefaultImage'
class ProfileMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false
    }
  }
  toggle = () => {
    this.setState({ expanded: !this.state.expanded })
  }
  render () {
    const { expanded } = this.state
    return (
      <div className='profile-container'>
        <div className='menu' onClick={this.toggle}>
          <DefaultImage height={20} />
          <span>Jake Lewochko</span>
          <MenuArrow state={expanded} />
        </div>
        <div className={`menu-options ${expanded ? 'open' : 'close'}`}>
          <Link className='menu-link' to='/'>
            Profile
          </Link>
          <Link className='menu-link' to='/'>
            Settings
          </Link>
          <Link className='menu-link' to='/'>
            Logout
          </Link>
        </div>
      </div>
    )
  }
}

export default ProfileMenu
