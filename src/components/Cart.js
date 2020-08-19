import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col">Active</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;