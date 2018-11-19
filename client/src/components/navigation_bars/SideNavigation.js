import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './side_navigation.css'
import MenuArrow from '../../shared_components//icons/menu_arrow/MenuArrow'
import AddNew from '../../shared_components/add_new/AddNew'
import DeleteX from '../../shared_components/icons/delete/DeleteX'

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
    const { boards, createBoard, removeBoard } = this.props
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
              <div key={key} className='side-navLink-container'>
                <Link to={`/management/${key}`} className='side-navLink'>
                  {boards[key].title}
                </Link>
                <DeleteX onClick={() => removeBoard({ id: key })} id={key} />
              </div>
            )
          })}
        </div>

        <AddNew title='board' addclick={createBoard} />
      </div>
    )
  }
}

export default SideNavigation
