import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from '../pages/HomePage';

import './App.cm.styl';

class App extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  sendHello: PropTypes.func,
  user: PropTypes.object,
};

function mapStateToProps (state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, {
})(App);
