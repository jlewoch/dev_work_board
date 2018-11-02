import { connect } from 'react-redux'
import SideNavigationDisplay from './SideNavigation'
import { editBoardTitle, addBoard } from '../../store/boards/actions'
const mapStateToProps = state => ({
  boards: state.boards
})

const mapDispatchToProps = dispatch => ({
  addBoard: e => dispatch(addBoard(e)),
  editTitle: e => dispatch(editBoardTitle())
})

export const SideNavigation = connect(mapStateToProps, mapDispatchToProps)(
  SideNavigationDisplay
)
