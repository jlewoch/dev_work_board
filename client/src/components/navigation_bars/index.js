import { connect } from 'react-redux'
import SideNavigationDisplay from './SideNavigation'
import {
  editBoard,
  createBoard,
  getBoards,
  removeBoard
} from '../../store/boards/actions'
const mapStateToProps = state => ({
  boards: state.boards
})

const mapDispatchToProps = dispatch => ({
  getBoards: () => dispatch(getBoards()),
  createBoard: e => dispatch(createBoard(e)),
  editTitle: e => dispatch(editBoard(e)),
  removeBoard: e => dispatch(removeBoard(e))
})

export const SideNavigation = connect(mapStateToProps, mapDispatchToProps)(
  SideNavigationDisplay
)
