import React, { Component } from 'react';
import TotalMoney from '../components/TotalMoney';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TotalContainer extends Component {
  render() {
    const { cart,pay } = this.props;
    // const total = this.totalMoney(cart);
    return (
      <TotalMoney pay={pay}>
        {this.totalMoney(cart)}
      </TotalMoney>
    );
  }

  totalMoney(cart) {
    return cart.reduce(function (total, item) {
      return total + item.product.price * item.quantity;
    }, 0);
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    pay : () => {
      dispatch(actions.pay())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalContainer);