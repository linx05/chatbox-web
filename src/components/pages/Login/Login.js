import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import API from '../../../services/API';

export class Login extends Component {
  state = {};

  submitLogin = (e) => {
    e.preventDefault();

    API.makeRequest({
      data: this.state,
      method: 'POST',
      url: 'auth/token',
    })
    .then(data => {
      if (data.token) {
        this.props.setUserToken(data.token);
        this.setState({
          userAuthenticated: true,
        })
      }
      alert('Login!');
    })
    .catch(err => {
      console.log(err);
      alert('Could not login user');
    })
  }

  onChangeLogin = (e) => this.setState({ login: e.target.value });

  onChangePassword = (e) => this.setState({ password: e.target.value });

  render() {
    if (this.props.user || this.state.userAuthenticated) {
      return <Redirect to="/chat" />
    }

    return (<div>
      <div>
        Username:
        <input type="text" onChange={this.onChangeLogin} value={this.state.login} />
      </div>
      <div>
        Password:
        <input type="password" onChange={this.onChangePassword} value={this.state.password} />
      </div>
      <div>
        <button onClick={this.submitLogin}>Login</button>
      </div>
    </div>);
  }
}

Login.propTypes = {
  user: PropTypes.object,
  setUserToken: PropTypes.func.isRequired,
}
