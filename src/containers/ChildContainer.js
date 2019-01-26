import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container,
  Row,
  Col,
  // Button
} from 'reactstrap';

import { getChildren } from '../actions/child';
// import { MALE, FEMALE } from '../utils/constants';

class ChildContainer extends Component {
  componentWillMount() {
    this.props.getChildren();
  }

  // componentWillUpdate(prevProps) {
  //   if (this.props.match.params.id !== prevProps.match.params.id) {
  //     this.props.selectBoard();
  //     this.props.getPlants();
  //   }
  // }

  // componentDidUpdate() {
  //   const {
  //     enqueueSnackbar,
  //     clearError: clearE,
  //     // clearSuccess: clearS,
  //   } = this.props;

  //   // const { hasError: prevErrors } = prevProps;
  //   const {
  //     hasError: currentErrors,
  //     // hasSuccess: currentSuccesses,
  //   } = this.props;

  //   currentErrors.forEach(e => {
  //     if (e && e.error && e.error.data) {
  //       clearE(e.type);

  //       enqueueSnackbar(e.error.data, {
  //         variant: 'warning',
  //         autoHideDuration: 7777,
  //       });
  //     }
  //   });

  // currentSuccesses.forEach(s => {
  // console.log(s);

  // if (s) {
  //   clearS(s.type);

  //   enqueueSnackbar('Operation performed successfully!', {
  //     variant: 'success',
  //     autoHideDuration: 7777,
  //   });
  // }
  // });
  // }

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
    } = selectedChild;

    return (
      <Container fluid className="page">
        <Row>
          <Col>
            <header>
              <h2>{`${firstName} ${lastName}`}</h2>
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
      </Container>
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
