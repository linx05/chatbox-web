import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/createStore';
import { Signup } from './components/pages/Signup/Signup';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/sign-up" component={Signup} />
            <Route path="/" component={() => "Home"} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
