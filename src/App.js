import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import NoMatch from './components/NoMatch';
import NavContainer from './containers/NavContainer';
import AdminChildrenContainer from './containers/AdminChildrenContainer';
import ChildrenContainer from './containers/ChildrenContainer';
import ChildContainer from './containers/ChildContainer';
import SponsorContainer from './containers/SponsorContainer';
import MyAccountContainer from './containers/MyAccountContainer';
import Congrats from './containers/Congrats';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <SnackbarProvider maxSnack={3}>
        <Router history={history}>
          <div id="switchWrapper">
            <NavContainer />
            <Switch>
              <Route exact path="/" component={ChildrenContainer} />

              <Route path="/admin" component={AdminChildrenContainer} />

              <Route path="/sponsor/:childId" component={SponsorContainer} />

              <Route path="/child/:childId" component={ChildContainer} />

              <Route path="/account" component={MyAccountContainer} />

              <Route path="/congrats" component={Congrats} />

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
