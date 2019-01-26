/* eslint react/no-danger: 0 */
import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { Container, Row, Col, Button } from 'reactstrap';
import update from 'immutability-helper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withSnackbar } from 'notistack';

class MyAccountContainer extends Component {
  state = {};

  render() {
    return (
      <Container fluid className="my-account-container">
        <Row>
          <Col>
            <h2>My Account</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withSnackbar(
  connect(
    state => ({}),
    dispatch => bindActionCreators({}, dispatch),
  )(MyAccountContainer),
);
