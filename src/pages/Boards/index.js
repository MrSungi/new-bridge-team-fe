import { connect } from 'react-redux';
import Boards from './Boards';
import fetchBoards from './store/boardsActions';

const mapStateToProps = state => ({
  boards: state.boards.boardsItems,
  isLoading: state.boards.isLoading,
});

const mapDispatchToProps = {
  fetchBoards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
