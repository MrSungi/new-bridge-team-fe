import { connect } from 'react-redux';
import { isUserAuthenticated } from '../../pages/Login/store/loginSelectors';
// import { isUserAuthenticated } from '../login/store/loginSelectors';
import AuthenticatedRoute from './AuthenticatedRoute';

const mapStateToProps = state => {
  return { isAuthenticated: isUserAuthenticated(state) };
};

export default connect(mapStateToProps)(AuthenticatedRoute);
