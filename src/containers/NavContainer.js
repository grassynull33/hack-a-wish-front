import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { withRouter } from 'react-router';

class NavContainer extends Component {
  state = {
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Navbar dark color="faded" className="navbar-main">
        <NavbarToggler onClick={() => this.toggleNavbar()} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" onClick={() => this.toggleNavbar()}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/account" onClick={() => this.toggleNavbar()}>
                My Account
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/admin" onClick={() => this.toggleNavbar()}>
                Admin
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
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
