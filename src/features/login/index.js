import { connect } from 'react-redux';
import Login from './Login';
import { getCurrentUser, isUserAuthenticating } from './store/loginSelectors';
import { authenticateUser } from './store/loginSlice';

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  isAuthenticating: isUserAuthenticating(state),
});

const mapDispatchToProps = {
  authenticateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
