import * as types from '../constants/actionTypes';

const data = JSON.parse(localStorage.getItem('cart'));

const dataCart = data !== null ? data : [];

const initialState = dataCart;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const index1 = state.findIndex(val => val.product.id === action.product.id);
      if (index1 === -1) {
        state.push({
          product: action.product,
          quantity: action.quantity
        });
      }
      else {
        state = [
          ...state.slice(0,index1),
          {
            product: action.product,
            quantity: state[index1].quantity+action.quantity
          },
          ...state.slice(index1+1)
        ]
      }
      alert('Add successfully :)');
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
    case types.QUANTITY:
      const index2 = state.findIndex(val => val.product === action.product);
      if(state[index2].quantity + action.number >= 0 && state[index2].product.iventory - action.number >= 0 ){
        action.product.iventory = action.product.iventory - action.number;
        state = [
          ...state.slice(0,index2),
          {
            product: action.product,
            quantity: state[index2].quantity+action.number
          },
          ...state.slice(index2+1)
        ]
      };
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
    case types.CANCEL:
      const index3 = state.findIndex(val => val.product === action.product);
      action.product.iventory = action.product.iventory + state[index3].quantity;
      state.splice(index3,1);
      alert('Canceled Successfully :(');
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
    case types.PAY:
      alert('Bought Successfully <3<3<3');
      state = [];
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
    default: return [...state];
  }
}

export default cart;