import { connect } from 'react-redux';
import { addItem } from '../../../app/store/state/board/boardActions';
import Column from './Column';

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(Column);
