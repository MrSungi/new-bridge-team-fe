import { connect } from 'react-redux';
import Item from './Item';
import { upVote } from '../../pages/Board/store/boardActions';

const mapDispatchToProps = {
  upVote,
};

export default connect(null, mapDispatchToProps)(Item);
