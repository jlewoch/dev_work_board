import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './side_navigation.css'
import MenuArrow from '../../shared_components//icons/menu_arrow/MenuArrow'
import PlusBtn from '../../shared_components//icons/plus_btn/PlusBtn'
import AddNew from '../../shared_components/add_new/AddNew'

class SideNavigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: true
    }
  }
  toggle = () => {
    this.setState({ expanded: !this.state.expanded })
  }
  componentDidMount () {
    this.props.getBoards()
  }

  render () {
    const { expanded } = this.state
    const { boards, createBoard } = this.props
    return (
      <div id='side-nav-container'>
        <div className='side-navLink' onClick={this.toggle}>
          <p className='nav-text'>Boards</p>
          {Object.keys(boards).length > 0 && <MenuArrow state={expanded} />}
        </div>
        <div
          style={{
            maxHeight: expanded ? 50 * Object.keys(boards).length : 0,
            transition: `all ${0.2 * Object.keys(boards).length}`
          }}
          className={`expandable-list`}
        >
          {Object.keys(boards).map(key => {
            return (
              <Link
                to={`/management/${key}`}
                key={key}
                className='side-navLink'
              >
                {boards[key].title}
              </Link>
            )
          })}
        </div>

        <AddNew title='board' addclick={createBoard} />
      </div>
    )
  }
}

export default SideNavigation
