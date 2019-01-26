import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const NoMatch = () => (
  <div className="page">
    <Container fluid>
      <Row>
        <Col>
          <h2>Page Not Found</h2>
        </Col>
      </Row>
    </Container>
  </div>
);

export default NoMatch;
