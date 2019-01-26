import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import NoMatch from './components/NoMatch';
import NavContainer from './containers/NavContainer';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <SnackbarProvider maxSnack={3}>
        <Router history={history}>
          <div id="switchWrapper">
            <NavContainer />
            <Switch>
              <Route exact path="/" component={null} />

              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </SnackbarProvider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
