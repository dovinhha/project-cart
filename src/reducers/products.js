import * as types from '../constants/actionTypes';

const initialState = [
  {
    id: 1,
    name: "Emelda",
    description: "Person on outside of dune buggy injured nontraf",
    url: "https://loremflickr.com/g/320/240/paris",
    price: 1000,
    iventory : 5,
    rating : 2
  }, {
    id: 2,
    name: "Jimmy",
    description: "Corrosion of first degree of unspecified palm, Female",
    url: "https://loremflickr.com/g/320/240/paris",
    price: 1250,
    iventory : 10,
    rating : 3
  }, {
    id: 3,
    name: "Colin",
    description: "Malignant neoplasm of upper-inner quadrant of breast",
    url: "https://loremflickr.com/g/320/240/paris",
    price: 2000,
    iventory : 15,
    rating : 4
  }, {
    id: 4,
    name: "Melania",
    description: "Common variable immunodeficiency, unspecified",
    url: "https://loremflickr.com/g/320/240/paris",
    price: 500,
    iventory : 20,
    rating : 5
  }
];

const products = (state = initialState,action) => {
  switch(action.type){
    case types.PRODUCTS:
      alert('Welcom to my shop <3');
      return [...state];
    case types.IVENTORY:
      const index1 = state.findIndex( val => val === action.product);
      state[index1].iventory = state[index1].iventory - action.quantity;
      return [...state];
    default: return [...state];
  }
}

export default products;