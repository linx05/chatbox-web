import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Signup } from './components/pages/Signup/Signup';
import { LoginContainer } from './components/pages/Login/LoginContainer';

export class Routes extends Component {
  render() {
    return (<Switch>
      <Route path="/sign-up" component={Signup} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/" component={() => "Home"} />
    </Switch>);
  }
}
