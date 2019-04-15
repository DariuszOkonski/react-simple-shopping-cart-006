import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Result from './Result';
import ControlElements from './ControlElements';
import Reset from './Reset';

class App extends Component {
  state = {
    onStock: 7,
    shoppingCart: 0,
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    })
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    })
  }

  handleBuyItems = () => {
    this.setState({
      onStock: this.state.onStock - this.state.shoppingCart,
      shoppingCart: 0,
    })
  }

  handleResetOnStock = () => {
    const random = Math.floor((Math.random() * 20) + 10);
    this.setState({
      onStock: random,
      shoppingCart: 0,
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Result onStock={this.state.onStock} />

        <ControlElements
          shoppingCart={this.state.shoppingCart}
          onStock={this.state.onStock}
          removeFromCartClick={this.handleRemoveFromCart}
          addToCartClick={this.handleAddToCart}
          buyItemsClick={this.handleBuyItems}
        />

        <Reset
          onStock={this.state.onStock}
          handleResetOnStockClick={this.handleResetOnStock}
        />
      </div>
    );
  }
}

export default App;