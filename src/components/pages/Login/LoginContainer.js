import { connect } from 'react-redux';
import { setUserToken } from '../../../redux/actions/auth';
import { Login } from './Login';

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
}


const mapDispatchToProps = {
  setUserToken,
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

