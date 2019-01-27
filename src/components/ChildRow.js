import React from 'react';
import { Button } from 'reactstrap';

import { IoIosStarOutline, IoIosStar } from 'react-icons/io';

const ChildRow = ({ child, history }) => {
  const { _id, firstName, condition, amountDonatedByUser } = child;

  // console.log(child);

  const isSponsored = parseFloat(amountDonatedByUser, 10) > 0;

  return (
    <div
      className="child-row"
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();

        history.push(`/child/${_id}`);
      }}
    >
      <div className="cell first-name">
        {isSponsored ? (
          <Button
            className="star-btn"
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <IoIosStar color="goldenrod" />
          </Button>
        ) : (
          <Button
            className="star-btn"
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();

              history.push(`/child/${_id}`);
            }}
          >
            <IoIosStarOutline color="#444" />
          </Button>
        )}
        {firstName}
      </div>
      <div className="cell condition">{condition}</div>
    </div>
  );
};

export default ChildRow;
