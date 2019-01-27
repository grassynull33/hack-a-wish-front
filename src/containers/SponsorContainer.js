import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withSnackbar } from 'notistack';
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
import commaNumber from 'comma-number';
// import {
//   FiArrowLeft,
//   FiStar,
//   FiThumbsUp,
//   FiUserCheck,
//   FiAlertCircle,
// } from 'react-icons/fi';

import { getChildren, editChild, EDIT_CHILD_SUCCESS } from '../actions/child';
// import { MALE, FEMALE } from '../utils/constants';

class SponsorContainer extends Component {
  state = {};

  componentWillMount() {
    this.props.getChildren();
  }

  handleDonation = (childId, currentAmount, amountToCompletion, incAmount) => {
    if (
      currentAmount + incAmount >= amountToCompletion ||
      incAmount === undefined
    ) {
      this.props
        .editChild(childId, {
          amountDonatedByUser: amountToCompletion,
        })
        .then(res => {
          if (res.type === EDIT_CHILD_SUCCESS) {
            this.props.enqueueSnackbar(
              `Donation of $${commaNumber(
                amountToCompletion,
              )} successfully made`,
              {
                variant: 'success',
                autoHideDuration: 3000,
              },
            );

            return this.props.history.push('/congrats', {
              donationAmount: amountToCompletion - currentAmount,
              firstName: res.payload && res.payload.firstName,
            });
          }
        });
    } else {
      this.props
        .editChild(childId, {
          amountDonatedByUser: currentAmount + incAmount,
        })
        .then(res => {
          if (res.type === EDIT_CHILD_SUCCESS) {
            this.props.enqueueSnackbar(
              `Donation of $${commaNumber(incAmount)} successfully made`,
              {
                variant: 'success',
                autoHideDuration: 3000,
              },
            );
          }
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

    // const fullName = `${firstName} ${lastName}`;

    // let userContribution;
    // let othersContribution;

    // if (amountDonatedByUser && amountDonatedByOthers && amountToCompletion) {
    //   const total = amountToCompletion;

    //   userContribution = (amountDonatedByUser / total) * 100;
    //   othersContribution = (amountDonatedByOthers / total) * 100;

    //   // console.log(userContribution, othersContribution);
    // }

    return (
      <React.Fragment>
        <Container fluid className="page">
          <Row>
            <Col>
              <header className="sponsor-header">
                <h2>Sponsor {firstName}</h2>
              </header>

              <div className="vertical-btn-container">
                <Button
                  color="success"
                  onClick={() =>
                    this.handleDonation(
                      childId,
                      amountDonatedByUser,
                      amountToCompletion,
                      25,
                    )
                  }
                >
                  $25
                </Button>
                <Button
                  color="success"
                  onClick={() =>
                    this.handleDonation(
                      childId,
                      amountDonatedByUser,
                      amountToCompletion,
                      50,
                    )
                  }
                >
                  $50
                </Button>
                <Button
                  color="success"
                  onClick={() =>
                    this.handleDonation(
                      childId,
                      amountDonatedByUser,
                      amountToCompletion,
                      100,
                    )
                  }
                >
                  $100
                </Button>
                <Button
                  color="success"
                  onClick={() =>
                    this.handleDonation(
                      childId,
                      amountDonatedByUser,
                      amountToCompletion,
                      500,
                    )
                  }
                >
                  $500
                </Button>
                <Button
                  className="rest-of-goal"
                  onClick={() =>
                    this.handleDonation(
                      childId,
                      amountDonatedByUser,
                      amountToCompletion,
                    )
                  }
                >
                  Rest of Goal
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ child: state.child.child });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getChildren,
      editChild,
    },
    dispatch,
  );

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SponsorContainer),
);
