import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { authenticateUser } from '../../store/loginSlice';

const mapDispatchToProps = {
  authenticateUser,
};

export default connect(null, mapDispatchToProps)(LoginForm);
