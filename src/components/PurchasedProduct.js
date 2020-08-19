import React, { Component } from 'react';
import '../App.css';

class PurchasedProduct extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td><img src={item.product.url} className="purchaseProduct" alt="product" /></td>
        <td>
          <button onClick={this.onQuantity(item.product,-1)} className="btn btn-secondary mr-2">
            Reduction
          </button>
          {item.quantity}
          <button onClick={this.onQuantity(item.product,1)} className="btn btn-dark ml-2">
            Increase
          </button>
        </td>
        <td>{(item.product.price)}$</td>
        <td>{(item.product.price) * (item.quantity)}$</td>
        <td>
          <button onClick={this.onCancel(item.product)} className="btn btn-danger">
            Cancel
          </button>
        </td>
      </tr>
    );
  }

  onQuantity(product,number){
    return () => {
      this.props.quantity(product,number)
    }
  }

  onCancel(product){
    return () => {
      this.props.cancel(product);
    }
  }

}



export default PurchasedProduct;