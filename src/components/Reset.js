import React from 'react';

const Reset = ({ handleResetOnStockClick, onStock }) => {
  return (
    <button
      className="reset"
      disabled={onStock}
      onClick={handleResetOnStockClick}
    >Reset</button>
  );
}

export default Reset;