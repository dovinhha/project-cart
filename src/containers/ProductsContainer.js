import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ListProducts from '../components/ListProducts';
import Products from '../components/Products';
import Proptypes from 'prop-types';

class ProductsContainer extends Component {
  componentWillMount() {
    this.props.onProducts();
  }
  render() {
    const { products } = this.props;
    return (
      <ListProducts>
        {this.showProducts(products)}
      </ListProducts>
    );
  }
  showProducts(products) {
    const { addToCart,iventory } = this.props;
    return products.map((pro, index) =>
      <Products key={index} product={pro} addToCart={addToCart} iventory={iventory}/>
    )
  };
}

ProductsContainer.propTypes = {
  products: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired,
      url: Proptypes.string.isRequired,
      price: Proptypes.number.isRequired,
      iventory: Proptypes.number.isRequired,
      rating: Proptypes.number.isRequired
    })
  ).isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onProducts: () => {
      dispatch(actions.onProducts());
    },
    addToCart : (product,quantity) => {
      dispatch(actions.addToCart(product,quantity));
    },
    iventory : (product,quantity) => {
      dispatch(actions.iventory(product,quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);