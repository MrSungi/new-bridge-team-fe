import { connect } from 'react-redux';
import Board from './Board';

const mapStateToProps = state => ({
  columns: state.board.columns,
});

export default connect(mapStateToProps)(Board);
