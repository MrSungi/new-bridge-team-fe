import { connect } from 'react-redux';
import { addItem } from '../../pages/Board/store/boardActions';
import Column from './Column';

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(Column);
