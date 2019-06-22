import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../../services/API';

export class Signup extends Component {
  state = {};

  submitUser = (e) => {
    e.preventDefault();

    API.makeRequest({
      data: this.state,
      method: 'POST',
      url: 'users',
    })
    .then(data => {
      console.log(data);
      alert('Created user!');
      this.setState({
        redirectToLogin: true,
      });
    })
    .catch(err => {
      console.log(err);
      alert('Could not create user');
    })
  }

  onChangeName = (e) => this.setState({ name: e.target.value });

  onChangeUsername = (e) => this.setState({ username: e.target.value });

  onChangeEmail = (e) => this.setState({ email: e.target.value });

  onChangePassword = (e) => this.setState({ password: e.target.value });

  render() {
    if (this.state.redirectToLogin) {
      return <Redirect to="/login" />
    }

    return (<div>
      <div>
        Name: <input type="text" onChange={this.onChangeName} value={this.state.name} />
      </div>
      <div>
        Username:
        <input type="text" onChange={this.onChangeUsername} value={this.state.username} />
      </div>
      <div>
        Email:
        <input type="email" onChange={this.onChangeEmail} value={this.state.email} />
      </div>
      <div>
        Password:
        <input type="password" onChange={this.onChangePassword} value={this.state.password} />
      </div>
      <div>
        <button onClick={this.submitUser}>Create Account</button>
      </div>
    </div>);
  }
}
