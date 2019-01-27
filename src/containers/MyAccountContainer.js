/* eslint react/no-danger: 0 */
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
// import uuidv4 from 'uuid/v4';
// import update from 'immutability-helper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withSnackbar } from 'notistack';
import commaNumber from 'comma-number';
import { truncateDecimal } from '../utils/helpers';

import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';

// import target from '../img/target.png';
// import wholeFoods from '../img/wholefoods.png';
// import walmart from '../img/walmart.png';

const listOfTransactions = [
  {
    // logo: target,
    purchase: 'Donation',
    date: '12/27',
    amount: 345,
    donation: 345,
  },
  {
    // logo: target,
    purchase: 'Target',
    date: '12/24',
    amount: 36.36,
    donation: 0.92,
  },
  {
    // logo: wholeFoods,
    purchase: 'Whole Foods',
    date: '12/23',
    amount: 12.94,
    donation: 0.23,
  },
  {
    // logo: walmart,
    purchase: 'Walmart',
    date: '12/12',
    amount: 23.11,
    donation: 0.42,
  },
];

class MyAccountContainer extends Component {
  state = {};

  render() {
    const totalDonationAmount = listOfTransactions.reduce((total, t) => {
      total += t.donation;

      return total;
    }, 0);

    return (
      <Container fluid className="my-account-container">
        <Row>
          <Col>
            <h2>My Account</h2>
            <Cards
              number="1234"
              name="John Doe"
              expiry="01/19"
              cvc="111"
              focused="number"
            />

            <div className="btn-container-account">
              <Button color="success" size="sm">
                Add Payment Method
              </Button>
              <Button color="danger" size="sm">
                Remove
              </Button>
            </div>

            <Card className="total-donations-card">
              <CardBody>
                <CardTitle>Total Donations</CardTitle>

                <h2>{`$${commaNumber(
                  truncateDecimal(totalDonationAmount),
                )}`}</h2>
              </CardBody>
            </Card>

            <Card className="recent-donations-card">
              <CardBody>
                <CardTitle>Recent Donations</CardTitle>
                <div className="transaction-row transaction-header">
                  {/* <img
                      className="transaction-logo"
                      alt={t.purchase}
                      src={t.logo}
                    /> */}
                  <div className="transaction-purchase">Transaction</div>

                  <div className="transaction-amount">Amount</div>
                  <div className="transaction-donation">Donation</div>
                </div>
                {listOfTransactions.map(t => (
                  <div className="transaction-row" key={t.purchase}>
                    {/* <img
                      className="transaction-logo"
                      alt={t.purchase}
                      src={t.logo}
                    /> */}
                    <div className="transaction-purchase">
                      {t.purchase}
                      <span className="transaction-date">{t.date}</span>
                    </div>

                    <div className="transaction-amount">
                      ${commaNumber(t.amount)}
                    </div>
                    <div className="transaction-donation">
                      ${commaNumber(t.donation)}
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
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
