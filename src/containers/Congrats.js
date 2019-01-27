import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  // TabContent,
  // TabPane,
  // Nav,
  // NavItem,
  // NavLink,
  // Progress,
  // Card,
  // CardBody,
  // Badge,
} from 'reactstrap';
import YouTube from 'react-youtube';

const youtubeId = 'UWBJrnyGQhI';

class Congrats extends Component {
  state = {
    showYoutube: false,
    donationAmount:
      (this.props.location &&
        this.props.location.state &&
        this.props.location.state.donationAmount) ||
      '0.00',
    firstName:
      (this.props.location &&
        this.props.location.state &&
        this.props.location.state.firstName) ||
      '',
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid className="page congrats-page">
          <Row>
            {!this.state.showYoutube ? (
              <Col className="congrats-col">
                <h6>Nice! We reached our goal!</h6>

                <h6>
                  You helped us raise <span>${this.state.donationAmount}</span>
                  <br />
                  to help {this.state.firstName} fulfill their wish!
                </h6>

                <Button
                  className="wish-reveal"
                  onClick={() => this.setState({ showYoutube: true })}
                >
                  Wish Reveal!
                </Button>
              </Col>
            ) : (
              <Col className="congrats-col">
                <YouTube videoId={youtubeId} id="youtube-vid" />
              </Col>
            )}
          </Row>
        </Container>
        <Button id="go-back-btn" onClick={() => this.props.history.push('/')}>
          Go Back
        </Button>
      </React.Fragment>
    );
  }
}

export default Congrats;
