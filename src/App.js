import React, { Component } from 'react';
import ProductsContainer from './containers/ProductsContainer';
import NavBar from './components/NavBar';
import CartContainer from './containers/CartContainer';
import TotalContainer from './containers/TotalContainer';

class App extends Component { 
  render() {
    return (
      <div>
        <NavBar />
        <h1>List Products</h1>
        <span className="zipline"></span>
        <div className="container">
          <ProductsContainer/>
          <CartContainer/>
          <TotalContainer/>
        </div>
      </div>
    );
  }
}

export default App;