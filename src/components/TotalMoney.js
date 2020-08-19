import React, { Component } from 'react';

class TotalMoney extends Component {
  render() {
    return (
      <div className="pay">
        <span><b>Total amount of products :</b> {this.props.children}$ </span> 
        <button onClick={this.onPay()} className="btn btn-success">Pay</button>
      </div>
    );
  }
  onPay(){
    return () => {
      this.props.pay();
    }
  }
}

export default TotalMoney;