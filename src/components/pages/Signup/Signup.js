import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  CssBaseline,
  TextField
} from '@material-ui/core';

import API from '../../../services/API';

export class Signup extends Component {

  state = {
    user: {}
  };

  handleSubmit = (e) => {
    e.preventDefault();

    API.makeRequest({
      data: this.state.user,
      method: 'POST',
      url: 'users',
    })
    .then(data => {
      alert('Created user!');
      this.setState({
        redirectToLogin: true,
      });
    })
    .catch(err => {
      alert('Could not create user');
    })
  }

  onChange = (e) => {
    let { user } = this.state;
    user[e.target.name] = e.target.value;
    this.setState({user});
  }

  render() {
    const { name, username, email, password, redirectToLogin } = this.state;
    if (redirectToLogin) {
      return <Redirect to="/login" />
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={this.onChange}
              value={name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={this.onChange}
              value={name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={this.onChange}
              value={email}
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.onChange}
              value={password}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    )
  }
}
