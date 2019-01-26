import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { withRouter } from 'react-router';

class NavContainer extends Component {
  state = {};

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Nav navbar style={{ flexDirection: 'row' }}>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(NavContainer),
);
