import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container,
  Row,
  Col,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Card,
  CardBody,
  Badge,
} from 'reactstrap';
import classnames from 'classnames';
import commaNumber from 'comma-number';
import {
  FiArrowLeft,
  FiStar,
  FiThumbsUp,
  FiUserCheck,
  FiAlertCircle,
} from 'react-icons/fi';

import { getChildren } from '../actions/child';
// import { MALE, FEMALE } from '../utils/constants';

class ChildContainer extends Component {
  state = {
    activeTab: '1',
  };

  componentWillMount() {
    this.props.getChildren();
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    const {
      match: {
        params: { childId },
      },
      child,
    } = this.props;

    const cIndex = child.findIndex(c => c._id === childId);

    if (cIndex === -1) return null;

    const selectedChild = child[cIndex];

    const {
      firstName,
      // lastName,
      age,
      condition,
      // gender,
      wish,
      story,
      amountDonatedByUser,
      amountDonatedByOthers,
      amountToCompletion,
    } = selectedChild;

    // const fullName = `${firstName} ${lastName}`;

    let userContribution;
    let othersContribution;

    if (amountDonatedByUser && amountDonatedByOthers && amountToCompletion) {
      const total = amountToCompletion;

      userContribution = (amountDonatedByUser / total) * 100;
      othersContribution = (amountDonatedByOthers / total) * 100;

      // console.log(userContribution, othersContribution);
    }

    const isSponsored = parseFloat(amountDonatedByUser, 10) > 0;

    return (
      <React.Fragment>
        <Container fluid className="page">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                Updates
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => {
                  this.toggle('3');
                }}
              >
                Wish
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col>
                  <header className="profile-header">
                    <h2>{firstName}</h2>
                    <span className="age">{age}</span>
                    <span className="condition">{condition}</span>
                    {/* <div
                style={{
                  backgroundColor: `${gender === MALE ? 'skyblue' : 'pink'}`,
                  borderRadius: '50%',
                  width: 20,
                  height: 20,
                  padding: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {gender}
              </div> */}
                  </header>

                  <h5 className="story-headline">The Story</h5>
                  <p className="story">{story}</p>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col>
                  {isSponsored ? (
                    <React.Fragment>
                      <h5 className="story-headline">Progress</h5>
                      <Progress multi className="donation-progress">
                        <Progress bar value={`${othersContribution}`} />
                        <Progress
                          bar
                          className="you"
                          color="success"
                          value={`${userContribution}`}
                        />
                      </Progress>
                      <div className="key">
                        <Badge color="primary" className="others">
                          Others
                        </Badge>
                        <Badge color="success" className="you">
                          You
                        </Badge>
                      </div>
                      {/* {`$${commaNumber(amountToCompletion)}`} */}

                      <h5 className="story-headline">Activity Feed</h5>

                      <Card className="donation-card you">
                        <CardBody>
                          <FiThumbsUp color="#fff" size={36} />
                          <span>
                            You've donated{' '}
                            {`$${commaNumber(amountDonatedByUser)}`} to{' '}
                            {firstName}
                          </span>
                        </CardBody>
                      </Card>

                      <Card className="donation-card other">
                        <CardBody>
                          <FiUserCheck color="#009cb8" size={36} />
                          <span>
                            Jake donated {`$${commaNumber(985)}`} to {firstName}
                          </span>
                        </CardBody>
                      </Card>
                    </React.Fragment>
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <FiAlertCircle color="#0057b8" size={36} />
                      <h3 className="update-warning">
                        In order to see updates, you must first sponsor{' '}
                        {firstName}
                      </h3>
                    </div>
                  )}
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col>
                  <div className="wish-container">
                    <FiStar color="#0057b8" size={36} />
                    <p className="wish">{wish}</p>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
        <div className="btn-container">
          <Button
            id="back-btn"
            color="secondary"
            onClick={() => this.props.history.goBack()}
          >
            <FiArrowLeft />
          </Button>

          <Button
            id="sponsor-btn"
            color="secondary"
            disabled={isSponsored}
            onClick={() => this.props.history.push(`/sponsor/${childId}`)}
          >
            {isSponsored ? 'Already Sponsoring' : `Sponsor ${firstName} Now`}
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ child: state.child.child });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getChildren,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChildContainer);
