import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Typography,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Link
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import API from '../../../services/API';

export class Login extends Component {
  state = {
    user: {}
  };

  submitLogin = (e) => {
    e.preventDefault();

    API.makeRequest({
      data: this.state.user,
      method: 'POST',
      url: 'auth/token',
    })
    .then(data => {
      if (data.token) {
        this.props.setUserToken(data.token);
        this.setState({
          userAuthenticated: true,
        })
        alert("You can login!!!!")
      }

    })
    .catch(err => {
      console.log(err);
      alert('Could not login user');
    })
  }

  onChange = (e) => {
    let { user } = this.state;
    user[e.target.name] = e.target.value;
    this.setState({user});
  }

  render() {

    const { login, password, userAuthenticated } = this.state;
    const { user } = this.props;

    if (user || userAuthenticated) {
      return <Redirect to="/chat" />
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username / Email"
              name="login"
              autoComplete="login"
              autoFocus
              onChange={this.onChange}
              value={login}
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
          <Grid container>
              <Grid item xs style={{marginBottom: 10}}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Login
            </Button>
        </form>
        </div>
      </Container>
    )
  }
}

Login.propTypes = {
  user: PropTypes.object,
  setUserToken: PropTypes.func.isRequired,
}
