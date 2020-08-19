import React, { Component } from 'react';
import cart from './icon/cart.svg';
import '../App.css';
import star from './icon/starB.svg';
import starN from './icon/starN.svg';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityPurchased: 1
    };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(number) {
    return () => {
      if (this.state.quantityPurchased + number >= 1
        && this.state.quantityPurchased + number <= this.props.product.iventory) {
        this.setState({
          quantityPurchased: this.state.quantityPurchased + number
        })
      }
    }
  }

  render() {
    const { product } = this.props;
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="card mb-3">
          <img src={product.url} className="card-img-top" alt="product" />
          <div className="card-body">
            <h6 className="card-title">Name : {product.name}</h6>
            <p className="card-text">Description: {product.description}</p>
            <p className="cart-text">Remaining : {product.iventory}</p>
            <p>
              {this.showRating(product.rating)}
            </p>
            <p className="p">
              Quantity:
              <span onClick={this.changeQuantity(-1)} className="btn btn-info span">-</span>
              {this.state.quantityPurchased}
              <span onClick={this.changeQuantity(1)} className="btn btn-info span">+</span>
            </p>
            <p className="card-text">Price: {product.price} $</p>
            <img
              onClick={this.onAddToCart(product, this.state.quantityPurchased)}
              src={cart}
              className="cartIcon"
              alt="cart"
            />
          </div>
        </div>
      </div>
    );
  }



  showRating(rating) {
    var result = [];
    if (rating <= 5) {
      for (let i = 1; i <= rating; i++) {
        result.push(<img src={star} key={i} className="star" alt="star" />)
      }
      for (let i = rating + 1; i <= 5; i++) {
        result.push(<img src={starN} key={i} className="star" alt="star" />)
      }
    }
    return result;
  }

  onAddToCart(product, quantity) {
    return () => {
      if (this.props.product.iventory !== 0 && this.state.quantityPurchased <= this.props.product.iventory) {
        this.props.addToCart(product, quantity);
        this.setState({
          quantityPurchased: 1
        });
        this.props.iventory(product, quantity);
      }
    }
  }

}



export default Products;