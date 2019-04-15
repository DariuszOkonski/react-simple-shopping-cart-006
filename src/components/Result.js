import React from 'react';

const Result = ({ onStock }) => {
  return (
    <React.Fragment>
      <h2>On stock: <span className="on-stock">{onStock}</span></h2>
    </React.Fragment>
  );
}

export default Result;