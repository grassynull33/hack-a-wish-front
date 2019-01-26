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
  CardTitle,
} from 'reactstrap';
import classnames from 'classnames';
import commaNumber from 'comma-number';

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
      lastName,
      age,
      condition,
      // gender,
      wish,
      story,
      amountDonatedByUser,
      amountDonatedByOthers,
      amountToCompletion,
    } = selectedChild;

    const fullName = `${firstName} ${lastName}`;

    let userContribution;
    let othersContribution;

    if (amountDonatedByUser && amountDonatedByOthers && amountToCompletion) {
      const total = amountToCompletion;

      userContribution = (amountDonatedByUser / total) * 100;
      othersContribution = (amountDonatedByOthers / total) * 100;

      // console.log(userContribution, othersContribution);
    }

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
                  <header>
                    <h2>{fullName}</h2>
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
                    <span>{age}</span>
                  </header>

                  <h3>{condition}</h3>

                  <p>{story}</p>

                  <p>{wish}</p>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col>
                  <Progress multi>
                    <Progress bar value={`${othersContribution}`} />
                    <Progress
                      bar
                      color="success"
                      value={`${userContribution}`}
                    />
                  </Progress>
                  {`$${commaNumber(amountToCompletion)}`}

                  <Card>
                    <CardBody>
                      <CardTitle>
                        You've donated {`$${commaNumber(amountDonatedByUser)}`}{' '}
                        to {fullName}
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col />
              </Row>
            </TabPane>
          </TabContent>
        </Container>
        <Button id="sponsor-btn" color="secondary">
          Sponsor
        </Button>
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
