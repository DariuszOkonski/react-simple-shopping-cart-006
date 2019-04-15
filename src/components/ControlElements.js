import React from 'react';

const ControlElements = ({ shoppingCart, removeFromCartClick, addToCartClick, onStock, buyItemsClick }) => {
  const shoppingCartEmpty = shoppingCart === 0 ? true : false;
  const shoppingCartFull = (shoppingCart === onStock) ? true : false;

  return (
    <React.Fragment>
      <button
        disabled={shoppingCartEmpty}
        onClick={removeFromCartClick}
      >-</button>

      <span className="result">{shoppingCart}</span>

      <button
        disabled={shoppingCartFull}
        onClick={addToCartClick}
      >+</button>

      <button
        className="buy"
        disabled={!shoppingCart}
        onClick={buyItemsClick}
      >Buy</button>
    </React.Fragment>
  );
}

export default ControlElements;