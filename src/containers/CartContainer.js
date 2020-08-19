import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import PurchasedProduct from '../components/PurchasedProduct';
import * as actions from '../actions/index';

class CartContainer extends Component {
  render() {
    const {cart} = this.props;
    return (
      <Cart>
        {this.showPurchasedProduct(cart)}
      </Cart>
    );
  }

  showPurchasedProduct(cart){
    const { cancel,quantity } = this.props;
    return cart.map((item,index) => 
      <PurchasedProduct 
        key={index} 
        item={item} 
        quantity={quantity}
        cancel={cancel}
      />
    )
  };

}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        iventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }),
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = (state) => {
  return {
    cart : state.cart
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    quantity : (product,number) => {
      dispatch(actions.quantity(product,number));
    },
    cancel : (product) => {
      dispatch(actions.cancel(product));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);